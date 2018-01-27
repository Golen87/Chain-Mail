
ChainMail = function()
{
	// The current letter
	//this.letter = Choose(letters);

	// The available words
	this.words = [
		Person(),
		Person(),
		Person(),
		Treasure(),
		Treasure(),
		Treasure(),
	];

	this.spread = [];
};

ChainMail.prototype.myFunction = function()
{
};

/*
 0 < popularity < 1
*/
function makeSpread(startPoint, popularity, limit){
	spread = [0];
	let i = 1;

	do{
		spread[i] = startPoint*Math.pow(i, popularity)*Math.pow(Math.E, -0.1*i);
		i++;
	}while(spread[i - 1] > limit)

	return spread;
}

var mail = new ChainMail();
