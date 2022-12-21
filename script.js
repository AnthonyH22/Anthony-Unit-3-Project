/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening = document.querySelector('.story-opening')
let title = document.querySelector('.title')

let optionOne = document.querySelector(".option-1-screen")
let optionOneButton = document.querySelector(".option-1")

let optionTwo = document.querySelector(".option-2-screen")
let optionTwoButton = document.querySelector(".option-2")

let yes1 = document.querySelector('.answerYes1')
let no1 = document.querySelector('.answerNo1')
let yes2 = document.querySelector('.answerYes2')
let no2 = document.querySelector('.answerNo2')

let noScreen1 = document.querySelector('.noScreen1')
let noScreen2 = document.querySelector('.noScreen2')

let questionOne = document.querySelector('.question1')
let questionTwo = document.querySelector('.question2')

let enemy1 = document.querySelector('.option-1-enemy')
let enemy2 = document.querySelector('.option-2-enemy')

let slice = document.querySelector('.hit1')
let dash = document.querySelector('.hit2')

let beam = document.querySelector('.hit3')
let flame = document.querySelector('.hit4')

let endMessage = document.querySelector('.endMessage')
let win = document.querySelector('.win')

let endMessage2 = document.querySelector('.endMessage2')
let lost = document.querySelector('.lost')

let endMessage3 = document.querySelector('.endMessage3')
let win2 = document.querySelector('.win2')

let endMessage4 = document.querySelector('.endMessage4')
let lost2 = document.querySelector('.lost2')

let refresh = document.querySelector('.refresh')

let clickMe = document.querySelector('.clickme')
let secretMessage = document.querySelector('.secretmessage')

 optionOneButton.onclick=function(){
   storyOpening.style.display="none";
   title.style.display="none";
   optionOne.style.display="block";
   optionOneButton.style.display="none";
   optionTwoButton.style.display="none";

   questionOne.style.display = "block";
     yes1.style.display = "block";
     no1.style.display = "block";
   clickMe.style.display = "none";
  secretMessage.style.display = "none";
};

yes1.onclick = function(){
  optionOne.style.display = "none";
  enemy1.style.display = "block";
   yes1.style.display = "none";
     no1.style.display = "none";
slice.style.display = "block";
  dash.style.display = "block";
  clickMe.style.display = "none";
  secretMessage.style.display = "none";
}

no1.onclick = function(){
  noScreen1.style.display = "block";
  optionOne.style.display = "none";
  yes1.style.display = "none";
  no1.style.display = "none";
   refresh.style.display = "block";
  clickMe.style.display = "none";
  secretMessage.style.display = "none";
}

 optionTwoButton.onclick=function(){
   storyOpening.style.display="none";
   title.style.display="none";
   optionTwo.style.display="block";
   optionTwoButton.style.display="none";
   optionOneButton.style.display="none";

  questionTwo.style.display = "block";
     yes2.style.display = "block";
     no2.style.display = "block";
clickMe.style.display = "none";
  secretMessage.style.display = "none";
   
};

yes2.onclick = function(){
  optionTwo.style.display = "none";
    yes2.style.display = "none";
     no2.style.display = "none";
  enemy2.style.display = "block";
  beam.style.display = "block";
  flame.style.display = "block";
  clickMe.style.display = "none";
  secretMessage.style.display = "none";
}

no2.onclick = function(){
    noScreen2.style.display = "block";
  optionTwo.style.display = "none";
  yes2.style.display = "none";
  no2.style.display = "none";
   refresh.style.display = "block";
  clickMe.style.display = "none";
  secretMessage.style.display = "none";
}

slice.onclick = function(){
  enemy1.style.display = "none";
  slice.style.display = "none";
  dash.style.display = "none";
  endMessage.style.display = "block";
  win.style.display = "block";
  refresh.style.display = "block";
  clickMe.style.display = "none";
  secretMessage.style.display = "none";
  audioSlash.play()
}

dash.onclick = function(){
   enemy1.style.display = "none";
  slice.style.display = "none";
  dash.style.display = "none";
  endMessage2.style.display = "block";
  lost.style.display = "block";
    refresh.style.display = "block";
  clickMe.style.display = "none";
  secretMessage.style.display = "none";
}

beam.onclick = function(){
   enemy2.style.display = "none";
  beam.style.display = "none";
  flame.style.display = "none";
  endMessage3.style.display = "block";
  lost2.style.display = "block";
    refresh.style.display = "block";
  clickMe.style.display = "none";
  secretMessage.style.display = "none";
}

flame.onclick = function(){
  enemy2.style.display = "none";
  flame.style.display = "none";
  beam.style.display = "none";
  endMessage4.style.display = "block";
  win2.style.display = "block";
  clickMe.style.display = "none";
  secretMessage.style.display = "none";
    refresh.style.display = "block";
  
}

clickMe.onclick = function(){
  secretMessage.style.display = "block";
  secretMessage.innerHTML = "This project is very scuffed 💀";
}