import sys
import argparse

def main(args=None):
    """As a best practice, main() will be the entry point for this package.  The method
        should handle parsing arguments and display a usage help message if the package
        was not called as expected.

        TODO:

            Add standard arg parse and help output for this package.
    """
    parser = parser_build()
    # Grab arguments off command line, sys.argv[1:], and parse them
    args = parser.parse_args()

    if args is None:
        # If nothing was passed in, print the help usage
        parser.print_help()


    # Do argument parsing here (eg. with argparse) and anything else
    # you want your project to do.

    print("Get to the chopper!")

def parser_build():
    """This method builds the argument parser to handle values passed in from the command line.  Centralized in this
    method for readability.

    The Argument parser allows standard patterns for parsing.  For instance you do not have to program -h, or --help
    to explain how the command line is used.  The argument parser will build this from the arguments, and descriptions
    provided for those arguments, when building the parser object.
    """

    module_description = "py_guide is a best practices module recommending a basic project structure for a teams " \
                         "python projects.  Best Practices help teams scale.  Starting with it before you scale the " \
                         "team is a good thing."
    # Create an instance of a parser specific to this module
    parser = argparse.ArgumentParser(description=module_description)
    # Now tell the parser what arguments we expect
    argument_name = "list"
    # nargs is an optional parser argument.  If used it will allow a list of items to be associated with an action.
    #   For instance a list of zipcodes provide to a single argument, would be my example of how you can use nargs
    argument_actions = "+"  # nargs - https://docs.python.org/3/library/argparse.html#nargs
    argument_action = "append"  # action - https://docs.python.org/3/library/argparse.html#action
    argument_help = "The list parameter will collect, then echo a list of strings.  This demonstrates the + " \
                    "value of nargs when using the parser."
    parser.add_argument(argument_name,
                        metavar="list_of_strings", # When help is built, changes the display name
                        type=str,  # Allows the parser to treat the command line string, as another tpe, like int, float
                        nargs=argument_actions,
                        action=argument_action, # Treatment of argument. Here append string to list.
                        help=argument_help)

    return parser

if __name__ == "__main__":
    """The __name__ == \"__main__\" construct ensures this package is only executed when the py_guide module is 
    specifically called.  This is important when using Sphinx, when the module is imported or scanned 
    by the Sphinx engine.
    
    https://docs.python.org/3/library/__main__.html"""

    sys.exit(main())
