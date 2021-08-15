var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
let button = document.getElementById("btn");
let close = document.getElementById("close")
let content = document.querySelector(".overlay");
button.onclick = function() {
    content.classList.add("noverlay");
};
close.onclick = function() {
    content.classList.remove("noverlay")
}