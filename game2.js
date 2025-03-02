
let userScore=0;
let comScore=0;
let draw=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let youscore=document.querySelector("#you");
let compscore=document.querySelector("#com");

const gencomchoice=()=>{
    const option=["stone","paper","scissor"];
    const randix=Math.floor(Math.random()*3);
    return option[randix];
}

const drawgame=()=>{
    draw++;
    //console.log("game was Draw!");
    msg.innerText="Game Draw ! Play Again"
    msg.style.backgroundColor="blue";
    document.querySelector("#draw").innerText=draw;
};
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        //console.log("you win!");
        userScore++;
        youscore.innerText=userScore;
        msg.innerText=`You Win :) your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        //console.log("you lose");
        comScore++;
        compscore.innerText=comScore;
        msg.innerText=`You Lose! :(  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
let playgame = (userchoice)=>{
    //console.log("user choice=",userchoice);
    // to  genarate computer choice
    const compchoice=gencomchoice();
    //console.log("computer choice=",compchoice);
    if(userchoice===compchoice)
        {
            //Draw game
            drawgame();
        }else{
            let userwin=true;
            if(userchoice==="stone"){
                //scissors,paper
                userwin=compchoice==="paper"? false : true;
            }else if(userchoice==="paper"){
                //stone,scissors
                userwin=compchoice==="scissor"? false : true;
            }else{
                //stone,paper
                userwin=compchoice==="stone"? false : true;
            }
            showWinner(userwin,userchoice,compchoice);
        }

};

choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
});
document.querySelector("#startbtn").addEventListener("click",()=>{
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#startbtn").classList.add("hide");
    document.querySelector("#start").classList.add("hide");
    document.querySelector(".divimg").classList.add("hide");
    //document.querySelector("body").style.backgroundImage='url("./rock paper/red.jpg")'
    document.querySelector("body").classList.remove("body");
    let resetbtn=document.querySelector("#reset2");
    resetbtn.addEventListener("click",()=>{
         userScore=0;
         comScore=0;
         draw=0;
        youscore.innerText=0;
        compscore.innerText=0;
        document.querySelector("#draw").innerText=0;
        msg.innerText="Play Your Move";
        msg.style.backgroundColor="blue";
    })
})