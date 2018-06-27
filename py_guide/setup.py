# Original guidance from http://go.chriswarrick.com/entry_points
# Also thanks to http://the-hitchhikers-guide-to-packaging.readthedocs.io/en/latest/creation.html

from setuptools import setup

setup(author='Shawn J Burke',
      author_email='shawn.burke@teamburke.com',
      description='Python Project & Coding Standards for Practicing Wizards',
      entry_points={
          'console_scripts': ['py_guide = py_guide.__main__:main']
        },
      name='sjb.py_guide',
      license='GNU GENERAL PUBLIC LICENSE',
      long_description=open('README.rst').read(),
      packages=['py_guide'],
      version='0.1.0',
      )
