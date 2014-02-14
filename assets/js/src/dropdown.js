var Dropdown = {
    btn: document.getElementsByClassName('dropdown_btn'),
    init: function() {
        var arr = Array.prototype.slice.call(Dropdown.btn);

        for (var i=0;i < Dropdown.btn.length; i++) {
            Dropdown.btn[i].onclick = function() {
                Dropdown.toggle(this);
                Dropdown.visible = arr.indexOf(this);
                
                for (var j=0;j < Dropdown.btn.length; j++) {
                    if (j !== Dropdown.visible) {
                        Dropdown.btn[j].parentNode.classList.remove('visible');
                    }
                }
            }
        }  
    },
    onWindowResize: function() {
        for (var i=0;i < Dropdown.btn.length; i++) {
            Dropdown.btn[i].parentNode.classList.remove('visible');
        }
    },
    visible: undefined,
    toggle: function(el) {
        el.parentNode.classList.toggle('visible');
    }
}

