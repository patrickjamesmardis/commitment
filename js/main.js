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
// set random dots to highlight color
const randomHighlight = () => {
    for (let i = 0; i < 30; i++) {
        tl.to(`.cols .row${Math.floor(Math.random() * 11)}.col${Math.floor(Math.random() * 11)}`, {
            stroke: highlightColor,
            duration: 0.1,
        });
    }
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
    // reset center circle then stagger center line opacity
    .set(".rows .row5.col5", {
        r: 1,
        opacity: 0
    }).to(".rows .row5", {
        opacity: 1,
        stagger: 0.25
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
    .call(randomHighlight())
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
            return el < 7 ? 0 : 1;
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
            return el < 7 ? 1 : 0;
        },
        height: (el) => {
            return el < 7 ? 0 : 1;
        }
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 7 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 7 ? 1 : randPercent();
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
            return el < 7 ? 1 : 0;
        },
        height: (el) => {
            return el < 7 ? 0 : 1;
        },
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 7 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 7 ? 1 : randPercent();
        },
        stroke: highlightColor,
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        width: (el) => {
            return el < 7 ? 1 : 0;
        },
        height: (el) => {
            return el < 7 ? 0 : 1;
        },
        stagger: 0.1,
    }).set(".movemeV, .movemeH", {
        stroke: "#dfdfdf"
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 7 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 7 ? 1 : randPercent();
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
        height: 0,
        stagger: 0.1
    }).to(".grid .horizontal", {
        width: 0,
        stagger: 0.1
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
            return el < 7 ? 1 : 0;
        },
        height: (el) => {
            return el < 7 ? 0 : 1;
        }
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 7 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 7 ? 1 : randPercent();
        },
        stroke: highlightColor,
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        width: (el) => {
            return el < 7 ? 1 : 0;
        },
        height: (el) => {
            return el < 7 ? 0 : 1;
        },
        stagger: 0.1
    }).set(".movemeV, .movemeH", {
        stroke: "#dfdfdf"
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 7 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 7 ? 1 : randPercent();
        },
        stroke: highlightColor,
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        width: (el) => {
            return el < 7 ? 1 : 0;
        },
        height: (el) => {
            return el < 7 ? 0 : 1;
        },
        stagger: 0.1
    }).set(".movemeV, .movemeH", {
        stroke: "#dfdfdf"
    }).to(".movemeV, .movemeH", {
        height: (el) => {
            return el < 7 ? randPercent() : 1;
        },
        width: (el) => {
            return el < 7 ? 1 : randPercent();
        },
        stroke: highlightColor,
        stagger: 0.1
    }).to(".movemeV, .movemeH", {
        width: (el) => {
            return el < 7 ? 1 : 0;
        },
        height: (el) => {
            return el < 7 ? 0 : 1;
        },
        stagger: 0.1
    }).set(".movemeV, .movemeH", {
        stroke: "#dfdfdf"
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
    }).to("#dashCircle", {
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
    // highlight random rows, stagger to center
    .to(`.cols .row${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        stagger: 0.1,
        cx: "50%"
    }).to(`.cols .row${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        stagger: -0.1,
        cx: "50%"
    }).to(`.cols .row${Math.floor(Math.random() * 11)}`, {
        stroke: highlightColor,
        stagger: -0.1,
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
    // reset back to grid
    .to(".cols circle", {
        cx: (el) => {
            position5 = (el % 11 == 0) ? 0 : position5 + 10;
            return position5 + "%";
        },
        cy: (el) => {
            position6 = (el % 11 == 0) ? position6 + 10 : position6;
            return position6 + "%";
        }
    }).set("#movemeV0", {
        x: () => {
            return (window.innerWidth / 2) - (.2 * window.innerWidth);
        },
        y: () => {
            return (window.innerHeight / 2) - (.2 * window.innerHeight);
        },
        width: 1,
        height: 1
    }).to("#movemeV0", {
        width: "40%",
        height: "40%",
        duration: 1.5,
        stroke: highlightColor,
        strokeWidth: 15,
    }).to("#movemeV0", {
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
    }).to("#movemeV0", {
        rotation: 180,
        duration: 1.5,
        opacity: 0
    }).set("#movemeV0", {
        rotation: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }).to(".cols", {
        transformOrigin: "center center",
        rotation: 180,
        duration: 1.5
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
        x: 0,
        y: 0
    })

tl.play(107)