gsap.from("#nav", {
    y : -110,
    position : "fixed",
    duration: 1,
    border : "1px solid #fff",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers: true, 
        start : "top 40%",
        end:  "top -1000%",
        scrub: 3
    }

})

