
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
	this.spreadFactor = null;
	this.seriousFactor = null;

	this.graphData = [];
	this.graphColor = takeGraphColor();
};

ChainMail.prototype.getPart = function(part) {
	let selected = this.choices[part][0];
	return this.choices[part][1][selected];
};

// Return currently selected choice of category
ChainMail.prototype.getChoice = function(part) {
	return this.getPart(part).text;
};

// Build a complete mail from the picked choices
ChainMail.prototype.finish = function() {
	this.message = "<p>{0}</p> <p>{1}</p> <p>{2}</p>".format(
		this.getChoice("opening"),
		this.getChoice("content"),
		this.getChoice("ending")
	);
};

ChainMail.prototype.setStats = function() {
	this.spreadFactor = 0;
	this.spreadFactor += this.getPart("opening").spreadFactor;
	this.spreadFactor += this.getPart("content").spreadFactor;
	this.spreadFactor += this.getPart("ending").spreadFactor
	this.spreadFactor += RandFloat(0.0, 1.0);
	this.spreadFactor /= 4;
	this.spreadFactor = Math.pow( this.spreadFactor, 4 );

	this.seriousFactor = 0;
	this.seriousFactor += this.getPart("opening").seriousFactor;
	this.seriousFactor += this.getPart("content").seriousFactor;
	this.seriousFactor += this.getPart("ending").seriousFactor
	this.seriousFactor += RandFloat(0.0, 1.0);
	this.seriousFactor /= 4;
	this.seriousFactor = Math.pow( this.seriousFactor, 4 );
};

const TRANSACTION_CHANCE = 0.005;

ChainMail.prototype.tick = function() {
	if (this.alive) {
		this.time += 1;

		let newPeople = Math.floor( this.startPeople * Math.pow(this.time, this.spreadFactor) * Math.pow(Math.E, -0.1*this.time) );

		if (newPeople <= 0) {
			this.alive = false;
		}

		newPeople = Math.floor( newPeople * Math.random() );

		this.peopleReached += newPeople;
		shares = Math.max(shares, this.peopleReached);
		this.graphData.push(this.peopleReached);

		//Create money transactions
		let newTrans = Math.ceil(this.seriousFactor*newPeople);
		let transSent = Math.random()*newTrans;

		for(let i = 0; i < transSent; ++i){
			if(Math.random() < TRANSACTION_CHANCE){
				//Make new transaction
				let amount = 0;

				amount = WeightedChoose([
					WeightedChoose([1, 5, 10], 2),
					WeightedChoose([50, 100, 500, 1000], 5)
				], 10);

				//if(rand < 0.8){
				//	amount = 1;
				//}
				//else if(rand < 0.9){
				//	amount = 5;
				//}
				//else if(rand < 0.96){
				//	amount = 20;
				//}
				//else if(rand < 0.99){
				//	amount = 50;
				//}
				//else{
				//	amount = 100;
				//}

				addTransAction(amount);
			}
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

		current_mail.startPeople = mail_addresses;
		current_mail.startTime = globalTick;
		current_mail.setStats();

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

//for (var i = 0; i < 10; i++) {
//	createChainMail();
//	sendMail();
//}
