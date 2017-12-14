var letterConstructor = require("./letter.js");

function word(value){
	this.value = value;
	this.letters = [];
	this.guessesMade = "";
	this.guessesLeft = this.value.length + 2;
	this.flag = false;
	

	for(var i = 0; i < this.value.length; i++) {
		this.letters.push(new letterConstructor.letter(this.value[i]));
	}
}

// Function to check if user guessed the right word 
word.prototype.isComplete = function(){
	for(var i = 0; i < this.letters.length; i++){
		if(!this.letters[i].show)
			return false;
	}
	return true;
};

/* Keep track of user input, replace placeholder with actual letter if user guess the right letter
   Keep track of guesses left variable */
word.prototype.findLetter = function(letter){
	var lowerLetter = letter.toLowerCase();
	this.flag = false;
	if (this.guessesMade.indexOf(lowerLetter) != -1) {
		console.log("You have already guessed that letter!");
		this.flag = true;
		return;
	}
	
	// adding to letters already guessed
	this.guessesMade += lowerLetter;
	for(var i=0; i<this.letters.length;i++){
		 // If letter exists in letters array, change its 'show' value to true, so that it can replace placeholder "_" 
		if(this.letters[i].value.toLowerCase() === lowerLetter){
			this.letters[i].show = true;
			this.flag = true;
		}
	}

	 // Decrease guessesLeft by 1 if user is incorrect 
	if(!this.flag){
		console.log("Incorrect Guess");
		this.guessesLeft -= 1;
	}
	else
		console.log("Correct Guess");
};

// Convert to string
word.prototype.toString = function(){
	var output = "";
	for(var i=0; i<this.letters.length; i++){
		output += this.letters[i].placeHolder();
	}
	return output;
};

module.exports = word;







