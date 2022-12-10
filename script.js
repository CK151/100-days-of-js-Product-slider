const thumnails = document.getElementsByClassName("thumbnail");
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("slide-right");
const prevBtn = document.getElementById("slide-left");



nextBtn.addEventListener("click", () => {
    scrollAmount = 0;
    let slideTimer = setInterval(() => {
        slider.scrollLeft += 10;
        scrollAmount += 10;
        if (scrollAmount >= 100) {
            window.clearInterval(slideTimer)
        }
    }, 25)
});


prevBtn.addEventListener("click", () => {
    scrollAmount = 0;
    let slideTimer = setInterval(() => {
        slider.scrollLeft -= 10;
        scrollAmount += 10;
        if (scrollAmount >= 100) {
            window.clearInterval(slideTimer)
        }
    }, 25)
});

//slider withvalues

function sw() {
    alert(slider.scrollWidth)
}

function sl() {
    alert(slider.scrollLeft)
}

function cw() {
    alert(slider.clientWidth)
}

function calc() {
    alert(slider.scrollWidth - slider.clientWidth)
}


//AutoPlay Function

function autoPlay() {
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
    }
    else {
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 10)

//pause the carousal on hover 


for (let i = 0; i < thumnails.length; i++) {
    thumnails[i].addEventListener("mouseover", () => {
        clearInterval(play);
    });

    thumnails[i].addEventListener("mouseout", () => {
        return(play = setInterval(autoPlay, 10));
    });
}

