let gameSeq =[];
let userSeq=[];
let btns = ["red","yellow","green","purpul"];
let started = false;
let Level = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("GameStarted");
        started= true;

        levelup();

    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000)
}


function levelup(){
Level++;
userSeq =[];
h3.innerText =`Level ${Level}`;
let randIndx = Math.floor(Math.random()*3);
let randColor = btns[randIndx];
let randbtn = btns[randColor];
let randBtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
btnflash(randBtn);  

}

function cheakAns(idx){
  if(userSeq[idx] == gameSeq[idx]){
if(userSeq.length == gameSeq.length){
    setTimeout(levelup , 1000);
}
 }else{
    h3.innerHTML =`Game over! <br> Your score is ${Level}</b> <br> Press any key to start again!`;
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor ="white";
    }, 150);
    reset();
 }

}

function btnpress(){
    let btn = this;
   userflash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   
cheakAns(userSeq.length-1);

}
 let allbtn = document.querySelectorAll(".btn");
 for(btn of allbtn){
    btn.addEventListener("click",btnpress);
     
 }
 function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    Level = 0;
 }