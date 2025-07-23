#!/usr/bin/env python3
"""
CloakerPro Landing Page Server
Simple HTTP server to serve static files for deployment
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

# Configuration
PORT = int(os.environ.get('PORT', 5000))
HOST = '0.0.0.0'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler to serve index.html for root requests"""
    
    def end_headers(self):
        # Add security headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('X-XSS-Protection', '1; mode=block')
        super().end_headers()
    
    def do_GET(self):
        # Serve index.html for root path
        if self.path == '/' or self.path == '':
            self.path = '/index.html'
        return super().do_GET()

def main():
    """Start the HTTP server"""
    
    # Ensure we're in the correct directory
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    # Check if index.html exists
    if not Path('index.html').exists():
        print("Error: index.html not found in current directory")
        sys.exit(1)
    
    # Create and start server
    try:
        with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
            httpd.allow_reuse_address = True
            print(f"CloakerPro Landing Page Server starting on {HOST}:{PORT}")
            print(f"Serving files from: {os.getcwd()}")
            print(f"Access the site at: http://localhost:{PORT}")
            httpd.serve_forever()
    
    except KeyboardInterrupt:
        print("\nServer stopped by user")
        sys.exit(0)
    except Exception as e:
        print(f"Server error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()