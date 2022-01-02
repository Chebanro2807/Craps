// взаемодействие с DOM
let win = document.querySelector('.win');
let main = document.querySelector('.main');
let lose = document.querySelector('.lose');
let point = document.querySelector('.point');
let pointCont = document.querySelector('.point_continue');
let pointWin = document.querySelector('.point_win');
let pointLose = document.querySelector('.point_lose');

let cube1 = document.querySelectorAll('.cube1');
let cube2 = document.querySelectorAll('.cube2');

let winBlock = document.querySelectorAll('.win_cash');
let loseBlock = document.querySelectorAll('.lose_cash');
let cubesValue = document.querySelector('.cubes_value');
let betValue = document.querySelectorAll('.your_bet');
let inputValue = document.querySelector('.input');
let scores = document.querySelectorAll('.score');

let buttonMakeBet = document.querySelector('.make_bet');
let buttonTakeBet = document.querySelector('.take_bet');
let buttonOkBet = document.querySelector('.ok_bet');
let oneTrowButton = document.querySelectorAll('.trow_one_more');
let pointWinButton = document.querySelector('.point_win_button');
let pointLoseButton = document.querySelector('.point_lose_button');

let firstCube;
let secondCube;
let winArr = [7,11];
let loseArr = [2,8,12];
let pointArr = [3,4,5,6,9,10];
let balance = 500;

// Слушатели
buttonTakeBet.addEventListener('click', winClick.bind(this));
buttonMakeBet.addEventListener('click', betClick.bind(this));
buttonOkBet.addEventListener('click', loseClick.bind(this));
oneTrowButton.forEach((item)=>{
    item.addEventListener('click', pointClick.bind(this));
})
pointWinButton.addEventListener('click', pointWinClick.bind(this));
pointLoseButton.addEventListener('click', pointLoseClick.bind(this));


// Главное меню

updateScore('');

function betClick() {
    randomCubes()
    checkWin()
    checkLose()
    checkPoint()
}

// Победа

function winClick() {
    updateScore('win')
    clearInput();
    show(main,win);
}

function checkWin() {
    winArr.forEach((item)=>{
        if (item === firstCube+secondCube){
            changeWin()
            show(win,main);
        }
    })
}

function changeWin() {
    setCubes()
    winBlock.forEach((win)=>{
        win.innerHTML = `${inputValue.value*2}`
    })
}

// Поражение

function loseClick() {
    updateScore('lose')
    clearInput();
    show(main,lose);
}

function checkLose() {
    loseArr.forEach((item)=>{
        if (item === firstCube+secondCube){
            changeLose()
            show(lose,main);
        }
    })
}

function changeLose() {
    setCubes()
    loseBlock.forEach((lose)=>{
        lose.innerHTML = `${inputValue.value}`
    })
}

// Поинт

function pointClick() {
    randomCubes();
    pointLogic();
}

function pointWinClick() {
    updateScore('win')
    clearInput();
    show(main,pointWin);
}

function pointLoseClick() {
    updateScore('lose')
    clearInput();
    show(main,pointLose);
}

function checkPoint() {
    pointArr.forEach((item)=>{
        if (item === firstCube+secondCube){
            changePoint()
            show(point,main);
        }
    })
}

function changePoint() {
    setCubes()
    cubesValue.innerHTML = `${firstCube+secondCube}`
    betValue.forEach((bet)=>{
        bet.innerHTML = `${inputValue.value}$`
    })
}

function changePointContinue() {
    setCubes()
    betValue.forEach((bet)=>{
        bet.innerHTML = `${inputValue.value}$`
    })
}

// Логика

function setCubes() {
    cube1.forEach((cube)=>{
        cube.innerHTML = `${firstCube}`
    })
    cube2.forEach((cube)=>{
        cube.innerHTML = `${secondCube}`
    })
}

function clearInput(){
    inputValue.value = ''
}

function show(show,hide){
    show.classList.remove('none');
    hide.classList.add('none')
}

function getRandom(min,max) {
    return  Math.floor(Math.random() * (max - min) + min);
}

function randomCubes(){
    firstCube = getRandom(1,7);
    secondCube = getRandom(1,7);
}

function updateScore(state) {
    if (state === 'win'){
        balance = balance + inputValue.value*2
    }
    if (state === 'lose'){
        balance = balance - inputValue.value
    }
    scores.forEach((item)=>{
        item.innerHTML = `${balance}$`
    })
}

function pointLogic() {
    if (+cubesValue.innerHTML === firstCube+secondCube) {
        show(pointWin,pointCont);
        show(pointWin,point);
        setCubes()
        winBlock.forEach((win)=>{
            win.innerHTML = `${inputValue.value*2}`
        })
    } else if (firstCube+secondCube === 7){
        setCubes()
        show(pointLose,pointCont);
        show(pointLose,point);
        loseBlock.forEach((lose)=>{
            lose.innerHTML = `${inputValue.value}`
        })
    } else {
        show(pointCont,point);
        changePointContinue();
    }
}
