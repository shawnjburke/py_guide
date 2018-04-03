**************************
FNG's Guide to Python 3
**************************

There's no shame in Windows
---------------------------
I get that all the cool kids use a MAC these days.  However I'm old.  In the early days I needed a platform with a
interface, where I could think for myself on my own hardware, and that was Windows.  This guide will point out things
specific to windows as all the others focus on Linux.  Linux is cool.  I'm running it in my Amazon cloud too. Checking
out their latest UI distros with ElementaryOS. Nothing but respect; just not using every day in my windows based
consulting.

Death to the damn MAC square keys that ruined keyboards.

#backSlashAboveEnterFoEva

Install Python
---------------

Install Python 3.x

* from Python site
* we're going to move toward the future and that's Python 3
* Note this list uses asterisks like bullets.  On purpose.
* Note the empty space between the list title/header and the first bullet.  On purpose.

Install Pycharm
-----------------

Let's Build a Python Project
-----------------------------
Choose a project name

* lower case
* project_name with underscore over projectname
* because of the pep choose a single name, because we are following google style guide which state
    package_name lower case + PEP single name = project_name is lower case

Create a new project in PyCharm

* of type Python
* 3.x interpreter

Add your first file README

* PyCharm wants to know what it is.  It's just a Text File
* UPPERCASE no extension
** I said respect for Linux.  By Transitive Property that's respect for Unix
** Respect your elders.  They didn't use extensions.
** Respect your elders. It was important so they capitalized telling you to README
* Not README.txt
** You just read why
* Not README.rst
** I'm a purist. When you do know what a .rst file is that will live with all the other .rst files
** We'll get a README.rst and with respect, it wll in clude the contents of README in the root

Add a directory to your project the same name as the project

* trust me.  Yes.  We know have the structure project, project\project.  It will be okay.
* It will be okay.

Add a new Python File to your project

* give it the name __init__.py
* That's two underscores before init
* Congratulations you've created a package.  We'll explain what that is later.  After we get to modules.
* There's also a command in PyCharm to create a Python package.  It creates the director and automatically adds the
    __init.py file.  But we wanted you to get the experience of doing it for your self.

Add another new Python File to your project

* give it th name __main__.py
* Let's use main.py to give our project some output.  What will it do if you run py_guide?
* Let's just make it say something.  Add the following code into the file __main__.py

:example: print("Get to the chopper!")

Setup a PyCharm configuration to run

* Go to the Run menu and choose the Edit Configuration option
* Click the + symbol (to _add_ a new configuration)
* Choose the option for Python.  We want to _run_ a _python file_
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
