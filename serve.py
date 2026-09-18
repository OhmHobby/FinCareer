#!/usr/bin/env python3
"""
Local dev server for the site.

Python's built-in http.server guesses MIME types from the Windows registry,
which commonly has no entry for .webp — it then serves the file as
application/octet-stream and the browser refuses to decode it. GitHub Pages
serves these correctly, so this only affects local preview.

Usage:  python serve.py [port]
"""
import sys
import mimetypes
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

for ext, mime in {
    ".webp": "image/webp",
    ".avif": "image/avif",
    ".svg":  "image/svg+xml",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".js":   "text/javascript",
    ".mjs":  "text/javascript",
    ".json": "application/json",
    ".webmanifest": "application/manifest+json",
}.items():
    mimetypes.add_type(mime, ext)


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # never cache during development
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

    def log_message(self, fmt, *args):
        sys.stderr.write("%s\n" % (fmt % args))


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5500
    print("Serving on http://localhost:%d  (Ctrl+C to stop)" % port)
    ThreadingHTTPServer(("", port), Handler).serve_forever()
