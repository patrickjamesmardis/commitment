let tl = gsap.timeline();
let delay = 0;
let position = 0;
tl.set("circle", { opacity: 0 });

// tl.set(".rows .row5.col5", {
//     r: 10
// }).to(".rows .row5.col5", {
//     opacity: 1
// }).to(".rows .row5.col5", {
//     r: 100,
//     repeat: 5,
//     yoyo: true,
//     duration: 1.5,
//     delay: .3,
//     repeatDelay: .3,
//     ease: "circ.inout"
// }).to(".rows .row5.col5", {
//     r: 1,
//     duration: .16,
//     opacity: 0
// }).to(".rows .row5", {
//     opacity: 1,
//     stagger: 0.25
// });

// tl.set(".rows .row4, .rows .row6", {
//     cy: "50%"
// }).to(".rows .row4, .rows .row6", {
//     cy: (el) => { // passing el in gives an index of the element. el 0 - 10 are row 4, 11 - 21 are row 6
//         return el < 11 ? "40%" : "60%";
//     },
//     opacity: 1
// }).set(".rows .row3, .rows .row7", { // el 0 - 10 are row 3, 11 - 21 are row 7
//     cy: (el) => {
//         return el < 11 ? "40%" : "60%";
//     }
// }).to(".rows .row3, .rows .row7", {
//     cy: (el) => {
//         return el < 11 ? "30%" : "70%";
//     },
//     opacity: 1,

// }).set(".rows .row2, .rows .row8", {// el 0 - 10 are row 2, 11 - 21 are row 8
//     cy: (el) => {
//         return el < 11 ? "30%" : "70%";
//     }
// }).to(".rows .row2, .rows .row8", {
//     cy: (el) => {
//         return el < 11 ? "20%" : "80%";
//     },
//     opacity: 1
// }).set(".rows .row1, .rows .row9", {// el 0 - 10 are row 1, 11 - 21 are row 9
//     cy: (el) => {
//         return el < 11 ? "20%" : "80%";
//     }
// }).to(".rows .row1, .rows .row9", {
//     cy: (el) => {
//         return el < 11 ? "10%" : "90%";
//     },
//     opacity: 1
// }).set(".rows .row0, .rows .row10", {// el 0 - 10 are row 0, 11 - 21 are row 10
//     cy: (el) => {
//         return el < 11 ? "10%" : "90%";
//     }
// }).to(".rows .row0, .rows .row10", {
//     cy: (el) => {
//         return el < 11 ? "0%" : "100%";
//     },
//     opacity: 1
// }).to(".rows circle", {
//     cy: 0,
//     duration: 1.5
// }).to(".rows circle", {
//     cy: "100%",
//     duration: 1.5,
//     delay: (el) => { // 11 circles makes a row
//         delay = (el % 11 == 0) ? delay + .01 : delay;
//         return delay;
//     }
// }).to(".rows circle", {
//     cy: (el) => {
//         position = (el % 11 == 0) ? position + 10 : position;
//         return position + "%";
//     },
//     duration: 1.5
// });

// delay = 0;
// position = 0;

// tl.to("circle", {
//     cx: 0
// }).set(".cols circle", {
//     opacity: 1
// }).set(".rows circle", {
//     opacity: 0
// }).to(".cols circle", {
//     cx: "100%",
//     duration: 1.5,
//     delay: (el) => {
//         delay = (el % 11 == 0) ? delay + .01 : delay;
//         return delay;
//     }
// }).to(".cols circle", {
//     cx: (el) => {
//         position = (el % 11 == 0) ? position - 10 : position;
//         return position + "%";
//     },
//     duration: 1.5
// });


// for (let i = 0; i < 30; i++) {
//     let rand1 = Math.floor(Math.random() * 10);
//     let rand2 = Math.floor(Math.random() * 10);
//     tl.to(`.cols .row${rand1}.col${rand2}`, {
//         stroke: "#FF5A35",
//         duration: 0.1
//     });
// }
// tl.to(".cols circle", {
//     stroke: "#dfdfdf"
// });
// tl.set("rect", {
//     width: 1,
//     height: 1
// }).to(".vertical, .horizontal", {
//     height: (el) => {
//         return el < 11 ? "100%" : 1;
//     },
//     width: (el) => {
//         return el < 11 ? 1 : "100%";
//     }
// }).to(".cols circle", {
//     opacity: 0
// });
// tl.set(".grid rect", {
//     opacity: 0
// });

