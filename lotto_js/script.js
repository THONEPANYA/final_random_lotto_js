let lotto_number = prompt("Enter your lotto number")
let random_number = Math.floor(Math.random()* 1000)

document.getElementById("random").innerHTML = random_number

if( lotto_number > random_number ){

    document.getElementById("result").innerHTML = "You win a lotto!"

}
else{
    
 document.getElementById("result").innerHTML = "Sorry your number incorret! Please try agian!"

}