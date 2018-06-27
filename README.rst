=====================
FNG's Guide to Python
=====================

########################
Not bad Python, not bad
########################
I learned to code in a Windows world.  Perhaps that makes me old.  Regardless, I grew up with camelCase and PascalCase
in my code as is traditional Microsoft (M$ as many would put it).  There was a time when you never would have convinced
me I would come to prefer snake_case as is common to Python.  I have.  In fact I'm quite enamored with you Python. You
are quick with the script, or agile with the program structure.  You take pride in what makes a professional coder,
appreciation for commenting, code read-ability, and syntactical grace

.. code-block::python
    (name_parameters="are cool", use_them="yes", love_them="yes", defaulting_is_powerful=True)

I guess that makes this my ode to Python.

########################
Purpose of this Project
########################

This project is intended to be a guide on getting started with Python.  It's intended to establish a best
practice structure that can be used as a beginning state for a python project.  Stepping through all the steps
should yield a new Python project, using a set of best practices and coding standards, which can apply across all
types of Python projects.

The docs are hosted with gitHub Pages, with html in the docs/ folder, powered by reStructured text markup in the
data-source folder.  You can get to the root at https://shawnjburke.github.io/py-guide/.

Best practice steps are organized as follows:

* Step 1 - `Install Python`_
* Step 2 - `Install PyCharm`_
* Step 3 - `Python Project Structure`_
* Step 4 - `Documentation Matters`_
* Step 5 - `setup.py`_ for success early in your project

..  _Install Python: https://shawnjburke.github.io/py-guide/python_best_practices/install_python.html
..  _Install Pycharm: https://shawnjburke.github.io/py-guide/python_best_practices/install_Pycharm.html
..  _Python Project Structure: https://shawnjburke.github.io/py-guide/python_best_practices/project_structure.html
..  _Documentation Matters: https://shawnjburke.github.io/py-guide/python_best_practices/project_documentation_matters.html
..  _setup.py: https://shawnjburke.github.io/py-guide/python_best_practices/project_setup.html

############################
Installation
############################
At this time you can't install this module.  At a later version the installation will provide an interface to create
the recommended project structure, documented here.

..  code-block:: Python

    >>> some_future_time --todo=create_installer

############################
Sphinx Supports Themes
############################

One feature I like with the Sphinx engine is the ability to use different themes.  As part of this project I've
generated a number of different themes you can check out.

* `py-guide/themes/agogo`_
* `py-guide/themes/alabaster`_
* https://shawnjburke.github.io/py-guide/themes/basicstrap
* https://shawnjburke.github.io/py-guide/themes/bizstyle
* https://shawnjburke.github.io/py-guide/themes/classlic
* https://shawnjburke.github.io/py-guide/themes/gopher
* https://shawnjburke.github.io/py-guide/themes/haiku
* https://shawnjburke.github.io/py-guide/themes/nature
* https://shawnjburke.github.io/py-guide/themes/revealjs
* https://shawnjburke.github.io/py-guide/themes/scrolls
* https://shawnjburke.github.io/py-guide/themes/sphinx_rtd_theme
* https://shawnjburke.github.io/py-guide/themes/sphinxdoc
* https://shawnjburke.github.io/py-guide/themes/traditional



..  _py-guide/themes/agogo: themes/agogo
..  _py-guide/themes/alabaster: themes/alabaster

##################################################
What makes this different from other frameworks?
##################################################

It's my opinion.
It attempts to not be specific to a type of project.  Web projects or console apps can benefit from this.
It doesn't attempt to be an encompassing framework.  Just a starting point.
This is not a web framework like django.
There is no team behind this.  Just me.

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