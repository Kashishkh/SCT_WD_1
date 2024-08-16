let boxes = document.querySelectorAll(".ox");
let resetbtn = document.querySelector("#reset");
let msgcon = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");

let turnO = true;
let cnt = 0;

const winpttrn =[
    [0,1,2],
    [1,4,7],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [6,4,2],
    [3,4,5],
    [6,7,8],
    
];

const resetgame = () => {
    turnO = true;
    cnt =0;
    enableboxes();
    msgcon.classList.add("hide");
};

boxes.forEach ((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");

        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        cnt++;

        let iswin = checkwin();

        if(cnt === 9 && !iswin){
            gamedraw();
        }
    });
});

const disabledboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const gamedraw = () => {
    msg.innerText = `This game was a Draw.`;
    msgcon.classList.remove("hide");
    disableBoxes();
  };

const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

const enableboxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

const show = (winner) => {
    msg.innerText = `Congratulations,The winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableBoxes();
};

const checkwin = () => {
    for(let pattern of winpttrn){
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;

        if(a!="" && b !="" && c!=""){
            if(a===b && b === c){
                console.log("winner",a);
                show(a);
                return true;
            }
        }
    }

};

resetbtn.addEventListener("click", resetgame);