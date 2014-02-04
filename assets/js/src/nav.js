var Nav = {
    menu: document.getElementsByClassName('nav_menu')[0],
    btn: document.getElementsByClassName('menu_btn'),
    toggle: function() {
        Nav.menu.classList.toggle('visible');
    },
    onWindowResize: function() {
        if (ScreenSize.isBig() || ScreenSize.isLarge()) {
            Nav.menu.classList.remove('visible');
        }
    }
};

for (var i=0; i < Nav.btn.length; i++) {
    Nav.btn[i].onclick = function() {
        Nav.toggle();
    }
}