var ScreenSize = {
    isSmall: function() {
        return window.innerWidth < 768 ? !0 : void 0;
    },
    isMedium: function() {
        return window.innerWidth >= 768 && window.innerWidth < 992 ? !0 : void 0;
    },
    isBig: function() {
        return window.innerWidth >= 992 && window.innerWidth < 1200 ? !0 : void 0;
    },
    isLarge: function() {
        return window.innerWidth >= 1200 ? !0 : void 0;
    }
}, Dropdown = {
    btn: document.getElementsByClassName("dropdown_btn"),
    onDocumentReady: function() {
        for (var arr = Array.prototype.slice.call(Dropdown.btn), i = 0; i < Dropdown.btn.length; i++) Dropdown.btn[i].onclick = function() {
            Dropdown.toggle(this), Dropdown.visible = arr.indexOf(this);
            for (var j = 0; j < Dropdown.btn.length; j++) j !== Dropdown.visible && Dropdown.btn[j].parentNode.classList.remove("visible");
        };
    },
    onWindowResize: function() {
        for (var i = 0; i < Dropdown.btn.length; i++) Dropdown.btn[i].parentNode.classList.remove("visible");
    },
    visible: void 0,
    toggle: function(el) {
        el.parentNode.classList.toggle("visible");
    }
}, Message = {
    list: document.getElementsByClassName("msg"),
    close: function(el) {
        var msg = el.parentNode.parentNode, hideMsg = function() {
            msg.remove(), msg.removeEventListener("transitionend", hideMsg, !0);
        };
        msg.style.height = 0, msg.addEventListener("transitionend", hideMsg, !0);
    },
    onDocumentReady: function() {
        for (var i = 0; i < Message.list.length; i++) {
            var msgHeight = Message.list[i].offsetHeight;
            Message.list[i].style.height = msgHeight + "px", Message.list[i].children[0].children[0].onclick = function() {
                Message.close(this);
            };
        }
    }
}, Modal = {
    close: function(modal) {
        var hideModal = function() {
            modal.removeEventListener("transitionend", hideModal, !0), modal.style.display = "none", 
            document.body.style.overflow = "auto";
        };
        modal.firstElementChild.classList.remove("visible"), setTimeout(function() {
            modal.classList.remove("visible"), modal.addEventListener("transitionend", hideModal, !0);
        }, 100);
    },
    onDocumentReady: function() {
        for (var i = 0; i < Modal.trigger.length; i++) Modal.trigger[i].onclick = function() {
            var modalId = this.getAttribute("data-modal-target");
            Modal.open(modalId);
        };
    },
    open: function(id) {
        var modal = document.getElementById(id);
        modal.style.display = "block", setTimeout(function() {
            modal.classList.add("visible"), modal.firstElementChild.classList.add("visible");
        }, 100), document.body.style.overflow = "hidden", modal.getElementsByClassName("modal_btn")[0].onclick = function() {
            Modal.close(modal);
        }, modal.onclick = function() {
            Modal.close(modal);
        }, modal.firstElementChild.onclick = function(event) {
            event.stopPropagation();
        };
    },
    trigger: document.querySelectorAll("[data-modal-target]")
}, Nav = {
    menu: document.getElementsByClassName("nav_menu")[0],
    btn: document.getElementsByClassName("menu_btn"),
    onDocumentReady: function() {
        for (var i = 0; i < Nav.btn.length; i++) Nav.btn[i].onclick = function() {
            Nav.toggle();
        };
    },
    onWindowResize: function() {
        (ScreenSize.isBig() || ScreenSize.isLarge()) && Nav.menu.classList.remove("visible");
    },
    toggle: function() {
        Nav.menu.classList.toggle("visible");
    }
};

window.onload = function() {
    Dropdown.onDocumentReady(), Message.onDocumentReady(), Modal.onDocumentReady(), 
    Nav.onDocumentReady(), Tooltip.onDocumentReady();
}, window.onresize = function() {
    Dropdown.onWindowResize(), Nav.onWindowResize();
};

var Tooltip = {
    build: function(el) {
        var tooltip = document.createElement("div");
        tooltip.classList.add("tooltip"), tooltip.innerHTML = "<i></i><p>" + el.getAttribute("data-tooltip") + "</p>", 
        document.body.appendChild(tooltip), Tooltip.position(el, tooltip), setTimeout(function() {
            tooltip.classList.add("visible");
        }, 50);
    },
    hide: function() {
        for (var tooltip = document.querySelectorAll(".tooltip"), removeTooltip = function() {
            for (var i = 0; i < tooltip.length; i++) tooltip[i].removeEventListener("transitionend", removeTooltip, !0), 
            tooltip[i].remove();
        }, i = 0; i < tooltip.length; i++) tooltip[i].addEventListener("transitionend", removeTooltip, !0), 
        tooltip[i].classList.remove("visible");
    },
    onDocumentReady: function() {
        for (var i = 0; i < Tooltip.trigger.length; i++) Tooltip.trigger[i].onmouseover = function() {
            Tooltip.show(this);
        }, Tooltip.trigger[i].onmouseout = function() {
            Tooltip.hide();
        };
    },
    position: function(el, tooltip) {
        var posTop = el.offsetTop, posLeft = el.offsetLeft, center = (el.offsetWidth - tooltip.offsetWidth) / 2;
        tooltip.style.top = posTop, tooltip.style.left = posLeft, tooltip.style.marginLeft = center;
    },
    show: function(el) {
        Tooltip.build(el);
    },
    trigger: document.querySelectorAll("[data-tooltip]")
};