var Modal = {
    close: function() {
        var hideModal = function() {
            Modal.current.removeEventListener('transitionend', hideModal, true);
            Modal.current.style.display = "none";
            Modal.current = undefined;
            document.body.style.overflow = 'auto';
        };
        
        Modal.current.firstElementChild.classList.remove('visible');
        
        setTimeout(function() {
            Modal.current.classList.remove('visible');
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
                    elem.classList.add('visible');
                },
                hide: function() {
                    elem.classList.remove('visible');
                }
            };
        }
        
        return opcoes;
    })(),
    open: function(id) {
        Modal.current = document.getElementById(id);
        Modal.current.style.display = "block";
        setTimeout(function() { 
            Modal.current.classList.add('visible');
            Modal.current.firstElementChild.classList.add('visible');
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
