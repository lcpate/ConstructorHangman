var name = require("./random-word.js");
var word = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randomWord = name();
var myWord = new word(randomWord);


var totalWords = 1;

exports.letter;


function startUp(){
	console.log("Current Word : " + myWord)
	// when user is out of guesses
	if (myWord.guessesLeft <= 0){
		console.log('You have no more guesses left! ');
		lose++;
		askAgain();
	}
	else{
		guessLetter();
	}
}

var guessLetter = function(){
	inquirer.prompt([
	{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
			 // only accepts 1 character
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
		}
	}
	]).then(function(letterInput){ 
		var letter = letterInput.letter; 
		myWord.findLetter(letter);
		if(myWord.isComplete()){
			console.log('You Got It Right! : ' + myWord.toString());
			win++;
			askAgain();
		}
		else{
			console.log('Guesses Left: ' + myWord.guessesLeft);
			console.log("	--------------------");
			startUp();
		}
		
	});
}

var askAgain = function(){
		inquirer.prompt([
		{
			name: 'choice',
			type: 'text',
			message: 'Do you want to play again? (y/n) ',
			validate: function(str){
				// only accepts 1 character
				var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
				return regEx.test(str);
			}
		}
		]).then(function(answer){ 
			var choice = answer.choice;
			if(choice === 'y' || choice === 'Y'){
				newWord();
				totalWordss++;
				startUp();
			}
			
		});
	}

 // Function to generate new word 
function newWord(){
	randomWord = name();
	myWord = new word(randomWord);
}


// Start game
startUp();