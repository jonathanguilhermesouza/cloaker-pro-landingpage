#!/usr/bin/env python3
"""
CloakerPro Landing Page Server - Minimal deployment entry point
Alternative entry point for deployment systems that expect 'server.py'
"""

import http.server
import socketserver
import os

PORT = int(os.environ.get('PORT', 5000))

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_GET(self):
        if self.path == '/' or self.path == '':
            self.path = '/index.html'
        return super().do_GET()

if __name__ == "__main__":
    with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
        print(f"Server running on port {PORT}")
        httpd.serve_forever()