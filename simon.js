let gameSeq=[];
let userSeq = [];
let btns = ["red","yellow","blue","green"];
let started= false;
let level = 0;

let h2= document.querySelector("h2");

//Step1 press key to start
document.addEventListener("keypress",function (){
    if(started == false){
        console.log("Game is started");
        started = true;

        levelUp();
    }
});
//Step2 

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}😄`;

    //random btn choose
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor= btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}
 

 //Step3 user press color btn

 function btnPress(){
     console.log(this);
     let btn= this;
     userFlash(btn);

     userColor = btn.getAttribute("id");
     console.log(userColor);
     userSeq.push(userColor);

     checkAns(userSeq.length-1);
 }

 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }

 //Step 4: Matching Sequence
 function checkAns(idx){
   if (userSeq[idx]=== gameSeq[idx]){
    if (userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
    }
   }
   else{
    h2.innerText = `Game Over! Press Any Key to Restart🫣`;
   }
 }