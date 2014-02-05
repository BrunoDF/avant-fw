window.onload = function() {
    Dropdown.onDocumentReady();
    Message.onDocumentReady();
    Nav.onDocumentReady();
}

window.onresize = function() {
    Dropdown.onWindowResize();
    Nav.onWindowResize();
}