(function controller() {
    function init() {
        window.onscroll = function () { addStatic() };
    }

    const staticClass = "static";

    function addStatic() {
        var header = document.getElementById("header");
        if (window.pageYOffset > header.offsetTop)
            header.classList.add(staticClass);
        else
            header.classList.remove(staticClass);
    };

    init();
})();