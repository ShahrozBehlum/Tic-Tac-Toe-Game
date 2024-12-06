let btns = document.querySelectorAll(".box");
let r_btn = document.querySelector("#reset-btn");
let n_btn = document.querySelector("#new-btn");
let m_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let p_btn = document.querySelector(".play-btn");
let g_body = document.querySelector(".game-body");
let p_container = document.querySelector(".play-container");
let d_container = document.querySelector(".draw-container");
let t_btn = document.querySelector("#try-btn");

let turno = true;
let count = 0;

const win_pos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

p_container.classList.remove("hide3");

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is Team ${winner}`;
    m_container.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of btns) {
      box.disabled = true;
    }
  };

const checkwin = () => {
    for (let win of win_pos) {
        let pos1val = btns[win[0]].innerText;
        let pos2val = btns[win[1]].innerText;
        let pos3val = btns[win[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            showwinner(pos1val);
            return true;
        }
    }
    }
};

btns.forEach((box) => {
     box.addEventListener("click" , () => {
        if(turno){
            box.innerText = "X";
            turno = false;
        }
        else{
            box.innerText = "0";
            turno = true;
        }
        box.disabled = true;
        checkwin();
        count++;
     });
});
console.log(count);

const enableBoxes = () => {
    for (let box of btns) {
      box.disabled = false;
      box.innerText = "";
    }
  };

const resetgame = () => {
    turno = true;
    m_container.classList.add("hide");
    enableBoxes();
};

p_btn.addEventListener("click" , () => {
    g_body.classList.remove("hide2");
    p_container.classList.add("hide3");
});

n_btn.addEventListener("click" , resetgame);
r_btn.addEventListener("click" , resetgame);