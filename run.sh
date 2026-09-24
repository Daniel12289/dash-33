#!/bin/sh
cd "$(dirname "$0")"
echo "Open http://localhost:8000 in your browser. Press Ctrl+C to stop."
(sleep 1; (command -v open >/dev/null && open http://localhost:8000) || (command -v xdg-open >/dev/null && xdg-open http://localhost:8000)) >/dev/null 2>&1 &
python3 -m http.server 8000
