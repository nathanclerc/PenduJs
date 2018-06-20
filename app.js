var butSecret = $('#butSecret');
var butLettre = $('#butLettre');
var butMot = $('#butMot');
var juste = [];
var compteur = 0;
var tailleMot;
var tableauMot = [];


butSecret.click(function (){
	motSecret = $('#motSecret').val();
console.log(motSecret);

	tailleMot=motSecret.length;

	for (var i = 0; i<tailleMot; i++){
		tableauMot = motSecret.split('');
		juste.push('_');
	}

console.log(tableauMot);
	return motSecret;
});



butLettre.click(function (){
	choixLettre = $('#choixLettre').val();

	for (var i = 0; i< tailleMot; i++) {

		if (tableauMot[i] === choixLettre) {
			juste[i] = tableauMot[i];
			juste.splice(juste[i], choixLettre);
		}
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
