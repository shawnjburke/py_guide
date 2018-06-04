================================
Project Documentation Matters
================================

No really Chris, it does.

##########################################
Yes, yes, blah, blah, documentation sucks
##########################################

Documentation is for the next developer.  Plain and simply.  And don't start with arguments about job security if
you are the only one who can read it, or tell me how much time you'll loose if you do it, I am just not in the mood
to hear it.  This is an age of auto-generated code documentation, and other tools like that.  Therefore, as with
any good code documentation, we'll make sure we carefully document intent, and the why's of necessity, and write
the code clearly in a way that documents that structure.   It's a balance Padawan, chill out and let this documentation
guide you [#footnote-01]_.

Setup Documentation Now
------------------------
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
    ├- docs-source/
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

..  note::
    Where possible I try to follow convention.  The convention for sphinx is to put your files for documentation in
    a docs/ folder.  I'm going to depart from that and use a docs-source folder instead.  The reason for this is that
    github pages support reading html files from the docs folder.  Therefore I'll make docs/ an output folder for html
    and put the source markup file (in reStructuredText) in the docs-source/ folder instead.

* > Root path for the documentation [.]: docs-source
* > Separate source and build directories (y/n) [n]: n
* > autodoc: automatically insert docstrings from modules (y/n) [n]: y
* > todo: write "todo" entries that can be shown or hidden on build (y/n) [n]: y
* > coverage: checks for documentation coverage (y/n) [n]: y
* > imgmath: include math, rendered as PNG or SVG images (y/n) [n]: n
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

..  rubric:: Footnotes
..  [#footnote-01] Yes, like the force.