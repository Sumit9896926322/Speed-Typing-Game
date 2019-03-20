var id;
 var gameOver;
var score = 0;
var current_time =15;
const pritam = document.querySelector('.pritam');
const message = document.querySelector('.message');
const question = document.querySelector('.question-statement');
const answer = document.querySelector('.answer-input');
const current = document.querySelector('.score-value');
const time = document.querySelector('.Time-remaining');
// setting the countdown timer

window.addEventListener('keyup',function(event){
  event.preventDefault();
  if(event.keyCode == 32){
    id = setTimeout(changeTime,1000);
  }
});

function changeTime(){
  console.log("1");
  if(current_time > 0){
  current_time--;
  setTimeout(changeTime,1000);
  }
  else{
   gameOver = true;
  }
     time.innerText = current_time;
}


//random word in browser
window.addEventListener('onload',changeWord());
function changeWord(){
  var words ={
  0:"Paradise",
  1:"CucumMber",
  2:"Yoshimitsu",
  3:"nobodY",
  4:"AIRMAX",
  5:"weird",
  6:"accommodate" ,
  7:"handkerchief",
  8:"indict",
  9:"cemetery",
  10:"conscience",
  11:"rhythm",
  12:"playwright"
  };
  var length = Object.keys(words).length;
  question.innerText =  words[Math.floor(Math.random()*(length - 0)+0)];
  time.innerHTML = current_time;
}
//Return the Gameover condition
function status(){
if((current_time > 0)&&(question.innerHTML == answer.value)){
  gameOver = false;
}
else{
  gameOver = true;
}
return gameOver;
}

//To check the level at present
function checklevel(){
  if(score > 2){
    current_time = 10;
  document.body.style.backgroundColor  = "black";
  }

}
//Main Logic
answer.addEventListener('keyup',function(e){
  e.preventDefault();
  checklevel();
  if(e.keyCode === 13){
  if(!status()){
  changeWord();
  current_time = 15;
  current.innerText = ++score;
  answer.value = "";
  message.innerHTML = "Correct";
  }
  else{
    message.innerHTML = "you lose";
    score = 0;
    current_time = 0;
    current.innerText = score;
  }
}
});
