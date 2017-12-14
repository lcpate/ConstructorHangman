
// Selects random word
var randomWord = function() {
	var guess = ["Passport", "Aquarium", "Imposter", "Harbor", "Birthday", "Fly", "Sparkle"];
	var wordIndex = Math.floor(Math.random() * guess.length);
	return guess[wordIndex];
};
module.exports = randomWord;