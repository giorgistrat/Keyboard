// Global variables and appending

const keyBoardScreen = document.createElement('div');
const outputScreen = document.createElement('textarea');
const h1 = document.createElement('h1');
h1.innerHTML = 'Keyboard is based on MAC OS System';
document.body.appendChild(h1);
document.body.appendChild(outputScreen);
document.body.appendChild(keyBoardScreen);

keyBoardScreen.className = 'keyboard';

const row_1 = document.createElement('div');
row_1.className = 'row';
const row_2 = document.createElement('div');
row_2.className = 'row';
const row_3 = document.createElement('div');
row_3.className = 'row';
const row_4 = document.createElement('div');
row_4.className = 'row';
const row_5 = document.createElement('div');
row_5.className = 'row';

keyBoardScreen.append(row_1, row_2, row_3, row_4, row_5);


const row1Btns = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const row2Btns = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'fn'];
const row3Btns = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const row4Btns = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
const row5Btns = ['Ctrl', 'alt', 'cmd', '⎵', 'alt', '◄', '▼', '►', 'cmd'];


row1Btns.forEach((el) => {
    let btn = document.createElement('button');
    btn.className = 'btnKey';
    btn.innerHTML = el;
    row_1.appendChild(btn);
    if (btn.innerHTML === 'Backspace') {
        btn.classList.add('backspace');
    }
});

row2Btns.forEach((el) => {
    let btn = document.createElement('button');
    btn.className = 'btnKey';
    btn.innerHTML = el;
    row_2.appendChild(btn);
    if (btn.innerHTML === 'Tab') {
        btn.classList.add('tab');
    }
});

row3Btns.forEach((el) => {
    let btn = document.createElement('button');
    btn.className = 'btnKey';
    btn.innerHTML = el;
    row_3.appendChild(btn);
    if (btn.innerHTML === 'Enter') {
        btn.classList.add('enter');
    }
    if (btn.innerHTML === 'CapsLock') {
        btn.classList.add('cap');
    }
});

row4Btns.forEach((el) => {
    let btn = document.createElement('button');
    btn.className = 'btnKey';
    btn.innerHTML = el;
    row_4.appendChild(btn);
});

row5Btns.forEach((el) => {
    let btn = document.createElement('button');
    btn.className = 'btnKey';
    btn.innerHTML = el;
    row_5.appendChild(btn);
    if (btn.innerHTML === '⎵') {
        btn.classList.add('space');
    }
});


// Creating Keyboard class

class Keyboard {
    constructor(output) {
        this.output = output;
        this.defineScreenStr();
    }

    defineScreenStr() {
        this.mainOutputScreen = '';
    }

    lineBreak() {
        this.mainOutputScreen += '\r\n';
    }

    addSpace() {
        this.mainOutputScreen += '    ';
    }

    addSingleSpace() {
        this.mainOutputScreen += ' ';
    }

    deleteLastKey() {
        this.mainOutputScreen = this.mainOutputScreen.slice(0, -1);
    }

    capitalize() {
        allBtn.forEach((btn) => {
            if (btn.innerHTML === 'Tab' || btn.innerHTML === 'fn' || btn.innerHTML === 'CapsLock' || btn.innerHTML == 'Shift' || btn.innerHTML === 'Ctrl' || btn.innerHTML === 'alt' || btn.innerHTML === 'cmd' || btn.innerHTML === 'Enter' || btn.innerHTML === 'Backspace' || btn.innerHTML === '⎵') return;

            if (btn.innerHTML[0] === btn.innerHTML[0].toUpperCase()) {
                return btn.innerHTML = btn.innerHTML[0].toLowerCase();
            }
            return btn.innerHTML = btn.innerHTML[0].toUpperCase();
        });
    }

    addKey(btn) {
        if (btn === 'Tab' || btn === 'fn' || btn === 'CapsLock' || btn == 'Shift' || btn === 'Ctrl' || btn === 'alt' || btn === 'cmd' || btn === 'Enter' || btn === 'Backspace' || btn === '⎵') return;
        this.mainOutputScreen += btn;
    }

    displayScr() {
        this.output.innerHTML = this.mainOutputScreen;
    }
}

const keyboardInh = new Keyboard(outputScreen);

const allBtn = document.querySelectorAll('.btnKey');
const backspaceBtn = document.querySelector('.backspace');
const spaceBtn = document.querySelector('.space');
const tabBtn = document.querySelector('.tab');
const enterBtn = document.querySelector('.enter');
const capsLockBtn = document.querySelector('.cap');


// Adding listeners to buttons

allBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        keyboardInh.addKey(btn.innerText);
        keyboardInh.displayScr();
    });
});

backspaceBtn.addEventListener('click', () => {
    keyboardInh.deleteLastKey();
    keyboardInh.displayScr();
});

spaceBtn.addEventListener('click', () => {
    keyboardInh.addSingleSpace();
    keyboardInh.displayScr();
});

tabBtn.addEventListener('click', () => {
    keyboardInh.addSpace();
    keyboardInh.displayScr();
});

enterBtn.addEventListener('click', () => {
    keyboardInh.lineBreak();
    keyboardInh.displayScr();
});

capsLockBtn.addEventListener('click', () => {
    keyboardInh.capitalize();
});

