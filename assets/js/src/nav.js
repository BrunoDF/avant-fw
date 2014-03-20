var Nav = {
    menu: document.getElementsByClassName('nav_menu')[0],
    btn: document.getElementsByClassName('menu_btn'),
    init: function() {
        for (var i=0; i < Nav.btn.length; i++) {
            Nav.btn[i].onclick = function() {
                Nav.toggle();
            }
        }
    },
    onWindowResize: function() {
        if (ScreenSize.isBig() || ScreenSize.isLarge()) {
            Nav.menu.className = Nav.menu.className.replace(/\b visible\b/, '');
        }
    },
    toggle: function() {
        if (Nav.menu.className.indexOf('visible') !== -1) {
            Nav.menu.className = Nav.menu.className.replace(/\b visible\b/, '');
        } else {
            if (Nav.menu.className.indexOf('visible') === -1) Nav.menu.className += ' visible';
        }
    }
};