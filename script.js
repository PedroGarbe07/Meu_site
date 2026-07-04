console.log ("Script carregado com sucesso!");

let nome_usuario = prompt("Qual é o seu nome?");
let idade_usuario = prompt("Qual é a sua idade?");
let desejo_usuario = prompt("O que deseja com o meu site?");

document.getElementById("titulo").textContent = "Bem Vindo ao meu site pessoal, " + nome_usuario + "!";4

document.getElementById("cumprimentar").textContent = "Olá, " + nome_usuario + ", eu Sou o Pedro Garbe!";
function mudarTitulo() {
    document.getElementById("botao").textContent = "Aproveite o site!";
    alert ("Seja bem vindo ao meu site, " + nome_usuario + "!", "espero que goste! ❤️");
}

