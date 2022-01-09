let main = document.querySelector('.main');
let win = document.querySelector('.win');
let lose = document.querySelector('.lose');
let point = document.querySelector('.point');
let pointCont = document.querySelector('.point_continue');
let pointWin = document.querySelector('.point_win');
let pointLose = document.querySelector('.point_lose');
let curWindow = main;

let cube1 = document.querySelectorAll('.cube1');
let cube2 = document.querySelectorAll('.cube2');

let winBlock = document.querySelectorAll('.win_cash');
let loseBlock = document.querySelectorAll('.lose_cash');
let cubesValueDOM = document.querySelector('.cubes_value');
let betValue = document.querySelectorAll('.your_bet');
let inputValue = document.querySelector('.input');
let scores = document.querySelectorAll('.score');

let buttonMakeBet = document.querySelector('.make_bet');
let buttonTakeBet = document.querySelector('.take_bet');
let buttonOkBet = document.querySelector('.ok_bet');
let oneTrowButton = document.querySelectorAll('.trow_one_more');
let pointWinButton = document.querySelector('.point_win_button');
let pointLoseButton = document.querySelector('.point_lose_button');

let winArr = [];
let loseArr = [];
let pointValue;
let balance = 500;

// Слушатели
buttonMakeBet.addEventListener('click', eventClickHandler.bind(this, cubesHandler));
buttonTakeBet.addEventListener('click', eventClickHandler.bind(this, winHandler));
pointWinButton.addEventListener('click', eventClickHandler.bind(this, winHandler));
buttonOkBet.addEventListener('click', eventClickHandler.bind(this, loseHandler));
pointLoseButton.addEventListener('click', eventClickHandler.bind(this, loseHandler));
oneTrowButton.forEach((item)=>{
    item.addEventListener('click', eventClickHandler.bind(this, cubesHandler));
})

showScore();

function show(newWindow) {
    if (curWindow === newWindow) {
        return;
    }
    newWindow.classList.remove('none');
    curWindow.classList.add('none')
    curWindow = newWindow;
    if (curWindow === main) {
        inputValue.value = '';
    }
}

// Обработчик

function eventClickHandler(handler) {
    let next = main;
    if (handler.name === "cubesHandler") {
        let cubesValue = handler();
        if (curWindow === main) {
            if (checkWin(cubesValue)) {
                showWinValue();
                next = win;
            } else if (checkLose(cubesValue)) {
                showLoseValue();
                next = lose;
            } else {
                showPointValues(cubesValue);
                next = point;
            }
        } else { // if (curWindow === point || curWindow === pointCont)
            if (checkWinPoint(cubesValue)) {
                console.log('tyt')
                showWinValue();
                next = pointWin;
            } else if (checkLosePoint(cubesValue)) {
                showLoseValue();
                next = pointLose;
            } else {
                showBetValue();
                next = pointCont;
            }
        }
    } else {
        handler();
    }
    show(next);
}

function cubesHandler() {
    let cubes = getRandom2D6();
    setCubes(cubes);
    return cubes[0] + cubes[1];
}

function winHandler() {
    updateScore(true);
}

function loseHandler() {
    updateScore(false);
}

// Проверки

function checkWin(cubesValue) {
    let flag = false;
    winArr.forEach((item)=>{
        if (item === cubesValue) {
            flag = true;
        }
    })
    return flag;
}

function checkWinPoint(cubesValue) {
    return pointValue === cubesValue;
}

function checkLose(cubesValue) {
    let flag = false;
    loseArr.forEach((item)=>{
        if (item === cubesValue) {
            flag = true;
        }
    })
    return flag;
}

function checkLosePoint(cubesValue) {
    return cubesValue === 7;
}

// Обновить DOM

function showWinValue() {
    winBlock.forEach((win)=>{
        win.innerHTML = `${inputValue.value*2}`
    })
}

function showLoseValue() {
    loseBlock.forEach((lose)=>{
        lose.innerHTML = `${inputValue.value}`
    })
}

function showPointValues(cubesValue) {
    pointValue = cubesValue;
    cubesValueDOM.innerHTML = `${pointValue}`;
    showBetValue();
}

function showBetValue() {
    betValue.forEach((bet)=>{
        bet.innerHTML = `${inputValue.value}$`
    })
}

// Кубы

function setCubes(cubes) {
    cube1.forEach((cube)=>{
        cube.innerHTML = `${cubes[0]}`
    })
    cube2.forEach((cube)=>{
        cube.innerHTML = `${cubes[1]}`
    })
}

function getRandom2D6() {
    return [Math.floor(Math.random() * 6 + 1),Math.floor(Math.random() * 6 + 1)]
}

// Баланс

function updateScore(winState = true) {
    if (winState){
        balance += inputValue.value*2
    } else {
        balance -= inputValue.value
    }
    showScore();
}

function showScore() {
    scores.forEach((item)=>{
        item.innerHTML = `${balance}$`
    })
}
