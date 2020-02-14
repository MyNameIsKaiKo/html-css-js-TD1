function Reseau(Oct_adresse)
{
	var masque=[255,255,255,0];
	var Oct_adresseReseau=[0,0,0,0];
	for (var i=0; i<4; i++)
	{
		Oct_adresseReseau[i]=(Oct_adresse[i]&masque[i]);
	}
	return Oct_adresseReseau;
}
function hostID()
{
	var masque=[255,255,255,0];
	var HOST_ID=[0,0,0,0];
	for (var i=0; i<4; i++)
	{
		HOST_ID[i]=255-masque[i];
	}
	return HOST_ID;
}
function netID(hostID)
{
	var NET_ID=[255,255,255,255];
	for (var i=0; i<4; i++)
	{
		NET_ID[i]=255-hostID[i];
	}
	return NET_ID;
}

function octets(adresse)
{
	var Oct_adresses = ["","","",""];
	var point = 0;
	for (var i=0; i<adresse.length; i++)
	{
		if (adresse[i] == '.' ){
			point++;
			continue;
		}
		switch (point)
		{
			case 0: Oct_adresses[0]+=adresse[i]; break;
			case 1: Oct_adresses[1]+=adresse[i]; break;
			case 2: Oct_adresses[2]+=adresse[i]; break;
			case 3: Oct_adresses[3]+=adresse[i]; break;
		}
	}	
	return (Oct_adresses);
}


function recup()
{
	var adresse1= document.getElementById("ip1Input").value;
	var Oct_adresse1=octets(adresse1);
	var adresse2 = document.getElementById("ip2Input").value;
	var Oct_adresse2=octets(adresse2);
	var Oct_adresseReseau1=Reseau(Oct_adresse1);
	var host_ID=hostID();
	var net_ID=netID(host_ID);
	document.getElementById("IP1").innerHTML="Adresse 1 : " + Oct_adresse1;
	document.getElementById("IP2").innerHTML="Adresse 2 : "+Oct_adresse2;
	document.getElementById("netID").innerHTML="NET ID : " + net_ID;
	document.getElementById("hostID").innerHTML="HOST ID : "+host_ID;
}

//document.write(orginalIP);
// document.write("<br>");
// document.write(newlIP);
