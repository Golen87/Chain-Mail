
/* Utils */

// Returns an element from an array at random.
function Choose(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}

// Returns multiple unique elements from an array at random.
function MultiChoose(arr, count) {
	if (count > arr.length)
		count = arr.length;

	var i = 0;
	var result = [];
	while (result.length < count) {
    	var rndIndex = Math.floor(Math.random()*arr.length);
    	if (result.indexOf(arr[rndIndex]) > -1) continue;
    	result[result.length] = arr[rndIndex];
	}

	return result;
}

// Returns an element from an array at random according to a weight.
	// A weight of 2 means the first element will be picked roughly twice as often as the second; a weight of 0.5 means half as often. A weight of 1 gives a flat, even distribution.
function WeightedChoose(arr, weightChoose) {
	if ( weightChoose <= 0 || weightChoose == undefined) weightChoose = 1;
	return arr[Math.floor(Math.pow(Math.random(),weightChoose) * arr.length)];
}

//Return a number between min and max, included.
function Rand(min, max) {
	return parseFloat(Math.floor(Math.random()*(max-min+1)))+parseFloat(min);
}

//Return a number between min and max, included.
function RandFloat(min, max) {
	return parseFloat(Math.random()*(max-min))+parseFloat(min);
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

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
};

function PhoneNumber(){
	var number = (Math.random()*10000000000000).toString();
	number = number.replaceAt(0, "0")
	number = number.replaceAt(3, "-");
	number = number.replaceAt(7, "-")
	number = number.substr(0, 12);

	return number;
}


/* Word replacements */

// http://www.enchantedlearning.com/wordlist/

