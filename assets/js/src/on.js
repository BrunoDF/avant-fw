window.onload = function() {
    Dropdown.onDocumentReady();
    Message.onDocumentReady();
    Modal.onDocumentReady();
    Nav.onDocumentReady();
}

window.onresize = function() {
    Dropdown.onWindowResize();
    Nav.onWindowResize();
}