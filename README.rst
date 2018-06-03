=====================
FNG's Guide to Python
=====================

Not bad Python, not bad
------------------------
I learned to code in a Windows world.  Perhaps that makes me old.  Regardless, I grew up with camelCase and PascalCase
in my code as is traditional Microsoft (M$ as many would put it).  There was a time when you never would have convinced
me I would come to prefer snake_case as is common to Python.  I have.  In fact I'm quite enamored with you Python. You
are quick with the script, or agile with the program structure.  You take pride in what makes a professional coder,
appreciation for commenting, code read-ability, and syntactical grace

.. code-block::python
    (name_parameters="are cool", use_them="yes", love_them="yes", defaulting_is_powerful=True)

I guess that makes this my ode to Python.


Purpose of this Project
------------------------
This project is intended to be an end-to-end guide on getting started with Python.  It's intended to establish a best
practice structure that can be used as a begginning state for a python project.  Stepping through all the steps
should be to setup a new Python project, using a set of best practices and coding standards, which can apply across all
types of Python projects.

Step 1 - Install Python
Step 2 - Install PyCharm
Step 3 - `Python Project Structure`_

.. _Python Project Structure: /python_best_practices/project_structure.html


Setup Documentation Now
------------------------
Good logging makes for good programs.  No one says that about documentation.  It's still important.  What makes it
difficult is keeping documentation in sync with changes to the program.  Therefore I believe in documenting in line
to the code if possible.  This is especially useful when you bring on another programmer.  This is even more useful
one year from now when you try to remember why you were doing something.  Which is why code should be self documenting,
and documentation should be about the expectation of usage, and reasoning, perhaps architecture, which brought the code
into existence.

If you don't setup documentation of your code up front, you won't do it later.  Corollary: Unless you're being paid to
by something like selling the company; at which time doing this is a soul crushing pia.  Set it up now

Sphinx is the document engine of choice in Python.   You'll find most of what you need in the setup documentation of
www.sphinx-doc.org.  Install it.

.. code-block:: shell

    >> pip install -U sphinx

Now we have the Sphinx Engine.  The way it works is you create files and fill them with reStructuredText or another markup
language.  Markdown seems to be popular in the github crowd and `sphinx can support markdown`_.

.. _sphinx can support markdown: <http://www.sphinx-doc.org/en/master/usage/markdown.html>

You need to create a template file and then generate documentation from it.  You can code a template file by hand.  For
instance, create a folder in your project called docs, a sibling of the project_name folder.  Inside that folder add a
readme.rst file.

.. code-block:: text

    project_name/
    ├- docs/
    │  └- readme.rst
    ├- project_name/
    │  └- tests/
    │  └- __init_.py
    ├- README

The readme.rst file will be used by the Sphinx engine to create an output file.  This seems a bit duplicative to the
file we have in the root.  We're not going to remove that file because it's Pythonic, and we've decided to make having
it a part of the coding standard.  Therefore will import the content of the root README file, via a directive in the
docs\\readme.rst file, which in turn creates an output file, such as html, when processed by Sphinx.  It's confusing,
right?  It will make some sense after a while.

In the docs\\readme.rst file add the following contents:

.. code-block::text

    README
    =================
    .. include:: ../README

Wait.  What just happened?

We created a template file, filled with restructured text (thus .rst), which we can now read with the Sphinx engine.
The Sphinx engine will see that the template says "go find a file named README in the root and include it's contents
in this page".  Then the Sphinx will render it.  Render it to what you wonder?  Well whatever we tell it to (that the
engine knows how to).  Very often that's HTML, but we could create a PDF, or a number of other formats.  We just need
to tell the engine how to run.

Sphinx is an engine, or program, and they need data to know what to do.  Sphinx is a command line utility so we have
that.  In addition Sphinx has a configuration file.  To create it we'll use a sphinx provided setup program.  This
program will ask a few questions.  When it asks for the path to the documentation choose the docs folder
previously created.  Answer other questions as you see fit; I would opt for defaults if you don't have a reason
to change the answer.  Here are items that I set in the list of questions

* > Root path for the documentation [.]: docs
* > Separate source and build directories (y/n) [n]: y
* > autodoc: automatically insert docstrings from modules (y/n) [n]: y
* > todo: write "todo" entries that can be shown or hidden on build (y/n) [n]: y
* > coverage: checks for documentation coverage (y/n) [n]: y
* > imgmath: include math, rendered as PNG or SVG images (y/n) [n]: y
* > viewcode: include links to the source code of documented Python objects (y/n) [n]: y
* > githubpages: create .nojekyll file to publish the document on GitHub pages (y/n) [n]: y

If you are using PyCharm (and why wouldn't you) under the tools menu, there's an option to start Sphinx Quickstart.

If you are on Linux without PyCharm, then you need to execute the

.. code-block::text

    $ sphinx-quickstart

If you are on Windows without PyCharm, then you need an executable (on my first run I thought sphinx-quickstart was
a command in the Python console)

.. code-block::text

    C:\Python36\Scripts\sphinx-quickstart.exe

Once you've gone through the quickstart we need to run the engine, against the source, to create a build of html.
If you are in PyCharm use the build configurations.   There is a specific build configuration for Sphinx documentation
generation.  Make sure that you have your setuptools package updated as versions around 28 through errors with
PyCharm and these builds.


There's no shame in Windows
---------------------------
I get that all the cool kids use a MAC these days.  However I'm old.  In the early days I needed a platform with a
interface, where I could think for myself on my own hardware, and that was Windows.  This guide will point out things
specific to windows as all the others focus on Linux.  Linux is cool.  I'm running it in my Amazon cloud too. Checking
out their latest UI distros with ElementaryOS. Nothing but respect; just not using every day in my windows based
consulting.

Death to the damn MAC square keys that ruined keyboards.

#backSlashAboveEnterFoEva