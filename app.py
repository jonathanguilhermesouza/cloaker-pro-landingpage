#!/usr/bin/env python3
"""
CloakerPro Landing Page - Alternative deployment entry point
This file serves as the main application entry point for deployments
"""

import os
import sys
from pathlib import Path

# Add the current directory to Python path
current_dir = Path(__file__).parent
sys.path.insert(0, str(current_dir))

# Import and run the main server
if __name__ == "__main__":
    from main import main
    main()