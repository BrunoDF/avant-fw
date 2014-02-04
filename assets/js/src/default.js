var ScreenSize = {
    isSmall: function() {
        if(window.innerWidth < 768) {
            return true;
        }
    },
    isMedium: function() {
        if(window.innerWidth >= 768 && window.innerWidth < 992) {
            return true;
        }
    },
    isBig: function() {
        if(window.innerWidth >= 992 && window.innerWidth < 1200) {
            return true;
        }
    },
    isLarge: function() {
        if(window.innerWidth >= 1200) {
            return true;
        }
    },
};