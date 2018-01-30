
let costFactor = 1.05;
let unlocked = 0;
let shopItems = [
	{	
		"text": "e-mail addresses to my friends, family and colleagues. Why do you need them?",
		"mails": 15,
		"cost": 10,
		"bought": 0
	},
	{	
		"text": "e-mail addresses I stole from my friend. Do what you want with them.",
		"mails": 120,
		"cost": 100,
		"bought": 0
	},
	{	
		"text": "e-mail addresses I found on some forum. Pls no spam. I warn you.",
		"mails": 800,
		"cost": 1000,
		"bought": 0
	},
	{	
		"text": "e-mail addresses from a big data breach. Perfect for spreading your important messages!",
		"mails": 6000,
		"cost": 10000,
		"bought": 0
	},
	{	
		"text": "e-mail addresses from hacked international databases. Remember, with great spamming comes great responsibility.",
		"mails": 40000,
		"cost": 100000,
		"bought": 0
	},
	{	
		"text": "e-mail addresses fresh off NSA's servers. Better flee the country.",
		"mails": 300000,
		"cost": 1000000,
		"bought": 0
	},
	{	
		"text": "e-mail addresses hacked from official government servers all over the world. No place is safe now.",
		"mails": 2000000,
		"cost": 10000000,
		"bought": 0
	},
	{	
		"text": "e-mail addresses extracted from botnet attacks all across the internet. People are paying you to stop.",
		"mails": 10000000,
		"cost": 100000000,
		"bought": 0
	},
	{	
		"text": "e-mail addresses created by followers of the great Chain Mailer. All hail the new overlord.",
		"mails": 66666666,
		"cost": 1000000000,
		"bought": 0
	},
	{	
		"text": "e-mail addresses to alien races. No questions please.",
		"mails": 1234567890,
		"cost": 100000000000,
		"bought": 0
	},
]

function updateShop() {
	while (unlocked < shopItems.length && money > shopItems[unlocked].cost / 10) {
		addShopItem(unlocked);
		unlocked += 1;
	}
}

function addShopItem(index) {
	let data = shopItems[index];
	var item = document.getElementById("shop_item_template").innerHTML;

	item = item.replace(/{message}/g, data.text);
	item = item.replace(/{addresses}/g, addDots(data.mails));
	item = item.replace(/{cost}/g, addDots(data.cost));
	item = item.replace(/{purchase}/g, "purchase(this, {0});".format(index));

	var div = document.getElementById("shop_list");
	if (div) {
		div.insertAdjacentHTML('beforeend', item);
	}
}

function getCost(index) {
	return Math.floor( shopItems[index].cost * Math.pow(costFactor, shopItems[index].bought) );
}

function purchase(obj, index) {
	let cost = getCost(index);
	let mails = shopItems[index].mails;

	if(money >= cost){
		money -= cost;
		mail_addresses += mails;

		shopItems[index].bought += 1;
		$(obj).parent().find(".cost").text( "$" + addDots(getCost(index)) );
		updateStats();
	}
}
