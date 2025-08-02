function videoconAnimation(){
    var videocon = document.querySelector("#video-container");
    var playButton = document.querySelector("#play");

    videocon.addEventListener("mouseenter", function () {
        gsap.to(playButton, {
            opacity: 1,
            scale: 1
        });
    });

    videocon.addEventListener("mouseleave", function () {
        gsap.to(playButton, {
            opacity: 0,
            scale: 0
        });
    });

    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playButton, {
            left: dets.x - 50,
            top: dets.y - 80
        });
    });
}
videoconAnimation();

function page1loading(){
    gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.3
})
gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
})
}
page1loading();