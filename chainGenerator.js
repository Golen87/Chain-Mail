
// Returns an element from an array at random.
function Choose(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}


/* Objects */

function Country() {
	return Choose([
		"Argentina",
		"Bulgaria"
	])
}

function Person() {
	return Choose([
		"Jesus Christ",
		"Mother Theresa",
		"President of " + Country()
	])
}

console.log( Person() );


var chainOpening = [
	"PLEEEEEEEEEEASE READ! it was on the news!",
	"U WILL DIE DEAD IF YOU STOP READING",
	"This letter is about an opportunity to make an incredible amount of Money (CASH!!!) in a very short time.",
	"Dear Friend,",
	"Help save {person}!!",
	"From {person}",
]
