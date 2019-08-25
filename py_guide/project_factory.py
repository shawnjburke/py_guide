"""This file will create an instance of a new project with default settings"""
import os
import errno
from py_guide import log_4_trees as logging


class PyProject(object):
    def __init__(self, logger=None, project_name="python_project"):
        self._project_name = project_name
        self.log = logger

    def find_project_base_directory(self):
        # Do they use PyCharm?
        project_dir = r"{0}\{1}".format(os.path.expanduser("~"), "PycharmProjects")
        if os.path.exists(project_dir):
            self._project_directory = project_dir
        else:
            project_dir = r"{0}".format(os.path.expanduser("~"))
            self._project_directory = project_dir

        # We could also find a path relative to this file
        # directory_file = os.path.dirname(__file__)
        # Relative to this file could be the py_guide root
        # py_guide_root = os.path.join(directory_file, "..")

    def create_project_directories(self, project_name):
        directory = os.path.join(self.find_project_base_directory(), project_name)
        self.make_directory(directory)
        project_name_root = directory
        # documentation html directory; the has been generated end result
        directory = os.path.join(project_name_root, "docs")
        self.make_directory(directory)
        # documentation source directory, for the projects documentation
        directory = os.path.join(project_name_root, "docs_source")
        self.make_directory(directory)
        # documentation source directory, for the code documentation
        directory = os.path.join(project_name_root, "docs_source", "code")
        self.make_directory(directory)
        # source code directory [should reference use same name PEP here]
        directory = os.path.join(project_name_root, project_name)
        self.make_directory(directory)
        # virtual environment
        directory = os.path.join(project_name_root, "venv")
        self.make_directory(directory)

    def create(self):
        """Create a template project on disck from the information in the object    """
        try:
            directory = r"{0}\{1}".format(self.project_directory, self.project_name)
            os.mkdir(directory)
            os.mkdir(r"{0}\build").format(directory)
            os.mkdir(r"{0}\dist").format(directory)
            os.mkdir(r"{0}\docs").format(directory)
            os.mkdir(r"{0}\docs_source").format(directory)
            os.mkdir(r"{0}\{1}").format(directory, self.project_name)

        except OSError as e:
            self.log.error(os.strerror(e.errno))

            raise e

    @property
    def project_name(self):
        return self._project_name

    @project_name.setter
    def project_name(self, value):
        self._project_name = value

    @property
    def project_directory(self):
        return self._project_directory

    @project_directory.setter
    def project_directory(self, value):
        self._project_directory = value

    @property
    def project_absolute_path(self):
        """The abspath() of this file.  The absolute path will be the full file on path on disk for the operating
        system you are on."""
        return os.path.abspath(os.path.join(self.project_directory, self.project_name))

    @property
    def log(self):
        return self._log

    @log.setter
    def log(self, value):
        if value is None:
            self._log = logging.LoggerOfTrees()
        else:
            self._log = value
