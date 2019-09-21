.. Python Guide documentation master file, created by
   sphinx-quickstart on Wed May 23 21:02:41 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

===============================
Welcome to Python Guide's docs!
===============================

#############
Overview
#############

Python Guide is one humble [#f1]_ tech warriors opinions on the best way to get going with Python.  In addition, this
guide tries to highlight anything specific to Python and Windows, as python does are often linux leaning.

While the guide is setup to provide a best practice of how to develop in Python, it reflects development practices
I believe are good in any language and are implemented here with Python.  Things such as writing documentation are
included.  Recognizing these are subjects not always popular with programmers, they are popular with guys like me
who have to lead companies and need to be able to do crazy things, like maintain code years (if not decades) after it
was written.  Documentation is good; at very least necessary.  This guild will make things like that straight forward
to setup where possible.

**************************
Ode to Python?
**************************

I learned to code in a Windows world.  Perhaps that makes me old.  Regardless, I grew up with camelCase and PascalCase
in my code as is traditional Microsoft (M$ as many would put it).  There was a time when you never would have convinced
me I would come to prefer snake_case as is common to Python.  I have.  In fact I'm quite enamored with you Python. You
are quick with the script, or agile with the program structure.  You take pride in what makes a professional coder,
appreciation for commenting, code read-ability, and syntactical grace.

.. code-block::python
    (name_parameters="are cool", use_them="yes", love_them="yes", defaulting_is_powerful=True)

I guess that makes this my ode to Python.

################
Best Practices
################

Steps to maintain a best practice Python project

#. `Install Python`_
#. `Install PyCharm`_
#. `Python Project Structure`_
#. `Documentation matters, please don't skip, start now`_

..  _Install Python: python_best_practices/install_python.html
..  _Install Pycharm: python_best_practices/install_Pycharm.html
..  _Python Project Structure: python_best_practices/project_structure.html
..  _Documentation matters, please don't skip, start now: python_best_practices/project_documentation_matters.html

########################################################
Sphinx Supports Themes, see these Docs with Them
########################################################

One feature I like with the Sphinx engine is the ability to use different themes.  As part of this project I've
generated a number of different themes you can check out.

* `py_guide/themes/agogo`_
* `py_guide/themes/alabaster`_
* `py_guide/themes/basicstrap`_
* `py_guide/themes/bizstyle`_
* `py_guide/themes/classlic`_
* `py_guide/themes/gopher`_
* `py_guide/themes/haiku`_
* `py_guide/themes/nature`_
* `py_guide/themes/scrolls`_
* `py_guide/themes/sphinx_rtd_theme`_
* `py_guide/themes/sphinxdoc`_
* `py_guide/themes/traditional`_

..  _py_guide/themes/agogo: https://shawnjburke.github.io/py_guide/themes/agogo
..  _py_guide/themes/alabaster: https://shawnjburke.github.io/py_guide/themes/alabaster
..  _py_guide/themes/basicstrap: https://shawnjburke.github.io/py_guide/themes/basicstrap
..  _py_guide/themes/bizstyle: https://shawnjburke.github.io/py_guide/themes/bizstyle
..  _py_guide/themes/classlic: https://shawnjburke.github.io/py_guide/themes/classlic
..  _py_guide/themes/gopher: https://shawnjburke.github.io/py_guide/themes/gopher
..  _py_guide/themes/haiku: https://shawnjburke.github.io/py_guide/themes/haiku
..  _py_guide/themes/nature: https://shawnjburke.github.io/py_guide/themes/nature
..  _py_guide/themes/scrolls: https://shawnjburke.github.io/py_guide/themes/scrolls
..  _py_guide/themes/sphinx_rtd_theme: https://shawnjburke.github.io/py_guide/themes/sphinx_rtd_theme
..  _py_guide/themes/sphinxdoc: https://shawnjburke.github.io/py_guide/themes/sphinxdoc
..  _py_guide/themes/traditional: https://shawnjburke.github.io/py_guide/themes/traditional

##################
    THANK YOUs !!
##################

********
Family
********
My wife Stacy.
My kids, Joe, Sam, and Maggie.

*******************************
Fellow Passionate Python People
*******************************
Sphinx theme author `Tell-K`_

* sphinxjp.themes.basicstrap
* sphinxjp.themes.revealjs

..  _Tell-K: https://github.com/tell-k/

The Python Project Template from `Chris Warrick`_

..  _Chris Warrick: https://chriswarrick.com/blog/2014/09/15/python-apps-the-right-way-entry_points-and-scripts/

The `Hitchhiker's guide to Packaging`_ team

.. _Hitchhiker's guide to Packaging: http://the-hitchhikers-guide-to-packaging.readthedocs.io

Websites I referenced for inspiration

* https://codepen.io/patrickhlauke/pen/azbYWZ
* https://pythonhosted.org/sphinxjp.themes.basicstrap/index.html
* https://github.com/rtfd/sphinx_rtd_theme/
* https://chriswarrick.com/blog/2014/09/15/python-apps-the-right-way-entry_points-and-scripts/
* http://the-hitchhikers-guide-to-packaging.readthedocs.io
* http://python-packaging.readthedocs.io/en/latest/minimal.html
* https://www.geeksforgeeks.org/difference-various-implementations-python/
* https://stackoverflow.com/questions/50585246/pip-install-creates-only-the-dist-info-not-the-package
* https://packaging.python.org/discussions/wheel-vs-egg/
* https://github.com/pypa/pip/issues/5243#issuecomment-381513000
* https://www.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds
* https://packaging.python.org/guides/single-sourcing-package-version/

Table of Contents
==================

..  toctree::
    :maxdepth: 9
    :caption: Contents:

    code/modules
    python_best_practices/install_python
    python_best_practices/install_pycharm
    python_best_practices/project_structure
    python_best_practices/project_documentation_code
    python_best_practices/project_documentation_matters
    python_best_practices/project_setup
    python_best_practices/project_logging
    python_best_practices/index
    reStructuredText/reStructuredText-CheatSheet
    reStructuredText/reStructuredText-style-sample
    python_package_index
    readme
    tips

..  toctree::
    :hidden:

    rants/index

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

.. rubric:: Footnotes
.. [#f1] Instead of humble some might say overly opinionated pain in the ass always trying to be funny
