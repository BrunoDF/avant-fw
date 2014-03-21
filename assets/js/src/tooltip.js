var Tooltip = {
    build: function(el) {
        var tooltip = document.createElement('div');
        var content = el.hasAttribute('data-tooltip-hover') ? el.getAttribute('data-tooltip-hover') : el.getAttribute('data-tooltip-focus');
        tooltip.className = "tooltip";
        tooltip.innerHTML = '<i></i><p>'+ content +'</p>';
        document.body.appendChild(tooltip);
        
        Tooltip.position(el, tooltip);
        
        if (tooltip.className.indexOf('visible') === -1) tooltip.className += ' visible';
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
            tooltip[i].className = tooltip[i].className.replace(/\b visible\b/, '');
        }
    },
    init: function() {
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
        var posCenter = (el.offsetWidth - tooltip.offsetWidth) / 2;
        
        tooltip.style.top = posTop + tooltipDistance + 'px';
        tooltip.style.left = posLeft + 'px';
        tooltip.style.marginLeft = posCenter + 'px';
        
        setTimeout(function() { 
            if (tooltip.className.indexOf('visible') === -1) tooltip.className += ' visible';
        }, 50);
    },
    show: function(el) {
        Tooltip.build(el);
    },
    trigger: { onHover: document.querySelectorAll('[data-tooltip-hover]'), onFocus: document.querySelectorAll('[data-tooltip-focus]') }
}