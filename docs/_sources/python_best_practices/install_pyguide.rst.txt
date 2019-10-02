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
