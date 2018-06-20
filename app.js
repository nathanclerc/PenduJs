var butSecret = $('#butSecret');
var butLettre = $('#butLettre');
var butMot = $('#butMot');
var juste = [];
var compteur = 0;
var tailleMot;
var tableauMot = [];
var fausseLettre = '';


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
	return motSecret;
});



butLettre.click(function (){
	var trouve=false;
	choixLettre = $('#choixLettre').val();

	for (var i = 0; i< tailleMot; i++) {

		if (tableauMot[i] === choixLettre) {
			juste[i] = tableauMot[i];
			juste.splice(juste[i], choixLettre);
			trouve=true;
		}
	}
	if (!trouve) {
		fausseLettre += choixLettre;
		console.log(fausseLettre);
	}
console.log(juste);
	return choixLettre;
});



butMot.click(function(){
		propRep= $('#propRep').val();

	if (propRep === motSecret) {
console.log('gagné');
	}
	else{
console.log('perdu' + motSecret);
	}
});
