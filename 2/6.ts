let id : number | string;
id = "1345dgg5";
console.log(id);
id = 234;
console.log(id); //234
//-------------------------------
function printId(id: number|string) {
	console.log(`ID: ${id1}`);
}

let id1: string|number = "ruy74";

printId("1h2e3i2kk1");
printId(9876);
printId(id1);
//-------------------------------
function printSentence(words: string[]|string) {
	// если words - строка
	if (typeof words == "string") {
		console.log(words);
	} else {
		// если words - массив string[]
		console.log(words.join(" "));
	}
}

printSentence(["PHP", "JavaScript", "TypeScript"]);
printSentence("PHP and JavaScript");