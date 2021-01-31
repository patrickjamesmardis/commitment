let tl = gsap.timeline();

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

// function to get a random percent divisible by 10 (0, 10, 20, ... 100)
let randPercent = () => {
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
    });
// set random dots to orange
for (let i = 0; i < 30; i++) {
    let rand1 = Math.floor(Math.random() * 10);
    let rand2 = Math.floor(Math.random() * 10);
    tl.to(`.cols .row${rand1}.col${rand2}`, {
        stroke: "#FF5A35",
        duration: 0.1
    });
}
// all back to white
tl.to(".cols circle", {
    stroke: "#dfdfdf"
})
    // connect the grid
    .set(".grid rect", {
        width: 1,
        height: 1
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
        width: 1,
        height: 1
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
    // slide moveme rects again and change to orange, then slide again
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
        stroke: "#FF5A36",
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
        stroke: "#FF5A36",
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
        stroke: "#FF5A36",
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
        stroke: "#FF5A36",
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
        stroke: "#FF5A36",
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
        repeat: 4,
        ease: "power1.inOut",
        repeatDelay: 0.01
    }).to("#dashCircle", {
        r: 0,
        opacity: 0
    }).to("#dashCircle", {
        r: "100%",
        opacity: 1,
        duration: 1.5
    });