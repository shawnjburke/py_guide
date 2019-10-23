======================================
Routing Pattern for __main__()
======================================

#############
Console Apps
#############

How you startup will vary based on the interface.  The following are for console applications.

***********************************
A Generic Workflow for __main__()
***********************************

Parse Arguments
===============

Python provides an arguments parser, ``argparse``, use it.  Let a user know how this thing
is supposed to work.  Even if it's supposed to just start up and run, give it help.
A smart user will call your module with ``--help`` first to see what it does.
**Encourage that behavior.**

.. code-block:: doscon

    c:\Python37>scripts\py_guide --help
    usage: py_guide [-h] [--show_menu] [--version]
                    [--list_of_strings list [list ...]]

    py_guide is a best practices module recommending a basic project structure for
    a teams python projects. Best Practices help teams scale. Starting with it
    before you scale the team is a good thing.

    optional arguments:
      -h, --help            show this help message and exit
      --show_menu           When this parameter is provided the flag is set to
                            true. When true a console menu will be shown.
      --version             When this parameter is provided the version
                            information will be displayed.
      --list_of_strings list [list ...]
                            The list parameter will collect, then echo a list of
                            strings. This demonstrates the + value of nargs when
                            using the parser.


Route Arguments
===============

I think about a console application, parsing arguments, like routing things at a web server or firewall.  Therefore
I normally take my parsed arguments and toss to a method which routes them.  The method, in turn, normally tosses them
to an action method for that route.

Action Arguments
================

I don't know why, action as a result of being routed to, seemed like a good set of terminology.  There's a million
ways to name things, this one was mine.  Therefore I create a function to handle the results of a route being called,
and taking action on that.

#################
Web Applications
#################

In the future, tips for this type of user interface.

API first with Flask and OpenAPI (swagger)?

Dare I bother suggesting user interface?  Is that the domain of angular?
