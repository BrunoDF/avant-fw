var Modal = {
    close: function(modal) {
        var hideModal = function() { 
            modal.classList.remove('visible');
            modal.firstElementChild.removeEventListener('transitionend', hideModal, true);
            document.body.style.overflow = 'auto';
        };
        modal.firstElementChild.addEventListener('transitionend', hideModal, true);
        modal.firstElementChild.classList.remove('visible');
    },
    onDocumentReady: function() {
        for (var i=0; i < Modal.trigger.length; i++) {
            Modal.trigger[i].onclick = function() {
                var modalId = this.getAttribute('data-modal-target');
                Modal.open(modalId);
            }
        }
    },
    open: function(id) {
        var modal = document.getElementById(id);
        modal.classList.add('visible');
        setTimeout(function() { modal.firstElementChild.classList.add('visible') }, 100);
        document.body.style.overflow = 'hidden';
        
        modal.getElementsByClassName('modal_btn')[0].onclick = function() {
            Modal.close(modal);
        }
        
        modal.onclick = function() {
            Modal.close(modal);
        }
        
        modal.firstElementChild.onclick = function(event) {
            event.stopPropagation();   
        }
    },
    trigger: document.querySelectorAll('[data-modal-target]')
}