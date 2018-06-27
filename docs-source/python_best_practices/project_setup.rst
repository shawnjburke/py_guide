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

    from setuptools import setup

    setup(name='sjb.py_guide',
          version='0.1.0',
          packages=['py_guide'],
          entry_points={
              'console_scripts': [ 'py_guide = py_guide.__main__:main' ]
            },
          )

#######################
Python Wheels
#######################

I found it a bit difficult to navigate the waters of Python installation packages when arrived to the scene.  It appears
to be a side effect of Python having been around for so long, and having various lifetimes as more ofa script engine
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
