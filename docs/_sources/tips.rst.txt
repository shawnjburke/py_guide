=====================
Tips and Tricks
=====================

Useful things while building this project.

########################
Listing Packages
########################
Using pip

pip list

pip show -f [package name]

From your code

..  code-block:: python

    import pkg_resources

    # https://github.com/pypa/pip/issues/5243#issuecomment-381513000
    dists = [d for d in pkg_resources.working_set]
    # Filter out distributions you don't care about and use.

###################
Project Packaging
###################

While testing my package on test.pypi.org I couldn't get my readme file to render as reStructuredText.  Turns out it
only supports core RST, not extensions.  To find this out you can use twine to check the project before uploading.
Remember that twine is checking the distribution files; if you changed   the source to fix a problem don't forget to
rebuild the distribution.

.. code-block:: python

    C:\py_guide> venv\scripts\python.exe -m twine check dist/sjb.browserdriver-2019.4.28-py2-none-any.whl
    Checking distribution dist/sjb.browserdriver-2019.4.28-py2-none-any.whl: Passed

If you want to programatically get the version of a *built* distribution the following [#version]_ is useful.  Please realize this
version may be different than what is in setup.py, if you have updated the value there, but not built the package yet.

.. code-block:: python

    import pkg_resources

    try:
        __version__ = pkg_resources.get_distribution('py_guide').version
    except Exception:
        __version__ = 'unknown'

.. rubric:: Footnotes

.. [#version] Found at https://github.com/pypa/setuptools/blob/master/setuptools/version.py via
              https://packaging.python.org/guides/single-sourcing-package-version/
