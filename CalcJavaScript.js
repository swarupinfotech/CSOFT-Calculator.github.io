let outputScreen = document.querySelector('.screen input');
mode = 'calc';

function insert(number) {
    outputScreen.value += number;
    if (mode == 'equal') {
        outputScreen.value = '';
        outputScreen.value += number;
        mode = 'calc';
    };
};
function clr() {
    outputScreen.value = '';
};

function dlt() {
    outputScreen.value = outputScreen.value.slice(0, -1);
    if (mode == 'equal') {
        outputScreen.value
            = '';
    };
};

function calc() {
    try {
        outputScreen.value = eval(outputScreen.value);
        mode = 'equal';
    } catch (err) {
        outputScreen.value = 'INVALID';
        mode = 'equal';
    };
};


let blueTheme = document.querySelector('.blue'),
    redTheme = document.querySelector('.red'),
    orangeTheme = document.querySelector('.orange'),
    greyTheme = document.querySelector('.grey'),
    cyanTheme = document.querySelector('.cyan'),
    pinkTheme = document.querySelector('.pink'),
    purpleTheme = document.querySelector('.purple'),

    yellowTheme = document.querySelector('.yellow'),
    greenTheme = document.querySelector('.green'),
    whiteTheme = document.querySelector('.white'),
    skyblueTheme = document.querySelector('.skyblue'),
    blackTheme = document.querySelector('.black'),
    defaultTheme = document.querySelector('.default');

blueTheme.onclick = function () {
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('purple');
    document.body.classList.remove('pink');
    document.body.classList.remove('grey');
    document.body.classList.remove('cyan');
    document.body.classList.remove('yellow');
    document.body.classList.remove('green');
    document.body.classList.remove('brown');
    document.body.classList.remove('white');
    document.body.classList.remove('skyblue');
    document.body.classList.remove('black');
    document.body.classList.add('blue');
};

redTheme.onclick = function () {
    document.body.classList.remove('orange');
    document.body.classList.remove('purple');
    document.body.classList.remove('blue');
    document.body.classList.remove('pink');
    document.body.classList.remove('grey');
    document.body.classList.remove('cyan');
    document.body.classList.remove('yellow');
    document.body.classList.remove('green');
    document.body.classList.remove('brown');
    document.body.classList.remove('white');
    document.body.classList.remove('skyblue');
    document.body.classList.remove('black');
    document.body.classList.add('red');
};
orangeTheme.onclick = function () {
    document.body.classList.remove('red');
    document.body.classList.remove('purple');
    document.body.classList.remove('blue');
    document.body.classList.remove('pink');
    document.body.classList.remove('grey');
    document.body.classList.remove('cyan');
    document.body.classList.remove('yellow');
    document.body.classList.remove('green');
    document.body.classList.remove('brown');
    document.body.classList.remove('white');
    document.body.classList.remove('skyblue');
    document.body.classList.remove('black');
    document.body.classList.add('orange');
};
greyTheme.onclick = function () {
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('purple');
    document.body.classList.remove('blue');
    document.body.classList.remove('pink');
    document.body.classList.remove('cyan');
    document.body.classList.remove('yellow');
    document.body.classList.remove('green');
    document.body.classList.remove('brown');
    document.body.classList.remove('white');
    document.body.classList.remove('skyblue');
    document.body.classList.remove('black');
    document.body.classList.add('grey');
};
cyanTheme.onclick = function () {
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('purple');
    document.body.classList.remove('blue');
    document.body.classList.remove('pink');
    document.body.classList.remove('grey');
    document.body.classList.remove('yellow');
    document.body.classList.remove('green');
    document.body.classList.remove('brown');
    document.body.classList.remove('white');
    document.body.classList.remove('skyblue');
    document.body.classList.remove('black');
    document.body.classList.add('cyan');
};
pinkTheme.onclick = function () {
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('purple');
    document.body.classList.remove('blue');
    document.body.classList.remove('grey');
    document.body.classList.remove('cyan');
    document.body.classList.remove('yellow');
    document.body.classList.remove('green');
    document.body.classList.remove('brown');
    document.body.classList.remove('white');
    document.body.classList.remove('skyblue');
    document.body.classList.remove('black');
    document.body.classList.add('pink');
};
purpleTheme.onclick = function () {
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('blue');
    document.body.classList.remove('pink');
    document.body.classList.remove('grey');
    document.body.classList.remove('cyan');
    document.body.classList.remove('yellow');
    document.body.classList.remove('green');
    document.body.classList.remove('brown');
    document.body.classList.remove('white');
    document.body.classList.remove('skyblue');
    document.body.classList.remove('black');
    document.body.classList.add('purple');
};
yellowTheme.onclick = function () {
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('blue');
    document.body.classList.remove('pink');
    document.body.classList.remove('grey');
    document.body.classList.remove('cyan');
    document.body.classList.remove('purple');
    document.body.classList.remove('green');
    document.body.classList.remove('brown');
    document.body.classList.remove('white');
    document.body.classList.remove('skyblue');
    document.body.classList.remove('black');
    document.body.classList.add('yellow');
};
greenTheme.onclick = function () {
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('blue');
    document.body.classList.remove('pink');
    document.body.classList.remove('grey');
    document.body.classList.remove('cyan');
    document.body.classList.remove('purple');
    document.body.classList.remove('yellow');
    document.body.classList.remove('brown');
    document.body.classList.remove('white');
    document.body.classList.remove('skyblue');
    document.body.classList.remove('black');
    document.body.classList.add('green');
};

whiteTheme.onclick = function () {
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('blue');
    document.body.classList.remove('pink');
    document.body.classList.remove('grey');
    document.body.classList.remove('cyan');
    document.body.classList.remove('purple');
    document.body.classList.remove('yellow');
    document.body.classList.remove('green');
    document.body.classList.remove('brown');
    document.body.classList.remove('skyblue');
    document.body.classList.remove('black');
    document.body.classList.add('white');
};
skyblueTheme.onclick = function () {
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('blue');
    document.body.classList.remove('pink');
    document.body.classList.remove('grey');
    document.body.classList.remove('cyan');
    document.body.classList.remove('purple');
    document.body.classList.remove('yellow');
    document.body.classList.remove('green');
    document.body.classList.remove('brown');
    document.body.classList.remove('white');
    document.body.classList.remove('black');
    document.body.classList.add('skyblue');
};
blackTheme.onclick = function () {
    document.body.classList.remove('orange');
    document.body.classList.remove('red');
    document.body.classList.remove('blue');
    document.body.classList.remove('pink');
    document.body.classList.remove('grey');
    document.body.classList.remove('cyan');
    document.body.classList.remove('purple');
    document.body.classList.remove('yellow');
    document.body.classList.remove('green');
    document.body.classList.remove('brown');
    document.body.classList.remove('white');
    document.body.classList.remove('skyblue');
    document.body.classList.add('black');
};
