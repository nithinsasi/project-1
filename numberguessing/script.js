var msg1=document.querySelector("#msg1");
var msg2=document.querySelector("#msg2");
var msg3=document.querySelector("#msg3");
var result=Math.floor(Math.random()*10)-1;
var no_of_guess=0;
var guessed_no=[];
function play(){
    var user_guess=document.querySelector("#guess").value;
    if(user_guess<1||user_guess>10)
        {
            alert("Enter number b/w 1to10");
        }
    else{
        guessed_no.push(user_guess);
        no_of_guess=no_of_guess+1;
        if(user_guess<result){
            msg1.textContent="Your Guess is Low";
            msg2.textContent="Number of Guesses :"+no_of_guess;
            msg3.textContent="Guessed No are :"+guessed_no;
        }
        else if(user_guess>result){
            msg1.textContent="Your Guess is high";
            msg2.textContent="Number of Guesses :"+no_of_guess;
            msg3.textContent="Guessed No are :"+guessed_no;
        }
        else if(user_guess==result){
            msg1.textContent="Your Guess is right";
            msg2.textContent="The Number :"+result;
            msg3.textContent="you Guessed :"+no_of_guess+" "+guesses;
        }
    } 
}
