/*
	Manipulation d'une adresse IP

*/
var part1=192;
var part2=168;
var part3=100;
var part4=25;


var orginalIP = part1+"."+part2+"."+part3+"."+part4;

part4=99;

var newlIP = part1+"."+part2+"."+part3+"."+part4;

document.getElementById("IP1").innerHTML=orginalIP;
document.getElementById("IP2").innerHTML=newlIP;
  // crée un nouvel élément div
  // var newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  // var newContent = document.createTextNode("blablabla");
  // ajoute le nœud texte au nouveau div créé
  // newDiv.appendChild(newContent);
  
  // ajoute le nouvel élément créé et son contenu dans le DOM
  // var currentDiv = document.getElementById('div1');
  // document.body.insertBefore(newDiv, currentDiv);

//document.write(orginalIP);
// document.write("<br>");
// document.write(newlIP);
