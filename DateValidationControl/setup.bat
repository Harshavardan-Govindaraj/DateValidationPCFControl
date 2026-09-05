@echo off
echo ==========================================
echo DateValidationControl - PCF setup
echo ==========================================
echo.
echo This script expects Microsoft Power Platform CLI (pac) and Node.js.
echo.
where pac >nul 2>nul
if errorlevel 1 (
  echo ERROR: pac was not found in PATH.
  echo Install Microsoft Power Platform CLI, restart VS Code, and run this again.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm was not found in PATH.
  echo Install Node.js LTS and restart VS Code.
  pause
  exit /b 1
)

echo PAC version:
pac --version
echo.
echo Installing npm packages...
npm install
if errorlevel 1 (
  echo npm install failed.
  pause
  exit /b 1
)

echo.
echo Building the PCF control...
npm run build
if errorlevel 1 (
  echo Build failed. Check the terminal output above.
  pause
  exit /b 1
)

echo.
echo ==========================================
echo Build completed.
echo ==========================================
pause
