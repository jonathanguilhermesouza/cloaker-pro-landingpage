#!/usr/bin/env python3
"""
CloakerPro Landing Page - Universal start script
Entry point for various deployment systems
"""

import os
import sys
import subprocess
from pathlib import Path

def start_server():
    """Start the server using the best available method"""
    
    # Get port from environment or default to 5000
    port = os.environ.get('PORT', '5000')
    
    # Change to the directory containing this script
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    # Check if index.html exists
    if not Path('index.html').exists():
        print("Error: index.html not found")
        sys.exit(1)
    
    print(f"Starting CloakerPro Landing Page on port {port}")
    
    # Use Python's built-in HTTP server
    cmd = [sys.executable, '-m', 'http.server', port, '--bind', '0.0.0.0']
    
    try:
        subprocess.run(cmd, check=True)
    except KeyboardInterrupt:
        print("\nServer stopped")
    except Exception as e:
        print(f"Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    start_server()