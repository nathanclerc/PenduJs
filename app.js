var butSecret = $('#butSecret');
var lettre = $('.lettre');
var butMot = $('#butMot');
var faux = $('#faux');
var mot = $('#mot');
var gagner = $('#gg');
var compteur = 0;
var tailleMot;
var tableauMot = [];
var juste = [];
var fausseLettre = '';
var choixLettre = '';
var gg = '';

butSecret.click(function (){
	motSecret = $('#motSecret').val();
console.log(motSecret);

	tailleMot=motSecret.length;

	for (var i = 0; i<tailleMot; i++){
		tableauMot = motSecret.split('');
		juste.push('_');
	}
	$('#stage1').hide();

console.log(tableauMot);
	$('#motSecret').val('');
	mot.html(juste);
});


lettre.click(function (event){
	choixLettre = $(this).html();
	var trouve=false;
	for (var i = 0; i< tailleMot; i++) {

		if (tableauMot[i] === choixLettre) {
			juste[i] = tableauMot[i];
			juste.splice(juste[i], choixLettre);
			trouve=true;
		}
	}
	if (!trouve) {
		fausseLettre += choixLettre;
		compteur++;
console.log(compteur);
		document.images['pendu'].src="images/pendu_"+compteur+".jpg";
		faux.html(fausseLettre);
		if (compteur == 9) {
		alert('Le mot secret était ' + motSecret);
		document.location.href="looser.html";
		}
	}
	
	gg = juste.toString();
	motStr = tableauMot.toString();
	console.log(gg);
	console.log(motStr);
	if (gg === motStr) {
		document.location.href="gg.html";
	}
	mot.html(juste);
	choixLettre = '';
	return choixLettre;
});



butMot.click(function(){
		propRep= $('#propRep').val();

	if (propRep === motSecret) {
		document.location.href="gg.html";
	}
	else{
		alert('Le mot secret était ' + motSecret);
		document.location.href="looser.html";
	}
	$('#propRep').val('');
});
$('#motSecret').val('');
$('#propRep').val('');