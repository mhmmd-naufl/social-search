@echo off
echo 🔧 Starting Social Search Project...

:: Start backend in new terminal
start cmd /k "cd backend && venv\Scripts\activate && uvicorn main:app --reload"

:: Start frontend in new terminal
start cmd /k "cd frontend && npm run dev"

echo 🚀 All servers should now be running!
pause
