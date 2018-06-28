var elements = document.getElementsByTagName('div')
var element = elements[0]
var o = {}

function theDOMElementWalker(node) {
    if (node.nodeType == Node.ELEMENT_NODE) {

        console.log(node.tagName);

        node = node.firstChild;

        while (node) {
            theDOMElementWalker(node);
            node = node.nextSibling;
        }
    }
}

theDOMElementWalker(element)
