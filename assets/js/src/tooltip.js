var Tooltip = {
    build: function(el) {
        var tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerHTML = '<i></i><p>'+ el.getAttribute('data-tooltip') +'</p>';
        document.body.appendChild(tooltip);
        
        Tooltip.position(el, tooltip);
        
        setTimeout(function() { tooltip.classList.add('visible') }, 50);
    },
    hide: function() {
        var tooltip = document.querySelectorAll('.tooltip');
        var removeTooltip = function() {
            for (var i=0; i < tooltip.length; i++) {
                tooltip[i].removeEventListener('transitionend', removeTooltip, true);
                tooltip[i].remove();
            }
        }
        
        for (var i=0; i < tooltip.length; i++) {
            tooltip[i].addEventListener('transitionend', removeTooltip, true);
            tooltip[i].classList.remove('visible');
        }
    },
    onDocumentReady: function() {
        for (var i=0; i < Tooltip.trigger.length; i++) {
            Tooltip.trigger[i].onmouseover = function() {
                Tooltip.show(this);
            }
            
            Tooltip.trigger[i].onmouseout = function() {
                Tooltip.hide();
            }
        }
    },
    position: function(el, tooltip) {
        var posTop = el.offsetTop;
        var posLeft = el.offsetLeft;
        var center = (el.offsetWidth - tooltip.offsetWidth) / 2;
        
        tooltip.style.top = posTop;
        tooltip.style.left = posLeft;
        tooltip.style.marginLeft = center;
    },
    show: function(el) {
        Tooltip.build(el);
    },
    trigger: document.querySelectorAll('[data-tooltip]')
}