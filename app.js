function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        tablet: {
            smooth: true
        },

        smartphone: {
            smooth: true
        }
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },

        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => {
        locoScroll.update();
    });

    ScrollTrigger.refresh();
}

function navAnimation() {
    var nav = document.querySelector("nav");
    var navItems = document.querySelectorAll(".nav-part2 h5 span");

    nav.addEventListener("mouseenter", function () {

        gsap.set(".nav-part2 h5", {
            display: "block"
        });

        let tl = gsap.timeline();

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.4
        });

        tl.to(".nav-part2 h5 span", {
            y: 0,
            duration: 0.4,
            stagger: {
                amount: 0.6
            }
        }, "-=0.2");
    });

    nav.addEventListener("mouseleave", function () {

        let tl = gsap.timeline();

        tl.to(".nav-part2 h5 span", {
            y: 25,
            duration: 0.3,
            stagger: {
                amount: 0.2
            }
        });

        tl.set(".nav-part2 h5", {
            display: "none"
        });

        tl.to("#nav-bottom", {
            height: "0vh",
            duration: 0.4
        }, "-=0.1");
    });

    gsap.set(navItems, {
        y: 25
    });
}


function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function (elem) {

        var image = elem.querySelector("img");

        elem.addEventListener("mouseenter", function () {

            gsap.to(image, {
                opacity: 1,
                scale: 1
            });

        });

        elem.addEventListener("mouseleave", function () {

            gsap.to(image, {
                opacity: 0,
                scale: 0
            });

        });

        elem.addEventListener("mousemove", function (dets) {

            var rect = elem.getBoundingClientRect();

            gsap.to(image, {
                x: dets.clientX - rect.x - 90,
                y: dets.clientY - rect.y - 215
            });

        });

    });
}


function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center");
    var video = document.querySelector("#page3 video");

    page3Center.addEventListener("click", function () {

        video.play();

        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
            pointerEvents: "auto"
        });

    });

    video.addEventListener("click", function () {

        video.pause();

        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px",
            pointerEvents: "none"
        });

    });
}


function page4Animation() {
    var sections = document.querySelectorAll(".sec-right");

    sections.forEach(function (elem) {

        var video = elem.querySelector("video");

        elem.addEventListener("mouseenter", function () {

            video.style.opacity = 1;
            video.play();

        });

        elem.addEventListener("mouseleave", function () {

            video.style.opacity = 0;
            video.load();

        });

    });
}


function page6Animation() {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#btm6-part2 h4", {
        x: 100,
        duration: 1,
        stagger: 0.15,

        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller:"#main",
            start: "top 80%",
            end: "top -80",
            scrub: true,
            // markers: true
        }
    });

    gsap.from("#btm6-part3 h4", {
        x: 100,
        duration: 1,
        stagger: 0.15,

        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller:"#main",
            start: "top 80%",
            end: "top -80%",
            scrub: true,
            // markers: true
        }
    });
    gsap.from("#btm6-part4 h4", {
        x: 100,
        duration: 1,
        stagger: 0.15,

        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller:"#main",
            start: "top 80%",
            end: "top -80%",
            scrub: true,
            // markers: true
        }
    });

}


function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

locomotiveAnimation()
navAnimation();
page2Animation();
page3VideoAnimation();
page4Animation();
page6Animation();
loadingAnimation();


