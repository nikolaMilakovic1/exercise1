const answer = Math.floor(Math.random() * 10 + 1)
let guesses = 0;

document.getElementById("sumbitButton").onclick = function(){

    let guess = document.getElementById("input-el").value
    guesses+=1;


    if(guess == answer){
        alert("You guess")
    }
    else if(guess < answer){
        alert("Too small!");
    }
    else{
        alert("Too large!");
    }
}