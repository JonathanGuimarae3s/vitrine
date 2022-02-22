//pega o nome do vestido que foi clicado e manda por whatsapp

var veste = document.querySelectorAll("span.nomevest");

function vest() {
	open(
		`https://api.whatsapp.com/send?phone=+5521965852442&text=Olá,%20queria%20saber%20mais%20sobre%20esse%20vestido%20${veste[0].innerHTML}%20e%20como%20você%20trabalha.`
	);
   console.log(veste)
}
