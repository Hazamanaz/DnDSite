
window.onload = start;

function start() {

    setInterval("update();",1000);
}

function update() {

    getpics();
    positionpics();
}

function getpics(){

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 && this.responseText != null) {
            document.getElementById("picdata").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","../sql/get/getpictures.php?",true);
    xmlhttp.send();

}

function positionpics(){

    var pictures = document.getElementById('Pictures').innerHTML.split(",");
    var postitions = document.getElementById('Positions').innerHTML.split(",");

    var $outers = '';
    for(var i = 0; i < pictures.length; i++){
        var position = postitions[i].split(".");
        $outers = $outers + '<img class="mySlides" style="display: block;position:absolute;width:' + position[2] + '%;top: ' + position[0] + '%;left: ' + position[1] + '%;" src="../images/' + pictures[i] + '" >' +
                            '<input class="monhealth" type="number" min="0" max="100" style="height:10%;display: block;position:absolute;width:8%;top: ' + position[0] + '%;left: ' + position[1] + '%;" value = "' + position[3] + '" >';
    }

    document.getElementById('picdiv').innerHTML = $outers;

}