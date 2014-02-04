var Dropdown = {
    btn: document.getElementsByClassName('dropdown_btn'),
    toggle: function(el) {
        el.parentNode.classList.toggle('visible');
    },
    onWindowResize: function() {
        for (var i=0;i < Dropdown.btn.length; i++) {
            Dropdown.btn[i].parentNode.classList.remove('visible');
        }
    }
}

for (var i=0;i < Dropdown.btn.length; i++) {
    Dropdown.btn[i].onclick = function() {
        Dropdown.toggle(this);
        
        /*for (var j=0;j < Dropdown.btn.length; j++) {
            if (j !== i) {
                Dropdown.btn[j].parentNode.classList.remove('visible');
            }
        }*/
    }
}