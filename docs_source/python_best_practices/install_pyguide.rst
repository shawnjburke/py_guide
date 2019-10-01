================================
Step 3: Install sjb.pyguide
================================

The project generator is run somewhat like venv.  That is, I usually go to my Python 3.x installation, and
from there run ``venv`` to create the virtual environment.  Therefore, in this guide I take the approach
of installing sjb.pyguide to the default Python 3.x directory.

.. code-block:: text

    c:\Python37>scripts\pip install sjb.pyguide
    Collecting sjb.pyguide
      Using cached https://files.pythonhosted.org/packages/5e/f7/ec25e7ba99a49d9d5571a2aaf83e62c822e4c6d08e5df9cc67ebd11b2e81/sjb.pyguide-0.2.5-py2.py3-none-any.whl
    Requirement already satisfied: twine==1.13.0 in c:\users\sburke\appdata\roaming\python\python37\site-packages (from sjb.pyguide) (1.13.0)
    Requirement already satisfied: requests in c:\python37\lib\site-packages (from sjb.pyguide) (2.22.0)
    Requirement already satisfied: Jinja2==2.10.1 in c:\python37\lib\site-packages (from sjb.pyguide) (2.10.1)
    Collecting configparser2==4.0.0 (from sjb.pyguide)
    Collecting Menu==3.1.0 (from sjb.pyguide)
    Requirement already satisfied: setuptools>=0.7.0 in c:\python37\lib\site-packages (from twine==1.13.0->sjb.pyguide) (41.2.0)
    Requirement already satisfied: requests-toolbelt!=0.9.0,>=0.8.0 in c:\users\sburke\appdata\roaming\python\python37\site-packages (from twine==1.13.0->sjb.pyguide) (0.9.1)
    Requirement already satisfied: readme-renderer>=21.0 in c:\users\sburke\appdata\roaming\python\python37\site-packages (from twine==1.13.0->sjb.pyguide) (24.0)
    Requirement already satisfied: tqdm>=4.14 in c:\users\sburke\appdata\roaming\python\python37\site-packages (from twine==1.13.0->sjb.pyguide) (4.35.0)
    Requirement already satisfied: pkginfo>=1.4.2 in c:\users\sburke\appdata\roaming\python\python37\site-packages (from twine==1.13.0->sjb.pyguide) (1.5.0.1)
    Requirement already satisfied: chardet<3.1.0,>=3.0.2 in c:\python37\lib\site-packages (from requests->sjb.pyguide) (3.0.4)
    Requirement already satisfied: certifi>=2017.4.17 in c:\python37\lib\site-packages (from requests->sjb.pyguide) (2019.6.16)
    Requirement already satisfied: urllib3!=1.25.0,!=1.25.1,<1.26,>=1.21.1 in c:\python37\lib\site-packages (from requests->sjb.pyguide) (1.25.3)
    Requirement already satisfied: idna<2.9,>=2.5 in c:\python37\lib\site-packages (from requests->sjb.pyguide) (2.8)
    Requirement already satisfied: MarkupSafe>=0.23 in c:\python37\lib\site-packages (from Jinja2==2.10.1->sjb.pyguide) (1.1.1)
    Requirement already satisfied: Pygments in c:\python37\lib\site-packages (from readme-renderer>=21.0->twine==1.13.0->sjb.pyguide) (2.4.2)
    Requirement already satisfied: six in c:\python37\lib\site-packages (from readme-renderer>=21.0->twine==1.13.0->sjb.pyguide) (1.12.0)
    Requirement already satisfied: docutils>=0.13.1 in c:\python37\lib\site-packages (from readme-renderer>=21.0->twine==1.13.0->sjb.pyguide) (0.15.2)
    Requirement already satisfied: bleach>=2.1.0 in c:\users\sburke\appdata\roaming\python\python37\site-packages (from readme-renderer>=21.0->twine==1.13.0->sjb.pyguide) (3.1.0)
    Requirement already satisfied: webencodings in c:\users\sburke\appdata\roaming\python\python37\site-packages (from bleach>=2.1.0->readme-renderer>=21.0->twine==1.13.0->sjb.pyguide) (0.5.1)
    Installing collected packages: configparser2, Menu, sjb.pyguide
    Successfully installed Menu-3.1.0 configparser2-4.0.0 sjb.pyguide-0.2.5

    c:\Python37>scripts\py_guide --show_menu

