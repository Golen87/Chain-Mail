
/* Utils */

// Returns an element from an array at random.
function Choose(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}

if ( !String.prototype.format ) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace( /{(\d+)}/g, function( match, number ) { 
			return typeof args[number] != 'undefined'
				? args[number]
				: match
			;
		} );
	};
}



/* Word replacements */

// http://www.enchantedlearning.com/wordlist/

function Adjective() { return Choose(["abandoned", "able", "absolute", "adorable", "adventurous", "academic", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "acrobatic", "active", "actual", "adept", "admirable", "admired", "adolescent", "adorable", "adored", "advanced", "afraid", "affectionate", "aged", "aggravating", "aggressive", "agile", "agitated", "agonizing", "agreeable", "ajar", "alarmed", "alarming", "alert", "alienated", "alive", "all", "altruistic", "amazing", "ambitious", "ample", "amused", "amusing", "anchored", "ancient", "angelic", "angry", "anguished", "animated", "annual", "another", "antique", "anxious", "any", "apprehensive", "appropriate", "apt", "arctic", "arid", "aromatic", "artistic", "ashamed", "assured", "astonishing", "athletic", "attached", "attentive", "attractive", "austere", "authentic", "authorized", "automatic", "avaricious", "average", "aware", "awesome", "awful", "awkward", "babyish", "bad", "back", "baggy", "bare", "barren", "basic", "beautiful", "belated", "beloved", "beneficial", "better", "best", "bewitched", "big", "big-hearted", "biodegradable", "bite-sized", "bitter", "black", "black-and-white", "bland", "blank", "blaring", "bleak", "blind", "blissful", "blond", "blue", "blushing", "bogus", "boiling", "bold", "bony", "boring", "bossy", "both", "bouncy", "bountiful", "bowed", "brave", "breakable", "brief", "bright", "brilliant", "brisk", "broken", "bronze", "brown", "bruised", "bubbly", "bulky", "bumpy", "buoyant", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating", "calm", "candid", "canine", "capital", "carefree", "careful", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap", "cheerful", "cheery", "chief", "chilly", "chubby", "circular", "classic", "clean", "clear", "clear-cut", "clever", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "cold", "colorful", "colorless", "colossal", "comfortable", "common", "compassionate", "competent", "complete", "complex", "complicated", "composed", "concerned", "concrete", "confused", "conscious", "considerate", "constant", "content", "conventional", "cooked", "cool", "cooperative", "coordinated", "corny", "corrupt", "costly", "courageous", "courteous", "crafty", "crazy", "creamy", "creative", "creepy", "criminal", "crisp", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cultured", "cumbersome", "curly", "curvy", "cute", "cylindrical", "damaged", "damp", "dangerous", "dapper", "daring", "darling", "dark", "dazzling", "dead", "deadly", "deafening", "dear", "dearest", "decent", "decimal", "decisive", "deep", "defenseless", "defensive", "defiant", "deficient", "definite", "definitive", "delayed", "delectable", "delicious", "delightful", "delirious", "demanding", "dense", "dental", "dependable", "dependent", "descriptive", "deserted", "detailed", "determined", "devoted", "different", "difficult", "digital", "diligent", "dim", "dimpled", "dimwitted", "direct", "disastrous", "discrete", "disfigured", "disgusting", "disloyal", "dismal", "distant", "downright", "dreary", "dirty", "disguised", "dishonest", "dismal", "distant", "distinct", "distorted", "dizzy", "dopey", "doting", "double", "downright", "drab", "drafty", "dramatic", "dreary", "droopy", "dry", "dual", "dull", "dutiful", "each", "eager", "earnest", "early", "easy", "easy-going", "ecstatic", "edible", "educated", "elaborate", "elastic", "elated", "elderly", "electric", "elegant", "elementary", "elliptical", "embarrassed", "embellished", "eminent", "emotional", "empty", "enchanted", "enchanting", "energetic", "enlightened", "enormous", "enraged", "entire", "envious", "equal", "equatorial", "essential", "esteemed", "ethical", "euphoric", "even", "evergreen", "everlasting", "every", "evil", "exalted", "excellent", "exemplary", "exhausted", "excitable", "excited", "exciting", "exotic", "expensive", "experienced", "expert", "extraneous", "extroverted", "extra-large", "extra-small", "fabulous", "failing", "faint", "fair", "faithful", "fake", "false", "familiar", "famous", "fancy", "fantastic", "far", "faraway", "far-flung", "far-off", "fast", "fat", "fatal", "fatherly", "favorable", "favorite", "fearful", "fearless", "feisty", "feline", "female", "feminine", "few", "fickle", "filthy", "fine", "finished", "firm", "first", "firsthand", "fitting", "fixed", "flaky", "flamboyant", "flashy", "flat", "flawed", "flawless", "flickering", "flimsy", "flippant", "flowery", "fluffy", "fluid", "flustered", "focused", "fond", "foolhardy", "foolish", "forceful", "forked", "formal", "forsaken", "forthright", "fortunate", "fragrant", "frail", "frank", "frayed", "free", "French", "fresh", "frequent", "friendly", "frightened", "frightening", "frigid", "frilly", "frizzy", "frivolous", "front", "frosty", "frozen", "frugal", "fruitful", "full", "fumbling", "functional", "funny", "fussy", "fuzzy", "gargantuan", "gaseous", "general", "generous", "gentle", "genuine", "giant", "giddy", "gigantic", "gifted", "giving", "glamorous", "glaring", "glass", "gleaming", "gleeful", "glistening", "glittering", "gloomy", "glorious", "glossy", "glum", "golden", "good", "good-natured", "gorgeous", "graceful", "gracious", "grand", "grandiose", "granular", "grateful", "grave", "gray", "great", "greedy", "green", "gregarious", "grim", "grimy", "gripping", "grizzled", "gross", "grotesque", "grouchy", "grounded", "growing", "growling", "grown", "grubby", "gruesome", "grumpy", "guilty", "gullible", "gummy", "hairy", "half", "handmade", "handsome", "handy", "happy", "happy-go-lucky", "hard", "hard-to-find", "harmful", "harmless", "harmonious", "harsh", "hasty", "hateful", "haunting", "healthy", "heartfelt", "hearty", "heavenly", "heavy", "hefty", "helpful", "helpless", "hidden", "hideous", "high", "high-level", "hilarious", "hoarse", "hollow", "homely", "honest", "honorable", "honored", "hopeful", "horrible", "hospitable", "hot", "huge", "humble", "humiliating", "humming", "humongous", "hungry", "hurtful", "husky", "icky", "icy", "ideal", "idealistic", "identical", "idle", "idiotic", "idolized", "ignorant", "ill", "illegal", "ill-fated", "ill-informed", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immaterial", "immediate", "immense", "impassioned", "impeccable", "impartial", "imperfect", "imperturbable", "impish", "impolite", "important", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incomparable", "incompatible", "incomplete", "inconsequential", "incredible", "indelible", "inexperienced", "indolent", "infamous", "infantile", "infatuated", "inferior", "infinite", "informal", "innocent", "insecure", "insidious", "insignificant", "insistent", "instructive", "insubstantial", "intelligent", "intent", "intentional", "interesting", "internal", "international", "intrepid", "ironclad", "irresponsible", "irritating", "itchy", "jaded", "jagged", "jam-packed", "jaunty", "jealous", "jittery", "joint", "jolly", "jovial", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbo", "junior", "jumpy", "juvenile", "kaleidoscopic", "keen", "key", "kind", "kindhearted", "kindly", "klutzy", "knobby", "knotty", "knowledgeable", "knowing", "known", "kooky", "kosher", "lame", "lanky", "large", "last", "lasting", "late", "lavish", "lawful", "lazy", "leading", "lean", "leafy", "left", "legal", "legitimate", "light", "lighthearted", "likable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "little", "live", "lively", "livid", "loathsome", "lone", "lonely", "long", "long-term", "loose", "lopsided", "lost", "loud", "lovable", "lovely", "loving", "low", "loyal", "lucky", "lumbering", "luminous", "lumpy", "lustrous", "luxurious", "mad", "made-up", "magnificent", "majestic", "major", "male", "mammoth", "married", "marvelous", "masculine", "massive", "mature", "meager", "mealy", "mean", "measly", "meaty", "medical", "mediocre", "medium", "meek", "mellow", "melodic", "memorable", "menacing", "merry", "messy", "metallic", "mild", "milky", "mindless", "miniature", "minor", "minty", "miserable", "miserly", "misguided", "misty", "mixed", "modern", "modest", "moist", "monstrous", "monthly", "monumental", "moral", "mortified", "motherly", "motionless", "mountainous", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "muted", "mysterious", "naive", "narrow", "nasty", "natural", "naughty", "nautical", "near", "neat", "necessary", "needy", "negative", "neglected", "negligible", "neighboring", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "nocturnal", "noisy", "nonstop", "normal", "notable", "noted", "noteworthy", "novel", "noxious", "numb", "nutritious", "nutty", "obedient", "obese", "oblong", "oily", "oblong", "obvious", "occasional", "odd", "oddball", "offbeat", "offensive", "official", "old", "old-fashioned", "only", "open", "optimal", "optimistic", "opulent", "orange", "orderly", "organic", "ornate", "ornery", "ordinary", "original", "other", "our", "outlying", "outgoing", "outlandish", "outrageous", "outstanding", "oval", "overcooked", "overdue", "overjoyed", "overlooked", "palatable", "pale", "paltry", "parallel", "parched", "partial", "passionate", "past", "pastel", "peaceful", "peppery", "perfect", "perfumed", "periodic", "perky", "personal", "pertinent", "pesky", "pessimistic", "petty", "phony", "physical", "piercing", "pink", "pitiful", "plain", "plaintive", "plastic", "playful", "pleasant", "pleased", "pleasing", "plump", "plush", "polished", "polite", "political", "pointed", "pointless", "poised", "poor", "popular", "portly", "posh", "positive", "possible", "potable", "powerful", "powerless", "practical", "precious", "present", "prestigious", "pretty", "precious", "previous", "pricey", "prickly", "primary", "prime", "pristine", "private", "prize", "probable", "productive", "profitable", "profuse", "proper", "proud", "prudent", "punctual", "pungent", "puny", "pure", "purple", "pushy", "putrid", "puzzled", "puzzling", "quaint", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick-witted", "quiet", "quintessential", "quirky", "quixotic", "quizzical", "radiant", "ragged", "rapid", "rare", "rash", "raw", "recent", "reckless", "rectangular", "ready", "real", "realistic", "reasonable", "red", "reflecting", "regal", "regular", "reliable", "relieved", "remarkable", "remorseful", "remote", "repentant", "required", "respectful", "responsible", "repulsive", "revolving", "rewarding", "rich", "rigid", "right", "ringed", "ripe", "roasted", "robust", "rosy", "rotating", "rotten", "rough", "round", "rowdy", "royal", "rubbery", "rundown", "ruddy", "rude", "runny", "rural", "rusty", "sad", "safe", "salty", "same", "sandy", "sane", "sarcastic", "sardonic", "satisfied", "scaly", "scarce", "scared", "scary", "scented", "scholarly", "scientific", "scornful", "scratchy", "scrawny", "second", "secondary", "second-hand", "secret", "self-assured", "self-reliant", "selfish", "sentimental", "separate", "serene", "serious", "serpentine", "several", "severe", "shabby", "shadowy", "shady", "shallow", "shameful", "shameless", "sharp", "shimmering", "shiny", "shocked", "shocking", "shoddy", "short", "short-term", "showy", "shrill", "shy", "sick", "silent", "silky", "silly", "silver", "similar", "simple", "simplistic", "sinful", "single", "sizzling", "skeletal", "skinny", "sleepy", "slight", "slim", "slimy", "slippery", "slow", "slushy", "small", "smart", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snoopy", "sociable", "soft", "soggy", "solid", "somber", "some", "spherical", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "Spanish", "sparkling", "sparse", "specific", "spectacular", "speedy", "spicy", "spiffy", "spirited", "spiteful", "splendid", "spotless", "spotted", "spry", "square", "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "starchy", "stark", "starry", "steep", "sticky", "stiff", "stimulating", "stingy", "stormy", "straight", "strange", "steel", "strict", "strident", "striking", "striped", "strong", "studious", "stunning", "stupendous", "stupid", "sturdy", "stylish", "subdued", "submissive", "substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb", "superficial", "superior", "supportive", "sure-footed", "surprised", "suspicious", "svelte", "sweaty", "sweet", "sweltering", "swift", "sympathetic", "tall", "talkative", "tame", "tan", "tangible", "tart", "tasty", "tattered", "taut", "tedious", "teeming", "tempting", "tender", "tense", "tepid", "terrible", "terrific", "testy", "thankful", "that", "these", "thick", "thin", "third", "thirsty", "this", "thorough", "thorny", "those", "thoughtful", "threadbare", "thrifty", "thunderous", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn", "total", "tough", "traumatic", "treasured", "tremendous", "tragic", "trained", "tremendous", "triangular", "tricky", "trifling", "trim", "trivial", "troubled", "true", "trusting", "trustworthy", "trusty", "truthful", "tubby", "turbulent", "twin", "ugly", "ultimate", "unacceptable", "unaware", "uncomfortable", "uncommon", "unconscious", "understated", "unequaled", "uneven", "unfinished", "unfit", "unfolded", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "unique", "united", "unkempt", "unknown", "unlawful", "unlined", "unlucky", "unnatural", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwitting", "unwritten", "upbeat", "upright", "upset", "urban", "usable", "used", "useful", "useless", "utilized", "utter", "vacant", "vague", "vain", "valid", "valuable", "vapid", "variable", "vast", "velvety", "venerated", "vengeful", "verifiable", "vibrant", "vicious", "victorious", "vigilant", "vigorous", "villainous", "violet", "violent", "virtual", "virtuous", "visible", "vital", "vivacious", "vivid", "voluminous", "wan", "warlike", "warm", "warmhearted", "warped", "wary", "wasteful", "watchful", "waterlogged", "watery", "wavy", "wealthy", "weak", "weary", "webbed", "wee", "weekly", "weepy", "weighty", "weird", "welcome", "well-documented", "well-groomed", "well-informed", "well-lit", "well-made", "well-off", "well-to-do", "well-worn", "wet", "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "wilted", "winding", "windy", "winged", "wiry", "wise", "witty", "wobbly", "woeful", "wonderful", "wooden", "woozy", "wordy", "worldly", "worn", "worried", "worrisome", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "yawning", "yearly", "yellow", "yellowish", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zigzag"]); }
function Occupation() { return Choose(["accountant", "actor", "actress", "actuary", "advisor", "aide", "ambassador", "animator", "archer", "athlete", "artist", "astronaut", "astronomer", "attorney", "auctioneer", "author", "babysitter", "baker", "ballerina", "banker", "barber", "baseball player", "basketball player", "bellhop", "blacksmith", "bookkeeper", "biologist", "bowler", "builder", "butcher", "butler", "cab driver", "calligrapher", "captain", "cardiologist", "caregiver", "carpenter", "cartographer", "cartoonist", "cashier", "catcher", "caterer", "cellist", "chaplain", "chef", "chemist", "chauffeur", "clerk", "clergyman", "clergywoman", "coach", "cobbler", "composer", "concierge", "consul", "contractor", "cook", "cop", "coroner", "courier", "cryptographer", "custodian", "dancer", "dentist", "deputy", "dermatologist", "designer", "detective", "dictator", "director", "disc jockey", "diver", "doctor", "doorman", "driver", "drummer", "drycleaner", "ecologist", "economist", "editor", "educator", "electrician", "empress", "emperor", "engineer", "entertainer", "entomologist", "entrepreneur", "executive", "explorer", "exporter", "exterminator", "extra (in a movie)", "falconer", "farmer", "financier", "firefighter", "fisherman", "flutist", "football player", "foreman", "game designer", "garbage man", "gardener", "gatherer", "gemcutter", "geneticist", "general", "geologist", "geographer", "golfer", "governor", "grocer", "guide", "hairdresser", "handyman", "harpist", "highway patrol", "hobo", "hunter", "illustrator", "importer", "instructor", "intern", "internist", "interpreter", "inventor", "investigator", "jailer", "janitor", "jeweler", "jester", "jockey", "journalist", "judge", "karate teacher", "laborer", "landlord", "landscaper", "laundress", "lawyer", "lecturer", "legal aide", "librarian", "librettist", "lifeguard", "linguist", "lobbyist", "locksmith", "lyricist", "magician", "maid", "mail carrier", "manager", "manufacturer", "marine", "marketer", "mason", "mathematician", "mayor", "mechanic", "messenger", "midwife", "miner", "model", "monk", "muralist", "musician", "navigator", "negotiator", "notary", "novelist", "nun", "nurse", "oboist", "operator", "ophthalmologist", "optician", "oracle", "orderly", "ornithologist", "painter", "paleontologist", "paralegal", "park ranger", "pathologist", "pawnbroker", "peddler", "pediatrician", "performer", "percussionist", "pharmacist", "philanthropist", "philosopher", "photographer", "physician", "physicist", "pianist", "pilot", "pitcher", "plumber", "poet", "police", "policeman", "policewoman", "politician", "president", "prince", "princess", "principal", "private", "private detective", "producer", "programmer", "professor", "psychiatrist psychologist", "publisher", "quarterback", "quilter", "radiologist", "rancher", "ranger", "real estate agent", "receptionist", "referee", "registrar", "reporter", "representative", "researcher", "restauranteur", "retailer", "retiree", "sailor", "salesperson", "samurai", "saxophonist", "scholar", "scientist", "scout", "scuba diver", "seamstress", "security guard", "senator", "sheriff", "smith", "singer", "socialite", "soldier", "spy", "star", "statistician", "stockbroker", "street sweeper", "student", "surgeon", "surveyor", "swimmer", "tailor", "tax collector", "taxidermist", "taxi driver", "teacher", "technician", "tennis player", "test pilot", "tiler", "toolmaker", "trader", "trainer", "translator", "trash collector", "travel agent", "treasurer", "truck driver", "tutor", "typist", "umpire", "undertaker", "usher", "valet", "veteran", "veterinarian", "vicar", "violinist", "waiter", "waitress", "warden", "warrior", "watchmaker", "weaver", "welder", "woodcarver", "workman", "wrangler", "writer", "xylophonist", "yodeler", "zookeeper", "zoologist"]); }
function Country() { return Choose(["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "Colombia", "Comoros", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Czech Republic", "Côte d'Ivoire", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Faroe Islands", "Federated States of Micronesia", "Fiji", "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "People's Republic of China", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of China", "Republic of Cyprus", "Republic of Macedonia", "Republic of the Congo", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "São Tomé and Príncipe", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Bahamas", "The Gambia", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zaire", "Zambia", "Zimbabwe"]); }
function Unit() { return Choose(["barrels", "cubic meters", "gram", "carats", "kilograms", "liters", "micrograms", "ounces", "pounds", "spoonfuls", "square centimeters", "square kilometers", "tons", "tonnes", "troy ounces", "units", "dozens", "gallons", "kilos"]); }
function Mineral() { return Choose(["amber", "amethyst", "aquamarine", "azurite", "coal", "diamond", "diamond", "diamond", "diamond", "diamond", "emerald", "garnet", "gemstones", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "jade", "lapis lazuli", "limestone", "malachite", "metamorphic rock", "moonstone", "obsidian", "opal", "quartz", "ruby", "salt", "sand", "sapphire", "topaz"]); }

function Treasure() {
	var count = "5";
	return "{0} {1} of {2}".format(count, Unit(), Mineral());
}

function Person() {
	return Choose([
		"God",
		"Jesus Christ",
		"Mother Theresa",
		"Elvis Presley",
		"Gabe Newell",
		"President of " + Country(),
		"Prince of " + Country(),
		"King of " + Country(),
		"Queen of " + Country(),
		"Emperor of " + Country(),
		"Baron of " + Country(),
		Adjective() + " " + Occupation(),
	])
}



/* Section of a chain mail. Opening/Middle/Ending */

// @spreadFactor (spread) - The chance of the mail being passed on
// @seriousFactor (money) - The chance of the mail being taken seriously
// @text - The message
Part = function(spreadFactor, seriousFactor, text)
{
	this.spreadFactor = spreadFactor;
	this.seriousFactor = seriousFactor;
	this.text = text;
};

Part.prototype.myFunction = function()
{
};


//	new Part( spread, serious, text ),
var chainOpening = [
	// Interesting but not serious
	new Part( 1.0, 0.0, "U WILL DIE DEAD IF YOU STOP READING" ),
	new Part( 1.0, 0.0, "PLEEEEEEEEEEASE READ! it was on the news!" ),
	new Part( 1.0, 0.0, "THIS IS SOOOOOOOOO COOL!!?" ),


	new Part( 0.5, 0.5, "This letter is about an opportunity to make an incredible amount of Money (CASH!!!) in a very short time." ),
	new Part( 0.0, 1.0, "Dear Friend," ),
	new Part( 0.5, 0.5, "Help save {person}!!" ),
	new Part( 0.5, 0.5, "From {person}" ),
	new Part( 0.0, 1.0, "Hello, and thank you for reading this letter." ),
];

var chainContent = [
	new Part( 0.5, 0.5, "Hi there!! This chain letter has been in existence since 1897. This is absolutely incredible because there was no email then and probably not as many sad pricks with nothing better to do. So this is how it works: Pass this on to 15,067 people in the next 7 minutes or something horrible will happen to you like" ),
	new Part( 0.5, 0.5, "If you get some chain letter that's threatening to leave you shagless or luckless for the rest of your life, delete it. If it's funny, send it on. \ Don't piss people off by making them feel guilty about a leper in Botswana with no teeth, who's been tied to a dead elephant for 27 years, whose only saviour is the 5 cents per letter he'll receive if you forward this mail, otherwise you'll end up like Miranda. Right?" ),

	// Horror
	new Part( 0.5, 0.5, "Miranda Pinsley was walking home from school on Saturday. She had recently received this letter and ignored it. She then tripped in a crack in the sidewalk, fell into the sewer, was gushed down a drainpipe in a flood of poopie, and went flying out over a waterfall. Not only did she smell nasty, she died. This Could Happen To You!!!" ),
	new Part( 0.5, 0.5, "Dexter Bip, a 13 year old boy, got a chain letter in his mail and ignored it. Later that day, he was hit by a car and so was his boyfriend (hey, some people swing that way). They both died and went to hell and were cursed to eat adorable kittens every day for eternity. This Could Happen To You Too!!! \ Remember, you could end up just like Pinsley and Bip. Just send this letter to all of your loser friends, and everything will be okay." ),
	new Part( 0.5, 0.5, "Kelly Sedey had one wish, for her boyfriend of three years, David Marsden, to propose to her. Then one day when she was out to lunch David proposed! she accepted, but then had to leave because she had a meeting in 20 min. When she got to her office, she noticed on her computer she had some e-mail's. She checked it, the usual stuff from her friends, but then she saw one that she had never gotten before. It was this poem. She simply deleted it without even reading all of it. \ BIG MISTAGE! Later that evening, she received a phone call from the police. It was about DAVID! He had been in an accident with an 18 wheeler. He didn't survive!" ),
	new Part( 0.5, 0.5, "Take Katie Robinsson. She received this e-mail and being the believer that she was, she sent it to a few of her friends, but didn't have enough e-mail addresses to send out the full 10 that you must. Three days later, Katie went to a masquerade ball. Later that night when she left to get to her car, she was killed in that spot by a hit-and-run drunk driver." ),
	new Part( 0.5, 0.5, "Hello, and thank you for reading this letter. You see, there is a starving little boy in Baklaliviatatlaglooshen who has no arms, no legs, no parents, and no goats. This little boy's life could be saved, because for every time you pass this on, a dollar will be donated to the Little Starving Legless Armless Goatless Boy from Baklaliviatatlaglooshen Fund. Oh, and remember, we have absolutely no way of counting the emails sent and this is all a complete load of bullshit. So go on, reach out. Send this to 5 people in the next 47 seconds. Oh, and a reminder - if you accidentally send this to 4 or 6 people, you will die instantly." ),

	new Part( 0.5, 0.5, "You see, there is a starving little boy in Baklaliviatatlaglooshen who has no arms, no legs, no parents, and no goats. This little boy's life could be saved, because for every time you pass this on, a dollar will be donated to the Little Starving Legless Armless Goatless Boy from Baklaliviatatlaglooshen Fund. Oh, and remember, we have absolutely no way of counting the emails sent and this is all a complete load of bullshit. So go on, reach out. Send this to 5 people in the next 47 seconds. Oh, and a reminder - if you accidentally send this to 4 or 6 people, you will die instantly." ),
]

var chainEnding = [
	new Part( 0.5, 0.5, "Forward this for good luck!" ),
	new Part( 0.5, 0.5, "Now pass this on! If you don't, you'll never have sex ever again." ),
	new Part( 0.5, 0.5, "Now forward this to everyone you know otherwise you'll find your balls missing tomorrow morning." ),
	new Part( 0.5, 0.5, "Try this! ...It really works. If you take this e-mail and forward it to at least 5 people, including the person that sent it to you, a person will appear standing on this bridge. \ Let me know if you know the person? OKAY!" ),
];
