let rand = Math.floor(Math.random()*100+1);
console.log(rand);
let attempt=0;
function guessGame(){
  let input =  document.getElementById("num").value
    if(rand==input){
        document.writeln("you won the game \n YOUR ATTEMPT:"+ attempt)

    }
    else if(rand>input){
        document.getElementById("res").innerText="too low"
        attempt++;
    }
    else if(rand<input){
        document.getElementById("res").innerText="too high"
        attempt++;
    }
}