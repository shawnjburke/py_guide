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

Python Guide is one humble [#f1]_ tech warriors opinions on the best way to get going with
Python.  In addition, this guide tries to highlight anything specific to Python and Windows,
as python docs are often linux leaning.

Oh, and it provides a generator which sets up a new project with best practices, in the
same amount of time it takes to setup a virtual environment (and it sets that up too).

While the guide is setup to provide a best practice of how to develop in Python, it reflects
development practices I believe are good in any language and are implemented here with Python.
Things such as writing documentation are included.  Recognizing these are subjects not
always popular with programmers, they are popular with guys like me who have to lead
companies and need to be able to do crazy things, like maintain code years (if not decades)
after it was written.  Documentation is good; at very least necessary.  This guild will make
things like that straight forward to setup where possible.

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

      python_best_practices/why_generator
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
