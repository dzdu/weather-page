var snowmax=200; //antal snö på sida
var snowcolor=new Array("#fff") //array med snö färg
var snowtype=new Array("Arial Black"); //fontstyle för snö
var snowletter="."; //snö utseende
var synchronizationspeed=1; //hur snabbt ska de falla ner
var snowmaxsize=10; //max storlek
var snowminsize=1; //min storlek
var snowingzone=1; //snö area. Jag kunde skappa mer än 1, så att man kan bestämma var ska snö synas
  
  
var snow=new Array();
var x=new Array();
var cords=new Array();
var leftright=new Array();
// Tredjeparts kod, förstår fortfarande inte varför man ska ha det (angående browsers)
var ie5
var ns6=document.getElementById&&!document.all;
var browserok=ie5||ns6
//
function randommaker(range) { //random för snöflingor
    rand=Math.floor(range*Math.random());
    return rand;
}
function snowit() {
    // Tredjeparts kod
    if (ns6) {
        marginbottom=window.innerHeight;
        marginright=window.innerWidth;
    } //

    var snowsizerange=snowmaxsize-snowminsize; //skapar ny objekt som ska motsvara skillnaden mellan storlekar
    for (i=0;i<=snowmax;i++) {
        snow[i]=document.getElementById("s"+i);
        snow[i].size=randommaker(snowsizerange);
        snow[i].style.color=snowcolor;
        snow[i].synchronization=synchronizationspeed*snow[i].size/2; //synkroniserings hastighet
        if (snowingzone==1) {snow[i].positionx=randommaker(marginright)} //det tog jag från Tredjepart, om man inte använder {snow[i].positionx=randommaker(marginright)} snö kommer falla bara från en sida 
        snow[i].position=randommaker(2*marginbottom-marginbottom); //om man inte skriver in (N*marginbottom-marginbottom) börjar snö bugga och fastna 
        snow[i].style.left=snow[i].positionx+"px";
        snow[i].style.top=snow[i].position+"px";

    }
    movesnow(); //tredjeparts kod , i alla fall det vill inte funka utan det :)
}
function movesnow() { // hela funktion är tredjeparts kod. Jag försökte att göra eget, men hade svårt att förså princip, därför jag lämnar det så som det står
    for(i=0;i<=snowmax;i++) {
        snow[i].position+=snow[i].synchronization;
        snow[i].style.left=snow[i].positionx+leftright[i]*Math.sin(cords[i])+"px";
        snow[i].style.top=snow[i].position+"px";
        if (snow[i].position>=marginbottom-0 || parseInt(snow[i].style.left)>(marginright-1*leftright[i])) {   
            snow[i].position=1; 
        }
    }
    var timer=setTimeout("movesnow()",30 ); //timer som bestämmer hur snabbt snö ska falla 
}
for (i=0;i<=snowmax;i++) {
    document.write("<span id='s"+i+"' style='position:absolute;"+snowmaxsize+"px;'>"+snowletter+"</span>"); //när man trycker på f12 ser man att snöflingor ser ut som objekter. Det görs via span.
}
if (browserok) {
    window.onload=snowit; //när sidan laddas upp kör script automatisk, det gör script enligt window.onload
}