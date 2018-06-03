=============================
reStructuredText Cheat Sheet
=============================

Here are the different types of heading taken from the Sphinx documentation
http://www.sphinx-doc.org/en/stable/rest.html?highlight=heading

..  topic::
    from the Sphinx documentation

    Normally, there are no heading levels assigned to certain characters as the structure is determined from the
    succession of headings. However, this convention is used in Python’s Style Guide for documenting
    which you may follow:

    * # with overline, for parts
    * \* with overline, for chapters
    * =, for sections
    * -, for subsections
    * ^, for subsubsections
    * ", for paragraphs

When I read that I expected to be able to put all those on one page, and merrily went about my way doing so.  When I
did it created a runtime error.  Or at least I thought.  However, as I wrote this page, I found all playing together
in the following way


===============================
( = ) with over line, for Title
===============================
Single equal sign, under and over, the words for the Title.

..  code-block:: python

    ===============================
    ( = ) with over line, for Title
    ===============================


###############################
( # ) with over line, for parts
###############################
Known today as the hash, in the united states formerly the pound sign, the text surrounded above and below is for
parts.

..  code-block:: python

    ###############################
    ( # ) with over line, for parts
    ###############################

**********************************
( * ) with over line, for chapters
**********************************
The asterik, when used over and under the text, will create a chapter in reStructuredText markup.

..  code-block:: python

    **********************************
    ( * ) with over line, for chapters
    **********************************

(=) underline for Sections
==========================

(-) Sub-Sections
-----------------

(^) Sub-sub-sections
^^^^^^^^^^^^^^^^^^^^

(") Paragraphs
""""""""""""""


It appears to me, at least on my PyCharm, Python 3.6, Windows environment, that you can't put all the type of
sections on one page; a syntax error is thrown on Sphinx  compile.   That is in the `Sphinx Documentation`_ there
is a list of items, which don't all see to be able to be on one page at the same time



.. _Sphinx Documentation: http://www.sphinx-doc.org/en/stable/rest.html?highlight=heading

+-------------------------------------------------------------------+---------------------------+
| Headers Overline                                                  | Headers Underline         |
| (can be used on one page)                                         | (can be used on one page) |
+===================================================================+===========================+
| * Text boxed by = (equal sign) is level 1                         |                           |
| * Text boxed by # (hash|pound sign) is level 2                    | column 2                  |
| * Text boxed by * (asterisk) is level 3                           |                           |
+-------------------------------------------------------------------+---------------------------+
| body row 2                                                        | ...                       |
+-------------------------------------------------------------------+---------------------------+

Now what about HTML style headers?

h1. this is a title?

..  toctree::
    :maxdepth: 1
    :caption: Contents:

    reStructuredText-CheatSheet-HeadingsOverline
    reStructuredText-CheatSheet-HeadingsUnderline