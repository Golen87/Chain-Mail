
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

	this.alive = true;
	this.popularity = RandFloat(0.0, 1.0);

	this.graphData = [];
	this.graphColor = takeGraphColor();
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
	if (this.alive) {
		this.time += 1;

		let newPeople = Math.floor( this.startPeople * Math.pow(this.time, this.popularity) * Math.pow(Math.E, -0.1*this.time) );

		this.peopleReached += newPeople;
		this.graphData.push(this.peopleReached);

		if (newPeople <= 0) {
			this.alive = false;
		}
	}
};


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


function tickMails() {
	for (var i = sent_mails.length - 1; i >= 0; i--) {
		sent_mails[i].tick();
	}
}

for (var i = 0; i < 10; i++) {
	createChainMail();
	sendMail();
}
