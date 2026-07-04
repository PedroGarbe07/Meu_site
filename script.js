console.log ("Script carregado com sucesso!");

let nome_usuario = prompt("Qual é o seu nome?");
let idade_usuario = prompt("Qual é a sua idade?");
let desejo_usuario = prompt("O que deseja com o meu site?");

document.getElementById("titulo").textContent = "Bem Vindo ao meu site pessoal, " + nome_usuario + "!";4

document.getElementById("cumprimentar").textContent = "Olá, " + nome_usuario + ", eu sou o Pedro Garbe!";

if (idade_usuario <= 22) {
    alert ("Salve " + nome_usuario + ", eu sou o Pedro Garbe Desenvolvedor Web, aproveite meu site!");
} else {
    alert ("Olá " + nome_usuario + ", eu sou o Pedro Garbe Desenvolvedor Web, aproveite meu site!");
}
function mudarTitulo() {
    document.getElementById("botao").textContent = "Aproveite o site!";
    alert ("Seja bem vindo ao meu site, " + nome_usuario + "!", "espero que goste! ❤️");
}

