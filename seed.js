var db = require('./models');

var phraseList = [
	{word: "Aba", definition: "A loose, usually black robe worn by Fremen women and Bene Gesserit sisters."},
	{word: "Baliset", definition: "Nine-stringed musical instrument, lineal descendant of the zithra, tuned to the Chusuk scale and played by strumming. Favorite instrument of Imperial troubadours."},
	{word: "CHOAM", definition: "(Combine Honnete Ober Advancer Mercantiles) – the universal development corporation controlled by the Emperor and Great Houses with the Guild and Bene Gesserit as silent partners."},
	{word: "Deathstill", definition: "Fremen device used to extract all moisture from a living or dead human or creature."},
	{word: "Fremen", definition: "The native inhabitants of Arrakis"},
	{word: "Gom jabbar", definition: "Specific poison needle tipped with meta-cyanide used by Bene Gesserit Proctors in their death-alternative test of human awareness."},
	{word: "Hunter-seeker", definition: "Ravening sliver of suspensor-buoyed metal guided as a weapon by a nearby control console; common assassination device."},
	{word: "Inkvine", definition: "Creeping plant native to Giedi Prime and frequently used as a whip in its slave pens. Victims are marked by beet-colored tattoos that cause residual pain for many years."},
	{word: "Butlerian Jihad", definition: "Mankind's crusade against computers, thinking machines, and conscious robots"},
	{word: "Kwisatz Haderach", definition: "'The Shortening of the Way' or 'The one who can be two places simultaneously'. Bene Gesserit label applied to 'the unknown for which they sought a genetic solution: a male Bene Gesserit whose organic mental powers would bridge space and time'."}
];

db.Phrase.remove({}, function(err, phrases){

	db.Phrase.create(phraseList, function(err, phrases){
		if(err) {
			return console.log(err)
		};
		console.log('created', phrases.length, "phrases");
		// process.exit();
	})
});