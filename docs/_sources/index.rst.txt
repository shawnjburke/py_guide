.. Python Guide documentation master file, created by
   sphinx-quickstart on Wed May 23 21:02:41 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

===============================
Welcome to Python Guide's docs!
===============================

.. sidebar:: Sphinx Supports Themes
   :subtitle: see these Docs with various themes

   One feature I like with the Sphinx engine is the ability to use different themes.  As part of this project I've
   generated a number of different themes you can check out.

   * `agogo`_
   * `alabaster`_
   * `basicstrap`_
   * `bizstyle`_
   * `classic`_
   * `gopher`_
   * `haiku`_
   * `nature`_
   * `scrolls`_
   * `sphinx_rtd_theme`_
   * `sphinxdoc`_
   * `traditional`_

..  _agogo: https://shawnjburke.github.io/py_guide/themes/agogo
..  _alabaster: https://shawnjburke.github.io/py_guide/themes/alabaster
..  _basicstrap: https://shawnjburke.github.io/py_guide/themes/basicstrap
..  _bizstyle: https://shawnjburke.github.io/py_guide/themes/bizstyle
..  _classic: https://shawnjburke.github.io/py_guide/themes/classic
..  _gopher: https://shawnjburke.github.io/py_guide/themes/gopher
..  _haiku: https://shawnjburke.github.io/py_guide/themes/haiku
..  _nature: https://shawnjburke.github.io/py_guide/themes/nature
..  _scrolls: https://shawnjburke.github.io/py_guide/themes/scrolls
..  _sphinx_rtd_theme: https://shawnjburke.github.io/py_guide/themes/sphinx_rtd_theme
..  _sphinxdoc: https://shawnjburke.github.io/py_guide/themes/sphinxdoc
..  _traditional: https://shawnjburke.github.io/py_guide/themes/traditional

Python Guide is one humble [#f1]_ tech warriors opinions on the best way to get going with Python.  In addition, this
guide tries to highlight anything specific to Python and Windows, as python docs are often linux leaning.

While the guide is setup to provide a best practice of how to develop in Python, it reflects development practices
I believe are good in any language and are implemented here with Python.  Things such as writing documentation are
included.  Recognizing these are subjects not always popular with programmers, they are popular with guys like me
who have to lead companies and need to be able to do crazy things, like maintain code years (if not decades) after it
was written.  Documentation is good; at very least necessary.  This guild will make things like that straight forward
to setup where possible.

################
Get Started
################

Here are the three simple steps to create a new project with best practices

#. `Install Python`_ and `Install PyCharm`_
#. `Install sjb.pyguide`_
#. `Generate project`_

..  _Generate project: python_best_practices/generate_project.html
..  _Install Python: python_best_practices/install_python.html
..  _Install Pycharm: python_best_practices/install_Pycharm.html
..  _Install sjb.pyguide: python_best_practices/install_pyguide.html


####################################
What we have tried to think through
####################################

**Project Structure** - as an old programmer having a standard way to do any coding language, is just something I find
efficient.  In addition to thinking like a developer I've worked in release management, IT, being the boss, and I
tend to approach things in a wholistic fashion.  It doesn't matter how cool your code is if you can't install and
maintain it.

**Documentation is important** - if I have a structure that is already setup for how to document, leveraging in line code
syntax, then developers are more likely to make use of it.  This is good, because documentation is not for you, but
for the coder left maintaining your app, when you've moved on to your new fancy job (because of this awesome app you
just made).

**Documentation themes** - while creating parts of the project on Sphinx, I wanted to compare the themes.  I couldn't find
one resource for that.  Therefore I created it here in this project.  You can see the same documentation generated
into several different themes.

**Releasing** - I have found releasing is an after thought.  This often results in things like finding out your project
structure isn't conducive to packaging your release.  Or thinking through where you store your version number as it's
used in several files (normally).

**GitHub friendly** - we did thins like make docs the html directory of information for compatibility with GitHub.  It is so widely
used that while Sphinx normally makes docs a source directory, it's configuration allowed for change, where GitHub
(circa 2018-2019) would not.

**Test Inspired Development** - I came from the TDD days and I liked it.  When you have a reusable set of tests you get
build stability, reliability, the ability to come back to your own code and not break it, the ability for other people
to work on your code (so you can go write something newer and cooler).

##########################
Ode to Python?
##########################

I learned to code in a Windows world.  Perhaps that makes me old.  Regardless, I grew up with camelCase and PascalCase
in my code as is traditional Microsoft (M$ as many would put it).  There was a time when you never would have convinced
me I would come to prefer snake_case as is common to Python.  I have.  In fact I'm quite enamored with you Python. You
are quick with the script, or agile with the program structure.  You take pride in what makes a professional coder,
appreciation for commenting, code read-ability, and syntactical grace.

.. code-block::python
    (name_parameters="are cool", use_them="yes", love_them="yes", defaulting_is_powerful=True)

I guess that makes this my ode to Python.

..  toctree::
      :hidden:

      tldr

..  toctree::
      :hidden:
      :caption: Getting Started
      :maxdepth: 2

      python_best_practices/install_python
      python_best_practices/install_pycharm
      python_best_practices/install_pyguide
      python_best_practices/generate_project

..  toctree::
      :hidden:
      :maxdepth: 2
      :caption: Best Practices:

      python_best_practices/project_structure
      python_best_practices/project_documentation_code
      python_best_practices/project_documentation_matters
      python_best_practices/project_setup
      python_best_practices/project_logging
      python_best_practices/best_practice_main

.. toctree::
      :hidden:
      :caption: reStructuredtext (rst)

      reStructuredText/reStructuredText-CheatSheet
      reStructuredText/reStructuredText-style-sample

.. toctree::
      :hidden:
      :caption: Code Documentation
      :name: code

      code/modules
      readme

.. toctree::
      :hidden:
      :caption: Being Pythonic

      python_package_index
      tips
      acknowledgments
      rants/no_shame_in_windows

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

.. rubric:: Footnotes
.. [#f1] Instead of humble some might say overly opinionated pain in the ass always trying to be funny
