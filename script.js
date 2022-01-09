let win = document.querySelector('.win');
let main = document.querySelector('.main');
let lose = document.querySelector('.lose');
let point = document.querySelector('.point');

let cube1 = document.querySelectorAll('.cube1');
let cube2 = document.querySelectorAll('.cube2');

let winBlock = document.querySelectorAll('.win_cash');
let loseBlock = document.querySelectorAll('.lose_cash');
let cubesValue = document.querySelector('.cubes_value');
let betValue = document.querySelectorAll('.your_bet');
let inputValue = document.querySelector('.input');
let scores = document.querySelectorAll('.score');

let clickMain = document.querySelector('.clickMain');
let clickWin = document.querySelector('.clickWin');
let clickLose = document.querySelector('.clickLose');

clickMain.addEventListener('click', start.bind(this));
clickWin.addEventListener('click', goToMain.bind(this,'win'))
clickLose.addEventListener('click', goToMain.bind(this,'lose'))


let balance = 500
goToMain()
function checkState(cubesSum) {
    let state;
    const winArr = [7,11];
    const loseArr = [2,8,12];
    const pointArr = [3,4,5,6,9,10];

    winArr.forEach((item)=>{
        if (item === cubesSum){
            state = 'win'
        }
    })
    loseArr.forEach((item)=>{
        if (item === cubesSum){
            state = 'lose'
        }
    })
    pointArr.forEach((item)=>{
        if (item === cubesSum){
            state = 'point'
        }
    })
    return state
}

function start() {
    let arg = twoRandomCubes();
    let cubesSum = arg[0] + arg[1];
    setCubes(arg[0],arg[1])
    cubesValue.innerHTML = `${cubesSum}`
    changeDom(checkState(cubesSum))
}
function changeDom (state) {
    if (state === 'win') {
        winBlock.forEach((win)=>{
            win.innerHTML = `${inputValue.value*2}`
        })
        show(win,main);
    } else if (state === 'lose') {
        loseBlock.forEach((lose)=>{
            lose.innerHTML = `${inputValue.value}`
        })
        show(lose,main);
    }
    else {
        betValue.forEach((bet)=>{
            bet.innerHTML = `${inputValue.value}$`
        })
        show(point,main);
    }
}

function goToMain(state) {
    if (state === 'win'){
        balance = balance + inputValue.value*2
        show(main,win)
    }
    if (state === 'lose'){
        balance = balance - inputValue.value
        show(main,lose)
    }
    scores.forEach((item)=>{
        item.innerHTML = `${balance}$`
    })
    clearInput();
}

function setCubes(firstCube,secondCube) {
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

function twoRandomCubes(){
    function getRandom(min,max) {
        return  Math.floor(Math.random() * (max - min) + min);
    }
    const firstCube = getRandom(1,7);
    const secondCube = getRandom(1,7);
    return [firstCube, secondCube];
}

