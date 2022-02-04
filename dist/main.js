/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("let main = document.querySelector('.main');\nlet win = document.querySelector('.win');\nlet lose = document.querySelector('.lose');\nlet point = document.querySelector('.point');\nlet pointCont = document.querySelector('.point_continue');\nlet pointWin = document.querySelector('.point_win');\nlet pointLose = document.querySelector('.point_lose');\nlet curWindow = main;\n\nlet cube1 = document.querySelectorAll('.cube1');\nlet cube2 = document.querySelectorAll('.cube2');\n\nlet winBlock = document.querySelectorAll('.win_cash');\nlet loseBlock = document.querySelectorAll('.lose_cash');\nlet cubesValueDOM = document.querySelector('.cubes_value');\nlet betValue = document.querySelectorAll('.your_bet');\nlet inputValue = document.querySelector('.input');\nlet scores = document.querySelectorAll('.score');\n\nlet winButton = document.querySelectorAll('.win_button');\nlet trowButton = document.querySelectorAll('.trow_one_more');\nlet loseButton = document.querySelectorAll('.lose_button');\n\nlet winArr = [7,11];\nlet loseArr = [2,8,12];\nlet pointValue;\nlet balance = 500;\n\n// Слушатели\ntrowButton.forEach((item)=>{\n    item.addEventListener('click', eventClickHandler.bind(this, cubesHandler));\n})\nwinButton.forEach((item)=>{\n    item.addEventListener('click', eventClickHandler.bind(this, winHandler));\n})\nloseButton.forEach((item)=>{\n    item.addEventListener('click', eventClickHandler.bind(this, loseHandler));\n})\n\n\nshowScore();\n\nfunction show(newWindow) {\n    if (curWindow === newWindow) {\n        return;\n    }\n    newWindow.classList.remove('none');\n    curWindow.classList.add('none')\n    curWindow = newWindow;\n    if (curWindow === main) {\n        inputValue.value = '';\n    }\n}\n\n// Обработчик\n\nfunction eventClickHandler(handler) {\n\n    let next = main;\n    console.log(handler)\n    if (handler.name === \"cubesHandler\") {\n        let cubesValue = handler();\n        if (curWindow === main) {\n            if (checkWin(cubesValue)) {\n                showWinValue();\n                next = win;\n            } else if (checkLose(cubesValue)) {\n                showLoseValue();\n                next = lose;\n            } else {\n                showPointValues(cubesValue);\n                showBetValue()\n                next = point;\n            }\n        } else { // if (curWindow === point || curWindow === pointCont)\n            if (checkWinPoint(cubesValue)) {\n                showWinValue();\n                next = pointWin;\n            } else if (checkLosePoint(cubesValue)) {\n                showLoseValue();\n                next = pointLose;\n            } else {\n                showBetValue();\n                next = pointCont;\n            }\n        }\n    } else {\n        handler();\n    }\n    show(next);\n}\n\nfunction cubesHandler() {\n    let cubes = getRandom2D6();\n    setCubes(cubes);\n    return cubes[0] + cubes[1];\n}\n\nfunction winHandler() {\n    updateScore(true);\n}\n\nfunction loseHandler() {\n    updateScore(false);\n}\n\n// Проверки\n\nfunction checkWin(cubesValue) {\n    let flag = false;\n    winArr.forEach((item)=>{\n        if (item === cubesValue) {\n            flag = true;\n        }\n    })\n    return flag;\n}\n\nfunction checkWinPoint(cubesValue) {\n    return pointValue === cubesValue;\n}\n\nfunction checkLose(cubesValue) {\n    let flag = false;\n    loseArr.forEach((item)=>{\n        if (item === cubesValue) {\n            flag = true;\n        }\n    })\n    return flag;\n}\n\nfunction checkLosePoint(cubesValue) {\n    return cubesValue === 7;\n}\n\n// Обновить DOM\n\nfunction showWinValue() {\n    winBlock.forEach((win)=>{\n        win.innerHTML = `${inputValue.value*2}`\n    })\n}\n\nfunction showLoseValue() {\n    loseBlock.forEach((lose)=>{\n        lose.innerHTML = `${inputValue.value}`\n    })\n}\n\nfunction showPointValues(cubesValue) {\n    pointValue = cubesValue;\n    cubesValueDOM.innerHTML = `${pointValue}`;\n}\n\nfunction showBetValue() {\n    betValue.forEach((bet)=>{\n        bet.innerHTML = `${inputValue.value}$`\n    })\n}\n\n// Кубы\n\nfunction setCubes(cubes) {\n    cube1.forEach((cube)=>{\n        cube.innerHTML = `${cubes[0]}`\n    })\n    cube2.forEach((cube)=>{\n        cube.innerHTML = `${cubes[1]}`\n    })\n}\n\nfunction getRandom2D6() {\n    return [Math.floor(Math.random() * 6 + 1),Math.floor(Math.random() * 6 + 1)]\n}\n\n// Баланс\n\nfunction updateScore(winState = true) {\n    if (winState){\n        balance += inputValue.value*2\n    } else {\n        balance -= inputValue.value\n    }\n    showScore();\n}\n\nfunction showScore() {\n    scores.forEach((item)=>{\n        item.innerHTML = `${balance}$`\n    })\n}\n\n\n//# sourceURL=webpack://craps/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;