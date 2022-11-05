const btn = document.querySelector('button');
const h1 = document.querySelector('h1')
btn.addEventListener('click', function () {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

const buttons = document.querySelectorAll('#btnS');
for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h2s = document.querySelectorAll('h2');
for (let h2 of h2s) {
    h2.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}

