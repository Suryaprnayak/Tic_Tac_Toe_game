let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".win-msg");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    enableBox();
    msgContainer.classList.add("hide");
};

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="0";
            turn0=true;
        }
        box.disabled=true;
        count++;
        checkWinner();
    });
});

const enableBox=()=>{
    for(let b of box){
        b.disabled=false;
        b.innerText="";
    }
}

const disableBoxes=()=>{
    for(let b of box){
        b.disabled=true;
    }
};

const showWinner= (winner) =>{
    msg.innerHTML=`Congratulations !, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    //count=0;
    disableBoxes();
};
const matchDraw=()=>{
    msg.innerHTML=`OOPS !,match is Draw`;
    msgContainer.classList.remove("hide");   
};

const checkWinner= () =>{
    for(let pattern of winPattern){
            let posVal1=box[pattern[0]].innerText;
            let posVal2=box[pattern[1]].innerText;
            let posVal3=box[pattern[2]].innerText;
            if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
                if(posVal1 === posVal2 && posVal2 === posVal3){
                    //console.log("winner is",posVal1);
                    count=0;
                    showWinner(posVal1);
                }
            }
            if(count === 9 && posVal1!=posVal2 && posVal2!=posVal3){
                matchDraw();
            }
    }
}



newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);