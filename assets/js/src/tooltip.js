var Tooltip = {
    build: function(el) {
        var tooltip = document.createElement('div');
        var content = el.hasAttribute('data-tooltip-hover') ? el.getAttribute('data-tooltip-hover') : el.getAttribute('data-tooltip-focus');
        tooltip.classList.add('tooltip');
        tooltip.innerHTML = '<i></i><p>'+ content +'</p>';
        document.body.appendChild(tooltip);
        
        Tooltip.position(el, tooltip);
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
        for (var i=0; i < Tooltip.trigger.onHover.length; i++) {
            Tooltip.trigger.onHover[i].onmouseover = function() {
                Tooltip.show(this);
            }
            
            Tooltip.trigger.onHover[i].onmouseout = function() {
                Tooltip.hide();
            }
        }
        
        for (var i=0; i < Tooltip.trigger.onFocus.length; i++) {
            Tooltip.trigger.onFocus[i].onfocus = function() {
                Tooltip.show(this);
            }
            
            Tooltip.trigger.onFocus[i].onblur = function() {
                Tooltip.hide();
            }
        }
    },
    position: function(el, tooltip) {
        var tooltipDistance = (el.offsetHeight - (tooltip.firstChild.offsetHeight - 4));
        var posTop = el.offsetTop;
        var posLeft = el.offsetLeft;
        var center = (el.offsetWidth - tooltip.offsetWidth) / 2;
        
        tooltip.style.top = posTop + tooltipDistance;
        tooltip.style.left = posLeft;
        tooltip.style.marginLeft = center;
        
        setTimeout(function() { 
            tooltip.classList.add('visible');
        }, 50);
    },
    show: function(el) {
        Tooltip.build(el);
    },
    trigger: { onHover: document.querySelectorAll('[data-tooltip-hover]'), onFocus: document.querySelectorAll('[data-tooltip-focus]') }
}