At this point the console menu for the Python Guide generator will be displayed.

.. code-block:: text

    ******************************************
            Python Guide for Practicing Wizards
    *******************************************

    1. Generate new project
    2. py_guide help
    3. Exit

    >>>

Use the menu to start the generator.
Provide the information requested, and watch the project get created, including the virtual environment.

.. code-block:: text

    ******************************************
            Python Guide for Practicing Wizards
    *******************************************

    1. Generate new project
    2. py_guide help
    3. Exit

    >>> 1

    What name do you want to use for author, copyright holder? [sburke]
    What is the name of your project?py_project
    INFO | Created directory C:\Users\sburke\PycharmProjects\py_project
    INFO | Created directory C:\Users\sburke\PycharmProjects\py_project\.idea
    INFO | Created directory C:\Users\sburke\PycharmProjects\py_project\.idea\runConfigurations
    INFO | Created directory C:\Users\sburke\PycharmProjects\py_project\build
    INFO | Created directory C:\Users\sburke\PycharmProjects\py_project\dist
    INFO | Created directory C:\Users\sburke\PycharmProjects\py_project\docs
    INFO | Created directory C:\Users\sburke\PycharmProjects\py_project\docs_source
    INFO | Created directory C:\Users\sburke\PycharmProjects\py_project\docs_source\_static
    INFO | Created directory C:\Users\sburke\PycharmProjects\py_project\docs_source\code
    INFO | Created directory C:\Users\sburke\PycharmProjects\py_project\py_project
    INFO | Created directory C:\Users\sburke\PycharmProjects\py_project\venv
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\LICENSE
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\requirements.txt
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\.gitignore
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\docs_source\conf.py
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\docs_source\index.rst
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\docs_source\readme.rst
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\docs_source\next_steps.rst
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\dist_pypi.bat
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\dist_pypi.config.bat
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\jrepl.bat
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\project.cfg
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\setup.py
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\README.rst
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\py_project\__init__.py
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\py_project\__main__.py
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\py_project\console_menu.py
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\py_project\logging_trees.py
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\.idea\runConfigurations\Build_setup_wheel.xml
    INFO | Created file C:\Users\sburke\PycharmProjects\py_project\.idea\runConfigurations\Build_Sphinx_docs.xml
    INFO | Your project was created at C:\Users\sburke\PycharmProjects
    INFO | Deactivating Python Virtual Environment (c:\python37)
    'c:\python37\Scripts\deactivate' is not recognized as an internal or external command,operable program or batch file.
    INFO | Creating Virtual environment...
    INFO | Activating Python Virtual Environment (C:\Users\sburke\PycharmProjects\py_project\venv)
    INFO | Downloading pip installation file...
    INFO | Installing pip ...
    Collecting pip
      Using cached https://files.pythonhosted.org/packages/30/db/9e38760b32e3e7f40cce46dd5fb107b8c73840df38f0046d8e6514e675a1/pip-19.2.3-py2.py3-none-any.whl
    Collecting setuptools
      Using cached https://files.pythonhosted.org/packages/b2/86/095d2f7829badc207c893dd4ac767e871f6cd547145df797ea26baea4e2e/setuptools-41.2.0-py2.py3-none-any.whl
    Collecting wheel
      Using cached https://files.pythonhosted.org/packages/00/83/b4a77d044e78ad1a45610eb88f745be2fd2c6d658f9798a15e384b7d57c9/wheel-0.33.6-py2.py3-none-any.whl
    Installing collected packages: pip, setuptools, wheel
    Successfully installed pip-19.2.3 setuptools-41.2.0 wheel-0.33.6
    INFO | Installing requirements using pip...
    Collecting configparser2==4.0.0 (from -r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 1))
    Collecting docutils==0.14 (from -r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 2))
      Using cached https://files.pythonhosted.org/packages/36/fa/08e9e6e0e3cbd1d362c3bbee8d01d0aedb2155c4ac112b19ef3cae8eed8d/docutils-0.14-py3-none-any.whl
    Collecting Menu==3.1.0 (from -r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 3))
    Requirement already satisfied: pip>=19.0.2 in c:\users\sburke\pycharmprojects\py_project\venv\lib\site-packages (from -r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 4)) (19.2.3)
    Collecting Sphinx==1.8.5 (from -r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/7d/66/a4af242b4348b729b9d46ce5db23943ce9bca7da9bbe2ece60dc27f26420/Sphinx-1.8.5-py2.py3-none-any.whl
    Collecting sphinx_rtd_theme==0.4.3 (from -r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 6))
      Using cached https://files.pythonhosted.org/packages/60/b4/4df37087a1d36755e3a3bfd2a30263f358d2dea21938240fa02313d45f51/sphinx_rtd_theme-0.4.3-py2.py3-none-any.whl
    Requirement already satisfied: setuptools>=39.2.0 in c:\users\sburke\pycharmprojects\py_project\venv\lib\site-packages (from -r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 7)) (41.2.0)
    Collecting twine==1.13.0 (from -r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 8))
      Using cached https://files.pythonhosted.org/packages/28/90/59eec88c0b2ac9e47fe135959007acb93a3cc9f7146366e11fecf718dd15/twine-1.13.0-py2.py3-none-any.whl
    Requirement already satisfied: wheel>=0.33.1 in c:\users\sburke\pycharmprojects\py_project\venv\lib\site-packages (from-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 9)) (0.33.6)
    Collecting Pygments>=2.0 (from Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/5c/73/1dfa428150e3ccb0fa3e68db406e5be48698f2a979ccbcec795f28f44048/Pygments-2.4.2-py2.py3-none-any.whl
    Collecting Jinja2>=2.3 (from Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/1d/e7/fd8b501e7a6dfe492a433deb7b9d833d39ca74916fa8bc63dd1a4947a671/Jinja2-2.10.1-py2.py3-none-any.whl
    Collecting sphinxcontrib-websupport (from Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/2a/59/d64bda9b7480a84a3569be4dde267c0f6675b255ba63b4c8e84469940457/sphinxcontrib_websupport-1.1.2-py2.py3-none-any.whl
    Collecting alabaster<0.8,>=0.7 (from Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/10/ad/00b090d23a222943eb0eda509720a404f531a439e803f6538f35136cae9e/alabaster-0.7.12-py2.py3-none-any.whl
    Collecting requests>=2.0.0 (from Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/51/bd/23c926cd341ea6b7dd0b2a00aba99ae0f828be89d72b2190f27c11d4b7fb/requests-2.22.0-py2.py3-none-any.whl
    Collecting packaging (from Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/cf/94/9672c2d4b126e74c4496c6b3c58a8b51d6419267be9e70660ba23374c875/packaging-19.2-py2.py3-none-any.whl
    Collecting six>=1.5 (from Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/73/fb/00a976f728d0d1fecfe898238ce23f502a721c0ac0ecfedb80e0d88c64e9/six-1.12.0-py2.py3-none-any.whl
    Collecting snowballstemmer>=1.1 (from Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
    Collecting imagesize (from Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/fc/b6/aef66b4c52a6ad6ac18cf6ebc5731ed06d8c9ae4d3b2d9951f261150be67/imagesize-1.1.0-py2.py3-none-any.whl
    Collecting colorama>=0.3.5; sys_platform == "win32" (from Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/4f/a6/728666f39bfff1719fc94c481890b2106837da9318031f71a8424b662e12/colorama-0.4.1-py2.py3-none-any.whl
    Collecting babel!=2.0,>=1.3 (from Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt(line 5))
      Using cached https://files.pythonhosted.org/packages/2c/60/f2af68eb046c5de5b1fe6dd4743bf42c074f7141fe7b2737d3061533b093/Babel-2.7.0-py2.py3-none-any.whl
    Collecting pkginfo>=1.4.2 (from twine==1.13.0->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 8))
      Using cached https://files.pythonhosted.org/packages/e6/d5/451b913307b478c49eb29084916639dc53a88489b993530fed0a66bab8b9/pkginfo-1.5.0.1-py2.py3-none-any.whl
    Collecting tqdm>=4.14 (from twine==1.13.0->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line8))
      Using cached https://files.pythonhosted.org/packages/e1/c1/bc1dba38b48f4ae3c4428aea669c5e27bd5a7642a74c8348451e0bd8ff86/tqdm-4.36.1-py2.py3-none-any.whl
    Collecting readme-renderer>=21.0 (from twine==1.13.0->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 8))
      Using cached https://files.pythonhosted.org/packages/c3/7e/d1aae793900f36b097cbfcc5e70eef82b5b56423a6c52a36dce51fedd8f0/readme_renderer-24.0-py2.py3-none-any.whl
    Collecting requests-toolbelt!=0.9.0,>=0.8.0 (from twine==1.13.0->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 8))
      Using cached https://files.pythonhosted.org/packages/60/ef/7681134338fc097acef8d9b2f8abe0458e4d87559c689a8c306d0957ece5/requests_toolbelt-0.9.1-py2.py3-none-any.whl
    Collecting MarkupSafe>=0.23 (from Jinja2>=2.3->Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/65/c6/2399700d236d1dd681af8aebff1725558cddfd6e43d7a5184a675f4711f5/MarkupSafe-1.1.1-cp37-cp37m-win_amd64.whl
    Collecting idna<2.9,>=2.5 (from requests>=2.0.0->Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/14/2c/cd551d81dbe15200be1cf41cd03869a46fe7226e7450af7a6545bfc474c9/idna-2.8-py2.py3-none-any.whl
    Collecting urllib3!=1.25.0,!=1.25.1,<1.26,>=1.21.1 (from requests>=2.0.0->Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/e0/da/55f51ea951e1b7c63a579c09dd7db825bb730ec1fe9c0180fc77bfb31448/urllib3-1.25.6-py2.py3-none-any.whl
    Collecting chardet<3.1.0,>=3.0.2 (from requests>=2.0.0->Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/bc/a9/01ffebfb562e4274b6487b4bb1ddec7ca55ec7510b22e4c51f14098443b8/chardet-3.0.4-py2.py3-none-any.whl
    Collecting certifi>=2017.4.17 (from requests>=2.0.0->Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/18/b0/8146a4f8dd402f60744fa380bc73ca47303cccf8b9190fd16a827281eac2/certifi-2019.9.11-py2.py3-none-any.whl
    Collecting pyparsing>=2.0.2 (from packaging->Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/11/fa/0160cd525c62d7abd076a070ff02b2b94de589f1a9789774f17d7c54058e/pyparsing-2.4.2-py2.py3-none-any.whl
    Collecting pytz>=2015.7 (from babel!=2.0,>=1.3->Sphinx==1.8.5->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 5))
      Using cached https://files.pythonhosted.org/packages/87/76/46d697698a143e05f77bec5a526bf4e56a0be61d63425b68f4ba553b51f2/pytz-2019.2-py2.py3-none-any.whl
    Collecting bleach>=2.1.0 (from readme-renderer>=21.0->twine==1.13.0->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 8))
      Using cached https://files.pythonhosted.org/packages/ab/05/27e1466475e816d3001efb6e0a85a819be17411420494a1e602c36f8299d/bleach-3.1.0-py2.py3-none-any.whl
    Collecting webencodings (from bleach>=2.1.0->readme-renderer>=21.0->twine==1.13.0->-r C:\Users\sburke\PycharmProjects\py_project\venv\..\requirements.txt (line 8))
      Using cached https://files.pythonhosted.org/packages/f4/24/2a3e3df732393fed8b3ebf2ec078f05546de641fe1b667ee316ec1dcf3b7/webencodings-0.5.1-py2.py3-none-any.whl
    Installing collected packages: configparser2, docutils, Menu, Pygments, MarkupSafe, Jinja2, sphinxcontrib-websupport, alabaster, idna, urllib3, chardet, certifi, requests, six, pyparsing, packaging, snowballstemmer, imagesize, colorama, pytz, babel, Sphinx, sphinx-rtd-theme, pkginfo, tqdm, webencodings, bleach, readme-renderer, requests-toolbelt, twine
    INFO | Deactivating Python Virtual Environment (C:\Users\sburke\PycharmProjects\py_project\venv)
    INFO | Activating Python Virtual Environment (c:\python37)
