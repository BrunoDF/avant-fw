var modal;

var Modal = {
    close: function() {
        var hideModal = function() {
            modal.removeEventListener('transitionend', hideModal, true);
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        };
        
        modal.firstElementChild.classList.remove('visible');
        
        setTimeout(function() {
            modal.classList.remove('visible');
            modal.addEventListener('transitionend', hideModal, true);
        }, 100);
        
    },
    init: function() {
        for (var i=0; i < Modal.trigger.length; i++) {
            Modal.trigger[i].onclick = function() {
                var modalId = this.getAttribute('data-modal-target');
                Modal.open(modalId);
            }
        }
    },
    open: function(id) {
        modal = document.getElementById(id);
        modal.style.display = "block";
        setTimeout(function() { 
            modal.classList.add('visible');
            modal.firstElementChild.classList.add('visible');
        }, 100);
        
        document.body.style.overflow = 'hidden';
        
        modal.getElementsByClassName('modal_btn')[0].onclick = function() {
            Modal.close();
        }
        
        modal.onclick = function() {
            Modal.close();
        }
        
        modal.firstElementChild.onclick = function(event) {
            event.stopPropagation();   
        }
    },
    trigger: document.querySelectorAll('[data-modal-target]')
}