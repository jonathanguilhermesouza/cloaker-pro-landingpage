#!/usr/bin/env python3
"""
CloakerPro Landing Page - Universal Deployment Script
This script determines the best deployment method based on the environment
"""

import os
import sys
from pathlib import Path

def main():
    """Main deployment entry point"""
    
    # Get port from environment
    port = int(os.environ.get('PORT', 5000))
    
    # Ensure we're in the correct directory
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    # Verify required files exist
    if not Path('index.html').exists():
        print("ERROR: index.html not found. Cannot start server.")
        sys.exit(1)
    
    print(f"🚀 Starting CloakerPro Landing Page Server")
    print(f"📍 Directory: {os.getcwd()}")
    print(f"🌐 Port: {port}")
    print(f"🔗 URL: http://0.0.0.0:{port}")
    print("-" * 50)
    
    # Start the server using Python's built-in HTTP server
    import http.server
    import socketserver
    
    class CloakerProHandler(http.server.SimpleHTTPRequestHandler):
        def end_headers(self):
            # Add CORS and security headers
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('X-Content-Type-Options', 'nosniff')
            self.send_header('X-Frame-Options', 'SAMEORIGIN')
            super().end_headers()
        
        def do_GET(self):
            # Serve index.html for root requests
            if self.path == '/' or self.path == '':
                self.path = '/index.html'
            return super().do_GET()
        
        def log_message(self, format, *args):
            # Custom logging format
            print(f"[{self.log_date_time_string()}] {format % args}")
    
    try:
        with socketserver.TCPServer(("0.0.0.0", port), CloakerProHandler) as httpd:
            httpd.allow_reuse_address = True
            print("✅ Server started successfully!")
            print("Press Ctrl+C to stop the server")
            httpd.serve_forever()
    
    except OSError as e:
        if e.errno == 98:  # Address already in use
            print(f"❌ Port {port} is already in use")
            print("Try using a different port: PORT=8000 python deploy.py")
        else:
            print(f"❌ Network error: {e}")
        sys.exit(1)
    
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
        sys.exit(0)
    
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()