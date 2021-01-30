let tl = gsap.timeline();
tl.set("circle", { opacity: 0 });
tl.set(".row5.col6", {
    r: 10
}).to(".row5.col6", {
    opacity: 1
}).to(".row5.col6", {
    r: 100,
    repeat: 5,
    yoyo: true,
    duration: 1.5,
    delay: .3,
    repeatDelay: .3,
    ease: "circ.inout"
}).to(".row5.col6", {
    r: 1,
    duration: .16,
    opacity: 0
}).to(".row5", {
    opacity: 1,
    stagger: 0.25
});

tl.set(".row4, .row6", {
    cy: "50%"
}).to(".row4, .row6", {
    cy: (el) => { // passing el in gives an index of the element. el 0 - 10 are row 4, 11 - 21 are row 6
        return el < 11 ? "40%" : "60%";
    },
    opacity: 1
}).set(".row3, .row7", { // el 0 - 10 are row 3, 11 - 21 are row 7
    cy: (el) => {
        return el < 11 ? "40%" : "60%";
    }
}).to(".row3, .row7", {
    cy: (el) => {
        return el < 11 ? "30%" : "70%";
    },
    opacity: 1,

}).set(".row2, .row8", {// el 0 - 10 are row 2, 11 - 21 are row 8
    cy: (el) => {
        return el < 11 ? "30%" : "70%";
    }
}).to(".row2, .row8", {
    cy: (el) => {
        return el < 11 ? "20%" : "80%";
    },
    opacity: 1
}).set(".row1, .row9", {// el 0 - 10 are row 1, 11 - 21 are row 9
    cy: (el) => {
        return el < 11 ? "20%" : "80%";
    }
}).to(".row1, .row9", {
    cy: (el) => {
        return el < 11 ? "10%" : "90%";
    },
    opacity: 1
}).set(".row0, .row10", {// el 0 - 10 are row 0, 11 - 21 are row 10
    cy: (el) => {
        return el < 11 ? "10%" : "90%";
    }
}).to(".row0, .row10", {
    cy: (el) => {
        return el < 11 ? "0%" : "100%";
    },
    opacity: 1
});