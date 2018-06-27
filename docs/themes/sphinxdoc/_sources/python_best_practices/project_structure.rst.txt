=================================
Python Project Structure
=================================

When you've written code for a long time, and managed teams, the specifics of languages and "what's best" ceases
to have as much meaning.  There will always be a new language, a new pattern, and another code changing paradigm.  What
I'm more concerned with are the fundamentals of code that build cohesive, scalable teams.  As such coding standards are
important to me.  Part of a good coding standard is a good project structure, based on good patterns, and the specific
implementation needs of the language; in this case, Python.

################################
Directory Structure
################################

Throughout this guide we'll build a program structure for best practices that will end up like this

.. code-block:: text

    project_name/
    ├── docs/
    │   ├── .doctrees/
    │   ├── _sources/
    │   ├── _static/
    │   ├── .buildinfo
    │   ├── .nojekyll
    │   ├── .genindex.html
    │   ├── index.html
    │   ├── search.html
    │   └── searchindex.js
    ├── docs-source/
    │   ├── _build/
    │   ├── _static/
    │   ├── _templates/
    │   ├── conf.py
    │   ├── index.rst
    │   ├── make.bat
    │   ├── Makefile
    │   └── readme.rst
    ├── project_name/
    │   ├── tests/
    │   ├── __init__.py
    │   ├── __main__.py
    |   └── setup.py
    ├── venv/
    ├── LICENSE
    ├── README.rst
    └── requirements.txt

..  admonition:: Sphinx users

    Sphinx users will note that this is not a typical structure for documentation.  While putting this guide together I
    found GitHub had a GitHub Pages feature that would display documentation based on html in a ``docs\`` on the master
    branch.  With the popularity of that system, I figured it make sense to support it.

..  admonition:: TODO:

    Need to make sure this structure works fine on readthedocs.org.  Since the config file for Sphinx is flexible,
    and the conf-generator provides options to change source and build structure, I expect it wll work.  However,
    I'm remiss in not making sure a Python guide works well with readthedocs.org.

    I will note that at time of writing, GitHub Pages were not configurable in terms of the directory used on the
    master branch.


################################
Choose a project name
################################

* lower case
* project_name with underscore over projectname
* because of the pep choose a single name, because we are following google style guide which state
    package_name lower case + PEP single name = project_name is lower case

################################
Create a new project
################################
I am speaking of creating a new project in the conext of using PyCharm.

* of type Python
* 3.x interpreter

*****************************
Use a virtual environment
*****************************

When I first started with python I did not use virtual environments.  I was wrong.  I am sorry.
Virtual Environments, installed to our ``venv`` directory, are the the python executable, and
all related packages, for this project.  While not absolutely required it is a best practice
for Python projects.  If you are to be Pythonic, you should use them, as tools, like creating
requirements.txt file for your project with pip, work well in this structure

******************************************
Source code in project_name\\project_name
******************************************

Add a directory to your project the same name as the project

* trust me.  Yes, I know we now have the structure, project_name\\project_name.  It will be okay.
* It will be okay.

*****************************
README.rst
*****************************

Add your first file README.rst

    * PyCharm wants to know what it is.  It's just a Text File
    * UPPERCASE no extension
    * project_name\README.rst [#footnote-01]_
    * A project should have a document to acclimate a new user, and that's readme
    * Using the .rst extension will all github to format the contents on the source page

*****************************
__init__.py
*****************************

In PyCharm, add a new Python File to your project

* give it the name __init__.py
* That's two underscores before init
* Adding this file makes your module project_name a package
* All packages are modules, modules are not all packages

.. code-block:: text

    project_name/
    ├── project_name/
    │   ├── __init__.py
    ├── README.rst

Congratulations you've created a package.  We'll explain what that is later.  After we get to modules.

* Adding __init__.py file makes your module project_name a package
* All packages are modules, modules are not all packages

There's also a command in PyCharm to create a Python package.  It creates the directory and automatically adds
the ``__init.py__`` file.  But we wanted you to get the experience of doing it for your self.

Add another new Python File to your project

* give it th name __main__.py
* Let's use main.py to give our project some output.  What will it do if you run py_guide?
* Let's just make it say something.  Add the following code into the file __main__.py

:example: print("Get to the chopper!")

##########################
PyCharm Run Configuration
##########################

When you build software like a pro, you have an automated build process.  At the local IDE level that often can involve
using a Run Configuration utility, to use the term PyCharm has adopted.

* Go to the Run menu and choose the Edit Configuration option
* Click the + symbol (to _add_ a new configuration)
* Choose the option for Python.  We want to _run_ a python file
* Change the name from Unnamed to the name of your project.  in this case, py_guide
* On the script line choose the ... browse button on the right.  Choose __main__.py
* Click OK
* In the upper right of the PyCharm IDE ou should see a drop_down with text py_guide and a play button
* Click the play button.  The configuration you just made runs.
* If you've done this successfully then a Python console will appear in the bottom of PyCharm
* It will print out the path to what it just started
* It will execute the __main__.py file causing it to print the next line of the console
* Get to the chopper!
* Followed by a blank line.  After that a summary of the process run and error number (0 is no error)
* Process finished with exit code 0

..  rubric:: Footnotes
..  [#footnote-01] I would have previously demanded, in honor of those mighty Unix warriors who came before us,
    that README should be capitalized with no extension.  I'd probably make a joke about paying respect to your
    elders.  Practically though, I have found an extension useful in github, as it presents that text on the
    landing page for a topic.  Therefore the page will be README.rst.  With some magic it will also be brought
    into the rest of the documentation structure.