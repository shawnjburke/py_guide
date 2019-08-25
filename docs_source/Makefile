# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SPHINXPROJ    = PythonGuideforPracticingWizards
SOURCEDIR     = .
BUILDDIR      = _build

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

code_rst_generate:
    # https://www.sphinx-doc.org/en/master/man/sphinx-apidoc.html
    # Use the second parameter (if passed, can be blank) to all sphinx-apidoc options like -f[orce]
    SPHINXBUILD = sphinx-apidoc $(1) -f -o .\code ..
    @$(SPHINXBUILD)

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
    # per https://stackoverflow.com/questions/192249/how-do-i-parse-command-line-arguments-in-bash
    #    the $@ syntax is everything else on the command line (leftovers)
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
