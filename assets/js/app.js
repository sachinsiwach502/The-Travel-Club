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
    autoplay: true,
    autoplaySpeed: 1500,
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
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
