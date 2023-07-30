let crsr = document.querySelector("#cursor");
let crsrbr = document.querySelector("#cursorblur");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrbr.style.left = dets.x - 237.5 + "px"
    crsrbr.style.top = dets.y - 237.5 + "px"
})

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3.5;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
        crsr.style.transition = "0.2s scale"
    })

    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "";
        crsr.style.backgroundColor = "";
        crsr.style.transition = "0.5s";
    })
})




var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top - 10%",
        // end: "top - 11%",
        scrub: true,
    }
});
let bl = 0;
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top - 10%",
        end: "top -80% ",
        scrub: 3,
    }
})

gsap.from("#colon_1", {
    x: -70,
    y: -70,
    duration: 2,
    scrollTrigger: {
        trigger: "#colon_1",
        scroller: "body",
        start: "top 50%",
        end: "top 40%",
        scrub: 3,
    }
})

gsap.from("#colon_2", {
    x: 70,
    y: 70,
    duration: 2,
    scrollTrigger: {
        trigger: "#colon_2",
        scroller: "body",
        start: "top 80%",
        end: "top 90%",
        scrub: 3,
    }
})

gsap.from("#page6 > h1", {
    x: 0,
    y: 40,
    duration: 2,
    scrollTrigger: {
        trigger: "#page6 > h1",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
    }
})