let w = window.innerWidth;
let h = window.innerHeight;

let tl = gsap.timeline();
tl.pause();
let highlightColor = "#0000FF";
// delay for rows moving top to bottom
let delay1 = 0;
// position for rows moving back to grid from bottom
let position1 = -10;
// delay for cols moving left to right
let delay2 = -.01;
// position for cols moving back to grid from right
let position2 = -10;
// position for rows moving from rotation to grid
let position3 = -10;
// position for random rows moving from center to grid
let position4 = -10;
// position for all rows moving from center to grid, cx
let position5 = -10;
// position for all rows moving from center to grid, cy
let position6 = -10;

// function to get a random percent divisible by 10 (0, 10, 20, ... 100)
const randPercent = () => {
    return (Math.floor(Math.random() * 11) * 10) + "%";
}

// hide all circles
tl.set("circle", { opacity: 0 })
    // pulse center circle
    .set(".rows .row5.col5", {
        r: 0
    }).to(".rows .row5.col5", {
        opacity: 1
    }).to(".rows .row5.col5", {
        r: 100,
        repeat: 5,
        yoyo: true,
        duration: 1.5,
        delay: .3,
        repeatDelay: .3,
        ease: "circ.inout"
    })
    // stagger in "hello" then out
    .to(".hello", {
        opacity: 1,
        stagger: 0.14
    })
    .to(".hello", {
        opacity: 0,
        stagger: 0.2
    })
    // reset center circle then stagger center line opacity
    .set(".rows .row5.col5", {
        r: 1,
        opacity: 0
    }).to(".rows .row5", {
        opacity: 1,
        stagger: 0.25,

    })
    // make rows look like they duplicate themselves
    .set(".rows .row4, .rows .row6", {
        cy: "50%"
    }).to(".rows .row4, .rows .row6", {
        cy: (el) => { // console.log(el): passing el in gives an index of the element. el 0 - 10 are row 4, 11 - 21 are row 6
            return el < 11 ? "40%" : "60%";
        },
        opacity: 1
    }).set(".rows .row3, .rows .row7", { // el 0 - 10 are row 3, 11 - 21 are row 7
        cy: (el) => {
            return el < 11 ? "40%" : "60%";
        }
    }).to(".rows .row3, .rows .row7", {
        cy: (el) => {
            return el < 11 ? "30%" : "70%";
        },
        opacity: 1,
    }).set(".rows .row2, .rows .row8", {// el 0 - 10 are row 2, 11 - 21 are row 8
        cy: (el) => {
            return el < 11 ? "30%" : "70%";
        }
    }).to(".rows .row2, .rows .row8", {
        cy: (el) => {
            return el < 11 ? "20%" : "80%";
        },
        opacity: 1
    }).set(".rows .row1, .rows .row9", {// el 0 - 10 are row 1, 11 - 21 are row 9
        cy: (el) => {
            return el < 11 ? "20%" : "80%";
        }
    }).to(".rows .row1, .rows .row9", {
        cy: (el) => {
            return el < 11 ? "10%" : "90%";
        },
        opacity: 1
    }).set(".rows .row0, .rows .row10", {// el 0 - 10 are row 0, 11 - 21 are row 10
        cy: (el) => {
            return el < 11 ? "10%" : "90%";
        }
    }).to(".rows .row0, .rows .row10", {
        cy: (el) => {
            return el < 11 ? "0%" : "100%";
        },
        opacity: 1
    })
    // all rows to top then bottom
    .to(".rows circle", {
        cy: 0,
        duration: 1.5
    }).to(".rows circle", {
        cy: "100%",
        duration: 1.5,
        delay: (el) => { // 11 circles makes a row
            delay1 = (el % 11 == 0) ? delay1 + .01 : delay1;
            return delay1;
        }
    })
    // back to grid
    .to(".rows circle", {
        cy: (el) => {
            position1 = (el % 11 == 0) ? position1 + 10 : position1;
            return position1 + "%";
        },
        duration: 1.5
    })
    // switch to column layout
    .set(".cols circle", {
        opacity: 1
    }).set(".rows circle", {
        opacity: 0
    })
    // all cols to left then right
    .to(".cols circle", {
        cx: 0
    })
    .to(".cols circle", {
        cx: "100%",
        duration: 1.5,
        delay: (el) => {
            delay2 = (el % 11 == 0) ? delay2 + .01 : delay2;
            return delay2;
        }
    })
    // back to grid
    .to(".cols circle", {
        cx: (el) => {
            position2 = (el % 11 == 0) ? position2 + 10 : position2;
            return position2 + "%";
        },
        duration: 1.5
    })
    // highlight random dots
    .to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    }).to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        duration: 0.1,
    })
    // all back to white
    .to(".cols circle", {
        stroke: "#dfdfdf"
    })
    // connect the grid
    .set(".vertical, .horizontal", {
        width: (el) => {
            return el < 7 ? 1 : 0;
        },
        height: (el) => {
            return el < 7 ? ".1%" : 1;
        },
    }).to(".vertical, .horizontal", {
        height: (el) => {
            return el < 11 ? "100%" : 1;
        },
        width: (el) => {
            return el < 11 ? 1 : "100%";
        }
    })
    // hide the dots then hide the grid
    .to(".cols circle", {
        opacity: 0
    }).set(".grid rect", {
        opacity: 0
    })
    // slide moveme rects out to random widths/heights
    .set(".movemeV, .movemeH", {
        width: (el) => {
            return el < 10 ? 1 : 0;
        },
        height: (el) => {
            return el < 10 ? ".1%" : 1;
        }
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 10 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 10 ? 1 : randPercent();
        },
        stagger: 0.1
    })
    // show the grid
    .to(".grid rect", {
        opacity: 1
    })
    // slide moveme rects again and change to highlight color, then slide again
    .to(".movemeV, .movemeH", {
        width: (el) => {
            return el < 10 ? 1 : 0;
        },
        height: (el) => {
            return el < 10 ? ".1%" : 1;
        },
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 10 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 10 ? 1 : randPercent();
        },
        stroke: highlightColor,
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        width: (el) => {
            return el < 10 ? 1 : 0;
        },
        height: (el) => {
            return el < 10 ? ".1%" : 1;
        },
        stagger: 0.1,
    }).set(".movemeV, .movemeH", {
        stroke: "#dfdfdf"
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 10 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 10 ? 1 : randPercent();
        },
        stroke: highlightColor,
        stagger: 0.1
    })
    // pulse moveme rects then reset to white
    .to(".movemeV, .movemeH", {
        opacity: 0,
        yoyo: true,
        repeat: 4,
        duration: 1,
        repeatDelay: 0.3
    }).set(".movemeV, .movemeH", {
        stroke: "#dfdfdf"
    })
    // grid to 0 widths/heights
    .to(".grid .vertical", {
        height: ".1%",
        stagger: 0.1
    }).to(".grid .horizontal", {
        width: 0,
        stagger: 0.1
    }).set(".grid .vertical", {
        height: "100%",
        opacity: 0
    }).set(".grid .horizontal", {
        width: "100%",
        opacity: 0
    })
    // dots grid back
    .set(".rows circle", {
        stroke: "#333"
    }).to(".rows circle", {
        opacity: 1
    })
    // movemes back, slide back and forth
    .set(".movemeV, .movemeH", {
        opacity: 1,
        width: (el) => {
            return el < 10 ? 1 : 0;
        },
        height: (el) => {
            return el < 10 ? ".1%" : 1;
        }
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 10 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 10 ? 1 : randPercent();
        },
        stroke: highlightColor,
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        width: (el) => {
            return el < 10 ? 1 : 0;
        },
        height: (el) => {
            return el < 10 ? ".1%" : 1;
        },
        stagger: 0.1
    }).set(".movemeV, .movemeH", {
        stroke: "#dfdfdf"
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 10 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 10 ? 1 : randPercent();
        },
        stroke: highlightColor,
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        width: (el) => {
            return el < 10 ? 1 : 0;
        },
        height: (el) => {
            return el < 10 ? ".1%" : 1;
        },
        stagger: 0.1
    }).set(".movemeV, .movemeH", {
        stroke: "#dfdfdf"
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 10 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 10 ? 1 : randPercent();
        },
        stroke: highlightColor,
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        width: (el) => {
            return el < 10 ? 1 : 0;
        },
        height: (el) => {
            return el < 10 ? ".1%" : 1;
        },
        stagger: 0.1
    }).set(".movemeV, .movemeH", {
        stroke: "#dfdfdf",
        height: (el) => {
            return el < 10 ? 0 : 1;
        },
    })
    // rotate dots grid
    .to(".rows", {
        rotation: 90
    }).to(".rows", {
        rotation: -30,
        repeat: 3,
        yoyo: true,
        duration: 2
    }).set(".rows", {
        rotation: 0,
        opacity: 0
    })
    // pulse dashed circle
    .to("#dashCircle", {
        r: "15%",
        opacity: 1,
        duration: 2,
    }).to("#dashCircle", {
        r: "10%",
        duration: 3,
        yoyo: true,
        repeat: 3,
        ease: "power1.inOut",
        repeatDelay: 0.01
    })
    // squeeze to center then stretch out
    .to("#dashCircle", {
        r: 0,
        duration: 2
    }).to("#dashCircle", {
        r: "100%",
        opacity: 1,
        duration: 2
    })
    // stagger in dots grid
    .to(".cols circle", {
        opacity: 1,
        stagger: 0.02,
        ease: "circ.in"
    })
    // highlight and slide to center rows 2, 3, 4
    .to(`.cols .row2`, {
        stroke: highlightColor,
        cx: "50%"
    })
    .to(`.cols .row3`, {
        stroke: highlightColor,
        cx: "50%"
    })
    .to(`.cols .row4`, {
        stroke: highlightColor,
        cx: "50%"
    })
    // all back to grid
    .to(".cols circle", {
        cx: (el) => {
            position4 = (el % 11 == 0) ? 0 : position4 + 10;
            return position4 + "%";
        },
        stroke: "#dfdfdf"
    })
    // all to center
    .to(".cols circle", {
        cx: "50%",
        cy: "50%"
    })
    // back to grid
    .to(".cols circle", {
        cx: (el) => {
            position5 = (el % 11 == 0) ? 0 : position5 + 10;
            return position5 + "%";
        },
        cy: (el) => {
            position6 = (el % 11 == 0) ? position6 + 10 : position6;
            return position6 + "%";
        }
    })
    // stretch out rectangle
    .set("#movemeV0", {
        x: () => {
            return (w / 2) - (.3 * w);
        },
        y: () => {
            return (h / 2) - (.2 * h);
        },
        width: 1,
        height: 1
    }).to("#movemeV0", {
        width: "40%",
        height: "40%",
        duration: 1.5,
        stroke: highlightColor,
        strokeWidth: 15,
    })
    // slide width then height then both
    .to("#movemeV0", {
        width: "0",
        repeat: 1,
        duration: 1.5,
        yoyo: true
    }).to("#movemeV0", {
        height: ".1%",
        repeat: 1,
        duration: 1.5,
        yoyo: true
    }).to("#movemeV0", {
        width: ".1%",
        height: ".1%",
        repeat: 3,
        duration: 1.5,
        yoyo: true
    })
    // spin out rectangle then spin grid
    .to("#movemeV0", {
        rotation: 180,
        duration: 1.5,
        opacity: 0
    }).set("#movemeV0", {
        rotation: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        strokeWidth: 1
    }).to(".cols", {
        transformOrigin: "center center",
        rotation: 180,
        duration: 1.5
    }).set(".cols", {
        rotation: 360
    })
    // wiggle to random positions then all back to home position
    .to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    }).to(".cols circle", {
        x: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        y: () => {
            return (Math.floor(Math.random() * 11) * 100) + "%";
        },
        duration: 0.1
    })
    // hide grid
    .to(".cols circle", {
        x: 0,
        y: 0,
        opacity: 0,
    })
    // set dots to 0 radius and full opacity
    .set(".cols circle", {
        r: 0,
        opacity: 1,
    })
    // bounce 1 circle's radius
    .to(".cols .col2.row2", {
        r: 25,
        repeat: 3,
        yoyo: true
    })
    // bounce another another
    .to(".cols .col3.row7", {
        r: 25,
        repeat: 3,
        yoyo: true
    })
    // bounce 2 circles, then follow fibonacci sequence til screen is full
    .to(".cols .col7.row2, .cols .col7.row8", {
        r: 25,
        repeat: 3,
        yoyo: true
    }).to(".cols .col7.row4, .cols .col4.row5, .cols .col8.row2", {
        r: 25,
        repeat: 3,
        yoyo: true
    }).to(".cols .col3.row3, .cols .col4.row4, .cols .col5.row5, .cols .col6.row6, .cols .col7.row7", {
        r: 25,
        repeat: 3,
        yoyo: true
    }).to(".cols .col2.row2, .cols .col3.row6, .cols .col4.row2, .cols .col5.row1, .cols .col6.row9, .cols .col7.row3, .cols .col8.row4, .cols .col9.row8", {
        r: 25,
        repeat: 3,
        yoyo: true
    }).to(".cols .col0.row10, .cols .col1.row9, .cols .col2.row8, .cols .col3.row7, .cols .col4.row6, .cols .col5.row5, .cols .col6.row4, .cols .col7.row3, .cols .col8.row2, .cols .col9.row1, .cols .col10.row0, .cols .col4.row4, .cols .col6.row6", {
        r: 25,
        repeat: 3,
        yoyo: true
    }).to(".cols .col0.row10, .cols .col1.row9, .cols .col2.row8, .cols .col3.row7, .cols .col4.row6, .cols .col5.row5, .cols .col6.row4, .cols .col7.row3, .cols .col8.row2, .cols .col9.row1, .cols .col10.row0, .cols .col0.row0, .cols .col1.row1, .cols .col2.row2, .cols .col3.row3, .cols .col4.row4, .cols .col6.row6, .cols .col7.row7, .cols .col8.row8, .cols .col9.row9, .cols .col10.row10", {
        r: 25,
        repeat: 3,
        yoyo: true,
        stroke: highlightColor
    })
    .to(".cols .col1.row9, .cols .col2.row8, .cols .col3.row7, .cols .col4.row6, .cols .col5.row5, .cols .col6.row4, .cols .col7.row3, .cols .col8.row2, .cols .col9.row1, .cols .col9.row2, .cols .col8.row3, .cols .col7.row4, .cols .col6.row5, .cols .col5.row6, .cols .col4.row7, .cols .col3.row8, .cols .col2.row9, .cols .col8.row1, .cols .col7.row2, .cols .col6.row3, .cols .col5.row4, .cols .col4.row5, .cols .col3.row6, .cols .col2.row7, .cols .col1.row8, .cols .col4.row4, .cols .col6.row6, .cols .col3.row5, .cols .col7.row5, .cols .col8.row4, .cols .col2.row5, .cols .col5.row3, .cols .col4.row3, .cols .col2.row6 ", {
        r: 25,
        repeat: 3,
        yoyo: true
    }).to(".cols .col0.row0, .cols .col1.row1, .cols .col2.row2, .cols .col3.row3, .cols .col4.row4, .cols .col5.row5, .cols .col6.row6, .cols .col7.row7, .cols .col8.row8, .cols .col9.row9, .cols .col10.row10, .cols .col0.row1, .cols .col1.row2, .cols .col2.row3, .cols .col3.row4, .cols .col4.row5, .cols .col5.row6, .cols .col6.row7, .cols .col7.row8, .cols .col8.row9, .cols .col9.row10, .cols .col1.row0, .cols .col2.row1, .cols .col3.row2, .cols .col4.row3, .cols .col5.row4, .cols .col6.row5, .cols .col7.row6, .cols .col8.row7, .cols .col9.row8, .cols .col10.row9, .cols .col0.row2, .cols .col1.row3, .cols .col2.row4, .cols .col3.row5, .cols .col4.row6, .cols .col5.row7, .cols .col6.row8, .cols .col7.row9, .cols .col8.row10, .cols .col2.row0, .cols .col3.row1, .cols .col4.row2, .cols .col5.row3, .cols .col6.row4, .cols .col7.row5, .cols .col8.row6, .cols .col9.row7, .cols .col10.row8, .cols .col3.row0, .cols .col4.row1, .cols .col5.row2, .cols .col7.row10, .cols .col6.row9, .cols .col5.row8 ", {
        r: 25,
        repeat: 3,
        yoyo: true
    }).to(".cols .col0.row0, .cols .col1.row1, .cols .col2.row2, .cols .col3.row3, .cols .col4.row4, .cols .col5.row5, .cols .col6.row6, .cols .col7.row7, .cols .col8.row8, .cols .col9.row9, .cols .col10.row10, .cols .col0.row1, .cols .col1.row2, .cols .col2.row3, .cols .col3.row4, .cols .col4.row5, .cols .col5.row6, .cols .col6.row7, .cols .col7.row8, .cols .col8.row9, .cols .col9.row10, .cols .col1.row0, .cols .col2.row1, .cols .col3.row2, .cols .col4.row3, .cols .col5.row4, .cols .col6.row5, .cols .col7.row6, .cols .col8.row7, .cols .col9.row8, .cols .col10.row9, .cols .col0.row2, .cols .col1.row3, .cols .col2.row4, .cols .col3.row5, .cols .col4.row6, .cols .col5.row7, .cols .col6.row8, .cols .col7.row9, .cols .col8.row10, .cols .col2.row0, .cols .col3.row1, .cols .col4.row2, .cols .col5.row3, .cols .col6.row4, .cols .col7.row5, .cols .col8.row6, .cols .col9.row7, .cols .col10.row8, .cols .col3.row0, .cols .col4.row1, .cols .col5.row2, .cols .col7.row10, .cols .col6.row9, .cols .col5.row8, .cols .col1.row9, .cols .col2.row8, .cols .col3.row7, .cols .col4.row6, .cols .col5.row5, .cols .col6.row4, .cols .col7.row3, .cols .col8.row2, .cols .col9.row1, .cols .col9.row2, .cols .col8.row3, .cols .col7.row4, .cols .col6.row5, .cols .col5.row6, .cols .col4.row7, .cols .col3.row8, .cols .col2.row9, .cols .col8.row1, .cols .col7.row2, .cols .col6.row3, .cols .col5.row4, .cols .col4.row5, .cols .col3.row6, .cols .col2.row7, .cols .col1.row8, .cols .col4.row4, .cols .col6.row6, .cols .col3.row5, .cols .col7.row5, .cols .col8.row4, .cols .col2.row5, .cols .col5.row3, .cols .col4.row3, .cols .col2.row6 ", {
        r: 25,
        repeat: 3,
        yoyo: true
    })
    // bounce all circles to random r
    .to(".cols circle", {
        r: () => {
            return Math.random() * 20 + 1
        },
        repeat: 1,
        yoyo: true
    }).to(".cols circle", {
        r: () => {
            return Math.random() * 20 + 1
        },
        repeat: 1,
        yoyo: true
    }).to(".cols circle", {
        r: () => {
            return Math.random() * 20 + 1
        },
        repeat: 1,
        yoyo: true,
        stagger: 0.01
    })
    // set blob and grid visible but off screen
    .set(".grid, #blob", {
        x: (el) => {
            return el == 0 ? "-150%" : "-100%"
        },
        y: (el) => {
            return el == 0 ? "-150%" : "-100%"
        },
        opacity: 1
    }).set(".grid rect", {
        opacity: 1
    })
    // move grid back to home position and blob off the opposite corner
    .to(".grid, #blob", {
        x: (el) => {
            return el == 0 ? 0 : "90%"
        },
        y: (el) => {
            return el == 0 ? 0 : "90%"
        },
        ease: "sine.inOut",
        scale: (el) => {
            return el == 0 ? 1 : 1.5
        },
        duration: 2.5
    })
    // reset blob
    .set("#blob", {
        scale: 1,
        x: 0,
        y: 0,
        opacity: 0
    })
    // rotate grid rects
    .to(".grid rect", {
        rotation: 45,
        repeat: 1,
        yoyo: true
    }).to(".grid rect", {
        rotation: -45,
        repeat: 1,
        yoyo: true
    }).to(".grid rect", {
        rotation: (el) => {
            return el < 11 ? 30 : -45
        },
        repeat: 1,
        yoyo: true,
        transformOrigin: "bottom right"
    }).to(".grid rect", {
        rotation: (el) => {
            return el < 11 ? -30 : 45
        },
        repeat: 1,
        yoyo: true,
        transformOrigin: "bottom right"
    })
    // slide moveme rects
    .to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 10 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 10 ? 1 : randPercent();
        },
        stagger: 0.1
    })
    // slide grid rects then repeat
    .to(".grid rect", {
        height: (el) => {
            return el < 11 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 11 ? 1 : randPercent();
        },
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 10 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 10 ? 1 : randPercent();
        },
        stagger: 0.1
    }).to(".grid rect", {
        height: (el) => {
            return el < 11 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 11 ? 1 : randPercent();
        },
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 10 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 10 ? 1 : randPercent();
        },
        stagger: 0.1
    }).to(".grid rect", {
        height: (el) => {
            return el < 11 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 11 ? 1 : randPercent();
        },
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 10 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 10 ? 1 : randPercent();
        },
        stagger: 0.1,
        stroke: highlightColor
    })
    // made by accident swapping the order of (el), but keeping it for a random slide effect
    .to(".movemeV, .movemeH, .grid rect", {
        height: (el) => {
            return el < 10 ? ".1%" : el < 18 ? 1 : el < 29 ? "100%" : 1;
        },
        width: (el) => {
            return el < 10 ? 1 : el < 18 ? 0 : el < 29 ? 1 : "100%";
        },
        stagger: 0.1
    })
    // moveme rects to 0, grid rects to 100%
    .to(".movemeV, .movemeH, .grid rect", {
        height: (el) => {
            return el < 11 ? "100%" : el < 22 ? 1 : el < 31 ? ".1%" : 1;
        },
        width: (el) => {
            return el < 11 ? 1 : el < 22 ? "100%" : el < 31 ? 1 : 0;
        }
    }).set(".movemeV, .movemeH", {
        height: (el) => { return el < 10 ? 0 : 1 },
        opacity: 0,
        duration: 0.7
    })
    // move 10% w/h lines to different positions
    .set("#movemeH0", {
        height: 1,
        width: 0,
        opacity: 1,
        x: 0,
        y: 0
    }).to("#movemeH0", {
        width: "10%",
        delay: .3
    }).set("#movemeV0", {
        width: 1,
        height: 0,
        opacity: 1,
        x: () => { return .1 * w },
        y: 0
    }).to("#movemeV0", {
        height: "10%"
    }).set("#movemeH1", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .1 * w },
        y: () => { return -.2 * h }
    }).to("#movemeH1", {
        width: "10%",
        delay: .3
    }).set("#movemeV1", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .1 * h }
    }).to("#movemeV1", {
        height: "10%"
    }).set("#movemeH2", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .2 * w },
        y: () => { return -.2 * h }
    }).to("#movemeH2", {
        width: "10%",
        delay: .3
    }).set("#movemeV2", {
        width: 1,
        height: 0,
        opacity: 1,
        x: () => { return -.3 * w },
        y: () => { return .2 * h }
    }).to("#movemeV2", {
        height: "10%"
    }).set("#movemeH3", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .3 * w },
        y: () => { return -.4 * h }
    }).to("#movemeH3", {
        width: "10%",
        delay: .3
    }).set("#movemeV3", {
        width: 1,
        height: 0,
        opacity: 1,
        x: () => { return -.4 * w },
        y: () => { return .3 * h }
    }).to("#movemeV3", {
        height: "10%"
    }).set("#movemeH4", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .4 * w },
        y: () => { return -.5 * h }
    }).to("#movemeH4", {
        width: "10%",
        delay: .3
    }).set("#movemeV4", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .4 * h }
    }).to("#movemeV4", {
        height: "10%"
    }).set("#movemeH5", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .4 * w },
        y: () => { return -.5 * h }
    }).to("#movemeH5", {
        width: "10%",
        delay: .3
    }).set("#movemeV5", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .4 * h }
    }).to("#movemeV5", {
        height: "10%"
    }).set("#movemeH6", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .3 * w },
        y: () => { return -.4 * h }
    }).to("#movemeH6", {
        width: "10%",
        delay: .3
    }).set("#movemeV6", {
        width: 1,
        height: 0,
        opacity: 1,
        x: () => { return -.4 * w },
        y: () => { return .3 * h }
    }).to("#movemeV6", {
        height: "10%"
    }).set("#movemeH7", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .9 * w },
        y: () => { return -.1 * h }
    }).to("#movemeH7", {
        width: "10%",
        delay: .3
    }).set("#movemeV7", {
        width: 1,
        height: 0,
        opacity: 1,
        x: () => { return -.6 * w },
        y: () => { return .7 * h }
    }).to("#movemeV7", {
        height: "10%"
    }).set("#movemeH8", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .8 * w },
        y: () => { return -.4 * h }
    }).to("#movemeH8", {
        width: "10%",
        delay: .3
    }).set("#movemeV8", {
        width: 1,
        height: 0,
        opacity: 1,
        x: () => { return -.1 * w },
        y: () => { return .3 * h }
    }).to("#movemeV8", {
        height: "10%"
    }).set("#movemeH9", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .5 * w },
        y: () => { return -.4 * h }
    }).to("#movemeH9", {
        width: "10%",
        delay: .3
    }).set("#movemeV9", {
        width: 1,
        height: 0,
        opacity: 1,
        x: () => { return -.2 * w },
        y: () => { return .3 * h }
    }).to("#movemeV9", {
        height: "10%"
    }).to(".movemeV, .movemeH", {
        opacity: 0,
        width: (el) => {
            return el < 10 ? 1 : 0
        },
        height: (el) => {
            return el < 10 ? ".1%" : 1
        }
    })
    // zig zag diag
    .set("#movemeH0", {
        height: 1,
        width: 0,
        opacity: 1,
        x: 0,
        y: () => { return -.1 * h }
    }).to("#movemeH0", {
        width: "10%",
        duration: .1
    }).set("#movemeV0", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: 0
    }).to("#movemeV0", {
        height: "10%",
        duration: .1
    }).set("#movemeH1", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .1 * w },
        y: () => { return -.1 * h }
    }).to("#movemeH1", {
        width: "10%",
        duration: .1
    }).set("#movemeV1", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .1 * h }
    }).to("#movemeV1", {
        height: "10%",
        duration: .1
    }).set("#movemeH2", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .2 * w },
        y: () => { return -.1 * h }
    }).to("#movemeH2", {
        width: "10%",
        duration: .1
    }).set("#movemeV2", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .2 * h }
    }).to("#movemeV2", {
        height: "10%",
        duration: .1
    }).set("#movemeH3", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .3 * w },
        y: () => { return -.1 * h },
        duration: 0.2
    }).to("#movemeH3", {
        width: "10%",
        duration: .1
    }).set("#movemeV3", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .3 * h }
    }).to("#movemeV3", {
        height: "10%",
        duration: .1
    }).set("#movemeH4", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .4 * w },
        y: () => { return -.1 * h }
    }).to("#movemeH4", {
        width: "10%",
        duration: .1
    }).set("#movemeV4", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .4 * h }
    }).to("#movemeV4", {
        height: "10%",
        duration: .1
    }).set("#movemeH5", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .5 * w },
        y: () => { return -.1 * h }
    }).to("#movemeH5", {
        width: "10%",
        duration: .1
    }).set("#movemeV5", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .5 * h }
    }).to("#movemeV5", {
        height: "10%",
        duration: .1
    }).set("#movemeH6", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .6 * w },
        y: () => { return -.1 * h }
    }).to("#movemeH6", {
        width: "10%",
        duration: .1
    }).set("#movemeV6", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .6 * h }
    }).to("#movemeV6", {
        height: "10%",
        duration: .1
    }).set("#movemeH7", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .7 * w },
        y: () => { return -.1 * h }
    }).to("#movemeH7", {
        width: "10%",
        duration: .1
    }).set("#movemeV7", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .7 * h }
    }).to("#movemeV7", {
        height: "10%",
        duration: .1
    }).set("#movemeH8", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .8 * w },
        y: () => { return -.1 * h }
    }).to("#movemeH8", {
        width: "10%",
        duration: .1
    }).set("#movemeV8", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .8 * h }
    }).to("#movemeV8", {
        height: "10%",
        duration: .1
    }).set("#movemeH9", {
        height: 1,
        width: 0,
        opacity: 1,
        x: () => { return .9 * w },
        y: () => { return -.1 * h }
    }).to("#movemeH9", {
        width: "10%",
        duration: .1
    }).set("#movemeV9", {
        width: 1,
        height: 0,
        opacity: 1,
        x: 0,
        y: () => { return .9 * h }
    }).to("#movemeV9", {
        height: "10%",
        duration: .1
    })
    // all to original x,y
    .to(".movemeV, .movemeH", {
        x: 0,
        y: 0
    })
    // to bottom right
    .to(".movemeV, .movemeH", {
        x: (el) => {
            return el < 10 ? 0 : .9 * w
        },
        y: (el) => {
            return el < 10 ? .9 * h : 0
        },
        repeat: 1,
        yoyo: true
    })
    // to 100% w/h
    .to(".movemeV, .movemeH", {
        width: (el) => {
            return el < 10 ? 1 : "100%"
        },
        height: (el) => {
            return el < 10 ? "100%" : 1
        }
    })
    // to 0 w/h
    .to(".movemeV, .movemeH", {
        width: (el) => {
            return el < 10 ? 1 : ".1%"
        },
        height: (el) => {
            return el < 10 ? ".1%" : 1
        },
        x: () => {
            return .5 * w;
        },
        y: (el) => {
            return .5 * h;
        },
    })
    .set(".movemeV, .movemeH", {
        width: 0,
        height: 0,
        x: 0,
        y: 0
    })
    // grid opacity 0
    .to(".grid", {
        opacity: 0
    })
tl.play(189);