var Messages = {
    list: document.getElementsByClassName('close_msg'),
    close: function(el) {
        var msg =  el.parentNode.parentNode;
        var hideMsg = function() { msg.remove() };
        msg.addEventListener('transitionend', hideMsg, true);
        msg.style.opacity = 0;
    }
};

for (var i=0; i < Messages.list.length; i++) {
    Messages.list[i].onclick = function() {
        Messages.close(this);
    }
}