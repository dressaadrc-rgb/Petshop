script.js
const form = document.getElementById("formContato");
const mensagem = document.getElementById("mensagem-sucesso");

form.addEventListener("submit", function(event){

  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const texto = document.getElementById("mensagem").value;

  if(nome === "" || email === "" || texto === ""){
    alert("Preencha todos os campos!");
    return;
  }

  if(!email.includes("@")){
    alert("Digite um e-mail válido!");
    return;
  }

  mensagem.innerHTML = "Mensagem enviada com sucesso! 🐾";

  form.reset();

});