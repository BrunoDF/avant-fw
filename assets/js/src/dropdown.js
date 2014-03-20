var Dropdown = {
    btn: document.getElementsByClassName('dropdown_btn'),
    close: function() {
        for (var i=0;i < Dropdown.btn.length; i++) {
            Dropdown.btn[i].parentNode.className = Dropdown.btn[i].parentNode.className.replace(/\b visible\b/, '');
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
                        Dropdown.btn[j].parentNode.className = Dropdown.btn[j].parentNode.className.replace(/\b visible\b/, '');
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
        if (el.parentNode.className.indexOf('visible') !== -1) {
            el.parentNode.className = el.parentNode.className.replace(/\b visible\b/, '');
        } else {
            el.parentNode.className += ' visible';
        }
        
        if (Dropdown.visible !== undefined) {
            document.body.onclick = function() {
                Dropdown.close();
                Dropdown.visible = undefined;
            }
        }
    }
}