function Adjective() { return Choose(["abandoned", "able", "absolute", "adorable", "adventurous", "academic", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "acrobatic", "active", "actual", "adept", "admirable", "admired", "adolescent", "adorable", "adored", "advanced", "afraid", "affectionate", "aged", "aggravating", "aggressive", "agile", "agitated", "agonizing", "agreeable", "ajar", "alarmed", "alarming", "alert", "alienated", "alive", "all", "altruistic", "amazing", "ambitious", "ample", "amused", "amusing", "anchored", "ancient", "angelic", "angry", "anguished", "animated", "annual", "another", "antique", "anxious", "any", "apprehensive", "appropriate", "apt", "arctic", "arid", "aromatic", "artistic", "ashamed", "assured", "astonishing", "athletic", "attached", "attentive", "attractive", "austere", "authentic", "authorized", "automatic", "avaricious", "average", "aware", "awesome", "awful", "awkward", "babyish", "bad", "back", "baggy", "bare", "barren", "basic", "beautiful", "belated", "beloved", "beneficial", "better", "best", "bewitched", "big", "big-hearted", "biodegradable", "bite-sized", "bitter", "black", "black-and-white", "bland", "blank", "blaring", "bleak", "blind", "blissful", "blond", "blue", "blushing", "bogus", "boiling", "bold", "bony", "boring", "bossy", "both", "bouncy", "bountiful", "bowed", "brave", "breakable", "brief", "bright", "brilliant", "brisk", "broken", "bronze", "brown", "bruised", "bubbly", "bulky", "bumpy", "buoyant", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating", "calm", "candid", "canine", "capital", "carefree", "careful", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap", "cheerful", "cheery", "chief", "chilly", "chubby", "circular", "classic", "clean", "clear", "clear-cut", "clever", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "cold", "colorful", "colorless", "colossal", "comfortable", "common", "compassionate", "competent", "complete", "complex", "complicated", "composed", "concerned", "concrete", "confused", "conscious", "considerate", "constant", "content", "conventional", "cooked", "cool", "cooperative", "coordinated", "corny", "corrupt", "costly", "courageous", "courteous", "crafty", "crazy", "creamy", "creative", "creepy", "criminal", "crisp", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cultured", "cumbersome", "curly", "curvy", "cute", "cylindrical", "damaged", "damp", "dangerous", "dapper", "daring", "darling", "dark", "dazzling", "dead", "deadly", "deafening", "dear", "dearest", "decent", "decimal", "decisive", "deep", "defenseless", "defensive", "defiant", "deficient", "definite", "definitive", "delayed", "delectable", "delicious", "delightful", "delirious", "demanding", "dense", "dental", "dependable", "dependent", "descriptive", "deserted", "detailed", "determined", "devoted", "different", "difficult", "digital", "diligent", "dim", "dimpled", "dimwitted", "direct", "disastrous", "discrete", "disfigured", "disgusting", "disloyal", "dismal", "distant", "downright", "dreary", "dirty", "disguised", "dishonest", "dismal", "distant", "distinct", "distorted", "dizzy", "dopey", "doting", "double", "downright", "drab", "drafty", "dramatic", "dreary", "droopy", "dry", "dual", "dull", "dutiful", "each", "eager", "earnest", "early", "easy", "easy-going", "ecstatic", "edible", "educated", "elaborate", "elastic", "elated", "elderly", "electric", "elegant", "elementary", "elliptical", "embarrassed", "embellished", "eminent", "emotional", "empty", "enchanted", "enchanting", "energetic", "enlightened", "enormous", "enraged", "entire", "envious", "equal", "equatorial", "essential", "esteemed", "ethical", "euphoric", "even", "evergreen", "everlasting", "every", "evil", "exalted", "excellent", "exemplary", "exhausted", "excitable", "excited", "exciting", "exotic", "expensive", "experienced", "expert", "extraneous", "extroverted", "extra-large", "extra-small", "fabulous", "failing", "faint", "fair", "faithful", "fake", "false", "familiar", "famous", "fancy", "fantastic", "far", "faraway", "far-flung", "far-off", "fast", "fat", "fatal", "fatherly", "favorable", "favorite", "fearful", "fearless", "feisty", "feline", "female", "feminine", "few", "fickle", "filthy", "fine", "finished", "firm", "first", "firsthand", "fitting", "fixed", "flaky", "flamboyant", "flashy", "flat", "flawed", "flawless", "flickering", "flimsy", "flippant", "flowery", "fluffy", "fluid", "flustered", "focused", "fond", "foolhardy", "foolish", "forceful", "forked", "formal", "forsaken", "forthright", "fortunate", "fragrant", "frail", "frank", "frayed", "free", "French", "fresh", "frequent", "friendly", "frightened", "frightening", "frigid", "frilly", "frizzy", "frivolous", "front", "frosty", "frozen", "frugal", "fruitful", "full", "fumbling", "functional", "funny", "fussy", "fuzzy", "gargantuan", "gaseous", "general", "generous", "gentle", "genuine", "giant", "giddy", "gigantic", "gifted", "giving", "glamorous", "glaring", "glass", "gleaming", "gleeful", "glistening", "glittering", "gloomy", "glorious", "glossy", "glum", "golden", "good", "good-natured", "gorgeous", "graceful", "gracious", "grand", "grandiose", "granular", "grateful", "grave", "gray", "great", "greedy", "green", "gregarious", "grim", "grimy", "gripping", "grizzled", "gross", "grotesque", "grouchy", "grounded", "growing", "growling", "grown", "grubby", "gruesome", "grumpy", "guilty", "gullible", "gummy", "hairy", "half", "handmade", "handsome", "handy", "happy", "happy-go-lucky", "hard", "hard-to-find", "harmful", "harmless", "harmonious", "harsh", "hasty", "hateful", "haunting", "healthy", "heartfelt", "hearty", "heavenly", "heavy", "hefty", "helpful", "helpless", "hidden", "hideous", "high", "high-level", "hilarious", "hoarse", "hollow", "homely", "honest", "honorable", "honored", "hopeful", "horrible", "hospitable", "hot", "huge", "humble", "humiliating", "humming", "humongous", "hungry", "hurtful", "husky", "icky", "icy", "ideal", "idealistic", "identical", "idle", "idiotic", "idolized", "ignorant", "ill", "illegal", "ill-fated", "ill-informed", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immaterial", "immediate", "immense", "impassioned", "impeccable", "impartial", "imperfect", "imperturbable", "impish", "impolite", "important", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incomparable", "incompatible", "incomplete", "inconsequential", "incredible", "indelible", "inexperienced", "indolent", "infamous", "infantile", "infatuated", "inferior", "infinite", "informal", "innocent", "insecure", "insidious", "insignificant", "insistent", "instructive", "insubstantial", "intelligent", "intent", "intentional", "interesting", "internal", "international", "intrepid", "ironclad", "irresponsible", "irritating", "itchy", "jaded", "jagged", "jam-packed", "jaunty", "jealous", "jittery", "joint", "jolly", "jovial", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbo", "junior", "jumpy", "juvenile", "kaleidoscopic", "keen", "key", "kind", "kindhearted", "kindly", "klutzy", "knobby", "knotty", "knowledgeable", "knowing", "known", "kooky", "kosher", "lame", "lanky", "large", "last", "lasting", "late", "lavish", "lawful", "lazy", "leading", "lean", "leafy", "left", "legal", "legitimate", "light", "lighthearted", "likable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "little", "live", "lively", "livid", "loathsome", "lone", "lonely", "long", "long-term", "loose", "lopsided", "lost", "loud", "lovable", "lovely", "loving", "low", "loyal", "lucky", "lumbering", "luminous", "lumpy", "lustrous", "luxurious", "mad", "made-up", "magnificent", "majestic", "major", "male", "mammoth", "married", "marvelous", "masculine", "massive", "mature", "meager", "mealy", "mean", "measly", "meaty", "medical", "mediocre", "medium", "meek", "mellow", "melodic", "memorable", "menacing", "merry", "messy", "metallic", "mild", "milky", "mindless", "miniature", "minor", "minty", "miserable", "miserly", "misguided", "misty", "mixed", "modern", "modest", "moist", "monstrous", "monthly", "monumental", "moral", "mortified", "motherly", "motionless", "mountainous", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "muted", "mysterious", "naive", "narrow", "nasty", "natural", "naughty", "nautical", "near", "neat", "necessary", "needy", "negative", "neglected", "negligible", "neighboring", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "nocturnal", "noisy", "nonstop", "normal", "notable", "noted", "noteworthy", "novel", "noxious", "numb", "nutritious", "nutty", "obedient", "obese", "oblong", "oily", "oblong", "obvious", "occasional", "odd", "oddball", "offbeat", "offensive", "official", "old", "old-fashioned", "only", "open", "optimal", "optimistic", "opulent", "orange", "orderly", "organic", "ornate", "ornery", "ordinary", "original", "other", "our", "outlying", "outgoing", "outlandish", "outrageous", "outstanding", "oval", "overcooked", "overdue", "overjoyed", "overlooked", "palatable", "pale", "paltry", "parallel", "parched", "partial", "passionate", "past", "pastel", "peaceful", "peppery", "perfect", "perfumed", "periodic", "perky", "personal", "pertinent", "pesky", "pessimistic", "petty", "phony", "physical", "piercing", "pink", "pitiful", "plain", "plaintive", "plastic", "playful", "pleasant", "pleased", "pleasing", "plump", "plush", "polished", "polite", "political", "pointed", "pointless", "poised", "poor", "popular", "portly", "posh", "positive", "possible", "potable", "powerful", "powerless", "practical", "precious", "present", "prestigious", "pretty", "precious", "previous", "pricey", "prickly", "primary", "prime", "pristine", "private", "prize", "probable", "productive", "profitable", "profuse", "proper", "proud", "prudent", "punctual", "pungent", "puny", "pure", "purple", "pushy", "putrid", "puzzled", "puzzling", "quaint", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick-witted", "quiet", "quintessential", "quirky", "quixotic", "quizzical", "radiant", "ragged", "rapid", "rare", "rash", "raw", "recent", "reckless", "rectangular", "ready", "real", "realistic", "reasonable", "red", "reflecting", "regal", "regular", "reliable", "relieved", "remarkable", "remorseful", "remote", "repentant", "required", "respectful", "responsible", "repulsive", "revolving", "rewarding", "rich", "rigid", "right", "ringed", "ripe", "roasted", "robust", "rosy", "rotating", "rotten", "rough", "round", "rowdy", "royal", "rubbery", "rundown", "ruddy", "rude", "runny", "rural", "rusty", "sad", "safe", "salty", "same", "sandy", "sane", "sarcastic", "sardonic", "satisfied", "scaly", "scarce", "scared", "scary", "scented", "scholarly", "scientific", "scornful", "scratchy", "scrawny", "second", "secondary", "second-hand", "secret", "self-assured", "self-reliant", "selfish", "sentimental", "separate", "serene", "serious", "serpentine", "several", "severe", "shabby", "shadowy", "shady", "shallow", "shameful", "shameless", "sharp", "shimmering", "shiny", "shocked", "shocking", "shoddy", "short", "short-term", "showy", "shrill", "shy", "sick", "silent", "silky", "silly", "silver", "similar", "simple", "simplistic", "sinful", "single", "sizzling", "skeletal", "skinny", "sleepy", "slight", "slim", "slimy", "slippery", "slow", "slushy", "small", "smart", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snoopy", "sociable", "soft", "soggy", "solid", "somber", "some", "spherical", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "Spanish", "sparkling", "sparse", "specific", "spectacular", "speedy", "spicy", "spiffy", "spirited", "spiteful", "splendid", "spotless", "spotted", "spry", "square", "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "starchy", "stark", "starry", "steep", "sticky", "stiff", "stimulating", "stingy", "stormy", "straight", "strange", "steel", "strict", "strident", "striking", "striped", "strong", "studious", "stunning", "stupendous", "stupid", "sturdy", "stylish", "subdued", "submissive", "substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb", "superficial", "superior", "supportive", "sure-footed", "surprised", "suspicious", "svelte", "sweaty", "sweet", "sweltering", "swift", "sympathetic", "tall", "talkative", "tame", "tan", "tangible", "tart", "tasty", "tattered", "taut", "tedious", "teeming", "tempting", "tender", "tense", "tepid", "terrible", "terrific", "testy", "thankful", "that", "these", "thick", "thin", "third", "thirsty", "this", "thorough", "thorny", "those", "thoughtful", "threadbare", "thrifty", "thunderous", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn", "total", "tough", "traumatic", "treasured", "tremendous", "tragic", "trained", "tremendous", "triangular", "tricky", "trifling", "trim", "trivial", "troubled", "true", "trusting", "trustworthy", "trusty", "truthful", "tubby", "turbulent", "twin", "ugly", "ultimate", "unacceptable", "unaware", "uncomfortable", "uncommon", "unconscious", "understated", "unequaled", "uneven", "unfinished", "unfit", "unfolded", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "unique", "united", "unkempt", "unknown", "unlawful", "unlined", "unlucky", "unnatural", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwitting", "unwritten", "upbeat", "upright", "upset", "urban", "usable", "used", "useful", "useless", "utilized", "utter", "vacant", "vague", "vain", "valid", "valuable", "vapid", "variable", "vast", "velvety", "venerated", "vengeful", "verifiable", "vibrant", "vicious", "victorious", "vigilant", "vigorous", "villainous", "violet", "violent", "virtual", "virtuous", "visible", "vital", "vivacious", "vivid", "voluminous", "wan", "warlike", "warm", "warmhearted", "warped", "wary", "wasteful", "watchful", "waterlogged", "watery", "wavy", "wealthy", "weak", "weary", "webbed", "wee", "weekly", "weepy", "weighty", "weird", "welcome", "well-documented", "well-groomed", "well-informed", "well-lit", "well-made", "well-off", "well-to-do", "well-worn", "wet", "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "wilted", "winding", "windy", "winged", "wiry", "wise", "witty", "wobbly", "woeful", "wonderful", "wooden", "woozy", "wordy", "worldly", "worn", "worried", "worrisome", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "yawning", "yearly", "yellow", "yellowish", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zigzag"]); }
function Occupation() { return Choose(["accountant", "actor", "actress", "actuary", "advisor", "aide", "ambassador", "animator", "archer", "athlete", "artist", "astronaut", "astronomer", "attorney", "auctioneer", "author", "babysitter", "baker", "ballerina", "banker", "barber", "baseball player", "basketball player", "bellhop", "blacksmith", "bookkeeper", "biologist", "bowler", "builder", "butcher", "butler", "cab driver", "calligrapher", "captain", "cardiologist", "caregiver", "carpenter", "cartographer", "cartoonist", "cashier", "catcher", "caterer", "cellist", "chaplain", "chef", "chemist", "chauffeur", "clerk", "clergyman", "clergywoman", "coach", "cobbler", "composer", "concierge", "consul", "contractor", "cook", "cop", "coroner", "courier", "cryptographer", "custodian", "dancer", "dentist", "deputy", "dermatologist", "designer", "detective", "dictator", "director", "disc jockey", "diver", "doctor", "doorman", "driver", "drummer", "drycleaner", "ecologist", "economist", "editor", "educator", "electrician", "empress", "emperor", "engineer", "entertainer", "entomologist", "entrepreneur", "executive", "explorer", "exporter", "exterminator", "extra (in a movie)", "falconer", "farmer", "financier", "firefighter", "fisherman", "flutist", "football player", "foreman", "game designer", "garbage man", "gardener", "gatherer", "gemcutter", "geneticist", "general", "geologist", "geographer", "golfer", "governor", "grocer", "guide", "hairdresser", "handyman", "harpist", "highway patrol", "hobo", "hunter", "illustrator", "importer", "instructor", "intern", "internist", "interpreter", "inventor", "investigator", "jailer", "janitor", "jeweler", "jester", "jockey", "journalist", "judge", "karate teacher", "laborer", "landlord", "landscaper", "laundress", "lawyer", "lecturer", "legal aide", "librarian", "librettist", "lifeguard", "linguist", "lobbyist", "locksmith", "lyricist", "magician", "maid", "mail carrier", "manager", "manufacturer", "marine", "marketer", "mason", "mathematician", "mayor", "mechanic", "messenger", "midwife", "miner", "model", "monk", "muralist", "musician", "navigator", "negotiator", "notary", "novelist", "nun", "nurse", "oboist", "operator", "ophthalmologist", "optician", "oracle", "orderly", "ornithologist", "painter", "paleontologist", "paralegal", "park ranger", "pathologist", "pawnbroker", "peddler", "pediatrician", "performer", "percussionist", "pharmacist", "philanthropist", "philosopher", "photographer", "physician", "physicist", "pianist", "pilot", "pitcher", "plumber", "poet", "police", "policeman", "policewoman", "politician", "president", "prince", "princess", "principal", "private", "private detective", "producer", "programmer", "professor", "psychiatrist psychologist", "publisher", "quarterback", "quilter", "radiologist", "rancher", "ranger", "real estate agent", "receptionist", "referee", "registrar", "reporter", "representative", "researcher", "restauranteur", "retailer", "retiree", "sailor", "salesperson", "samurai", "saxophonist", "scholar", "scientist", "scout", "scuba diver", "seamstress", "security guard", "senator", "sheriff", "smith", "singer", "socialite", "soldier", "spy", "star", "statistician", "stockbroker", "street sweeper", "student", "surgeon", "surveyor", "swimmer", "tailor", "tax collector", "taxidermist", "taxi driver", "teacher", "technician", "tennis player", "test pilot", "tiler", "toolmaker", "trader", "trainer", "translator", "trash collector", "travel agent", "treasurer", "truck driver", "tutor", "typist", "umpire", "undertaker", "usher", "valet", "veteran", "veterinarian", "vicar", "violinist", "waiter", "waitress", "warden", "warrior", "watchmaker", "weaver", "welder", "woodcarver", "workman", "wrangler", "writer", "xylophonist", "yodeler", "zookeeper", "zoologist"]); }
function Country() { return Choose(["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "Colombia", "Comoros", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Czech Republic", "Côte d'Ivoire", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Faroe Islands", "Federated States of Micronesia", "Fiji", "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "People's Republic of China", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of China", "Republic of Cyprus", "Republic of Macedonia", "Republic of the Congo", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "São Tomé and Príncipe", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Bahamas", "The Gambia", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zaire", "Zambia", "Zimbabwe"]); }
function Unit() { return Choose(["barrels", "cubic meters", "gram", "carats", "kilograms", "liters", "micrograms", "ounces", "pounds", "spoonfuls", "square centimeters", "square kilometers", "tons", "tonnes", "troy ounces", "units", "dozens", "gallons", "kilos"]); }
function Mineral() { return Choose(["amber", "amethyst", "aquamarine", "azurite", "coal", "diamond", "diamond", "diamond", "diamond", "diamond", "emerald", "garnet", "gemstones", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "gold", "jade", "lapis lazuli", "limestone", "malachite", "metamorphic rock", "moonstone", "obsidian", "opal", "quartz", "ruby", "salt", "sand", "sapphire", "topaz"]); }

function Verb(){
	return Choose(["accept","ache","acknowledge","act","add","admire","admit","admonish","advise","adopt","affirm","afford","agree","ail","alert","allege","allude","allow","amuse","analyze","announce","annoy","answer","apologize","appeal","appear","applaud","appreciate","approve","argue","arrange","arrest","arrive","articulate","ask","assert","assure","attach","attack","attempt","attend","attract","auction","avoid","avow","babble","back","bake","balance","balk","ban","bang","bandage","bar","bare","bargain","bark","barrage","barter","baste","bat","bathe","battle","bawl","beam","befriend","beg","behave","believe","bellow","belong","berate","besiege","bestow","bleach","bless","blind","blink","blot","blurt","blush","boast","bob","boil","bolt","bomb","book","bore","borrow","bounce","bow","box","brag","brake","branch","brand","breathe","broil","bruise","brush","bubble","bump","burnish","bury","buzz","cajole","calculate","call","camp","care","carry","carve","cause","caution","challenge","change","chant","charge","chase","cheat","check","cheer","chew","chide","chip","choke","chomp","chop","claim","clap","clean","clear","climb","clip","close","coach","coil","collect","color","comb","comfort","command","comment","communicate","compare","compete","complain","complete","concede","concentrate","concern","conclude","concur","confess","confide","confirm","connect","consent","consider","consist","contain","contend","continue","cook","copy","correct","cough","count","counter","cover","covet","crack","crash","crave","crawl","crochet","cross","criticize","croak","cross-examine","crowd","crush","cry","cure","curl","curse","curve","cycle","dam","damage","dance","dare","deal","debate","decay","deceive","decide","decipher","declare","decorate","delay","delight","deliver","demand","deny","depend","describe","desert","deserve","desire","deter","develop","dial","dictate","die","digress","direct","disclose","dislike","dive","divide","divulge","divorce","dock","dole","dote","double","doubt","drag","drain","dress","drip","drill","drone","drop","drown","dry","dupe","dump","dust","dye","earn","echo","edit","educate","elope","embarrass","emigrate","emit","emphasize","employ","empty","enchant","encode","encourage","end","enjoin","enjoy","enter","entertain","enunciate","envy","equivocate","escape","evacuate","evaporate","exaggerate","examine","excite","excuse","exercise","exclaim","exhort","exist","expand","expect","expel","explain","explode","explore","extend","extoll","face","fade","fail","falter","fasten","favor","fax","fear","fence","fetch","file","fill","film","fire","fish","fit","fix","flap","flash","float","flood","floss","flow","flower","fold","follow","fool","force","forgive","form","found","frame","fret","frighten","fry","fume","garden","gasp","gather","gaze","gel","gild","glide","glue","gnaw","grab","grate","grease","greet","grill","grin","grip","groan","growl","grumble","grunt","guarantee","guard","guess","guide","gurgle","gush","hail","hammer","hand","handle","happen","harass","harm","harness","hate","haunt","head","heal","heap","heat","help","highlight","hijack","hinder","hint","hiss","hook","hoot","hop","hope","hover","howl","hug","hum","hunt","hurry","ice","identify","ignore","imagine","immigrate","implore","impress","improve","include","increase","infect","inflate","influence","inform","infuse","inject","injure","inquire","insist","inspect","inspire","instruct","intend","interest","interfere","interject","interrupt","introduce","invent","invest","invite","irritate","iron","itch","jab","jabber","jail","jam","jeer","jest","jog","join","joke","jolt","judge","juggle","jump","kick","kill","kiss","knock","knot","label","lament","land","last","laugh","lean","lecture","level","license","lick","lift","lighten","like","list","listen","live","load","loan","lock","long","look","loosen","love","lower","mail","maintain","man","manage","mar","march","mark","marry","marvel","mate","matter","measure","melt","memorize","mend","mention","merge","milk","mine","miss","mix","moan","moor","mourn","molt","move","mow","mug","multiply","mumble","murder","mutter","nag","nail","name","nap","need","nest","nod","note","notice","number","obey","object","observe","obtain","occur","offend","offer","ogle","oil","omit","open","operate","order","overflow","owe","own","pack","pad","paddle","paint","pant","park","part","pass","paste","pat","pause","peck","pedal","peel","peep","peer","peg","pelt","perform","permit","pester","pet","phone","pick","pinch","pine","place","plan","plant","play","plead","please","pledge","plow","plug","point","poke","polish","ponder","pop","possess","post","postulate","pour","practice","pray","preach","precede","predict","prefer","prepare","present","preserve","press","pretend","prevent","prick","print","proceed","proclaim","produce","profess","program","promise","propose","protect","protest","provide","pry","pull","pump","punch","puncture","punish","push","question","quilt","quiz","quote","race","radiate","rain","raise","rant","rain","rate","rave","reach","realize","rebuff","recall","receive","recite","recognize","recommend","record","reduce","reflect","refuse","regret","reign","reiterate","reject","rejoice","relate","relax","release","rely","remain","remember","remind","remove","repair","repeat","replace","reply","report","reprimand","reproduce","request","rescue","retire","retort","return","reveal","reverse","rhyme","rinse","risk","roar","rob","rock","roll","rot","row","rub","ruin","rule","rush","sack","sail","satisfy","save","savor","saw","scare","scatter","scoff","scold","scoot","scorch","scrape","scratch","scream","screech","screw","scribble","seal","search","sense","separate","serve","settle","sever","shade","shampoo","share","shave","shelter","shift","shiver","shock","shop","shout","shriek","shrug","sigh","sign","signal","sin","singe","sip","skate","skateboard","sketch","ski","skip","slap","slice","slip","slow","smash","smell","smile","smoke","snap","snarl","snatch","sneak","sneer","sneeze","snicker","sniff","snore","snoop","snooze","snort","snow","soak","sob","soothe","sound","span","spare","spark","sparkle","speculate","spell","spill","spoil","spot","spray","sprout","sputter","squash","squeeze","stab","stain","stammer","stamp","star","stare","start","stash","state","stay","steer","step","stipulate","stir","stitch","stop","store","strap","storm","stow","strengthen","stress","stretch","strip","stroke","stuff","stray","strum","strut","stun","stunt","stutter","submerge","succeed","suffer","suggest","suit","supply","support","suppose","surmise","surprise","surround","suspect","suspend","sway","swear","swing","switch","swoop","sympathize","talk","tame","tap","taste","taunt","tease","telephone","tempt","terrify","test","testify","thank","thaw","theorize","threaten","thunder","tick","tickle","tie","time","tip","tire","toast","toss","touch","tour","tow","trace","track","trade","train","translate","transport","trap","travel","treat","tremble","trick","trickle","trim","trip","trot","trouble","trust","trounce","try","tug","tumble","turn","twist","type","undress","unfasten","unite","unlock","unpack","upstage","urge","untie","use","usurp","utter","vacuum","value","vanish","vanquish","venture","visit","voice","volunteer","vote","vouch","wail","wait","walk","wallow","wander","want","warm","warn","wash","waste","watch","water","wave","waver","wed","weigh","welcome","whimper","whine","whip","whirl","whisper","whistle","wink","wipe","wish","wobble","wonder","work","worry","wrap","wreck","wrestle","wriggle","writhe","x-ray","yawn","yell","yelp","yield","yodel","zip","zoom"]);
}

function Treasure() {
	var count = "5";
	return "{0} {1} of {2}".format(count, Unit(), Mineral());
}

function FemaleName() {
	return Name(0);
}

function MaleName() {
	return Name(1);
}

function Name(gender = null) {
	if (gender === null) {
		gender = Choose([0,1]);
	}
	var str = "";
	if (gender == 0) str += WeightedChoose(["Mary","Patricia","Linda","Barbara","Elizabeth","Jennifer","Maria","Susan","Margaret","Dorothy","Lisa","Nancy","Karen","Betty","Helen","Sandra","Donna","Carol","Ruth","Sharon","Michelle","Laura","Sarah","Kimberly","Deborah","Jessica","Shirley","Cynthia","Angela","Melissa","Brenda","Amy","Anna","Rebecca","Virginia","Kathleen","Pamela","Martha","Debra","Amanda","Stephanie","Carolyn","Christine","Marie","Janet","Catherine","Frances","Ann","Joyce","Diane","Alice","Julie","Heather","Teresa","Doris","Gloria","Evelyn","Jean","Cheryl","Mildred","Katherine","Joan","Ashley","Judith","Rose","Janice","Kelly","Nicole","Judy","Christina","Kathy","Theresa","Beverly","Denise","Tammy","Irene","Jane","Lori","Rachel","Marilyn","Andrea","Kathryn","Louise","Sara","Anne","Jacqueline","Wanda","Bonnie","Julia","Ruby","Lois","Tina","Phyllis","Norma","Paula","Diana","Annie","Lillian","Emily","Robin"], 1.2);
	else if (gender == 1) str += WeightedChoose(["James","John","Robert","Michael","William","David","Richard","Charles","Joseph","Thomas","Christopher","Daniel","Paul","Mark","Donald","George","Kenneth","Steven","Edward","Brian","Ronald","Anthony","Kevin","Jason","Matthew","Gary","Timothy","Jose","Larry","Jeffrey","Frank","Scott","Eric","Stephen","Andrew","Raymond","Gregory","Joshua","Jerry","Dennis","Walter","Patrick","Peter","Harold","Douglas","Henry","Carl","Arthur","Ryan","Roger","Joe","Juan","Jack","Albert","Jonathan","Justin","Terry","Gerald","Keith","Samuel","Willie","Ralph","Lawrence","Nicholas","Roy","Benjamin","Bruce","Brandon","Adam","Harry","Fred","Wayne","Billy","Steve","Louis","Jeremy","Aaron","Randy","Howard","Eugene","Carlos","Russell","Bobby","Victor","Martin","Ernest","Phillip","Todd","Jesse","Craig","Alan","Shawn","Clarence","Sean","Philip","Chris","Johnny","Earl","Jimmy","Antonio"], 1.2);
	str += " ";
	if (Rand(0,30) == 1) str += "Mc";
	str += WeightedChoose(["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen","Sanchez","Wright","King","Scott","Green","Baker","Adams","Nelson","Hill","Ramirez","Campbell","Mitchell","Roberts","Carter","Phillips","Evans","Turner","Torres","Parker","Collins","Edwards","Stewart","Flores","Morris","Nguyen","Murphy","Rivera","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gomez","Kelly","Howard","Ward","Cox","Diaz","Richardson","Wood","Watson","Brooks","Bennett","Gray","James","Reyes","Cruz","Hughes","Price","Myers","Long","Foster","Sanders","Ross","Morales","Powell","Sullivan","Russell","Ortiz","Jenkins","Gutierrez","Perry","Butler","Barnes","Fisher","Henderson","Coleman","Simmons","Patterson","Jordan","Reynolds","Hamilton","Graham","Kim","Gonzales","Alexander","Ramos","Wallace","Griffin","West","Cole","Hayes","Chavez","Gibson","Bryant","Ellis","Stevens","Murray","Ford","Marshall","Owens","Mcdonald","Harrison","Ruiz","Kennedy","Wells","Alvarez","Woods","Mendoza","Castillo","Olson","Webb","Washington","Tucker","Freeman","Burns","Henry","Vasquez","Snyder","Simpson","Crawford","Jimenez","Porter","Mason","Shaw","Gordon","Wagner","Hunter","Romero","Hicks","Dixon","Hunt","Palmer","Robertson","Black","Holmes","Stone","Meyer","Boyd","Mills","Warren","Fox","Rose","Rice","Moreno","Schmidt","Patel","Ferguson","Nichols","Herrera","Medina","Ryan","Fernandez","Weaver","Daniels","Stephens","Gardner","Payne","Kelley","Dunn","Pierce","Arnold","Tran","Spencer","Peters","Hawkins","Grant","Hansen","Castro","Hoffman","Hart","Elliott","Cunningham","Knight","Bradley"], 2);
	return str;
}

function Person() {
	return Choose([
		"God",
		"Jesus Christ",
		"Mother Theresa",
		"Elvis Presley",
		"Gabe Newell",
		"Gandhi",
		"Walt Disney",
		"President of " + Country(),
		"Prince of " + Country(),
		"King of " + Country(),
		"Queen of " + Country(),
		"Emperor of " + Country(),
		"Baron of " + Country(),
		Adjective() + " " + Occupation(),
	])
}

function Year() {
	return Math.floor(
		WeightedChoose([
			1990 + 20 * Math.random(),
			1900 + 120 * Math.random(),
			1000 + 2000 * Math.random(),
		], 2)
	).toString();
}

function Age() {
	return Math.floor(
		WeightedChoose([
			10 + 10 * Math.random(),
			5 + 40 * Math.random(),
			2 + 200 * Math.random(),
		], 2)
	).toString();
}

function Percentage() {
	return Math.floor(100 * Math.random()).toString();
}

function Timeunit() {
	return Choose(["days", "hours", "minutes", "months", "seconds", "weeks", "years"]);
}

function Value() {
	var n = Math.floor(
		WeightedChoose([
			1 + 10 * Math.random(),
			1000 + 9900 * Math.random(),
			100000 + 10000000 * Math.random(),
		], 3)
	);
	return addDots(n);
}

function addDots(n) {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



/* Section of a chain mail. */

// @spreadFactor (spread) - The chance of the mail being passed on
// @seriousFactor (money) - The chance of the mail being taken seriously
// @text - The message
Part = function(spreadFactor, seriousFactor, text)
{
	this.spreadFactor = spreadFactor;
	this.seriousFactor = seriousFactor;
	this.text = text;

	this.insertRandomTags();
};

Part.prototype.replace = function(tag, func) {
	while (true) {
		var oldText = this.text;
		var repl = func();

		var caps = new RegExp("\{{0}:Caps\}".format(tag), "i");
		this.text = this.text.replace(caps, repl.toUpperCase());

		var normal = new RegExp("\{{0}\}".format(tag), "i");
		this.text = this.text.replace(normal, repl);

		if (this.text == oldText)
			break;
	}
}

Part.prototype.insertRandomTags = function() {
	this.replace("Person", Person);
	this.replace("Name-Female", FemaleName);
	this.replace("Name-Male", MaleName);
	this.replace("Name", Name);
	this.replace("Country", Country);
	this.replace("Adjective", Adjective);
	this.replace("Verb", Verb);
	this.replace("Timeunit", Timeunit);

	this.replace("Tele", PhoneNumber);
	this.replace("Year", Year);
	this.replace("Age", Age);
	this.replace("Percentage", Percentage);
	this.replace("Value", Value);
};


//	[ spread, serious,0, text ]

const chainOpening = [
	// Attention grab
	[ 1.0, 0.0, "BEWARE!!!" ],
	[ 1.0, 0.0, "U WILL {Verb:Caps} DEAD IF YOU STOP READING" ],
	[ 1.0, 0.0, "PLEEEEEEEEEEASE READ! it was on the news!" ],
	[ 1.0, 0.0, "THIS IS SOOOOOOOOO {Adjective:Caps}!!?" ],
	[ 1.0, 0.0, "!!! STOP EVERYTHING YOUR DOING AND READ THIS !!!" ],
	[ 1.0, 0.0, "WAY COOL EXPERIENCES!!!!!"],
	[ 1.0, 0.0, "IM SORRY GUYS>>I REALLY DONT BELIEVE IT BUT SENDING IT TO YALL JUST IN CASE!!!!!!!!!!!!" ],
	[ 1.0, 0.0, "THIS IS TRUE----PLEASE TAKE THE TIME TO READ IT AND PLEASE SEND THIS TO EVERY SINGLE PERSON YOU KNOW WHO HAS AN E- MAIL ADDRESS....THIS IS REALLY TERRIFIC. " ],
	[ 1.0, 0.0, "*****PLEASE FORWARD THIS TO HELP THIS {Adjective:Caps} GIRL*****\n\nDear All,\nI just received this mail from {Person}." ],
	[ 1.0, 0.0, "This letter is about an opportunity to make an incredible amount of Money (CASH!!!) in a very short time." ],

	// Serious
	[ 0.6, 0.7, "Dear Friend," ],
	[ 0.6, 0.7, "{Adjective} Friend," ],
	[ 0.6, 0.7, "Dear Friends:" ],
	[ 0.6, 0.7, "Dear Internet Subscriber:" ],
	[ 0.6, 0.7, "Dear Friend, this is your mate {Person}:" ],
	[ 0.6, 0.7, "This is an experiment. I hope it will seem interesting enough to you to make you want to participate." ],

	// Money
	[ 0.3, 1.0, "--- WARNING WARNING ---"],
	[ 0.3, 1.0, "Urgent!! Please continue reading!" ],
	[ 0.3, 1.0, "** High Priority **" ],
	[ 0.3, 1.0, "Help save {Person:Caps}!!" ],
	[ 0.3, 1.0, "WARNING!!!!!!!!!: INTERNET VIRUS" ],
];

const chainContent = [
	// Polite, please share
	[ 0.7, 0.7, "Hi there!! This chain letter has been in existence since {Year}. This is absolutely incredible because there was no email then. Pass this on to {Value} people in the next {Value} minutes or something {Adjective} will happen to you" ],
	[ 0.7, 0.7, "Because of the sudden rush of people {Verb} to Hotmail, it has come to our attention that we are {Adjective} running out of resources. Please forward this email so that we know you are still {Verb} this account." ],
	[ 0.7, 0.7, "If you get some chain letter that's threatening to leave you {Adjective} or luckless for the rest of your life, delete it. If it's {Adjective}, send it on.\nOtherwise you'll end up like {Person}. Right??" ],
	[ 0.7, 0.7, "Hello Disney fans, And thank you for signing up for {Person} Beta Email Tracking My name is {Name}. Here at Disney we are working with Microsoft which has just compiled an e-mail tracing program that tracks everyone to whom this message is forwarded to. It does this through an unique IP (Internet Protocol) address log book database. We are experimenting with this and need your help. "],

	// Claim to send them money
	[ 1.0, 0.3, "We at RH Power Inc. want to see how many people our email can reach! If you forward this mail, you will be PAID MONEY!!!!" ],
	[ 1.0, 0.3, "For every person you send this to you will receive ${Value}! For every person they send this to you will receive ${Value}!" ],
	[ 1.0, 0.3, "I too, {Name}, Head Marketing Manager, thought this was a hoax! IF YOU SEND THIS TO AT LEAST {Value} PEOPLE RIGHT AWAY, A ${Value} GIFT CERTIFICATE WILL POP UP ON YOUR SCREEN!!!" ],
	[ 1.0, 0.3, "This message is sent to you with the hope you will forward it to EVERYONE you have ever even seen the e-mail address of. In the spirit of the originator, please feel free to post it anywhere and everywhere." ],
	[ 1.0, 0.3, "One guy sent this to 500 people !!!! So, I know that we can send it to at least 5 or 6. Come on you guys.... and if you're too selfish to take 10-15 minutes scrolling this and forwarding it to EVERYONE, then you are one sick person. Just think it could be you one day.It's not even your $money$, just your time!!!" ],

	// Horror
	[ 0.8, 0.4, "{Name-Female} was walking home from school on Saturday. She had recently received this letter and ignored it. She then tripped in a crack in the sidewalk, {Verb} into the sewer, was gushed down a drainpipe in a flood of poopie, and went flying out over a waterfall. She died. This Could Happen To You!!!" ],
	[ 0.8, 0.4, "{Name-Female} had one wish, for her lover of three years, {Person}, to propose to her. Then one day when she was out to lunch they proposed! she accepted, but then had to leave because she had a meeting in {Value} {Timeunit}. When she got to her office, she noticed on her computer she had some e-mail. It was this email. She simply deleted it without even reading all of it. Later that evening, she received a phone call from the police. It was about her boyfriend! He had been in an accident. He didn't survive!" ],
	[ 0.8, 0.4, "{Name-Male}, a {Age} year old boy, got a chain letter in his mail and ignored it. Later that day, he was hit by a {Adjective} car and so was his boyfriend (hey, some people swing that way!!). They both died and went to hell and were cursed to eat {Adjective} kittens every day for eternity. This Could Happen To You Too!!!\nRemember, you could end up just like {Name-Male} and {Name-Male}. Just send this letter to all of your loser friends, and everything will be okay.." ],
	[ 0.8, 0.4, "Take {Name-Female}. She received this e-mail and sent it to a few of her friends, but didn't have enough e-mail addresses to send out the full ${Value} that you must. {Value} {Timeunit} later, Katie went to a masquerade ball. Later that night when she left to get to her car, she was killed in that spot by a hit-and-run {Adjective} driver." ],
	[ 0.8, 0.4, "{Name-Male} sent this email out within {Age} {Timeunit} of reading it. Not even {Age} {Timeunit} later walking along the street he ran into {Name-Female}, his secret love for {Value} {Timeunit}. She came up to him, and told him of her passionate crush on him that she had had for {Age} {Timeunit}." ],
	[ 0.8, 0.4, "Now, to make you feel guilty, here's what I'll do. First of all, if you don't send this to {Value} people in the next {Value} {Timeunit}, you will be {Verb} by a {Adjective} goat and thrown off a {Adjective} building into a {Adjective} pile of manure. It's true! Because, THIS letter isn't like all of those fake ones, THIS one is TRUE!! Really!!!" ],
	[ 0.8, 0.4, "This is not a scam or out of a science fiction novel, it is real. It is documented and confirmable. If you travel or someone close to you travels, please be careful. Sadly, this is very true. My husband {Name-Male} is a {Country} firefighter/EMT and they have received alerts regarding this crime ring. It is to be taken very seriously. The daughter of a friend of a fellow firefighter had this happen to her. Skilled doctor's are performing these crimes! (which, by the way have been highly noted in the {Country} area). Additionally, the military has received alerts regarding this. This story blew me away. I really want as many people to see this as possible so please bounce this to whoever you can." ],
	[ 0.8, 0.4, "I wish to warn you about a new crime ring that is targeting business travelers. This ring is well organized, well funded, has very skilled personnel, and is currently in most major cities and recently very active in New Orleans. The crime begins when a business traveler goes to a lounge for a drink at the end of the work day. A person in the bar walks up as they sit alone and offers to buy them a drink. The last thing the traveler remembers until they wake up in a hotel room bath tub, their body submerged to their neck in ice, is sipping that drink. If you travel or someone close to you travels, please be careful." ],
	[ 0.8, 0.4, "Please read the following carefully if you intend to stay online and continue using email: The last few months have revealed an alarming trend in the Government of the United States attempting to quietly push through legislation that will affect your use of the Internet. Under proposed legislation the US Postal Service will be attempting to bilk email users out of \"alternate postage fees\". Bill 602P will permit the Federal Govt to charge a 5 cent surcharge on every email delivered, by billing Internet Service Providers at source. The consumer would then be billed in turn by the ISP. Washington DC lawyer Richard Stepp is working without pay to prevent this legislation from becoming law. The US Postal Service is claiming that lost revenue due to the proliferation of email is costing nearly ${Value} in revenue per year. You may have noticed their recent ad campaign \"There is nothing like a letter.\" Since the average citizen received about {Value} pieces of email per day in {Year}, the cost to the typical individual would be an additional {Value} cents per day, or over ${Value} dollars per {Timeunit}, above and beyond their regular Internet costs. Note that this would be money paid directly to the U.S. Postal Service for a service they do not even provide. The whole point of the Internet is democracy and non-interference. If the federal government is permitted to tamper with our liberties by adding a surcharge to email, who knows where it will end." ],

	// Asking for money
	[ 0.3, 1.0, "Intel announced that a new and very {Adjective} virus was discovered recently. If you receive an email called \"An Internet Flower For You\", do not {Verb} it.\n {Verb} it right away! Just send us your credit card number and we will fix it for you. HURRY!!" ],
	[ 0.3, 1.0, "There is a computer virus that is being sent across the Internet. If you receive an e-mail message with the subject line \"{Person}\", DO NOT {Verb} the message, {Verb} it immediately. To be sure you arent affected, send {Value} dollars to {Tele}!!" ],
	[ 0.3, 1.0, "Hello, and thank you for {Verb} this letter. You see, there is a starving little boy in {Country} who has no arms, no legs, no {Person}, and no goats. This little boy's life could be saved, because for every time you pass this on, {Value} dollar will be donated to the Little Starving Boy. Please donate and help."],
	[ 0.3, 1.0, "This is not a joke...if you do not forward this message to 10 other people............. your computer will be a living hell thanks to one of our very own little ingenus viruses. I repeat this is not a joke this virus will come to you only a week after you open this piece of mail in a very undiscreet e-mail If you open this e-mail after opening others, it just might come as a letter from your \"buddy\" Watch out! You have one week.. starting now. If this virus gets in it won't come back out. It will slowly delete 1 file a day from system IRQ files, startup files and windows kernels for registery address. Send payment to {Tele} and your problems will be fixed IMMEDIATELY." ],
	[ 0.3, 1.0, "In thirty days, I received my VISA statement from Neiman-Marcus and it was $285.00. I looked again and I remembered I had only spent $9.95 for two salads and about $20.00 for a scarf. As I glanced at the bottom of the statement, it said, \"Cookie Recipe - $250.00\" That's outrageous!! Just send money to us and you will be rich too!!!!" ],
	[ 0.3, 1.0, "Hotmail is overloading and we need to get rid of some people and we want to find out what user are actually using there hotmail. so please if you are using your user pass this letter to every person you can and if you do not pass this letter to anyone we will deleate you user. To ensure your account is not removed, send money to {Tele} to renew your subscription." ],
	[ 0.3, 1.0, "Please respond to it. It will just mean employing a little bit of time and you can donate for a good cause! All it needs is the heart for you to send this mail. PLEASE pass this mail on to everybody you know. It is the request of little girl who will soon leave this world as she has been a victim of the terrible disease called CANCER. Thank you for your effort, this isn't a chain letter, but a choice for all of us to save a little girl that's dying of a serious and fatal form of cancer. Please help this girl." ],
	[ 0.3, 1.0, "Please send this to everyone you know...or don't know. This little girl has {Age} {Timeunit} left to live, and as her dying wish, she wanted to send a chain letter telling everyone to live their life to fullest, since she never will. She'll never make it to prom, graduate from high school, or get married and have a family of her own. By you sending this to as many people as possible, you can give her and her family a little hope, because with every name that this is sent to,The American Cancer Society will donate 3 cents per name to her treatment and recovery plan. How much will you send?" ],

	// Fun spread, no money
	[ 1.0, 0.0, "Email messages fly to and fro, all over the world. Lots of jokes, cute sayings, etc. seem to take on a life of their own as they getforwarded to more and more email addresses. I've often thought that it is too bad we can't see where these well-traveled messages have been. I'll bet we'd be amazed at the list of addresses some have visited." ],
	[ 1.0, 0.0, "There is a way to find out. Just add your first name, location,dateand maybe a very short comment to the bottom of this message and sendit out to your list of email friends.(Copy & Paste the message to a newe mail screen then add your name and send.)Eventually it may return to you. If it does, you'll be able to see all the places it has been since itfirst left your computer." ],
	[ 1.0, 0.0, "You are walking through a field, and you find something to eat. It doesn't have bones, and it doesn't have meat. You pick it up and put it into your pocket. You take it home and put it on a shelf, but 3 day's later it walks away. What is it?\n\nIf you can't figure out this riddle and want to know the answer, you'll probally have to e-mail your friend and beg him/her for the answer." ],
	[ 1.0, 0.0, "I can be created by humans, But they cannot control me. I suck on wood, paper and flesh alike. I can be more of a hindrance than help at times. To my creators, I seem to be everywhere at once. What am I?\n\nIf you can't figure out this riddle and want to know the answer, you'll probally have to e-mail your friend and beg him/her for the answer." ],
	[ 1.0, 0.0, "░░░░░███████ ]▄▄▄▄▄▄▄▄ Bob is building an army.\n▂▄▅█████████▅▄▃▂ \☻ This tank & Bob are against Google+\nIl███████████████████]... ▌\︻╦╤─ Copy and Paste this email to all\n◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤.... /\nof your friends if you are with us" ],
	[ 1.0, 0.0, "Scroll Down!\n*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n**********\n***********\n************\n*************\n**************\n***************\n**************\n*************\n************\n***********\n**********\n*********\n********\n*******\n******\n*****\n****\n***\n**\n*\n*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n**********\n***********\n************\n*************\n**************\n***************\n**************\n*************\n************\n***********\n**********\n*********\n********\n*******\n******\n*****\n****\n***\n**\n*\n*\n\nSTOP!"],
	[ 1.0, 0.0, "GO!!!\n*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n**********\n***********\n************\n*************\n**************\n***************\n****************\n*****************\n******************\n*******************\n********************\n*********************\n**********************\n***********************\n************************\n*************************\n**************************\n***************************\n****************************\n*****************************\n******************************\n*******************************\n********************************\n*********************************\n**********************************\n***********************************\n**********************************\n*********************************\n********************************\n*******************************\n*****************************\n****************************\n***************************\n**************************\n*************************\n************************\n***********************\n**********************\n*********************\n********************\n*******************\n******************\n*****************\n****************\n***************\n**************\n*************\n************\n***********\n**********\n*********\n********\n*******\n******\n*****\n****\n***\n**\n*\n*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n**********\n***********\n************\n*************\n**************\n***************\n****************\n*****************\n******************\n*******************\n********************\n*********************\n**********************\n***********************\n************************\n*************************\n**************************\n***************************\n****************************\n*****************************\n******************************\n*******************************\n********************************\n*********************************\n**********************************\n***********************************\n**********************************\n*********************************\n********************************\n*******************************\n*****************************\n****************************\n***************************\n**************************\n*************************\n************************\n***********************\n**********************\n*********************\n********************\n*******************\n******************\n*****************\n****************\n***************\n**************\n*************\n************\n***********\n**********\n*********\n********\n*******\n******\n*****\n****\n***\n**\n*\n*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n**********\n***********\n************\n*************\n**************\n***************\n****************\n*****************\n******************\n*******************\n********************\n*********************\n**********************\n***********************\n************************\n*************************\n**************************\n***************************\n****************************\n*****************************\n******************************\n*******************************\n********************************\n*********************************\n**********************************\n***********************************\n**********************************\n*********************************\n********************************\n*******************************\n*****************************\n****************************\n***************************\n**************************\n*************************\n************************\nIT'S ALIVE!!!!!!!!!!!!!!!!\n**********************\n*********************\n********************\n*******************\n******************\n*****************\n****************\n***************\n**************\n*************\n************\n***********\n**********\n*********\n********\n*******\n******\n*****\n****\n***\n**\n*\nSTOP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\nCONGRATULATIONS!!!!!!!!!!!!!\nYOUR WISH WILL NOW COME TRUE IN {Value} {Timeunit:Caps}!! NOW FOLLOW THIS CAREFULLY.... IT CAN BE VERY REWARDING!!!!!!!" ],
	[ 1.0, 0.0, "********************Make A Wish********************\n\nY                                             3   \nYo\nYou\nYou A\nYou Ar\nYou Are\nYou Are L\nYou Are Lo\nYou Are Lov\nYou Are Love\nYou Are Loved\nYou Are Love\nYou Are Lov\nYou Are Lo\nYou Are L\nYou Are\nYou Ar\nYou A\nYou\nYo\nY\nYo\nYou\nYou A\nYou Ar\nYou Are\nYou Are L\nYou Are Lo\nYou Are Lov\nYou Are Love\nYou Are Loved\nYou Are Love\nYou Are Lov\nYou Are Lo\nYou Are L\nYou Are\nYou Ar\nYou A\nYou\nYo\nY\n  Yo                                       2\n   You\n    You A\n     You Ar\n      You Are\n       You Are L\n        You Are Lo  \n         You Are Lov\n          You Are Love\n           You Are Loved.........  \nY\nYo\nYou\nYou A\nYou Ar\nYou Are\nYou Are L\nYou Are Lo\nYou Are Lov\nYou Are Love\nYou Are Loved\nYou Are Love\nYou Are Lov\nYou Are Lo\nYou Are L\nYou Are\nYou Ar\nYou A\nYou\nYo\nY\n\n1\n\nYou are now loved!"],
	[ 1.0, 0.0, "Please copy and share this email if you know someone, or have heard of someone who knows someone that may know someone who knows anyone. If you don’t know anyone, or even if you’ve heard of anyone who doesn’t know anyone that doesn’t know someone, then still copy this. It’s important to spread the message. Oh, and the hearts. <3 <3 <3 For crap’s sake, don’t forget the hearts. <3 <3 <3" ],
	[ 1.0, 0.0, "PLEASE put this on your status if you know someone or are related to someone who has been eaten by dragons. {Person} is nearly unstoppable, and in case you didn’t know, they can breathe fire. {Percentage}% of people won’t copy and paste this, because they have already been eaten by {Person}. {Percentage}% of people are sitting in the shower, armed with fire extinguishers. The remaining {Percentage}% are {Adjective}, and will re-post this." ],
	[ 1.0, 0.0, "So sad! Please share this email if you know someone or are related to someone who suffers from stupidity. We all need to understand that stupidity is real and should be taken seriously. You could be sitting next to a sufferer right now. There is still no known cure for stupidity & sympathy does not help. But we can raise awareness. {Percentage}% won’t send this mail to their friends because they don’t know how to copy & paste." ],
	[ 1.0, 0.0, "Please copy and send this email if you know someone, or have been affected by someone, who needs a smack upside the head. People who need a smack upside the head effect the lives of many. There is still no known cure for someone who deserves a smack upside the head, except a smack upside the head, but we can raise awareness. Many won’t copy and paste this. I did. Will you?" ],
	[ 1.0, 0.0, "ACCHOO!!!……..٩(̮̮̃•̃-̮̮̃•̃)۶.. Copy and paste this email if you’re allergic to bullcrap, drama, head games, liars, and fake people. Keep this sneeze going." ],
	[ 1.0, 0.0, "If you have online friends that you’ve never met, but would just love to give a {Adjective} HUG to, cause they are always there for you, liking your emails, poking you, and just being on your friend list though you never ever met them in your life. I know I do. Please send this email to everyone you know and let them know they are {Adjective:Caps} and {Adjective}." ],
	[ 1.0, 0.0, "Cna yuo raed tihs? Olny {Percentage} plepoe out of 100 can." ],
	[ 1.0, 0.0, "I cdnuolt blveiee taht I cluod aulaclty uesdnatnrd waht I was rdanieg. The phaonmneal pweor of the hmuan mnid, aoccdrnig to a rscheearch at Cmabrigde Uinervtisy, it dseno’t mtaetr in waht oerdr the ltteres in a wrod are, the olny iproamtnt tihng is taht the frsit and lsat ltteer be in the rghit pclae. The rset cna be a taotl mses and yuo cna sitll raed it whotuit a pboerlm. Tihs is bcuseae the hmuan mnid deos not raed ervey lteter by istlef, but the wrod as a wlohe. Azanmig huh? Yaeh and I awlyas tghuhot slpeling was ipmorantt! Fi yuo cna raed tihs add tihs to yrou’e porflie." ],
	[ 1.0, 0.0, "Please send this to all your contacts if you know or are related to someone who was killed on Alderaan when it was obliterated by the Death Star. Our wish is that people will understand that the Empire is a band of murdering scum. The Rebel Alliance wants to bring peace to the galaxy, but ……the…Galactic Empire continues to kill innocent civilians. ({Percentage}% of people won’t copy/paste this email." ],
	[ 1.0, 0.0, "Forward this email if you know someone (or are related to someone) who has been attacked by ninjas. My wish is that people will understand that being attacked by ninjas is not something to be ashamed of. Ninjas are nearly unstoppable and are truly terrifying. {Percentage}% of people won’t copy and paste this – they have already been attacked by ninjas." ],
	[ 1.0, 0.0, "WE URGE YOU TO MAKE COPIES OF THIS AND PASS IT ON TO AS MANY PEOPLE AS POSSIBLE. THIS NEEDS TO STOP. {Name-Female:Caps} ALSO PROFESSES TO WORSHIP SATAN AND RECENTLY OPENLY ADMITTED ON THE OPRAH WINFREY SHOW THAT HALF OF HER PROFITS GO TOWARDS THE CHURCH OF SATAN. " ],
];

const chainEnding = [
	// Serious
	[ 0.2, 1.0, "From Mr. Jon Henerd\nHotmail Admin. Dept." ],
	[ 0.2, 1.0, "From {Name}\nSuper CEO" ],
	[ 0.2, 1.0, "Regards, {Name}, Executive Manager Inc." ],
	[ 0.2, 1.0, "Sincerely, {Name}\nHead Debt." ],
	[ 0.2, 1.0, "From Mr. {Name-Male}\n{Tele}" ],
	[ 0.2, 1.0, "Yours Truly, {Person}" ],
	[ 0.2, 1.0, "Best of luck,\n{Person}" ],
	[ 0.2, 1.0, "Regards {Name} {Country} Ops Engineering Manager Telephone: {Tele} {Tele}" ],
	[ 0.2, 1.0, "Walt Disney Jr., Disney, Bill Gates, & The Microsoft Development Team." ],

	// Polite share
	[ 0.7, 0.5, "Forward this for good luck!" ],
	[ 0.7, 0.5, "What we say is important... for in most cases the mouth speaks what the heart is full of." ],
	[ 0.7, 0.5, "Please be careful." ],
	[ 0.7, 0.5, "Note: Duplicate entries will not be counted. You will be notified by email with further instructions once this email has reached {Value} people.\n\nYour friend, {Name}." ],

	// Promises or threats
	[ 1.0, 0.2, "Try this! ...It really works. If you take this e-mail and forward it to at least {Age} people, including the person that sent it to you, a person will appear standing on this bridge.\nLet me know if you know the person? OKAY!" ],
	[ 1.0, 0.2, "Now pass this on! If you don't, you'll never {Verb} ever again." ],
	[ 1.0, 0.2, "Now forward this to everyone you know otherwise you'll find your balls missing tomorrow morning." ],
	[ 1.0, 0.2, "This is not a joke --- this is a true story. Ride free citizens!" ],
	[ 1.0, 0.2, "Send this to 4 ppl or skelintons will eat you"],
	[ 1.0, 0.2, "Send this to.....\n0 people~ You will have bad luck in love for 3 years\n5-10 people~ You will have a lucky week\n10-15 people~ Your crush will become friends with you\n15-20 people~ Your crush will ask you out\n20+ people~ Your wish will come true and you will have a wonderful life!\n~Good Luck!"],
	[ 1.0, 0.2, "Have fun!! This is not a joke --- this is a true story. That's it. Please, pass it along to everyone you know, single people, mailing lists, etc..."],
	[ 1.0, 0.2, "IF YOU SEND THIS TO 10 MORE PEOPLE, OTHER THAN THE 20 THAT YOU ALREADY HAVE TO SEND TO, SOMETHING MAJOR, THAT YOU'VE BEEN WANTING TO HAPPEN, WILL HAPPEN IN THE NEXT 10 SECONDS,MINUTES,HOURS,OR DAYS!! PROBABLY MINUTES OR DAYS.\n\nGOOD LUCK!!!!!!!!!"],
	[ 1.0, 0.2, "Time's up!!!!!!!!!\nSend this to:\n2 peeps-it will come true in a year\n5 peeps-in 3 months\n7 peeps-1 month\n10 peeps-in a week\n15 or more-tomorrow=20"],
	[ 1.0, 0.2, "Now, u r blessed, with the presence of your love's angel. In order to keep this blessing, u must send this to the following # of people:\n0 - 4 - u will be cursed, no love for 2 years.\n5 - 9 - you're crush will ask u out.\n10 - 19 - your crush/boyfriend will french u.\n20 + - your crush/boyfriend will make out with u, and will not dump u.\nNow, the choice is yours, make the right one."],

	// Weird
	[ 0.0, 0.0, "Thank you for your time.......#:) hahahahaha!!!" ],
	[ 0.0, 0.0, "Hahahaha... ; )\nOk, goodbye!!1" ],
];
