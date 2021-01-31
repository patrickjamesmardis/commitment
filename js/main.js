let tl = gsap.timeline();

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
