// ------------------------ Declarations
var dice = {
  sides: 20,
  result: 30,
  roll: function () {
	return Math.floor(Math.random() * this.sides) + 1;
  }
};
var dicebutton 	= document.getElementById('dicebutton');
var diceresult 	= document.getElementById('diceresult');
var healthbar 	= document.getElementById('myBar');

var statarray 	= [];
var bars		= 	[
						document.getElementById('Sbar'),
						document.getElementById('Mbar'),
						document.getElementById('Ebar'),
						document.getElementById('Abar'),
						document.getElementById('Pbar'),
						document.getElementById('Cbar')
					];
var curuser;
var refreshspins;
var spins = 0;
var statstring;
var incr = 1;
var health;
var healthid;
var canrefresh = 1;



// ------------------------  Main
window.onload = start;
getUsers();

// ------------------------ Functions
function start() {
    setInterval("update();",1000);
}

function update() {

	showUser(curuser);

	if(canrefresh == true) {

		statstring = document.getElementById("stats").innerHTML;
		updateStats();

	}
    
}

function showUser(user) {
	var xmlhttp = new XMLHttpRequest();
	curuser = user;
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200 && this.responseText != null) {
			document.getElementById("statcont").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET","../sql/get/getuser.php?n="+user,true);
	xmlhttp.send();
};

function getUsers(){
	
	var xmlhttp = new XMLHttpRequest();
        
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200 && this.responseText != null) {
			document.getElementById("users").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET","../sql/get/getplayers.php?",true);
	xmlhttp.send();
	
}




function updateStats(){
	statarray = statstring.split(",");
	health = statarray[0];

	changehealth();
	document.getElementById("sh").innerHTML = statarray[2];
	document.getElementById("mh").innerHTML = statarray[3];
	document.getElementById("eh").innerHTML = statarray[4];
	document.getElementById("ah").innerHTML = statarray[5];
	document.getElementById("ph").innerHTML = statarray[6];
	document.getElementById("ch").innerHTML = statarray[7];
}
function updateBar(item, index){
	bars[index-2].value = item;
}


function changehealth() {

	incr = 1;
	var curvar = healthbar.innerHTML;
	if ( (health * 10) < curvar ) {
		incr = -1;
	}
	healthid = setInterval("frame();",5);
    
};
function frame() {
	var curvar = parseInt(healthbar.innerHTML);
	var newval = curvar + incr;

	if (curvar == health) {
		clearInterval(healthid);
	} else {
		healthbar.innerHTML = newval; 
		if (newval <= 100){
			healthbar.style.width = newval + "%";
		}
	}
}
	
function dicespin (){

	printNumber(dice.roll());
	spins = spins + 1;

	if (spins > 22){
		clearInterval(refreshspins);
		printNumber(dice.result);
		dicebutton.disabled = false;
	}
	
}


dicebutton.onclick = function() {

	dice.result = dice.roll();

	spins = 0;
  	refreshspins = setInterval("dicespin();", 80);
	dicebutton.disabled = true;
  
};
function printNumber(number) {
  diceresult.innerHTML = number;
};


