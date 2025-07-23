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
        print(f"Current directory: {os.getcwd()}")
        print("Files in directory:")
        for file in os.listdir('.'):
            print(f"  - {file}")
        sys.exit(1)
    
    print(f"CloakerPro Landing Page Server starting...")
    print(f"Host: {HOST}")
    print(f"Port: {PORT}")
    print(f"Directory: {os.getcwd()}")
    print(f"Files found: {', '.join(os.listdir('.'))}")
    
    # Create and start server
    try:
        with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
            httpd.allow_reuse_address = True
            print(f"✅ Server successfully started on {HOST}:{PORT}")
            print(f"🌐 Access the site at: http://localhost:{PORT}")
            print("🚀 Server is ready to accept connections")
            
            # Flush output to ensure logs are visible in deployment
            sys.stdout.flush()
            sys.stderr.flush()
            
            httpd.serve_forever()
    
    except OSError as e:
        if e.errno == 98:  # Address already in use
            print(f"❌ Port {PORT} is already in use")
            print("💡 Try using a different port with the PORT environment variable")
        else:
            print(f"❌ Network error: {e}")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
        sys.exit(0)
    except Exception as e:
        print(f"❌ Unexpected server error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    main()