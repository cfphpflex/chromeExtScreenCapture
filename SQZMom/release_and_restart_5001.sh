#!/bin/bash

PORT=5001

# Find the PID of the process using the port
PID=$(lsof -ti tcp:$PORT)

if [ -n "$PID" ]; then
  echo "Killing process $PID using port $PORT"
  kill -9 $PID
fi

# Wait for a short period to ensure the port is released
sleep 2

# Restart the Node.js server
echo "Starting Node.js server on port $PORT"
python  server.py server.js

