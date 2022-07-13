//Botão sobre
const sobre = document.querySelector(".janela-sobre");
const sobreposicao = document.querySelector(".sobreposicao");
const btnFecharSobre = document.querySelector(".fechar-janela-sobre");
const btnAbrirSobre = document.querySelector(".sobre");

let abrirJanela = function () {
  sobre.classList.remove("hidden");
  sobreposicao.classList.remove("hidden");
};

let fecharJanela = function () {
  sobre.classList.add("hidden");
  sobreposicao.classList.add("hidden");
};

btnAbrirSobre.addEventListener("click", abrirJanela);
btnFecharSobre.addEventListener("click", fecharJanela);

//Botão contato
const contato = document.querySelector(".janela-contato");
const btnFecharContato = document.querySelector(".fechar-janela-contato");
const btnAbrirContato = document.querySelector(".contato");

let abrirContato = function () {
  contato.classList.remove("hidden");
  sobreposicao.classList.remove("hidden");
};

let fecharContato = function () {
  contato.classList.add("hidden");
  sobreposicao.classList.add("hidden");
};

btnAbrirContato.addEventListener("click", abrirContato);
btnFecharContato.addEventListener("click", fecharContato);



//Botão projetos Dados
const dados = document.querySelector(".janela-dados");
const btnFecharDados = document.querySelector(".fechar-dados");
const btnAbrirDados = document.querySelector(".btn-dados")

let abrirDados = function () {
  dados.classList.remove("hidden");
  sobreposicao.classList.remove("hidden");
};

let fecharDados = function () {
  dados.classList.add("hidden");
  sobreposicao.classList.add("hidden");
};


btnAbrirDados.addEventListener("click", abrirDados);
btnFecharDados.addEventListener("click", fecharDados);






//Botão projetos Vida
const vida = document.querySelector(".janela-vida");
const btnFecharVida = document.querySelector(".fechar-vida");
const btnAbrirVida = document.querySelector(".btn-vida")

let abrirVida = function () {
  vida.classList.remove("hidden");
  sobreposicao.classList.remove("hidden");
};

let fecharVida = function () {
  vida.classList.add("hidden");
  sobreposicao.classList.add("hidden");
};

btnAbrirVida.addEventListener("click", abrirVida);
btnFecharVida.addEventListener("click", fecharVida);





//Botão projetos Vogal
const vogal = document.querySelector(".janela-vogal");
const btnFecharVogal = document.querySelector(".fechar-vogal");
const btnAbrirVogal = document.querySelector(".btn-vogal")

let abrirVogal = function () {
  vogal.classList.remove("hidden");
  sobreposicao.classList.remove("hidden");
};

let fecharVogal = function () {
  vogal.classList.add("hidden");
  sobreposicao.classList.add("hidden");
};

btnAbrirVogal.addEventListener("click", abrirVogal);
btnFecharVogal.addEventListener("click", fecharVogal);




//Botão projetos Sims
const sims = document.querySelector(".janela-sims");
const btnFecharSims = document.querySelector(".fechar-sims");
const btnAbrirSims = document.querySelector(".btn-sims")

let abrirSims = function () {
  sims.classList.remove("hidden");
  sobreposicao.classList.remove("hidden");
};

let fecharSims = function () {
  sims.classList.add("hidden");
  sobreposicao.classList.add("hidden");
};

btnAbrirSims.addEventListener("click", abrirSims);
btnFecharSims.addEventListener("click", fecharSims);












