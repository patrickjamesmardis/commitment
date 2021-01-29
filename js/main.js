const mainTag = document.querySelector("main");
const rowTags = document.querySelectorAll("section.row");
let count = 0;

let randColor = (randR, randG, randB) => {
    let r, g, b;
    randR ? r = Math.floor((Math.random() * 256)) : r = 50;
    randG ? g = Math.floor((Math.random() * 256)) : g = 0;
    randB ? b = Math.floor((Math.random() * 256)) : b = 100;
    return `rgb(${r},${g},${b})`;
}
rowTags.forEach(row => {
    const colorMode = Math.floor(Math.random() * 3);
    for (let i = 0; i < 100; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        const classID = "pixel" + (i + 1);
        div.classList.add(classID);
        switch (colorMode) {
            // case 0:
            //     div.style.backgroundColor = randColor(true, false, false);
            //     break;
            // case 1:
            //     div.style.backgroundColor = randColor(false, true, false);
            //     break;
            // case 2:
            //     div.style.backgroundColor = randColor(false, false, true);
            //     break;
        }
        row.appendChild(div);

    }
    row.style.top = count + "vh";
    // row.style.backgroundColor = randColor(true, true, true);
    count++;
});
