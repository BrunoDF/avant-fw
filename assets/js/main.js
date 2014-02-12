var ScreenSize={isSmall:function(){return window.innerWidth<768?!0:void 0},isMedium:function(){return window.innerWidth>=768&&window.innerWidth<992?!0:void 0},isBig:function(){return window.innerWidth>=992&&window.innerWidth<1200?!0:void 0},isLarge:function(){return window.innerWidth>=1200?!0:void 0}},Dropdown={btn:document.getElementsByClassName("dropdown_btn"),onDocumentReady:function(){for(var a=Array.prototype.slice.call(Dropdown.btn),b=0;b<Dropdown.btn.length;b++)Dropdown.btn[b].onclick=function(){Dropdown.toggle(this),Dropdown.visible=a.indexOf(this);for(var b=0;b<Dropdown.btn.length;b++)b!==Dropdown.visible&&Dropdown.btn[b].parentNode.classList.remove("visible")}},onWindowResize:function(){for(var a=0;a<Dropdown.btn.length;a++)Dropdown.btn[a].parentNode.classList.remove("visible")},visible:void 0,toggle:function(a){a.parentNode.classList.toggle("visible")}},Message={list:document.getElementsByClassName("msg"),close:function(a){var b=a.parentNode.parentNode,c=function(){b.remove(),b.removeEventListener("transitionend",c,!0)};b.style.height=0,b.addEventListener("transitionend",c,!0)},onDocumentReady:function(){for(var a=0;a<Message.list.length;a++){var b=Message.list[a].offsetHeight;Message.list[a].style.height=b+"px",Message.list[a].children[0].children[0].onclick=function(){Message.close(this)}}}},Modal={close:function(a){var b=function(){a.removeEventListener("transitionend",b,!0),a.style.display="none",document.body.style.overflow="auto"};a.firstElementChild.classList.remove("visible"),setTimeout(function(){a.classList.remove("visible"),a.addEventListener("transitionend",b,!0)},100)},onDocumentReady:function(){for(var a=0;a<Modal.trigger.length;a++)Modal.trigger[a].onclick=function(){var a=this.getAttribute("data-modal-target");Modal.open(a)}},open:function(a){var b=document.getElementById(a);b.style.display="block",setTimeout(function(){b.classList.add("visible"),b.firstElementChild.classList.add("visible")},100),document.body.style.overflow="hidden",b.getElementsByClassName("modal_btn")[0].onclick=function(){Modal.close(b)},b.onclick=function(){Modal.close(b)},b.firstElementChild.onclick=function(a){a.stopPropagation()}},trigger:document.querySelectorAll("[data-modal-target]")},Nav={menu:document.getElementsByClassName("nav_menu")[0],btn:document.getElementsByClassName("menu_btn"),onDocumentReady:function(){for(var a=0;a<Nav.btn.length;a++)Nav.btn[a].onclick=function(){Nav.toggle()}},onWindowResize:function(){(ScreenSize.isBig()||ScreenSize.isLarge())&&Nav.menu.classList.remove("visible")},toggle:function(){Nav.menu.classList.toggle("visible")}};window.onload=function(){Dropdown.onDocumentReady(),Message.onDocumentReady(),Modal.onDocumentReady(),Nav.onDocumentReady(),Tooltip.onDocumentReady()},window.onresize=function(){Dropdown.onWindowResize(),Nav.onWindowResize()};var Tooltip={build:function(a){var b=document.createElement("div"),c=a.getAttribute(a.hasAttribute("data-tooltip-hover")?"data-tooltip-hover":"data-tooltip-focus");b.classList.add("tooltip"),b.innerHTML="<i></i><p>"+c+"</p>",document.body.appendChild(b),Tooltip.position(a,b)},hide:function(){for(var a=document.querySelectorAll(".tooltip"),b=function(){for(var c=0;c<a.length;c++)a[c].removeEventListener("transitionend",b,!0),a[c].remove()},c=0;c<a.length;c++)a[c].addEventListener("transitionend",b,!0),a[c].classList.remove("visible")},onDocumentReady:function(){for(var a=0;a<Tooltip.trigger.onHover.length;a++)Tooltip.trigger.onHover[a].onmouseover=function(){Tooltip.show(this)},Tooltip.trigger.onHover[a].onmouseout=function(){Tooltip.hide()};for(var a=0;a<Tooltip.trigger.onFocus.length;a++)Tooltip.trigger.onFocus[a].onfocus=function(){Tooltip.show(this)},Tooltip.trigger.onFocus[a].onblur=function(){Tooltip.hide()}},position:function(a,b){var c=a.offsetHeight-(b.firstChild.offsetHeight-4),d=a.offsetTop,e=a.offsetLeft,f=(a.offsetWidth-b.offsetWidth)/2;b.style.top=d+c+"px",b.style.left=e+"px",b.style.marginLeft=f+"px",setTimeout(function(){b.classList.add("visible")},50)},show:function(a){Tooltip.build(a)},trigger:{onHover:document.querySelectorAll("[data-tooltip-hover]"),onFocus:document.querySelectorAll("[data-tooltip-focus]")}};