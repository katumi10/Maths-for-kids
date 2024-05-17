const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
var answer = 0;

function generate_equation(){
          var num1 = Math.floor(Math.random()*15);
          var num2= Math.floor(Math.random()*15);
          var dumbAns1= Math.floor(Math.random()*15);
          var dumbAns2= Math.floor(Math.random()*15);
         var allAnswers = [];
         var switchAnswers = [];

         correctAnswer= (num1 / num2 ).toFixed(1);
         document.getElementById("num1").innerHTML = num1;
         document.getElementById("num2").innerHTML = num2;

         allAnswers = [correctAnswer, dumbAns1,dumbAns2];
         for(i = allAnswers.length;i--;){
            switchAnswers.push(allAnswers.splice(Math.floor(Math.random()*(i+1)),1)[0])
         }

         option1.innerHTML =switchAnswers[0];
         option2.innerHTML =switchAnswers[1];
         option3.innerHTML =switchAnswers[2];




}


option1.addEventListener("click",function(){
    if(option1.innerHTML == correctAnswer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option2.addEventListener("click",function(){
    if(option2.innerHTML == correctAnswer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option3.addEventListener("click",function(){
    if(option3.innerHTML == correctAnswer){
        generate_equation();
    }
    else{
        audio.play();
    }
});


generate_equation();