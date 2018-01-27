
/* Chainmail object */

ChainMail = function() {
	this.count = 3;
	
	// The available choices
	this.choices = {
		"opening":	MultiChoose(chainOpening, this.count),
		"content":	MultiChoose(chainContent, this.count),
		"ending":	MultiChoose(chainEnding, this.count),
	};

	// Replace with Part objects with random tags
	for (var key in this.choices) {
		for (var i = 0; i < this.choices[key].length; i++) {
			var p = this.choices[key][i];
			var part = new Part(p[0], p[1], p[2]);
			this.choices[key][i] = part;
		}
	}

	this.message = null;
	this.spread = [];
	this.peopleReached = 0;
};

// Build a complete mail from the picked choices
ChainMail.prototype.pick = function(openingIndex, contentIndex, endingIndex) {
	this.message = "<p>{0}</p> <p>{1}</p> <p>{2}</p>".format(
		this.choices["opening"][openingIndex].text,
		this.choices["content"][contentIndex].text,
		this.choices["ending"][endingIndex].text,
	);
};

ChainMail.prototype.tick = function() {
	// Todo: Math
};

/*
 0 < popularity < 1
*/
function makeSpread(startPoint, popularity, limit){
	spread = [];

	let i = 1;

	do{
		spread[i] = startPoint*Math.pow(i, popularity)*Math.pow(Math.E, -0.1*i);
		i++;
	}while(spread[i - 1] > limit)

	return spread;
}

var mail = new ChainMail();
console.log(mail);
mail.pick(0, 0, 0);
console.log(mail.message);
