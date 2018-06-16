# http://go.chriswarrick.com/entry_points

from setuptools import setup

setup(name='py_guide',
      version='0.1.0',
      packages=['py_guide'],
      entry_points={
          'console_scripts': [ 'py_guide = py_guide.__main__:main' ]
        },
      )
