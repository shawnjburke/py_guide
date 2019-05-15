# Original guidance from http://go.chriswarrick.com/entry_points
# Also thanks to http://the-hitchhikers-guide-to-packaging.readthedocs.io/en/latest/creation.html
# https://setuptools.readthedocs.io/en/latest/setuptools.html

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
      # setuptools will change an underscore (_) to a dash (-), in name, so doing it here explicitly
      # PEP 8: Python packages should also have short, all-lowercase names, although the use of
      #        underscores is discouraged.
      name='sjb.py-guide',
      packages=find_packages("py_guide"),
      project_urls={
        "Bug Tracker": "https://github.com/shawnjburke/py_guide/issues/",
        "Documentation": "https://shawnjburke.github.io/py_guide/",
        "Source Code": "https://github.com/shawnjburke/py_guide/",
      },
      url="https://github.com/shawnjburke/py_guide",
      version='2019.4.6',
      )
