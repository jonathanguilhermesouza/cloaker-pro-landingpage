#!/usr/bin/env python3
"""
CloakerPro Landing Page - Robust deployment server
Enhanced version with comprehensive error handling for production deployment
"""

import http.server
import socketserver
import os
import sys
import signal
import logging
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)

logger = logging.getLogger(__name__)

# Configuration
PORT = int(os.environ.get('PORT', 5000))
HOST = '0.0.0.0'

class RobustHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Enhanced HTTP request handler for production deployment"""
    
    def end_headers(self):
        # Security headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('X-XSS-Protection', '1; mode=block')
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        
        # CORS for development (remove in production if not needed)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        
        # Cache control
        if self.path.endswith(('.css', '.js', '.png', '.jpg', '.jpeg', '.svg', '.ico')):
            self.send_header('Cache-Control', 'public, max-age=86400')  # 1 day
        else:
            self.send_header('Cache-Control', 'no-cache, must-revalidate')
            
        super().end_headers()
    
    def do_GET(self):
        # Serve index.html for root requests and SPA routing
        if self.path == '/' or self.path == '' or self.path == '/index.html':
            self.path = '/index.html'
        return super().do_GET()
    
    def do_OPTIONS(self):
        # Handle preflight requests
        self.send_response(200)
        self.end_headers()
    
    def log_message(self, format, *args):
        # Custom logging format
        logger.info(f"{self.address_string()} - {format % args}")

def signal_handler(signum, frame):
    """Handle shutdown signals gracefully"""
    logger.info(f"Received signal {signum}. Shutting down gracefully...")
    sys.exit(0)

def main():
    """Start the robust HTTP server"""
    
    # Set up signal handlers
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    # Ensure we're in the correct directory
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    # Verify index.html exists
    if not Path('index.html').exists():
        logger.error("index.html not found in current directory")
        logger.error(f"Current directory: {os.getcwd()}")
        logger.error(f"Files in directory: {list(os.listdir('.'))}")
        sys.exit(1)
    
    logger.info("🚀 Starting CloakerPro Landing Page Server")
    logger.info(f"📁 Directory: {os.getcwd()}")
    logger.info(f"🌐 Host: {HOST}")
    logger.info(f"🔌 Port: {PORT}")
    logger.info(f"📄 Files: {', '.join(sorted([f for f in os.listdir('.') if f.endswith(('.html', '.css', '.js'))]))}")
    
    # Create and configure server
    try:
        with socketserver.TCPServer((HOST, PORT), RobustHTTPRequestHandler) as httpd:
            httpd.allow_reuse_address = True
            httpd.timeout = 30  # 30 second timeout for requests
            
            logger.info(f"✅ Server successfully started on {HOST}:{PORT}")
            logger.info(f"🔗 Access URL: http://localhost:{PORT}")
            logger.info("📡 Server is ready to accept connections")
            
            # Health check endpoint test
            logger.info("🏥 Running health check...")
            try:
                import urllib.request
                with urllib.request.urlopen(f'http://localhost:{PORT}/', timeout=5) as response:
                    if response.status == 200:
                        logger.info("✅ Health check passed - server responding correctly")
                    else:
                        logger.warning(f"⚠️ Health check warning - got status {response.status}")
            except Exception as e:
                logger.warning(f"⚠️ Health check failed: {e}")
            
            # Start serving
            logger.info("🎯 Starting request handling loop...")
            httpd.serve_forever()
    
    except OSError as e:
        if e.errno == 98:  # Address already in use
            logger.error(f"❌ Port {PORT} is already in use")
            logger.error("💡 Try using a different port: PORT=8000 python start_server.py")
        elif e.errno == 13:  # Permission denied
            logger.error(f"❌ Permission denied on port {PORT}")
            logger.error("💡 Try using a port above 1024 or run with proper permissions")
        else:
            logger.error(f"❌ Network error: {e}")
        sys.exit(1)
    
    except KeyboardInterrupt:
        logger.info("\n🛑 Server stopped by user (Ctrl+C)")
        sys.exit(0)
    
    except Exception as e:
        logger.error(f"❌ Unexpected server error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    main()