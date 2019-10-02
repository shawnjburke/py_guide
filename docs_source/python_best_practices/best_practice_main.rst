======================================
Routing Paradigm for __main__()
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

Python provides an arguments parser, ``argparse``; use it.  Let a user know how this thing is supposed to work.
Even if it's supposed to just start up and run, give it help.  A smart user will call your module with ``--help``
first to see what it does.  Encourage that behavior.

Route Arguments
===============

I think about a console application, parsing arguments, like routing things at a web server or firewall.  Therefore
I normally take my parsed arguments and toss to a method which routes them.  The mthod, in turn, normaly tosses them
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
