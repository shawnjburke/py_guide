@ECHO OFF

pushd %~dp0

REM Command file for Sphinx documentation

if "%SPHINXBUILD%" == "" (
	set SPHINXBUILD=sphinx-build
)
set SOURCEDIR=.
set BUILDDIR=_build
set SPHINXPROJ=PythonGuideforPracticingWizards

if "%1" == "" goto help

%SPHINXBUILD% >NUL 2>NUL
if errorlevel 9009 (
	echo.
	echo.The 'sphinx-build' command was not found. Make sure you have Sphinx
	echo.installed, then set the SPHINXBUILD environment variable to point
	echo.to the full path of the 'sphinx-build' executable. Alternatively you
	echo.may add the Sphinx directory to PATH.
	echo.
	echo.If you don't have Sphinx installed, grab it from
	echo.http://sphinx-doc.org/
	exit /b 1
)

:code_rst_generate
    rem https://www.sphinx-doc.org/en/master/man/sphinx-apidoc.html
    rem Force creation of files even if they exist with -f options
    rem        SPHINXBUILD=sphinx-apidoc -f -o .\code ..
    rem Use the second parameter (if passed, can be blank) to all sphinx-apidoc options like -f[orce]
    set SPHINXBUILD=sphinx-apidoc %2 %3 -o .\code ..
    %SPHINXBUILD%
    if %ERRORLEVEL% == 0 (
        goto end
    ) else (
        echo ERROR: %SPHINXBUILD%
    )

%SPHINXBUILD% -M %1 %SOURCEDIR% %BUILDDIR% %SPHINXOPTS%
goto end

:help
%SPHINXBUILD% -M help %SOURCEDIR% %BUILDDIR% %SPHINXOPTS%

:end
popd
