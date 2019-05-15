==========================================
Use setup.py from the Start
==========================================

As I've said before scalability of teams is more important to me than, for instance, language perfection, because
there will always be a new language, a new pattern, and another code changing paradigm. Using ``setup.py`` is along
those lines.  I do it because thinking like your a production application, used by others, is easier to do from the
start, than backport later.  That's an opinion, I get it, that's why I wrote my own public guide.

TL;DR for page
============================

* As you create your project, use setup.py.  Structure like a pro from the start.
* Test your distributions on the Test Version of PyPI; don't litter.
* I use a Calendar Version based approach to version numbers

setup.py
####################

.. code-block:: Python

    from setuptools import setup, find_packages

    setup(author='Shawn J Burke',
          author_email='pypi.python@teamburke.com',
          classifiers=[
              # Trove classifiers
              # Full list: https://pypi.python.org/pypi?%3Aaction=list_classifiers
              'Development Status :: 4 - Beta',
              'Intended Audience :: Developers',
              'License :: OSI Approved :: MIT License',
              'Natural Language :: English',
              'Operating System :: OS Independent',
              'Programming Language :: Python',
              'Programming Language :: Python :: 2.7',
              'Programming Language :: Python :: 3',
              'Programming Language :: Python :: 3.3',
              'Programming Language :: Python :: 3.4',
              'Programming Language :: Python :: 3.5',
              'Programming Language :: Python :: 3.6',
              # https://www.geeksforgeeks.org/difference-various-implementations-python/
              'Programming Language :: Python :: Implementation :: CPython',
              # Need to test to see if this will run on PyPy.  That'd be cool.
              # 'Programming Language :: Python :: Implementation :: PyPy',
              'Topic :: Software Development :: Quality Assurance',
              'Topic :: Software Development :: Testing'
            ],
          description='Python Project & Coding Standards for Practicing Wizards',
          entry_points={
              'console_scripts': ['py_guide = py_guide.__main__:main']
            },
          keywords="python standards best practice",
          license='MIT',
          # newline separates Description: header in PKG-INFO from readme content. Can't use extensions like seealso::
          long_description='\n' + open('README.rst').read(),
          long_description_content_type='text/x-rst',
          name='sjb.py_guide',
          packages=find_packages(),
          project_urls={
            "Bug Tracker": "https://github.com/shawnjburke/py_guide/issues/",
            "Documentation": "https://shawnjburke.github.io/py_guide/",
            "Source Code": "https://github.com/shawnjburke/py_guide/",
          },
          # test_suite="browser_driver.tests.browser_tests",
          url="https://github.com/shawnjburke/py_guide",
          version='2019.4.28',
          )

setup.py versus requirements.txt
**********************************

requirements.txt is used during the development phase.  For instance, I need Sphinx in the development phase
to build the documentation.

setup.py is used to created a distribution (in Windows terms, an installer).  It may not need all the components
needed in the development phase. For instance, my installed application does not build documentaiton, therefore
it does not need Sphinx.

.. tip::
    Packages in setup.py are normally in requirements.txt.
    Most packages in requirements.txt are needed in setup.py, but not always all.

.. list-table:: Examples of requirements.txt but setup.py
    :widths: 30, 50
    :header-rows: 1

    * - Package
      - Reason
    * - Spinx
      - Used for generating documentation, the installer would not do this,
        as it just build the generated documentation done as
        part of development
    * - unittest2
      - Used for testing the code, a development activity, there is no reason
        to require this in the setup distribution

Version Numbering
#######################

How to give your application a version number can be a topic of some debate.   When creating them I live by

* Marketing will always call it something else.  Don't tie the code version to what people refer to it as.
* Do pick something.  Most any scheme is better than nothing.

As I put these thoughts together I was remined there are some fundamentals in the debate, and existing standards

* `Semantic Versioning`_ - What most people are use to in a form like Major.Minor.Patch - 1.0.1
* `Calendar Versioning`_ - Some form of using the date, such as my IDE Pycharm, I am writing this with 2018.2.4
* `Zero Based Versioning`_ - The world's most important number is zero.  Don't skip it.
* `Explicit Versioning`_ - Add an additional value is used to indicate if this release breaks backwards compatibility

