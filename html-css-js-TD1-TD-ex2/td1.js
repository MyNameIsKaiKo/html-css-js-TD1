/*
	Manipulation d'une adresse IP

*/
function recup()
{
	var adresse1= (document.getElementById("ip1Input")).value;
	console.log("adresse1");
	console.log(adresse1);
	var adresse2 = (document.getElementById("ip2Input")).value;
	document.getElementById("IP1").innerHTML=adresse1;
	document.getElementById("IP2").innerHTML=adresse2;
}

document.getElementById("IP1").innerHTML="testefsef";

// var part1=192;
// var part2=168;
// var part3=100;
// var part4=25;


// var orginalIP = part1+"."+part2+"."+part3+"."+part4;

// part4=99;

// var newlIP = part1+"."+part2+"."+part3+"."+part4;

// document.getElementById("IP1").innerHTML=orginalIP;
// document.getElementById("IP2").innerHTML=newlIP;
console.log("AIE PROBLEME");

//document.write(orginalIP);
// document.write("<br>");
// document.write(newlIP);
