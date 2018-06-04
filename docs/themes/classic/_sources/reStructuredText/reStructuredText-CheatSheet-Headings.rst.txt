=======================
Headings Cheat Sheet
=======================

Here are the different types of heading taken from the Sphinx documentation
http://www.sphinx-doc.org/en/stable/rest.html?highlight=heading

..  topic::
    from the Sphinx documentation

    Normally, there are no heading levels assigned to certain characters as the structure is determined from the
    succession of headings. However, this convention is used in Python’s Style Guide for documenting
    which you may follow:

    * # with overline, for parts (hash)
    * \* with overline, for chapters (asterisk)
    * = for sections (equal sign)
    * \- for subsections (dash)
    * ^ for subsubsections (carrot)
    * " for paragraphs (double quote)

When I read that I expected to be able to put all those on one page, and merrily went about my way doing so.  When I
did it created a runtime error.  Or at least I thought.  However, as I wrote this page, I found all playing together;
ah the joys of development.  Disirregardlessly [#foot-note-01]_ [, they play together as described below.
Make sure to look at things like the page Table of Contents which are impacted by these hierarchies.



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

( = ) underline for Sections
============================

..  code-block:: python

    (=) underline for Sections
    ==========================

( - ) Sub-Sections
-------------------

..  code-block:: python

    ( - ) Sub-Sections
    --------------------

( ^ ) Sub-sub-sections
^^^^^^^^^^^^^^^^^^^^^^^

..  code-block:: python

    ( ^ ) Sub-sub-sections
    ^^^^^^^^^^^^^^^^^^^^^^^

( " ) Paragraphs
"""""""""""""""""
..  code-block:: python

    ( " ) Paragraphs
    """""""""""""""""

.. _Sphinx Documentation: http://www.sphinx-doc.org/en/stable/rest.html?highlight=heading

..  rubric:: Foootnotes
..  [#foot-note-01] That one's for you Cody.  Everyone else can delete the word from the sentence and understand
    there's a good story if you get to meet Cory.  That one's for you too buddy.