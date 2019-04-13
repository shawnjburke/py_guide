==========================================
Use setup.py From the Start
==========================================

As I've said before scalability of teams is more important to me than, for instance, language perfection, because
there will always be a new language, a new pattern, and another code changing paradigm. Using ``setup.py`` is along
those lines.  I do it because thinking like your a production application, used by others, is easier to do from the
start, than backport later.  That's an opinion, I get it, that's why I wrote my own public guide.

####################
setup.py
####################

.. code-block:: Python

    from setuptools import setup, find_packages

    setup(author='Shawn J Burke',
          author_email='pypi.python@teamburke.com',
          description='Python Project & Coding Standards for Practicing Wizards',
          entry_points={
              'console_scripts': ['py_guide = py_guide.__main__:main']
            },
          license='GNU GENERAL PUBLIC LICENSE',
          # newline separates Description: header in PKG-INFO from readme content
          long_description='\n' + open('README.rst').read(),
          name='sjb.py_guide',
          packages=find_packages("py_guide"),
          project_urls={
            "Bug Tracker": "https://github.com/shawnjburke/py_guide/issues/",
            "Documentation": "https://shawnjburke.github.io/py_guide/",
            "Source Code": "https://github.com/shawnjburke/py_guide/",
          },
          url="https://github.com/shawnjburke/py_guide",
          version='2019.4.6',
          )

#######################
Version Numbering
#######################
How to give your application a version number can be a topic of some debate.   When creating them I live by

* Marketing will always call it something else.  Don't tie the code version to what people refer to it as.
* Do pick something.  Most any scheme is better than nothing.

Ultimately I've become a fan of a school of thought that version numbers can be based on a date.  There's something
about the date ``2019.4.10`` that human beings relate to, over incremental numbers ``1.0``, when considering the
broad skill of technical, business, and nerds that may be involved in an application.  I also think it works well
for patches ``2019.4.11``.  You don't have to decide what it means to be a major.minor syntax,
``1.1`` versus ``1.0.1`` type of number, and anyone can figure it out.  If you need to be granular the you
add the time, ``2019.4.10.2306``.  You could even add a tag if necessary, ``2019.4.10.dev``. As seen, this works
well in a development environments with lots of builds, you just add the time (even more precision), tags, etc. that
are needed ``2019.4.10.dev`` or ``2019.4.10.2306.21.dev``.

#######################
Python Wheels
#######################

I found it a bit difficult to navigate the waters of Python installation packages when arrived to the scene.  It appears
to be a side effect of Python having been around for so long, and having various lifetimes as more of a script engine
(as implemented), then to more of a structured language.  Over time, things change (`wheel vs egg`_).  There appeared
to be version called the `egg`_ which is now deprecated in lieu of the `Python Wheel`_ and brought to us via `PEP 0427`_

There's even a site tracking the `egg to wheel`_ conversion.

..  _Python Wheel: https://pypi.org/project/wheel/
..  _egg: http://setuptools.readthedocs.io/en/latest/formats.html
..  _wheel vs egg: https://packaging.python.org/discussions/wheel-vs-egg/
..  _egg to wheel: https://pythonwheels.com/
..  _PEP 0427: https://www.python.org/dev/peps/pep-0427/#abstract

..  admonition:: TODO:

    I think a little more guidance will be need here, at a later date.

########################
pypi Package Management
########################
