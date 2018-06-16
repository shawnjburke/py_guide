==================================
Best Practice for __main__ method
==================================

#############
Console Apps
#############
How you startup will vary based on the interface.  The following are for console applications.

********************
Parse Arguments
********************
Python provides an arguments parser; use it.  Let a user know how this thing is supposed to work.  Even if it's
supposed to just start up and run, give it help.  A smart user will call your module with --help first to see what
it does.  Encourage that behavior.

#################
Web Applications
#################
In the future, tips for this type of user interface.  Perhaps as simple as use django which seems popular in the space.
