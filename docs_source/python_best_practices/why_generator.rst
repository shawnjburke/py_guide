================================
Why Py Guide Generator?
================================

After many years of coding I have come to find that there are best practices
to delivering software; in any language or technology stack.  Further I have
found that almost inevitably these projects suffer from lack of

* Infrastructure to release the software between environments; from DEV to PROD
* Documentation; not only what the project does but what the code does, for those who have to maintain it
* Testing infrastructure; because, sorry, your code isn't as perfect as you think it is
* Adherence to language standard; this makes it easier to onboard team members as your software takes over the world
* A way to start the program that can provide simple help instructions
* A way to provide data on program start (arguments) and a standard mechanism to implement them

Finally, all of those things are discovered at the worst possible time.  Why not
just start your project from the beginning?  Well turns out that answer is easy; because
it's a Pain in the Ass to do this stuff when people are hounding you to turn out
code.  Therefore, as I have often been a leader, I decided I should take on the
ownership of making this easier, if I truly think it's important.  So I did. This
generator should make it much easier to get started with best practices because it
just sets it all up.  Further, it doesn't take any longer than it would have to
setup the virtual environment for your project.

Once your project is generated you can open it up and execute the bulid.  You can then
install that wheel file and it will immediately work, including entry point, help
text (with --help argument), and a simple console gui.

Once your project is generated you can write code.  When you document that code
correctly you an auto generate that documentation into your help file.

Once your project is generated, if you are using PyCharm, there will be a number
of run configurations automatically created to work with your new project.

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