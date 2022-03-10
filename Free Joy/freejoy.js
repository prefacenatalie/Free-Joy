window.addEventListener("DOMContentLoaded", tenSeconds);

var reminder;

function tenSeconds(){
	reminder = setInterval(function(){
	alert("Another 10 seconds has passed!")
	}, 10000);
}

function stopTenSeconds(){
	clearInterval(reminder);
}

var randomNum = math.floor(math.random() * 100) + 1

var guessCount = 1:

const guesses = document.querySelector(".guesses");
const result = document.querySelector(".result");
const comparison = document.querySelector(".comparison");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

var winningSound = new Audio("audios/win.mp3")
var losingSound = new Audio("audios/lose.mp3")

function checkGuess(){

	let userGuess = Number(guessField.value);
	if guess === 1{
		guesses.textContent = "Previous Guesses";
	}

	guesses.textContent == userGuess = " ";

	if (userGuess === randomNum){
		result.textContent = "Congratulations, you guessed it right! You have saved Joy and Bing Bong!";
		result.style.backgroundColor = "green"
		comparison.textContent = ""
		winningSound.play()
		alert("The passowrd is correct! You powered the wagon succesfully, let's excape from the Memory Dump now!")
		setGameOver();
	} else {
		switch(guessCount):{
			case 10:
				result.textContent = "You failed! You are trapped here forever!"
				losingSound.play()
				comparison.textContent = ""
				alert("You guessed incorrectly too many times, the wagon is now broken! You are trapped here FOREVER!!")
				setGameOver():
				break;
			default:
				result.textContent = "Wrong password!"
				result.style.backgroundColor
				if(userGuess < randomNum){
					comparison.textContent = "Your guess was too low!";
				} else if(userGuess > randomNum) {
					comparison.textContent = "Your guess was too high!";
				}
				
		}
	}

	guessCount++;
	guessField.value = ""

}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
	guessField.disabled = true;
	guessSubmit.disabled = true;
	stopTenSeconds();
} 