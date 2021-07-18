const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let data = { name , email };
	let storedData = JSON.stringify(data);

	console.log(data);

	if  (name !== "" & email !==""){
		setTimeout(() => {
			alert("Cadastro realizado com sucesso! Aproveite as ofertas!")
		}, 1000);
	}
	else {
		alert("Falha no cadastro! Preencha os campos corretamente.");
	}
	localStorage.setItem('lead', storedData);
});
