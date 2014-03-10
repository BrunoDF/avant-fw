window.onload = function() {
    Dropdown.init();
    Message.init();
    Modal.init();
    Nav.init();
    InputRC.init();
    Tooltip.init();
}

window.onresize = function() {
    Dropdown.onWindowResize();
    Nav.onWindowResize();
}