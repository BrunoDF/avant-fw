var Modal = {
    close: function() {
        var hideModal = function() {
            Modal.current.removeEventListener('transitionend', hideModal, true);
            Modal.current.style.display = "none";
            Modal.current = undefined;
            document.body.style.overflow = 'auto';
        };
        
        Modal.current.firstElementChild.className = Modal.current.firstElementChild.className.replace(/\bvisible\b/, '');
        
        setTimeout(function() {
            Modal.current.className = Modal.current.className.replace(/\bvisible\b/, '');
            Modal.current.addEventListener('transitionend', hideModal, true);
        }, 100);
    },
    current: undefined,
    init: function() {
        for (var i=0; i < Modal.trigger.length; i++) {
            Modal.trigger[i].onclick = function() {
                var modalId = this.getAttribute('data-modal-target');
                Modal.open(modalId);
            }
        }
    },
    loader: (function() {
        var elem = document.getElementsByClassName('modal_loader')[0];
        
        if (typeof document.getElementsByClassName('modal_loader')[0] !== 'undefined') {
            var opcoes = {
                show: function() {
                    if (elem.className.indexOf('visible') === -1) elem.className += ' visible';
                },
                hide: function() {
                    elem.className = elem.className.replace(/\bvisible\b/, '');
                }
            };
        }
        
        return opcoes;
    })(),
    open: function(id) {
        Modal.current = document.getElementById(id);
        Modal.current.style.display = "block";
        setTimeout(function() { 
            if (Modal.current.className.indexOf('visible') === -1) Modal.current.className += ' visible';
            if (Modal.current.firstElementChild.className.indexOf('visible') === -1) Modal.current.firstElementChild.className += ' visible';
        }, 100);
        
        document.body.style.overflow = 'hidden';
        
        Modal.current.getElementsByClassName('modal_btn')[0].onclick = function() {
            Modal.close();
        }
        
        /*Modal.current.onclick = function() {
            Modal.close();
        }
        
        Modal.current.firstElementChild.onclick = function(event) {
            event.stopPropagation();   
        }*/
    },
    trigger: document.querySelectorAll('[data-modal-target]')
}
