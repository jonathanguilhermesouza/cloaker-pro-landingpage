#!/bin/bash
# CloakerPro Landing Page Server Start Script

# Set default port if not provided
PORT=${PORT:-5000}

echo "Starting CloakerPro Landing Page Server on port $PORT"
echo "Serving files from: $(pwd)"

# Check if index.html exists
if [ ! -f "index.html" ]; then
    echo "Error: index.html not found in current directory"
    exit 1
fi

# Start enhanced Python server
exec python3 start_server.py