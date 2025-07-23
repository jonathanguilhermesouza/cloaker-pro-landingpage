#!/usr/bin/env python3
"""
WSGI application for CloakerPro Landing Page
For deployment systems that expect a WSGI application
"""

import os
import mimetypes
from pathlib import Path

class StaticFileApplication:
    """Simple WSGI application to serve static files"""
    
    def __init__(self, static_dir='.'):
        self.static_dir = Path(static_dir).resolve()
    
    def __call__(self, environ, start_response):
        path = environ['PATH_INFO']
        
        # Serve index.html for root path
        if path == '/' or path == '':
            path = '/index.html'
        
        # Remove leading slash and resolve file path
        file_path = self.static_dir / path.lstrip('/')
        
        try:
            # Check if file exists and is within static directory
            file_path = file_path.resolve()
            if not str(file_path).startswith(str(self.static_dir)):
                raise FileNotFoundError()
            
            # Read file content
            with open(file_path, 'rb') as f:
                content = f.read()
            
            # Determine content type
            content_type, _ = mimetypes.guess_type(str(file_path))
            if content_type is None:
                content_type = 'application/octet-stream'
            
            # Send response
            status = '200 OK'
            headers = [
                ('Content-Type', content_type),
                ('Content-Length', str(len(content))),
                ('Cache-Control', 'public, max-age=3600'),
            ]
            start_response(status, headers)
            return [content]
            
        except FileNotFoundError:
            # Return 404 for missing files
            status = '404 Not Found'
            headers = [('Content-Type', 'text/plain')]
            start_response(status, headers)
            return [b'File not found']
        
        except Exception as e:
            # Return 500 for server errors
            status = '500 Internal Server Error'
            headers = [('Content-Type', 'text/plain')]
            start_response(status, headers)
            return [f'Server error: {str(e)}'.encode()]

# Create WSGI application instance
application = StaticFileApplication()

if __name__ == "__main__":
    # For development/testing
    from wsgiref.simple_server import make_server
    port = int(os.environ.get('PORT', 8000))
    with make_server('0.0.0.0', port, application) as httpd:
        print(f"WSGI server running on port {port}")
        httpd.serve_forever()