@echo off
echo Cleaning up old dependencies...
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul

echo Installing fresh dependencies...
npm install

echo Starting development server...
npm run dev

pause