.. _Semantic Versioning: https://semver.org/
.. _Calendar Versioning: https://calver.org/
.. _Zero Based Versioning: https://0ver.org/
.. _Explicit Versioning: https://github.com/exadra37-versioning/explicit-versioning


Much of what I say is better summarized by Mahmoud Hashemi who authored the above sites, and a great summary article
with `Chrome vs FireFox Version Numbering`_.

.. _Chrome vs FireFox Version Numbering: https://sedimental.org/designing_a_version.html#case-study-chrome-vs-firefox

Ultimately I've become a fan of a school of thought that version numbers can be based on a date.  I now understand the
kewl kids would cal this CalVer. There's something about the date ``2019.4.10`` [#0pad]_ that human beings relate to,
over incremental numbers ``1.0``.  I also think it works well for patches ``2019.4.11.1610`` (adding military time).
I prefer it to avoid the debat of major.minor, or major.minor.revision syntax, ``1.1`` versus ``1.0.1`` type of number/
You could even add a tag if necessary, ``2019.4.10.dev``. As seen, this works well in a development environments
with lots of builds, you just add the time (even more precision), tags, etc. that are needed ``2019.4.10.dev``
or ``2019.4.10.2306.dev``.


There are also things with Semantic Versioning that people have gotten used to.  For instance your 1.0 version won't
be that good.   Reading _Chrome vs FireFox Version Numbering I agreed with the sentiment of not making 2.0 is the death
of your application.  Why?  Developers and Development teams are not all created equal.  While there is good reason
for people to make 1.0 jokes, there are many devs and teams that made a strong 1.0.  I get some sort of my mom telling
me not to judge a book by it's cover, when I think about these things.

Explicit Versioning was interesting to me for it's desire to identify a release that breaks backwards compatibility.
I will also give kudos to `Release.Breaking.Feature.Fix`_ terminology in an article written by `Sapioit`_.  This appears
to be the Chrome schema.  The idea of identifying a breaking update is especially important in larger corporate
environments.  In those cases where the amount of software to maintain is vast, knowing a release may break things
for your users (and cost the company $), is a valuable piece of information.

.. _Release.Breaking.Feature.Fix: https://medium.com/sapioit/why-having-3-numbers-in-the-version-name-is-bad-92fc1f6bc73c
.. _Sapioit: https://medium.com/@sapioit

Python Wheels
#######################

I found it a bit difficult to navigate the waters of Python installation packages when arrived to the scene.  It appears
to be a side effect of Python having been around for so long, and having various lifetimes as more of a script engine
(as implemented), then to more of a structured language.  Over time, things change (`wheel vs egg`_).  There appeared
to be version called the `egg`_ which is now deprecated in lieu of the `Python Wheel`_ and brought to us via `PEP 0427`_

There's even a site tracking the `egg to wheel`_ conversion.

As I worked through it the clear choice is wheel.  It's newer and includes distribution specific information that makes
it faster than compiling the egg at it's destination.

..  _Python Wheel: https://pypi.org/project/wheel/
..  _egg: http://setuptools.readthedocs.io/en/latest/formats.html
..  _wheel vs egg: https://packaging.python.org/discussions/wheel-vs-egg/
..  _egg to wheel: https://pythonwheels.com/
..  _PEP 0427: https://www.python.org/dev/peps/pep-0427/#abstract

pypi Package Management
########################

https://packaging.python.org/guides/making-a-pypi-friendly-readme/
https://packaging.python.org/tutorials/packaging-projects/
https://setuptools.readthedocs.io/en/latest/setuptools.html
https://packaging.python.org/discussions/install-requires-vs-requirements/
https://stackoverflow.com/questions/50585246/pip-install-creates-only-the-dist-info-not-the-package
https://pypi.org/classifiers/

.. rubric:: Footnotes
.. [#0pad] Python doesn't like the month zero padded, therefore, I don't zero pad the version at all
