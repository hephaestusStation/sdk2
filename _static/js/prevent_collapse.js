
window.addEventListener('load', (event) => {
    var menu = document.querySelector(".wy-menu ul li:first-child")
    if (!menu.classList.contains("current")) {
        menu.classList.add("current")
    }
});

window.onload = function() {
    if (window.jQuery) {  
        $(window).off('hashchange')
    } 
}