// let randPercent = () => {
//     return (Math.floor(Math.random() * 10) * 10) + "%";
// }
// tl.set(".moveme1, .moveme2", {
//     width: 1,
//     height: 1
// }).to(".moveme1, .moveme2", {
//     height: (el) => {
//         return el < 7 ? randPercent() : 1;
//     },
//     width: (el) => {
//         return el < 7 ? 1 : randPercent();
//     },
//     stagger: 0.1
// }).to(".grid rect", {
//     opacity: 1
// }).to(".grid rect", {
//     color: "#FF5A36"
// }).to(".moveme1, .moveme2", {
//     width: 1,
//     height: 1,
//     stagger: 0.1
// }).to(".moveme1, .moveme2", {
//     height: (el) => {
//         return el < 7 ? randPercent() : 1;
//     },
//     width: (el) => {
//         return el < 7 ? 1 : randPercent();
//     },
//     stroke: "#FF5A36",
//     stagger: 0.1
// }).to(".moveme1, .moveme2", {
//     width: 1,
//     height: 1,
//     stagger: 0.1
// }).to(".moveme1, .moveme2", {
//     height: (el) => {
//         return el < 7 ? randPercent() : 1;
//     },
//     width: (el) => {
//         return el < 7 ? 1 : randPercent();
//     },
//     stroke: "#FF5A36",
//     stagger: 0.1
// }).to(".moveme1, .moveme2", {
//     opacity: 0,
//     yoyo: true,
//     repeat: 4,
//     duration: 1,
//     repeatDelay: 0.3
// }).to(".grid .vertical", {
//     height: 0,
//     stagger: 0.1
// }).to(".grid .horizontal", {
//     width: 0,
//     stagger: 0.1
// });
let rad = 0;
let x = 0;
let y = 0;
let xPos = [0, 0, 0, 0, 0, 0, 0, 0];
let yPos = [0, 0, 0, 0, 0, 0, 0, 0];
let calcCircleXPosition = (radius, index) => {
    for (let i = 0; i < 8; i++) {
        x = 50 + (radius * Math.cos(rad));
        rad += Math.PI / 4;
        xPos[i] = x + "%";
    }
    return xPos[index];
}
let calcCircleYPosition = (radius, index) => {
    for (let i = 0; i < 8; i++) {
        y = 50 + (radius * Math.sin(rad));
        rad += Math.PI / 4;
        yPos[i] = y + "%";
    }
    return yPos[index];
}


tl.set(".rows .row0.col0, .rows .row0.col1, .rows .row0.col2, .rows .row0.col3, .rows .row0.col4, .rows .row0.col5, .rows .row0.col6, .rows .row0.col7", {
    cx: (el) => { return calcCircleXPosition(10, el); },
    cy: (el) => { return calcCircleYPosition(10, el); }
}).to(".rows .row0.col0, .rows .row0.col1, .rows .row0.col2, .rows .row0.col3, .rows .row0.col4, .rows .row0.col5, .rows .row0.col6, .rows .row0.col7", {
    opacity: 1,
    stagger: 0.1
}).to(".rows .row0.col0, .rows .row0.col1, .rows .row0.col2, .rows .row0.col3, .rows .row0.col4, .rows .row0.col5, .rows .row0.col6, .rows .row0.col7", {
    cx: (el) => { return calcCircleXPosition(25, el); },
    cy: (el) => { return calcCircleYPosition(25, el); }
}).to(".rows .row0.col0, .rows .row0.col1, .rows .row0.col2, .rows .row0.col3, .rows .row0.col4, .rows .row0.col5, .rows .row0.col6, .rows .row0.col7", {
    cx: (el) => { return calcCircleXPosition(15, el); },
    cy: (el) => { return calcCircleYPosition(15, el); }
}).to(".rows .row0.col0, .rows .row0.col1, .rows .row0.col2, .rows .row0.col3, .rows .row0.col4, .rows .row0.col5, .rows .row0.col6, .rows .row0.col7", {
    cx: (el) => { return calcCircleXPosition(35, el); },
    cy: (el) => { return calcCircleYPosition(35, el); }
}).to(".rows .row0.col0, .rows .row0.col1, .rows .row0.col2, .rows .row0.col3, .rows .row0.col4, .rows .row0.col5, .rows .row0.col6, .rows .row0.col7", {
    cx: (el) => { return calcCircleXPosition(0, el); },
    cy: (el) => { return calcCircleYPosition(0, el); },
    opacity: 0,
    stagger: 0.03
});

tl.set(".rows .row0.col0, .rows .row0.col1, .rows .row0.col2, .rows .row0.col3, .rows .row0.col4, .rows .row0.col5, .rows .row0.col6, .rows .row0.col7", {
    cx: (el) => {
        return (el * 10) + "%";
    },
    cy: 0,
}).to(".rows circle", {
    opacity: 1
});

