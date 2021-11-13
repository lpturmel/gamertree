const regions = {
	americas: [
		"Aegwynn",
		"Aerie Peak",
		"Agamaggan",
		"Aggramar",
		"Akama",
		"Alexstrasza",
		"Alleria",
		"Altar of Storms",
		"Alterac Mountains",
		"Aman'Thul",
		"Andorhal",
		"Anetheron",
		"Antonidas",
		"Anub'arak",
		"Anvilmar",
		"Arathor",
		"Archimonde",
		"Area 52",
		"Argent Dawn",
		"Arthas",
		"Arygos",
		"Auchindoun",
		"Azgalor",
		"Azjol-Nerub",
		"Azralon",
		"Azshara",
		"Azuremyst",
		"Baelgun",
		"Balnazzar",
		"Barthilas",
		"Black Dragonflight",
		"Blackhand",
		"Blackrock",
		"Blackwater Raiders",
		"Blackwing Lair",
		"Blade's Edge",
		"Bladefist",
		"Bleeding Hollow",
		"Blood Furnace",
		"Bloodhoof",
		"Bloodscalp",
		"Bonechewer",
		"Borean Tundra",
		"Boulderfist",
		"Bronzebeard",
		"Burning Blade",
		"Burning Legion",
		"Caelestrasz",
		"Cairne",
		"Cenarion Circle",
		"Cenarius",
		"Cho'gall",
		"Chromaggus",
		"Coilfang",
		"Crushridge",
		"Daggerspine",
		"Dalaran",
		"Dalvengyr",
		"Dark Iron",
		"Darkspear",
		"Darrowmere",
		"Dath'Remar",
		"Dawnbringer",
		"Deathwing",
		"Demon Soul",
		"Dentarg",
		"Destromath",
		"Dethecus",
		"Detheroc",
		"Doomhammer",
		"Draenor",
		"Dragonblight",
		"Dragonmaw",
		"Drak'Tharon",
		"Drak'thul",
		"Draka",
		"Drakkari",
		"Dreadmaul",
		"Drenden",
		"Dunemaul",
		"Durotan",
		"Duskwood",
		"Earthen Ring",
		"Echo Isles",
		"Eitrigg",
		"Eldre'Thalas",
		"Elune",
		"Emerald Dream",
		"Eonar",
		"Eredar",
		"Executus",
		"Exodar",
		"Farstriders",
		"Feathermoon",
		"Fenris",
		"Firetree",
		"Fizzcrank",
		"Frostmane",
		"Frostmourne",
		"Frostwolf",
		"Galakrond",
		"Gallywix",
		"Garithos",
		"Garona",
		"Garrosh",
		"Ghostlands",
		"Gilneas",
		"Gnomeregan",
		"Goldrinn",
		"Gorefiend",
		"Gorgonnash",
		"Greymane",
		"Grizzly Hills",
		"Gul'dan",
		"Gundrak",
		"Gurubashi",
		"Hakkar",
		"Haomarush",
		"Hellscream",
		"Hydraxis",
		"Hyjal",
		"Icecrown",
		"Illidan",
		"Jaedenar",
		"Jubei'Thos",
		"Kael'thas",
		"Kalecgos",
		"Kargath",
		"Kel'Thuzad",
		"Khadgar",
		"Khaz Modan",
		"Khaz'goroth",
		"Kil'jaeden",
		"Kilrogg",
		"Kirin Tor",
		"Korgath",
		"Korialstrasz",
		"Kul Tiras",
		"Laughing Skull",
		"Lethon",
		"Lightbringer",
		"Lightning's Blade",
		"Lightninghoof",
		"Llane",
		"Lothar",
		"Madoran",
		"Maelstrom",
		"Magtheridon",
		"Maiev",
		"Mal'Ganis",
		"Malfurion",
		"Malorne",
		"Malygos",
		"Mannoroth",
		"Medivh",
		"Misha",
		"Mok'Nathal",
		"Moon Guard",
		"Moonrunner",
		"Mug'thol",
		"Muradin",
		"Nagrand",
		"Nathrezim",
		"Nazgrel",
		"Nazjatar",
		"Nemesis",
		"Ner'zhul",
		"Nesingwary",
		"Nordrassil",
		"Norgannon",
		"Onyxia",
		"Perenolde",
		"Proudmoore",
		"Quel'Thalas",
		"Quel'dorei",
		"Ragnaros",
		"Ravencrest",
		"Ravenholdt",
		"Rexxar",
		"Rivendare",
		"Runetotem",
		"Sargeras",
		"Saurfang",
		"Scarlet Crusade",
		"Scilla",
		"Sen'jin",
		"Sentinels",
		"Shadow Council",
		"Shadowmoon",
		"Shadowsong",
		"Shandris",
		"Shattered Halls",
		"Shattered Hand",
		"Shu'halo",
		"Silver Hand",
		"Silvermoon",
		"Sisters of Elune",
		"Skullcrusher",
		"Skywall",
		"Smolderthorn",
		"Spinebreaker",
		"Spirestone",
		"Staghelm",
		"Steamwheedle Cartel",
		"Stonemaul",
		"Stormrage",
		"Stormreaver",
		"Stormscale",
		"Suramar",
		"Tanaris",
		"Terenas",
		"Terokkar",
		"Thaurissan",
		"The Forgotten Coast",
		"The Scryers",
		"The Underbog",
		"The Venture Co",
		"Thorium Brotherhood",
		"Thrall",
		"Thunderhorn",
		"Thunderlord",
		"Tichondrius",
		"Tol Barad",
		"Tortheldrin",
		"Trollbane",
		"Turalyon",
		"Twisting Nether",
		"Uldaman",
		"Uldum",
		"Undermine",
		"Ursin",
		"Uther",
		"Vashj",
		"Vek'nilash",
		"Velen",
		"Warsong",
		"Whisperwind",
		"Wildhammer",
		"Windrunner",
		"Winterhoof",
		"Wyrmrest Accord",
		"Ysera",
		"Ysondre",
		"Zangarmarsh",
		"Zul'jin",
		"Zuluhed",
	],
	korea: [
		"Alexstrasza",
		"Azshara",
		"Burning Legion",
		"Cenarius",
		"Dalaran",
		"Deathwing",
		"Durotan",
		"Garona",
		"Gul'dan",
		"Hellscream",
		"Hyjal",
		"Malfurion",
		"Norgannon",
		"Rexxar",
		"Stormrage",
		"Wildhammer",
		"Windrunner",
		"Zul'jin",
	],
	taiwan: [
		"Arthas",
		"Arygos",
		"Bleeding Hollow",
		"Chillwind Point",
		"Crystalpine Stinger",
		"Demon Fall Canyon",
		"Dragonmaw",
		"Frostmane",
		"Hellscream",
		"Icecrown",
		"Light's Hope",
		"Menethil",
		"Nightsong",
		"Order of the Cloud Serpent",
		"Quel'dorei",
		"Shadowmoon",
		"Silverwing Hold",
		"Skywall",
		"Spirestone",
		"Stormscale",
		"Sundown Marsh",
		"Whisperwind",
		"World Tree",
		"Wrathbringer",
		"Zealot Blade",
	],
	europe: [
		"Aegwynn",
		"Aerie Peak",
		"Agamaggan",
		"Aggra (Português)",
		"Aggramar",
		"Ahn'Qiraj",
		"Al'Akir",
		"Alexstrasza",
		"Alleria",
		"Alonsus",
		"Aman'Thul",
		"Ambossar",
		"Anachronos",
		"Anetheron",
		"Antonidas",
		"Anub'arak",
		"Arak-arahm",
		"Arathi",
		"Arathor",
		"Archimonde",
		"Area 52",
		"Argent Dawn",
		"Arthas",
		"Arygos",
		"Ashenvale",
		"Aszune",
		"Auchindoun",
		"Azjol-Nerub",
		"Azshara",
		"Azuregos",
		"Azuremyst",
		"Baelgun",
		"Balnazzar",
		"Blackhand",
		"Blackmoore",
		"Blackrock",
		"Blackscar",
		"Blade's Edge",
		"Bladefist",
		"Bloodfeather",
		"Bloodhoof",
		"Bloodscalp",
		"Blutkessel",
		"Booty Bay",
		"Borean Tundra",
		"Boulderfist",
		"Bronze Dragonflight",
		"Bronzebeard",
		"Burning Blade",
		"Burning Legion",
		"Burning Steppes",
		"C'Thun",
		"Chamber of Aspects",
		"Chants éternels",
		"Cho'gall",
		"Chromaggus",
		"Colinas Pardas",
		"Confrérie du Thorium",
		"Conseil des Ombres",
		"Crushridge",
		"Culte de la Rive noire",
		"Daggerspine",
		"Dalaran",
		"Dalvengyr",
		"Darkmoon Faire",
		"Darksorrow",
		"Darkspear",
		"Das Konsortium",
		"Das Syndikat",
		"Deathguard",
		"Deathweaver",
		"Deathwing",
		"Deepholm",
		"Defias Brotherhood",
		"Dentarg",
		"Der Mithrilorden",
		"Der Rat von Dalaran",
		"Der abyssische Rat",
		"Destromath",
		"Dethecus",
		"Die Aldor",
		"Die Arguswacht",
		"Die Nachtwache",
		"Die Silberne Hand",
		"Die Todeskrallen",
		"Die ewige Wacht",
		"Doomhammer",
		"Draenor",
		"Dragonblight",
		"Dragonmaw",
		"Drak'thul",
		"Drek'Thar",
		"Dun Modr",
		"Dun Morogh",
		"Dunemaul",
		"Durotan",
		"Earthen Ring",
		"Echsenkessel",
		"Eitrigg",
		"Eldre'Thalas",
		"Elune",
		"Emerald Dream",
		"Emeriss",
		"Eonar",
		"Eredar",
		"Eversong",
		"Executus",
		"Exodar",
		"Festung der Stürme",
		"Fordragon",
		"Forscherliga",
		"Frostmane",
		"Frostmourne",
		"Frostwhisper",
		"Frostwolf",
		"Galakrond",
		"Garona",
		"Garrosh",
		"Genjuros",
		"Ghostlands",
		"Gilneas",
		"Goldrinn",
		"Gordunni",
		"Gorgonnash",
		"Greymane",
		"Grim Batol",
		"Grom",
		"Gul'dan",
		"Hakkar",
		"Haomarush",
		"Hellfire",
		"Hellscream",
		"Howling Fjord",
		"Hyjal",
		"Illidan",
		"Jaedenar",
		"Kael'thas",
		"Karazhan",
		"Kargath",
		"Kazzak",
		"Kel'Thuzad",
		"Khadgar",
		"Khaz Modan",
		"Khaz'goroth",
		"Kil'jaeden",
		"Kilrogg",
		"Kirin Tor",
		"Kor'gall",
		"Krag'jin",
		"Krasus",
		"Kul Tiras",
		"Kult der Verdammten",
		"La Croisade écarlate",
		"Laughing Skull",
		"Les Clairvoyants",
		"Les Sentinelles",
		"Lich King",
		"Lightbringer",
		"Lightning's Blade",
		"Lordaeron",
		"Los Errantes",
		"Lothar",
		"Madmortem",
		"Magtheridon",
		"Mal'Ganis",
		"Malfurion",
		"Malorne",
		"Malygos",
		"Mannoroth",
		"Marécage de Zangar",
		"Mazrigos",
		"Medivh",
		"Minahonda",
		"Moonglade",
		"Mug'thol",
		"Nagrand",
		"Nathrezim",
		"Naxxramas",
		"Nazjatar",
		"Nefarian",
		"Nemesis",
		"Neptulon",
		"Ner'zhul",
		"Nera'thor",
		"Nethersturm",
		"Nordrassil",
		"Norgannon",
		"Nozdormu",
		"Onyxia",
		"Outland",
		"Perenolde",
		"Pozzo dell'Eternità",
		"Proudmoore",
		"Quel'Thalas",
		"Ragnaros",
		"Rajaxx",
		"Rashgarroth",
		"Ravencrest",
		"Ravenholdt",
		"Razuvious",
		"Rexxar",
		"Runetotem",
		"Sanguino",
		"Sargeras",
		"Saurfang",
		"Scarshield Legion",
		"Sen'jin",
		"Shadowsong",
		"Shattered Halls",
		"Shattered Hand",
		"Shattrath",
		"Shen'dralar",
		"Silvermoon",
		"Sinstralis",
		"Skullcrusher",
		"Soulflayer",
		"Spinebreaker",
		"Sporeggar",
		"Steamwheedle Cartel",
		"Stormrage",
		"Stormreaver",
		"Stormscale",
		"Sunstrider",
		"Suramar",
		"Sylvanas",
		"Taerar",
		"Talnivarr",
		"Tarren Mill",
		"Teldrassil",
		"Temple noir",
		"Terenas",
		"Terokkar",
		"Terrordar",
		"The Maelstrom",
		"The Sha'tar",
		"The Venture Co",
		"Theradras",
		"Thermaplugg",
		"Thrall",
		"Throk'Feroth",
		"Thunderhorn",
		"Tichondrius",
		"Tirion",
		"Todeswache",
		"Trollbane",
		"Turalyon",
		"Twilight's Hammer",
		"Twisting Nether",
		"Tyrande",
		"Uldaman",
		"Ulduar",
		"Uldum",
		"Un'Goro",
		"Varimathras",
		"Vashj",
		"Vek'lor",
		"Vek'nilash",
		"Vol'jin",
		"Wildhammer",
		"Wrathbringer",
		"Xavius",
		"Ysera",
		"Ysondre",
		"Zenedar",
		"Zirkel des Cenarius",
		"Zul'jin",
		"Zuluhed",
	],
};

export default regions;
