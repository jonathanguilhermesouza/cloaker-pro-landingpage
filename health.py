#!/usr/bin/env python3
"""
Health check script for CloakerPro Landing Page
This script verifies that the server is running correctly
"""

import urllib.request
import sys
import os

PORT = int(os.environ.get('PORT', 5000))

def health_check():
    try:
        # Test the main endpoint
        with urllib.request.urlopen(f'http://localhost:{PORT}/', timeout=10) as response:
            if response.status == 200:
                content = response.read().decode('utf-8')
                if 'CloakerPro' in content and '<!DOCTYPE html>' in content:
                    print("✅ Health check passed - server is responding correctly")
                    print(f"📊 Status: {response.status}")
                    print(f"📏 Content length: {len(content)} bytes")
                    return True
                else:
                    print("⚠️ Server responding but content seems incorrect")
                    return False
            else:
                print(f"❌ Server returned status {response.status}")
                return False
    except Exception as e:
        print(f"❌ Health check failed: {e}")
        return False

if __name__ == "__main__":
    success = health_check()
    sys.exit(0 if success else 1)