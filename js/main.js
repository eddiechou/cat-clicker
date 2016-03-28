var picture = document.getElementById('picture-space');
var score = document.getElementById('score');
var name = document.getElementById('name');
var names = document.getElementById('name-list');

var currentCat = "Pixel";

var cats = {names:["Pixel", "Pointer", "Abe", "Bob", "Cat"],
			urls:["https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
			"https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
			"http://www.wayofcats.com/wp-content/uploads/2012/10/Tristanstinkysox-thumb.jpg",
			"https://khonsa01.files.wordpress.com/2009/03/pictures-of-cats5.jpg",
			"http://longtrick.com/wp-content/uploads/2015/04/Naughty-cats-2.jpg"],
			scores:[0,0,0,0,0]};

for(var i=0; i<5;i++){
	var elem = document.createElement('div');
	elem.textContent = cats.names[i];
	elem.addEventListener('click', function() {
		name.innerText = cats.names[i];
		score.innerText = 'Score: ' + cats.scores[i];
		 
	}, false);
	document.body.appendChild(elem);
}

// display: name, picture, #clicks