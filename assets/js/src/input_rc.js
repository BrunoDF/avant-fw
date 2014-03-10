var InputRC = {
    init: function() {
        for (var i=0; i < InputRC.trigger.length; i++) {
            InputRC.trigger[i].onclick = function() {
                if (this.children[0].type === 'radio') {
                    this.children[0].checked = true;
                } else {
                    if (this.children[0].checked) {
                        this.children[0].checked = false;
                    } else {
                        this.children[0].checked = true;
                    }
                }
            }
            
            InputRC.trigger[i].children[0].onclick = function(event) {
                event.stopPropagation();
            }
        }
    },
    trigger: document.querySelectorAll('.input_rc ul li')
};