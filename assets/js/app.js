const add_class = document.querySelector(".nav-view");
const nav_btn = document.querySelector(".nav_btn");
const first_line = document.querySelector(".first");
const sec_line = document.querySelector(".sec");
const third_line = document.querySelector(".third");
const links = document.querySelectorAll(".nav-links");
const body = document.body;

function fnc() {
    first_line.style.transform = "";
    first_line.style.display = "";
    third_line.style.transform = "";
    third_line.style.position = "";
    sec_line.style.transform = "";
    sec_line.style.position = "";
    body.style.overflow = "auto"
}

nav_btn.addEventListener("click", () => {
    add_class.classList.toggle("show")
    if (add_class.classList.contains("show")) {
        sec_line.style.transform = "rotate(45deg)";
        first_line.style.display = "none";
        third_line.style.transform = "rotate(310deg)"
        third_line.style.position = "relative";
        third_line.style.top = "-12px"
        sec_line.style.position = "relative"
        sec_line.style.top = "15px";
        body.style.overflow = "hidden"
    } else {
        fnc();
    }

    links.forEach(link => {
        link.addEventListener("click", () => {
            if (add_class.classList.contains("show")) {
                add_class.classList.remove("show");
                fnc();
            }
        });
    });
});


const btns = document.querySelectorAll(".buttons");
let nav = document.querySelector(".buttons");
nav.style.textDecoration = "underline";

btns.forEach(btn => {

    btn.addEventListener("click", () => {
        nav.style.textDecoration = "none";
        btns.forEach(btn_2 => {
            btn_2.addEventListener("click", () => {
                if (btn_2 !== btn) {
                    btn.style.textDecoration = "none";
                }
            })
        })
        btn.style.textDecoration = "underline";
    });
});



$('.slick-slider').slick({
    dots: true,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$('.slick_slider').slick({
    dots: true,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

let accord = document.querySelectorAll(".accord_item");

document.querySelector(".accord_txt").style.display = "block";
document.querySelector(".arrow").style.transform = "rotate(180deg)";

accord.forEach(item => {
    let click_part = item.querySelector(".accord-click");
    let img = item.querySelector(".arrow");
    let txt = item.querySelector(".accord_txt")

    click_part.addEventListener("click", () => {
        accord.forEach(otheritem => {

            let txt = otheritem.querySelector(".accord_txt");
            let img = otheritem.querySelector(".arrow");
            if (otheritem !== item) {
                txt.style.display = "none";
                img.style.transform = "rotate(0deg)";
            }
        })

        let txt_disp = window.getComputedStyle(txt).display;
        if (txt_disp === "none") {
            txt.style.display = "block";
            img.style.transform = "rotate(180deg)";
        } else {
            txt.style.display = "none";
            img.style.transform = "rotate(0deg)";
        }

    })
});

let to_arrow = document.querySelector(".to_top");
let pt = 200;

window.addEventListener("scroll", () => {
    if (scrollY > pt) {
        to_arrow.style.display = "block"
    } else {
        to_arrow.style.display = "none"
    }
});

to_arrow.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// gsap.from(".roatation_img", {
//     duration: 4,
//     repeat: -1,
//     rotation: 360,
// });

gsap.to(".to_top", {
    scale: 0.5,
    repeat: -1,
    duration: 1,
})

let pre_loader = document.querySelector(".pre-loader");
pre_loader.classList.remove("disp_none");

setTimeout(() => {
    pre_loader.classList.add("disp_none");
}, 2000);