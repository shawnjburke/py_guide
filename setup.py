# Original guidance from http://go.chriswarrick.com/entry_points
# Also thanks to http://the-hitchhikers-guide-to-packaging.readthedocs.io/en/latest/creation.html
# https://setuptools.readthedocs.io/en/latest/setuptools.html

from backports import configparser2
from datetime import datetime
from packaging import version
from setuptools import setup, find_packages


def find_and_list_packages():
    """This wrapper adds the display of packages found by setuptools.find_packages() during the build process.  This
    is useful when troubleshooting issues, such as when creating package_data entries for setup.py
    """
    packages = find_packages()

    print("Packages found during build:\r\n\t{0}".format(packages))

    return packages


def version_builder(write_new_version=True, ini_file=None):
    """This method determines the next version number.  The assumption is the version numbering scheme is relying on
    a timestamp based version, in contrast to Major.Minor.Revision type of structure.  THAT IS A NON-STANDARD SCHEME."""
    now = datetime.now()

    # read the Semantic Version.  To update it, go changein the file
    semantic_version = ini_file["distribution"]["version"]
    # Build an ISO timestamp of when the build was done
    military_time = int(str(now.hour) + "{:02d}".format(now.minute))
    build_timestamp = "{0}.{1}.{2}.{3}".format(str(now.year), str(now.month), str(now.day), str(military_time))
    build_number = int(ini_file["distribution"]["build_number"])
    build_number += 1

    # Update the some version information in the cfg file
    if write_new_version:
        # Timestamp and build number will increment each time, independent of version updating
        ini_file["distribution"]["build_number"] = str(build_number)
        ini_file["distribution"]["build_timestamp"] = build_timestamp

        # Write the file to disk using all the values of the object in memory
        with open('project.cfg', 'w') as ini_disk_file:
            ini_file.write(ini_disk_file)

    return semantic_version


if __name__ == "__main__":
    ini_file_name = "project.cfg"
    ini_file = configparser2.ConfigParser()
    ini_file.read(ini_file_name)

    setup(author=ini_file["project"]["author"],
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
          install_requires=[
              'configparser2==4.0.0',
              'Menu==3.1.0',
              'Jinja2==2.11.3',
              'requests',
              'twine==1.13.0'
          ],
          license='GNU GENERAL PUBLIC LICENSE',
          # newline separates Description: header in PKG-INFO from readme content
          long_description='\n' + open('README.rst').read(),
          long_description_content_type='text/x-rst',
          # setuptools will change an underscore (_) to a dash (-), in name, so doing it here explicitly
          # PEP 8: Python packages should also have short, all-lowercase names, although the use of
          #        underscores is discouraged.
          name='sjb.pyguide',
          packages=find_and_list_packages(),
          # Package data details: https://setuptools.readthedocs.io/en/latest/setuptools.html#basic-use
          # Include any license files, batch scripts, any default version of files, reStructured Text files
          #   and other text files like requirements.txt
          package_data={'py_guide.py_template': ['LICENSE-*', '*.bat', '*.default', '*.rst',
                                                 '*.txt', '.gitignore', 'project.cfg',
                                                 # Only py files in the direct package get included.  .idea and
                                                 # docs_source are not packages because they don'thave __init__
                                                 # files.  Have to include their files specifically.  We could
                                                 # have added init files, but this route seemed more accurate.
                                                 '.idea/runConfigurations/*.xml',
                                                 'docs_source/*.py', 'docs_source/*.rst'],
                        },
          project_urls={
              "Bug Tracker": "https://github.com/shawnjburke/py_guide/issues/",
              "Documentation": "https://shawnjburke.github.io/py_guide/",
              "Source Code": "https://github.com/shawnjburke/py_guide/",
          },
          url="https://github.com/shawnjburke/py_guide",
          version=version_builder(write_new_version=True, ini_file=ini_file),
          )
