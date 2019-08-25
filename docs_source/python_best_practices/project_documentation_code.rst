================================
Generate Code Documentation
================================

Spinx includes a feature it calls autodoc.  The idea is that if you run the generator a file will be created in
reStructuredText for each code file found.  In turn, those files, will include directives that generate documentation
from the code comments.

####################################################
Generate code documentation RST files Automatically
####################################################

There are two parts to the sphinx code documentation engine I want to highlight
    1) Directives that go into an RST file to read code files.  The documentation you do in the code is read into
        the template and output in a format such as HTML.  You can hand code RST files.
    2) sphinx-apidoc build engine which will generate RST files based on the structure of your code files.

In this project there is a make.bat file for Windows, and Makefile for linux, which has been modified to support
using sphinx-apidoc to generate the RST files.

.. code-block::BatchLexer
    (venv) Z:\Users\user\workspace\py_guide>  Z:\\Users\\user\\workspace\\py_guide\\docs_source\\make.bat code_rst_generate

