var curplayershtml = '';
var playercont;
var playerstatcont;
var update;
var images;
const testFolder = '/images/';

var fileDisplayArea;
//Main
window.onload = start;

//Functions
function start() {
    fileDisplayArea = document.getElementById('fileDisplayArea');

    setInterval("update();",300);
    readTextFile("../MONSTER_GALLERY_OUT.txt");

    getAll();
    populatedropdown();
}

function update() {
    getAll();
    playercont = document.getElementById('playercont');
    playerstatcont  = document.getElementById('playerstats');
    updateplayers();
    //getpics()
    var activeplayerhtml = playercont.innerHTML;
    if ( curplayershtml != activeplayerhtml ) {
        playercont.innerHTML = curplayershtml;
        //getpics();
    }
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                fileDisplayArea.innerText = allText;
            }
        }
    }
    rawFile.send(null);
}

function populatedropdown(){

    var pics = fileDisplayArea.innerText;
    pics = pics.split(",");
    var outsies = '';

    for(var i = 0; i < pics.length; i++){
        var image = pics[i].split("&");

        outsies = outsies + '<option value="'+ image[0] +'">' + image[1] + '</option>';
    }

    document.getElementById('picdrop').innerHTML = outsies;
}

function getAll(){

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != null) {
            document.getElementById("statcont").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../sql/getplayersall.php?",true);
    xmlhttp.send();

}

function updateplayers () {

    var playerarray = playerstatcont.innerHTML;
    playerarray = playerarray.split("!!");
    var outstring = '</div>';
    for (var i = 0; i < playerarray.length; i++) {
        if (playerarray[i] != '') {
            var statarray = playerarray[i].split(",");
            if ( statarray[2] > 0 ) {
                outstring = outstring + '<div class="adminplayers" id="player' + i + '">' + loadplayer(playerarray[i], statarray) + '</div><br/>';
            }
        }
    }

    curplayershtml = outstring;
}
function loadplayer(statstring, statarray){


    var outstring =
    '<div id="Health" style="width: 100%;display: inline;float: left;">' +
    '<div id="myBar" style="height: 40px;font-size: 4vh;width:' + statarray[2] + '%;">' + statarray[1] + ': ' + statarray[2] + '</div>' +
    '</div>'

    /*'<input id="s' + statarray[0] + '" class="adminstat" type="number" min="0" max="10" value="'    + statarray[4] + '" step="1" />' +
    '<input id="m' + statarray[0] + '" class="adminstat" type="number" min="0" max="10" value="'    + statarray[5] + '" step="1" />' +
    '<input id="e' + statarray[0] + '" class="adminstat" type="number" min="0" max="10" value="'    + statarray[6] + '" step="1" />' +
    '<input id="a' + statarray[0] + '" class="adminstat" type="number" min="0" max="10" value="'    + statarray[7] + '" step="1" />' +
    '<input id="p' + statarray[0] + '" class="adminstat" type="number" min="0" max="10" value="'    + statarray[8] + '" step="1" />' +
    '<input id="c' + statarray[0] + '" class="adminstat" type="number" min="0" max="10" value="'    + statarray[9] + '" step="1" />' +
    '<input id="r' + statarray[0] + '" class="adminstat" type="number" min="-2" max="10" value="'    + statarray[3] + '" step="1" />' +
    '<input type="submit" value = "Save" onclick="savePlayer('+ statarray[0] +')">' +
    '<input type="submit" value = "Delete" onclick="deletePlayer('+ statarray[0] +')">'*/;
    return outstring;

}

function changehealth(healthbar) {

    incr = 1;
    var curvar = healthbar.innerHTML;
    if ( (health * 10) < curvar ) {
        incr = -1;
    }
    healthid = setInterval("frame();",5);

};

function savePlayer(id){

    var h = document.getElementById('h'+id).value;
    var s = document.getElementById('s'+id).value;
    var m = document.getElementById('m'+id).value;
    var e = document.getElementById('e'+id).value;
    var a = document.getElementById('a'+id).value;
    var p = document.getElementById('p'+id).value;
    var c = document.getElementById('c'+id).value;
    var r = document.getElementById('r'+id).value;

    console.log(id);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != null) {
            document.getElementById("err").innerHTML = this.responseText;
        }
    };

    xmlhttp.open("GET","../sql/saveplayer.php?id="+id+"&h="+h+"&s="+s+"&m="+m+"&e="+e+"&a="+a+"&p="+p+"&c="+c+"&r="+r,true);
    xmlhttp.send();

}



function passwordinput(pass){
    console.log(pass);
    if (pass == 'bigbag'){

        document.getElementById("ADMIN").hidden = false;
        document.getElementById("Password").hidden = true;
    }
}

function addMonster(){



}

function getpics(){

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != null) {
            document.getElementById("picdata").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../sql/getpictures.php?",true);
    xmlhttp.send();
    positionpics();
}
function positionpics(){

    var pictures = document.getElementById('Pictures').innerHTML.split(",");
    var postitions = document.getElementById('Positions').innerHTML.split(",");

    var outers = '<br/><br/><br/><br/>';
    for(var i = 0; i < pictures.length; i++){

        var position = postitions[i].split(".");

        outers = outers + '<img class="mySlides" src="../images/' + pictures[i] + '" >' +
        '<input class="adminstat" type="number" min="0" max="100" step="1" />' +
        '<input class="adminstat" type="number" min="0" max="100" step="1" />' +
        '<input class="adminstat" type="number" min="0" max="100" step="1" />' +
        '<input type="submit" value = "Save" onclick="updateMonster"><br/>';
    }

    document.getElementById('monstercont').innerHTML = outers;

}