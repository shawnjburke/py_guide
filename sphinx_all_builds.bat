REM This script will compile all the themes used in documentation.  Since this project is a best practices
REM example, multiple themes are compiled to show the power of Spinx documentation.
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html docs-source docs
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=classic docs-source docs\themes\classic
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=sphinxdoc docs-source docs\themes\sphinxdoc
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=scrolls docs-source docs\themes\scrolls
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=agogo docs-source docs\themes\agogo
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=basicstrap docs-source docs\themes\basicstrap
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=gopher docs-source docs\themes\gopher
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=revealjs docs-source docs\themes\revealjs
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=traditional docs-source docs\themes\traditional
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=nature docs-source docs\themes\nature
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=pyramid docs-source docs\themes\pyramid
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=bizstyle docs-source docs\themes\bizstyle
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=alabaster docs-source docs\themes\alabaster
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=sphinx_rtd_theme docs-source docs\themes\sphinx_rtd_theme
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=skuidsphinx docs-source docs\themes\skuidsphinx