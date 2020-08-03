/*document.querySelector(".btn", ".btn-outline-success", ".my-2 my-sm-0").addEventListener('submit', searchArrayByField);
document.querySelector("#search").addEventListener('keypress', (event) => {
	if(event.keyCode == 13) {
		searchArrayByField();
		event.preventDefault();
	  }
  });
*/
/*document.addEventListener('DOMContentLoaded', function() {
    alert("Cargando el dom ");
	getUsers();
}, false);
*/
let arrayInfo=[
	/*	    {
        "quote": "When I catch you, I'm gonna pull out your eyes and stick 'em down your pants so you can watch me kick the crap outta you, okay? Next I'm gonna use your tongue to paint my boat!",
        "character": "Moe Szyslak",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411",
        "characterDirection": "Right"
    },
    {
        "quote": "Inflammable means flammable? What a country!",
        "character": "Dr. Nick",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
        "characterDirection": "Right"
    },
    {
        "quote": "Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?",
        "character": "Abe Simpson",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593",
        "characterDirection": "Right"
    },
    {
        "quote": "All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.",
        "character": "Homer Simpson",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        "characterDirection": "Right"
    },
    {
        "quote": "My eyes! The goggles do nothing!",
        "character": "Rainier Wolfcastle",
        "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRainierWolfcastle.png?1497567511035",
        "characterDirection": "Right"
    }*/
	]
function displayContent(){
	for(i=0;i<3;i+=1){ 
	//for(i=0;i<arrayInfo.length;i+=1){
		//console.info("soy el array: ", arrayInfo[i]);	
		//constructMainSection(arrayInfo[i]);
		constructCols(arrayInfo[i]);
	}
}

async function getUsers(){  
	console.info("Me voy a ejecutar");
    async function fetchApi() {
		let url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10";
		const resp = await fetch(url);
        const info = await resp.json();
		//console.info(info);
        return info;
    }
    let info = fetchApi();
    info.then(response => {
        console.log(response);
		//arrayInfo=Array.prototype.push.apply(arrayInfo,response); //concatenar arrays
		arrayInfo=response;
    })
	info.then(arrayInfo => {
		displayContent();
	})
	/*info.then(arrayInfo => { //cuando funcione bien la búsqueda...comentar aquí
		searchArrayByField();
	})*/
	info.catch(error => {
        console.log(error);
    })
}
	
//getUsers();

function searchArrayByField(){
	console.info("Voy a buscar");
	let personaje = document.querySelector(".form-control", ".mr-sm-2");

	let objArr =  arrayInfo.filter(function(charact) {
		return charact.character.toLowerCase() == personaje.value.toLowerCase();
	});
	let row = document.querySelector(".featurette");
	row.innerHTML = "";
	console.info("***",objArr);
	if(typeof objArr === 'undefined') {
        alert('Resultados no encontrados');
    }
	else{
	 	objArr.forEach(element => constructMainSection(element));
	}
}
/*
function searchArrayByFieldButton(personaje){
	console.info("Voy a buscar");
	let objArr =  arrayInfo.filter(function(charact) {
		return charact.character.toLowerCase() == personaje.toLowerCase();
	});
	let row = document.querySelector(".featurette");
	row.innerHTML = "";
	console.info("***",objArr);
	if(typeof objArr === 'undefined') {
        alert('Resultados no encontrados');
    }
	else{
	 	objArr.forEach(element => constructMainSection(element));
	}
}*/

function constructMainSection(simpsonObject){
		
	let row = document.querySelector(".featurette");
	//console.log("row: ", row);
	
	let col7 = document.createElement("div");
	col7.setAttribute("class", "col-md-7");
	
	let h2 = document.createElement("h2");
	h2.setAttribute("class", "featurette-heading");
	h2.innerHTML = simpsonObject.character;
	
	let paragraph = document.createElement("p");
	paragraph.setAttribute("class", "lead");
	paragraph.innerHTML = simpsonObject.quote;
	
	col7.appendChild(h2);
	col7.appendChild(paragraph);
	
	let col5 = document.createElement("div");
	col5.setAttribute("class", "col-md-5");
	
	let img = document.createElement("img");
	img.src = simpsonObject.image;
	//img.className = "rounded-circle";
	img.setAttribute("class", "featurette-image img-fluid mx-auto");
	
	col5.appendChild(img);
	
	row.appendChild(col7);
	row.appendChild(col5);
}

function constructCols(simpsonObject){

	const row=document.querySelector(".row");
	//console.info("row.className", row.className);
	
	let div = document.createElement("div");
	//div.className = "col-lg-4"
	div.setAttribute("class", "col-lg-4");
	//console.info("div.className", div.className);
	
	let img = document.createElement("img");
	img.src = simpsonObject.image;
	//img.className = "rounded-circle";
	img.setAttribute("class", "rounded-circle");
	//console.info("img.className", img.className);
	
	let header = document.createElement("h2");
	header.innerHTML = simpsonObject.character;
	
	let paragraph = document.createElement("p");
	paragraph.innerHTML = simpsonObject.quote;
	
	let pButton = document.createElement("p");
	let aelement = document.createElement("a");
	aelement.innerHTML = "View details &raquo;";
	aelement.href = '#';
	///aelement.onclick = searchArrayByFieldButton(simpsonObject.quote);
	aelement.setAttribute("class", "btn btn-secondary");
	//console.info("aelement", aelement.className);
	//aelement.className = "btn btn-secondary";
	
	row.appendChild(div);
	div.appendChild(img);
	div.appendChild(header);
	div.appendChild(paragraph);
	
	pButton.appendChild(aelement);
	div.appendChild(pButton);
}
