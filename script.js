Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", { videos: ["./assets/videos/1.mp4", "./assets/videos/2.mp4", "./assets/videos/3.mp4"] });


gsap.to(".fleft-elem", {
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
});


let sections = document.querySelectorAll(".fleft-elem");
Shery.imageEffect(".images", {
    style: 3,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                scrub: 1,
                start: "top top",
                onUpdate: function (prog) {
                    setScroll(prog.progress + index);
                }
            })
        })
    }
});