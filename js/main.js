const mainTag = document.querySelector("main");
let makeBoxes = (numSqaures, startW, startH, increaseW, increaseH, moveW, moveH, color) => {
    let w = startW;
    let h = startH;
    let totalW = 0;
    let totalH = 0;
    for (let i = 0; i < numSqaures; i++) {
        const div = document.createElement("div");
        div.style.width = w + "vw";
        div.style.height = h + "vh";
        div.style.left = totalW + "vw";
        div.style.top = totalH + "vh";
        div.style.backgroundColor = color;
        mainTag.appendChild(div);
        moveW ? totalW += w : totalW = totalW;
        moveH ? totalH += h : totalH = totalH;
        increaseW ? w += increaseW : w = w;
        increaseH ? h += increaseH : h = h;
    }
}

makeBoxes(10, 10, 10, 0, 1, true, false, "#FF5A36");
