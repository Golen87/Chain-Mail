
/* Chainmail object */

ChainMail = function() {
	this.count = 3;
	
	// The available choices
	this.choices = {
		"opening":	[0, MultiChoose(chainOpening, this.count)],
		"content":	[0, MultiChoose(chainContent, this.count)],
		"ending":	[0, MultiChoose(chainEnding, this.count)],
	};
	
	// Replace with Part objects with random tags
	for (var key in this.choices) {
		for (var i = 0; i < this.choices[key][1].length; i++) {
			var p = this.choices[key][1][i];
			var part = new Part(p[0], p[1], p[2]);
			this.choices[key][1][i] = part;
		}
	}

	this.message = null;
	this.time = 0;
	this.spread = [];
	this.startPeople = 0;
	this.peopleReached = 0;
};

// Return currently selected choice of category
ChainMail.prototype.getChoice = function(part) {
	let selected = this.choices[part][0];
	return this.choices[part][1][selected].text;
};

// Build a complete mail from the picked choices
ChainMail.prototype.finish = function() {
	this.message = "<p>{0}</p> <p>{1}</p> <p>{2}</p>".format(
		this.getChoice("opening"),
		this.getChoice("content"),
		this.getChoice("ending")
	);
};

ChainMail.prototype.tick = function() {
	// Todo: Math
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



function createChainMail() {
	// No Mail in session. Create new one
	if (!current_mail) {
		current_mail = new ChainMail();

		$("#opening_choice").find(".text").text(current_mail.getChoice("opening"));
		$("#content_choice").find(".text").text(current_mail.getChoice("content"));
		$("#ending_choice").find(".text").text(current_mail.getChoice("ending"));
	}
}

function nextChoice(part, inc) {
	if (current_mail) {
		let len = current_mail.choices[part][1].length;
		current_mail.choices[part][0] = (current_mail.choices[part][0] + inc + len) % len;
		$("#{0}_choice".format(part)).find(".text").text(current_mail.getChoice(part));
	}
}

function sendMail() {
	if (current_mail) {
		current_mail.finish();
		console.log("Mail sent!");

		current_mail.startPeople = mail_addresses;

		sent_mails.push(current_mail);
		current_mail = null;

		$("#mail_gen").hide();
	}
}
