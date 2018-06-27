import menu


class ConsoleMenu:
    def __init__(self, cmdline_argument_parser):
        self.cmdline_parser = cmdline_argument_parser

        self.menu_main = menu.Menu()
        title = """
******************************************
    Python Guide for Practicing Wizards
*******************************************
        """
        self.menu_main.title = title
        self.menu_main.set_options([
                                    ("Generate new project", self.new_project_generator),
                                    ("py_guide help", self.show_help),
                                    ("Exit", self.close_menu)
                                   ])

    def new_project_generator(self):
        """Collects some information, then generates a project using the best pactices of this guide."""
        print("To be implemented")

    def show_menu(self):
        self.menu_main.open()

    def close_menu(self):
        self.menu_main.close()

    def show_help(self):
        self.cmdline_parser.print_help()
        self.pause()

    @staticmethod
    def pause():
        print('\n')
        input("Press enter key to continue...")
