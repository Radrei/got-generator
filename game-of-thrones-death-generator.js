/* Game of Thrones Death generator script

 Author: Brittany Stafford
 Version: 1.0 April 10, 2015
 License: GNU GPL v2 or later


*/

// Murderers
murderers = [

	 "Marjory Tyrell",
	 "Joffrey Barathion",
	 "Jon Snow",
	 "Daenerys Targaryen",
	 "Sam Tarly",
	 "Stanus Barathion",
	 "The Red Woman",
	 "Arya Stark",    
	 "Sansa Stark",
	 "Bran Stark",
	 "Beric Dondarrion",
	 "Walder Frey",
	 "Cersei Lannister",
	 "Davos Seaworth",
	 "Craster",
	 "Catelyn Stark",        
	 "Daario Naharis",
	 "Eddard Stark",
	 "Gendry",
	 "Gilly",
	 "Grand Maester Pycelle",   
	 "The Hound",
	 "The Mountain",
	 "Grey Worm", 
	 "Jaqen H'Ghar",	
	 "Jorah Mormont",
	 "Khal Drogo",
	 "Lancel Lannister",
	 "Mace Tyrell",	
	 "Maester Aemon",	
	 "Lysa Arryn", 
	 "Meera Reed",
	 "Olenna Tyrell",
	 "Oberyn Martell",
	 "Little Finger",
	 "Podrick Payne",
	 "Ramsay Snow",
	 "Renly Baratheon",
	 "Rickon Stark",
	 "Robb Stark",
	 "Robert Baratheon",
	 "Shae",
	 "Theon Greyjoy",
	 "Tywin Lannister",
	 "Jaime Lannister",
	 "Varys",
	 "Ygritte",
    
];

//People getting murdered
murderees = [

	 "Marjory Tyrell",
	 "Joffrey Barathion",
	 "Jon Snow",
	 "Daenerys Targaryen",
	 "Sam Tarly",
	 "Stanus Barathion",
	 "The Red Woman",
	 "Arya Stark",    
	 "Sansa Stark",
	 "Bran Stark",
	 "Beric Dondarrion",
	 "Walder Frey",
	 "Cersei Lannister",
	 "Davos Seaworth",
	 "Craster",
	 "Catelyn Stark",        
	 "Daario Naharis",
	 "Eddard Stark",
	 "Gendry",
	 "Gilly",
	 "Grand Maester Pycelle",   
	 "The Hound",
	 "The Mountain",
	 "Grey Worm", 
	 "Jaqen H'Ghar",	
	 "Jorah Mormont",
	 "Khal Drogo",
	 "Lancel Lannister",
	 "Mace Tyrell",	
	 "Maester Aemon",	
	 "Lysa Arryn", 
	 "Meera Reed",
	 "Olenna Tyrell",
	 "Oberyn Martell",
	 "Little Finger",
	 "Podrick Payne",
	 "Ramsay Snow",
	 "Renly Baratheon",
	 "Rickon Stark",
	 "Robb Stark",
	 "Robert Baratheon",
	 "Shae",
	 "Theon Greyjoy",
	 "Tywin Lannister",
	 "Jaime Lannister",
	 "Varys",
	 "Ygritte",
    
];

// Killing Verbs
verbs = [
	"killed",
	"drowned",
	"stabbed",
	"murdered",
	"flayed",
	"strangled",
	"shot",
	
];

// Objects (i.e. what they're killed with)
objects = [
	"an arrow",
	"a spear",
	"a valyrian steel sword",
	"a sword",
	"their bare hands",
	"dragonglass",
	"a torch",
	"poison",
	"a dragon",	
	"a rope",
	"a direwolf",

];


// Returns a death as a string
function getDeath() {
    //assign where to display data
    var output = document.getElementById("output");
    output.textContent = ""; //innerText doesn't work in FF so that's why we're using textContent
  
	//randomize your statements
	var randObjects = objects[Math.floor(Math.random() * objects.length)];
	var randVerbs = verbs[Math.floor(Math.random() * verbs.length)];
	var randMurderers = murderers[Math.floor(Math.random() * murderers.length)];
	var randMurderees = murderees[Math.floor(Math.random() * murderees.length)];
	
	//Display the output
	output.textContent += randMurderees + " will be "  + randVerbs + " by " + randMurderers + " with " +  randObjects + ".\n" ;

}
