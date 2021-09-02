var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            let active = document.querySelectorAll(".accordion.active");
            for (let j = 0; j < active.length; j++) {
                active[j].classList.remove("active");
                active[j].nextElementSibling.style.maxHeight = null;
            }
            this.classList.toggle("active");
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


let leftBtn = document.querySelector(".leftIcon");
let rightBtn = document.querySelector(".rightIcon");
let slideItem = document.querySelectorAll(".slideImg");

let currentIndex;


let slide = () => {
    for (let i = 0; i < slideItem.length; i++) {
        if (slideItem[i].classList.contains("show")) {
            currentIndex = parseInt(slideItem[i].dataset.index);
        }
    }

    for (let i = 0; i < slideItem.length; i++) {
        slideItem[i].classList.remove("show");
    }
}

let next = () => {
    slide();

    if (currentIndex == slideItem.length) {
        currentIndex = 0;
    }
    for (let i = 0; i < slideItem.length; i++) {
        if (parseInt(slideItem[i].dataset.index) == (currentIndex + 1)) {
            slideItem[i].classList.add("show");
        }
    }
}

let prev = () => {
    slide();

    if (currentIndex == 1) {
        currentIndex = slideItem.length + 1;
    }

    for (let i = 0; i < slideItem.length; i++) {
        if (parseInt(slideItem[i].dataset.index) == (currentIndex - 1)) {
            slideItem[i].classList.add("show");
        }
    }
}

rightBtn.addEventListener("click", next);
leftBtn.addEventListener("click", prev);