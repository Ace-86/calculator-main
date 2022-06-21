sessionStorage.clear();

const disp = document.getElementById("display1");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnPlus = document.getElementById("btnPlus");
const btnEqual = document.getElementById("btnEqual");
const btnSub = document.getElementById("btnSub");
const btnMult = document.getElementById("btnMult");
const btnDiv = document.getElementById("btnDiv");
const btnClear = document.getElementById("btnClear");

let click = 0;
let clickAdd = 0;
let clickSub = 0;
let clickMult = 0;
let clickDiv = 0;

let all = document.querySelectorAll("button.btn"); //creates an array (all) that selects all buttons that has number and decimal

for (let i = 0; i < all.length; i++) {
  //loops through 'all' buttons
  all[i].addEventListener("click", function () {
    // when an numbered or decimal button is pressed, run function
    disp.innerHTML = disp.innerHTML.substring(0, 10); //display max character set to 10
    disp.innerHTML += all[i].value; //display equals to value of button pressed; will concat with all buttons pressed until operator button is pressed
  })
};

function createStore1() {
  // funtion createStore
  let textToSave = disp.innerHTML; // variable textToSave is equal to what is currently inside display
  if (click % 2 == 0) {
    sessionStorage.setItem("firstVar", textToSave); //variable textToSave is saved to 'firstVar' inside session storage
    disp.innerHTML = ""; //display is erased
    aVar = sessionStorage.getItem("firstVar");
  } else {
    sessionStorage.setItem("secondVar", textToSave); //variable textToSave is saved to 'secondVar' inside session storage
    disp.innerHTML = ""; //display is erased
    bVar = sessionStorage.getItem("secondVar");
  }
  click++;
};

function add() {
  if (click % 2 == 0) {
    createStore1();
  } else {
    createStore1();
    a = parseInt(aVar);
    b = parseInt(bVar);
    c = a + b;
    a = c;
    sessionStorage.setItem("result", c);
    sessionStorage.setItem("firstVar", a);
    sessionStorage.setItem("secondVar", 0);
    cVar = sessionStorage.getItem("result");
    disp.innerHTML = cVar;
  }
  clickAdd++;
};

function sub() {
  if (click % 2 == 0) {
    createStore1();
  } else {
    createStore1();
    a = parseInt(aVar);
    b = parseInt(bVar);
    c = a - b;
    a = c;
    sessionStorage.setItem("result", c);
    sessionStorage.setItem("firstVar", a);
    sessionStorage.setItem("secondVar", 0);
    cVar = sessionStorage.getItem("result");
    disp.innerHTML = cVar;
  }
  clickSub++;
};

function mult() {
  if (click % 2 == 0) {
    createStore1();
  } else {
    createStore1();
    a = parseInt(aVar);
    b = parseInt(bVar);
    c = a * b;
    a = c;
    sessionStorage.setItem("result", c);
    sessionStorage.setItem("firstVar", a);
    sessionStorage.setItem("secondVar", 1);
    cVar = sessionStorage.getItem("result");
    disp.innerHTML = cVar;
  }
  clickMult++;
};

function div() {
  if (click % 2 == 0) {
    createStore1();
  } else {
    createStore1();
    a = parseInt(aVar);
    b = parseInt(bVar);
    c = a / b;
    a = c;
    sessionStorage.setItem("result", c);
    sessionStorage.setItem("firstVar", a);
    sessionStorage.setItem("secondVar", 1);
    cVar = sessionStorage.getItem("result");
    disp.innerHTML = cVar;
  }
  clickDiv++;
};

function equal() {
  if (clickAdd !== 0) {
    add();
    clickAdd = 0;
  } else if (clickSub !== 0) {
    sub();
    clickSub = 0;
  } else if (clickMult !== 0) {
    mult();
    clickMult = 0;
  } else if (clickDiv !== 0) {
    div();
    clickDiv = 0;
  } else {
    cVar = sessionStorage.getItem("result");
    disp.innerHTML = "";
    disp.innerHTML = cVar;
    click = 0;
  }
};

function clear() {
  disp.innerHTML = "";
  sessionStorage.clear();
  click = 0;
  clickAdd = 0;
  clickSub = 0;
  clickMult = 0;
  clickDiv = 0;
};

window.addEventListener("keydown", function(e) {
  console.log(e);
  const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
  console.log(button);
  if (!button) return;
  button.click();
});

btnEqual.addEventListener("click", equal);
btnDiv.addEventListener("click", div);
btnMult.addEventListener("click", mult);
btnSub.addEventListener("click", sub);
btnPlus.addEventListener("click", add);
btnClear.addEventListener("click", clear);
