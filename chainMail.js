ChainMail = function()
{
	// The current letter
	this.letter = Choose(letters);

	// The available words
	this.words = {
		Person(),
		Person(),
		Person(),
		Treasure(),
		Treasure(),
		Treasure(),
	];
};

ChainMail.prototype.myFunction = function()
{
};


var mail = new ChainMail();