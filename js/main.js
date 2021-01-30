let tl = gsap.timeline();
tl.set("circle", { opacity: 0 });
tl.set("#circle6", { r: 10 }).to("#circle6", { opacity: 1 }).to("#circle6", { r: 100, repeat: 5, yoyo: true, duration: 1.5, delay: .3, repeatDelay: .3, ease: "circ.inout" }).to("#circle6", { r: 1, duration: .16, opacity: 0 }).to("circle", { opacity: 1, stagger: 0.25 });