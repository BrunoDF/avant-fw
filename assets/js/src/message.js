var Message = {
    list: document.getElementsByClassName('msg'),
    close: function(el) {
        var msg =  el.parentNode.parentNode;
        var hideMsg = function() { 
            msg.remove();
            msg.removeEventListener('transitionend', hideMsg, true);
        };
        
        msg.style.height = 0;
        msg.addEventListener('transitionend', hideMsg, true);
    },
    onDocumentReady: function() {
        for (var i=0; i < Message.list.length; i++) {
            var msgHeight = Message.list[i].offsetHeight;
            Message.list[i].style.height = msgHeight+"px";
            Message.list[i].children[0].children[0].onclick = function() {
                Message.close(this);
            }
        }
    }
};