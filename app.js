const p1btn = document.querySelector("#p1button");
const p2btn = document.querySelector("#p2button");
const p1display = document.querySelector("#p1display");
const p2display = document.querySelector("#p2display");
const resetbtn = document.querySelector("#reset");
const winninggamescore=document.querySelector('#playto')
let p1score = 0;
let p2score = 0;
let winningscore = 5;
let isgameover = false;

p1btn.addEventListener("click", function () {
    if(!isgameover){
        p1score += 1;
        if(p1score===winningscore){
            isgameover=true
            p1display.classList.add('win')
            p2display.classList.add('lose')
            p1btn.ariaDisabled=true
            p2btn.ariaDisabled=true
        }
    }
  p1display.textContent = p1score;
});
p2btn.addEventListener("click", function () {
    if(!isgameover){
        p2score += 1;
        if(p2score===winningscore){
            isgameover=true
            p2display.classList.add('win')
            p1display.classList.add('lose')
            p1btn.ariaDisabled=true
            p2btn.ariaDisabled=true
        }
    }
  p2display.textContent = p2score;
});
winninggamescore.addEventListener('change',function(){
winningscore= parseInt(this.value)
reset()
})

resetbtn.addEventListener('click',reset)
function reset(){
    isgameover=false
    p1display.textContent=0
    p2display.textContent=0
    p1score=0
    p2score=0
    p1display.classList.remove('win','lose')
    p2display.classList.remove('win','lose')
            p1btn.ariaDisabled=false
            p2btn.ariaDisabled=false
}




















