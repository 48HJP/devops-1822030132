@echo off
set "PATH=C:\Users\hao14\AppData\Local\Programs\Git\cmd;%PATH%"
cd /d "c:\Users\hao14\.gemini\antigravity\scratch\devops-1822030132"
echo ========================================================
echo DANG PUSH CODE LEN GITHUB REPOSITORY devops-1822030132
echo ========================================================
echo.
git push -u origin main
echo.
echo ========================================================
if %errorlevel% equ 0 (
    echo [THANH CONG] Code da duoc push len GitHub thanh cong!
) else (
    echo [THAT BAI] Co loi xay ra hoac ban chua xac thuc GitHub.
)
echo ========================================================
pause

