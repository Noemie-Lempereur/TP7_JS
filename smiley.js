function get2DContext(id){
    let canvas = document.getElementById(id);
    let context = canvas.getContext("2d");
    return context;
}

function canvasApp(){
    let context = get2DContext("id1");
    context.beginPath();
    context.lineWidth = 3;
    context.fillStyle="yellow";
    context.arc(100, 100, 75, 0, 2*Math.PI);
    context.fill();
    context.closePath();
    context.stroke();

    context.beginPath();
    context.fillStyle="black";
    context.arc(65, 70, 10, 0, 2*Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle="black";
    context.arc(135, 70, 10, 0, 2*Math.PI);
    context.fill();
    context.closePath();

    context.beginPath();
    context.lineWidth = 6;
    context.arc(99, 120, 35, 0, Math.PI);
    context.stroke();
    context.closePath();

    context.font = "20px serif";
    context.fillText("Hello Canvas!", 45, 200);
}

function displayDateTime(){
    let a=document.body;
    let b=document.getElementById("id1");
    let date = new Date();
    let jour=date.getDate();
    let mois=date.getMonth();
    let day=date.getDay();
    let annee=date.getUTCFullYear();
    let secondes=date.getSeconds();
    let minutes=date.getMinutes();
    let heures=date.getHours();
    let jour_semaine=new Array('dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi');
    let mois_noms=new Array('décembre', 'janvier', 'février', 'mars', 'avril', 'mai','juin','juillet','août','septembre','octobre','novembre');
    let text=document.createElement("p");
    text.id="id2";
    text.innerHTML="Nous sommes le "+jour_semaine[day]+" "+jour+" "+mois_noms[mois]+" "+annee;
    let text2=document.createElement("p");
    text2.id="id3";
    text2.innerHTML="Il est actuellement "+heures+":"+minutes+":"+secondes;
    a.insertBefore(text2,b);
    a.insertBefore(text,text2);
}

function displaynewTime(){
    let old=document.querySelector("#id3");
    let a=document.body;
    let date = new Date();
    let secondes=date.getSeconds();
    let minutes=date.getMinutes();
    let heures=date.getHours();
    let text2=document.createElement("p");
    if(secondes<10){
        secondes="0"+secondes;
    }
    text2.innerHTML="Il est actuellement "+heures+":"+minutes+":"+secondes;
    a.replaceChild(text2,old);
    old.innerHTML=""
    text2.id="id3";
}

function actualisation() {
    temps--;
    decre.innerText="Le dessin va s'afficher après "+temps;
    displaynewTime();
}


function displayDecrementSeconds(time){
    let temps=58;
    let a=document.body;
    let b=document.getElementById("id1");
    let decre=document.createElement("p");
    decre.innerText="Le dessin va s'afficher après "+temps;
    let actualisation=setInterval(actualisation(), 1000);
    a.insertBefore(decre,b);
    setTimeout(function () {
        clearInterval(actualisation);
        decre.innerText = "Le dessin est affiché ci-dessous";
        canvasApp();
    }, 58000);
}

function main() {
    displayDateTime();
    displayDecrementSeconds();
}

main();