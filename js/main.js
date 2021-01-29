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

// let timeline = gsap.timeline();
// let columns = [document.querySelectorAll(".pixel1"), document.querySelectorAll(".pixel2"), document.querySelectorAll(".pixel3"), document.querySelectorAll(".pixel4"), document.querySelectorAll(".pixel5"), document.querySelectorAll(".pixel6"), document.querySelectorAll(".pixel7"), document.querySelectorAll(".pixel8"), document.querySelectorAll(".pixel9"), document.querySelectorAll(".pixel10"), document.querySelectorAll(".pixel11"), document.querySelectorAll(".pixel12"), document.querySelectorAll(".pixel13"), document.querySelectorAll(".pixel14"), document.querySelectorAll(".pixel15"), document.querySelectorAll(".pixel16"), document.querySelectorAll(".pixel17"), document.querySelectorAll(".pixel18"), document.querySelectorAll(".pixel19"), document.querySelectorAll(".pixel20"), document.querySelectorAll(".pixel21"), document.querySelectorAll(".pixel22"), document.querySelectorAll(".pixel23"), document.querySelectorAll(".pixel24"), document.querySelectorAll(".pixel25"), document.querySelectorAll(".pixel26"), document.querySelectorAll(".pixel27"), document.querySelectorAll(".pixel28"), document.querySelectorAll(".pixel29"), document.querySelectorAll(".pixel30"), document.querySelectorAll(".pixel31"), document.querySelectorAll(".pixel32"), document.querySelectorAll(".pixel33"), document.querySelectorAll(".pixel34"), document.querySelectorAll(".pixel35"), document.querySelectorAll(".pixel36"), document.querySelectorAll(".pixel37"), document.querySelectorAll(".pixel38"), document.querySelectorAll(".pixel39"), document.querySelectorAll(".pixel40"), document.querySelectorAll(".pixel41"), document.querySelectorAll(".pixel42"), document.querySelectorAll(".pixel43"), document.querySelectorAll(".pixel44"), document.querySelectorAll(".pixel45"), document.querySelectorAll(".pixel46"), document.querySelectorAll(".pixel47"), document.querySelectorAll(".pixel48"), document.querySelectorAll(".pixel49"), document.querySelectorAll(".pixel50"), document.querySelectorAll(".pixel51"), document.querySelectorAll(".pixel52"), document.querySelectorAll(".pixel53"), document.querySelectorAll(".pixel54"), document.querySelectorAll(".pixel55"), document.querySelectorAll(".pixel56"), document.querySelectorAll(".pixel57"), document.querySelectorAll(".pixel58"), document.querySelectorAll(".pixel59"), document.querySelectorAll(".pixel60"), document.querySelectorAll(".pixel61"), document.querySelectorAll(".pixel62"), document.querySelectorAll(".pixel63"), document.querySelectorAll(".pixel64"), document.querySelectorAll(".pixel65"), document.querySelectorAll(".pixel66"), document.querySelectorAll(".pixel67"), document.querySelectorAll(".pixel68"), document.querySelectorAll(".pixel69"), document.querySelectorAll(".pixel70"), document.querySelectorAll(".pixel71"), document.querySelectorAll(".pixel72"), document.querySelectorAll(".pixel73"), document.querySelectorAll(".pixel74"), document.querySelectorAll(".pixel75"), document.querySelectorAll(".pixel76"), document.querySelectorAll(".pixel77"), document.querySelectorAll(".pixel78"), document.querySelectorAll(".pixel79"), document.querySelectorAll(".pixel80"), document.querySelectorAll(".pixel81"), document.querySelectorAll(".pixel82"), document.querySelectorAll(".pixel83"), document.querySelectorAll(".pixel84"), document.querySelectorAll(".pixel85"), document.querySelectorAll(".pixel86"), document.querySelectorAll(".pixel87"), document.querySelectorAll(".pixel88"), document.querySelectorAll(".pixel89"), document.querySelectorAll(".pixel90"), document.querySelectorAll(".pixel91"), document.querySelectorAll(".pixel92"), document.querySelectorAll(".pixel93"), document.querySelectorAll(".pixel94"), document.querySelectorAll(".pixel95"), document.querySelectorAll(".pixel96"), document.querySelectorAll(".pixel97"), document.querySelectorAll(".pixel98"), document.querySelectorAll(".pixel99"), document.querySelectorAll(".pixel100")]
// let delay = 0.0;
// for (let i = 0; i < columns.length; i++) {
//     gsap.set(columns[i], { opacity: 0, rotation: () => Math.random() * 180 });
//     gsap.to(columns[i], { opacity: 1, rotation: 0, duration: 1.5, delay: delay });
//     delay += 0.07;
// }