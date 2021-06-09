function tajmer(){
	var proveradatum=new Date();
	var provera=proveradatum.getHours();
	var vreme=new Date().getTime();
	var krajnje=new Date("Dec 27, 2017 20:00:00").getTime();
	var vremeOdbrojavanja= krajnje-vreme;
	var razlika=new Date(vremeOdbrojavanja);
	var sati=razlika.getHours()-1;
	var minuti=razlika.getMinutes();
	if (minuti<10) minuti="0"+minuti;
	var sekunde=razlika.getSeconds();
	if (sekunde<10) sekunde="0"+sekunde;
	if ((provera>9) && (provera<20)) {
	document.getElementById("tajmer").innerHTML="10:00 - 20:00 <br>"+  "Radimo još "+""+sati+":"+minuti+":"+sekunde;

}
else{
	document.getElementById("tajmer").innerHTML="10:00 - 20:00 <br>"+ "Trenutno je zatvoreno."
}
}

setInterval(tajmer,100);




