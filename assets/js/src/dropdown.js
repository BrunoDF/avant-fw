var Dropdown = {
    btn: document.getElementsByClassName('dropdown_btn'),
    close: function() {
        for (var i=0;i < Dropdown.btn.length; i++) {
            Dropdown.btn[i].parentNode.classList.remove('visible');
        }
    },
    init: function() {
        var arr = Array.prototype.slice.call(Dropdown.btn);

        for (var i=0;i < Dropdown.btn.length; i++) {
            Dropdown.btn[i].onclick = function(event) {
                Dropdown.visible = arr.indexOf(this);
                
                Dropdown.toggle(this);
                event.stopPropagation();
                
                for (var j=0;j < Dropdown.btn.length; j++) {
                    if (j !== Dropdown.visible) {
                        Dropdown.btn[j].parentNode.classList.remove('visible');
                    }
                }
            }
        }
    },
    onWindowResize: function() {
        Dropdown.close()
    },
    visible: undefined,
    toggle: function(el) {
        el.parentNode.classList.toggle('visible');
        
        if (Dropdown.visible !== undefined) {
            document.body.onclick = function() {
                Dropdown.close();
                Dropdown.visible = undefined;
            }
        }
    }
}


