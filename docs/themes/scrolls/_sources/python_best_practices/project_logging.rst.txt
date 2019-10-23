===============================================
Great Software has Great Logging
===============================================

I wouldn't have cared about logging when I first started developing.  My love of logging comes from years of having to
support production systems.  Sometimes those systems are decades old without anyone on the team having been a part of
their creation.  Many times the logging left by others has saved me.  Great Software, has Great Logging [#f1]_.

From `The Office Python Documentation`_ I thought the following was a good summary of how logging works:

    * Loggers expose the interface that application code directly uses.
    * Handlers send the log records (created by loggers) to the appropriate destination.
    * Filters provide a finer grained facility for determining which log records to output.
    * Formatters specify the layout of log records in the final output.

..  _The Office Python Documentation: https://docs.python.org/3.7/library/logging.html?highlight=logging

########################
Python Logging
########################

One of the great things about Python are all the packages supporting standard functionality in code.  One of those
packages, a part of the Python core, is the logging module.  Use it.

******************
Inherit loggers
******************

Python loggers can be chained together.  Therefore, if I don't have any better plan, I start my application by grabbing
the top level logger and hooking into it.  Usage of environmental definition ``__name__`` will allow for this.

..  code-block:: Python

    # Get the top level application logger
    log = logging.getLogger(__name__)

Once the top level "UI" has the ``__name__`` logger, each child logger, should attach to this main logger.  Therefore
in child class and code, the usage of environmental definition ``__main__``

..  code-block:: Python

    log = logging.getLogger("__main__")


************************
Write to Rotating Files
************************

If you don't have a better plan then write your logs to a rotating file..

..  code-block:: Python

    # Setup a file handler to write all information
    # Are we running from within PyCharm or starting from command line at the root directory?
    if os.path.exists("{0}\log".format(os.getcwd())):
        # 'C:\\dev\\QA\\trunk\\qa_tools\\qa_tools\\deployment_magic'
        file_path = r"{0}\log{1}".format(os.getcwd(), '\\')
    else:
        # c:\dev\QA\trunk\qa_tools
        file_path = r"{0}\qa_tools\deployment_magic\log{1}".format(os.getcwd(), '\\')

    file_log = logging.handlers.TimedRotatingFileHandler(filename="{0}\deployment_console.log".format(file_path),
                                                         when="D", interval=1, backupCount=30)
    file_log = logging.FileHandler(filename="{0}\deployment_console.log".format(file_path))
    file_log.setFormatter(logging.Formatter(fmt="%(asctime)s | %(levelname)s | %(message)s"))
    file_log.setLevel(logging.DEBUG)
    log.addHandler(file_log)

***************************
Don't print(); stdout
***************************

When you start in Python it is common to use the print() method (or statement in 2.7) in order to put information to
the "screen".  I will advocate for just using a logger and then attaching a certain amount of those logs to stdout
as what people see on the "screen".

..  warning::

    Understand that the redirection to stdout only needs to occur in classes that are top level and gui facing

..  code-block:: Python

    # Using logging to populate standard output with info level log entries
    stdout_log = logging.StreamHandler(sys.stdout)
    stdout_log.setFormatter(logging.Formatter(fmt=""))
    stdout_log.setLevel(logging.INFO)

    log.addHandler(stdout_log)
    # Important to set overall logger to catch all statements which it can then route to handlers
    log.setLevel(logging.DEBUG)

..  [#f1] While I doubt he was the first, I think I owe a guy I worked with named
    Brian Lucas for being the one to get "Great Software has Great Logging" stuck
    in my brain