REM This script will compile all the themes used in documentation.  Since this project is a best practices
REM example, multiple themes are compiled to show the power of Spinx documentation.
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html docs_source docs
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=classic docs_source docs\themes\classic
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=sphinxdoc docs_source docs\themes\sphinxdoc
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=scrolls docs_source docs\themes\scrolls
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=agogo docs_source docs\themes\agogo
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=basicstrap docs_source docs\themes\basicstrap
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=gopher docs_source docs\themes\gopher
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=revealjs docs_source docs\themes\revealjs
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=traditional docs_source docs\themes\traditional
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=nature docs_source docs\themes\nature
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=pyramid docs_source docs\themes\pyramid
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=bizstyle docs_source docs\themes\bizstyle
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=alabaster docs_source docs\themes\alabaster
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=sphinx_rtd_theme docs_source docs\themes\sphinx_rtd_theme
venv\Scripts\python.exe "C:\Program Files\JetBrains\PyCharm Community Edition 2018.2.4\helpers\rest_runners\sphinx_runner.py" -b html -D html_theme=skuidsphinx docs_source docs\themes\skuidsphinx