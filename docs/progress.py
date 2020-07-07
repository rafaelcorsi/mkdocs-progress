from markdown import Extension
from markdown.inlinepatterns import InlineProcessor, dequote
import xml.etree.ElementTree as etree
from markdown.extensions.attr_list import AttrListTreeprocessor
from . import util

class ProgressExtension(Extension):
    def __init__(self, *args, **kwargs):
        self.a = 0;

    def extendMarkdown(self, md):
        """Add the progress bar pattern handler."""

        util.escape_chars(md, ['='])
        progress = ProgressBarPattern(RE_PROGRESS, md)
        progress.config = self.getConfigs()
        md.inlinePatterns.register(progress, "progress-bar", 179)

def makeExtension(*args, **kwargs):
    """Return extension."""

    return ProgressExtension(*args, **kwargs)
