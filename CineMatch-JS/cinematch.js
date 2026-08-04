//==========================================================================
//***SCTEC: Projeto Avaliativo M1S6 - Desenvolvimento Mobile React Native***
//==========================================================================

//***Onboarding Interativo ( Via Terminal )

const prompt = require('prompt-sync')({ sigint: true });

// ==========================================
// RF01 — Captura de Perfil via Terminal
// ==========================================
function criarPerfilUsuario() {
  console.log("--- BEM-VINDO AO CINEMATCH JS ---");
  const nome = prompt("Qual é o seu nome? ");
  const idade = Number(prompt("Qual é a sua idade? "));
//disponibiliza uma lista de gêneros em ordem alfabética
//...new Set remove itens duplicados
//flatMap junta todos os arrays de generos em um só
//.sort() coloca em ordem alfabética
  const generosDisponiveis = [...new Set(catalogo.flatMap(conteudo => conteudo.generos))].sort();
  console.log("\n--- Gêneros Disponíveis ---");
  console.log(generosDisponiveis.join(" | "));
  console.log("---------------------------");
  const generosInput = prompt("Quais gêneros você mais gosta? (separe por vírgula, ex: Ação, Comédia, Terror): ");
  
  const generosFavoritos = generosInput
    ? generosInput.split(",").map((g) => g.trim()).filter((g) => g.length > 0) : [];
 
  const usuario = {
    nome: nome,
    idade: idade,
    generosFavoritos: generosFavoritos
  };

  return usuario;
}

// ==========================================
// RF02 — Criar Catálogo de Conteúdos
// ==========================================

class Conteudo {
  constructor(id, titulo, tipo, generos){
    this.id = id;
    this.titulo = titulo;
    this.tipo = tipo;
    this.generos = generos;
  }

  exibirResumoConteudo(){
    return `
      ID: ${this.id}
      Título: ${this.titulo}
      Tipo: ${this.tipo}
      Gêneros: ${this.generos}`;
  }
}

class Filmes extends Conteudo {
  constructor(id, titulo, tipo, generos, duracaoMinutos, classificacao){
    super(id, titulo, tipo, generos);
    this.duracaoMinutos = duracaoMinutos;
    this.classificacao = classificacao;
  }
  exibirResumoFilmes(){
    return `
      Duração (min): ${this.duracaoMinutos}
      Classificação: ${this.classificacao}`;
  }
}

class Series extends Conteudo {
  constructor(id, titulo, tipo, generos, classificacao, temporadas, episodios){
    super(id, titulo, tipo, generos);
    this.classificacao = classificacao;
    this.temporadas = temporadas;
    this.episodios = episodios;
  }
  exibirResumoSeries(){
    return `
      Classificação: ${this.classificacao}
      Temporadas: ${this.temporadas}
      Episódios: ${this.episodios}`;
  }
}

const catalogo = [
  new Filmes("F1", "Invasores", "Filme", ["Terror", "Suspense"], 99, "14 Anos"),
  new Filmes("F2", "Robô Selvagem", "Filme", ["Aventura", "Acao"], 101, "Livre"),
  new Filmes("F3", "Sete Anos no Tibet", "Filme", ["Drama", "Acao"], 136, "14 Anos"),
  new Filmes("F4", "A Incrível História da Ilha das Rosas", "Filme", ["Drama", "Comedia"], 118, "12 Anos"),
  new Filmes("F5", "Extinção", "Filme", ["Suspense", "Aventura"], 95, "14 Anos"),
  new Series("S1", "Avatar: O Último Mestre do Ar", "Série", ["Fantasia", "Acao"], "14 Anos", 2, 15),
  new Series("S2", "La Casa de Papel", "Série", ["Crime", "Suspense"], "16 Anos", 5, 48),
  new Series("S3", "Naruto", "Série", ["Animes", "Aventura"], "14 Anos", 9, 220)
];

function exibirCatalogo(){
const meuCatalogo = catalogo.forEach(item => {
                    (item.tipo === "Filme") 
                    ? console.log(item.exibirResumoConteudo() + item.exibirResumoFilmes())
                    : console.log(item.exibirResumoConteudo() + item.exibirResumoSeries());
})

return meuCatalogo;

}

function exibirPerfil(usuario){
  console.log(`\n-------------------------MEU PERFIL-------------------------`);
  console.log(`Nome: ${usuario.nome}`);
  console.log(`Idade: ${usuario.idade}`);
  console.log(`Gêneros favoritos: ${usuario.generosFavoritos.join(', ' )}`);
  console.log(`--------------------------------------------------------------\n`);
}

// ==============================================================
//RF-15 Criar menu interativo com opções
// ==============================================================

function criaMenuInterativo(){

let opcao = "";
let usuarioCriado = null;

do {
console.log("\n===== CineMatch JS =====");
console.log("1 - Criar Perfil");
console.log("2 - Ver meu perfil");
console.log("3 - Ver catálogo completo");
console.log("4 - Calcular compatibilidade com todos os conteúdos");
console.log("5 - Ver o conteúdo mais recomendado");
console.log("6 - Sair");

opcao = prompt("\nEscolha uma opção: ");

switch (opcao) {
case "1":
usuarioCriado = criarPerfilUsuario();
break;
case "2":
  usuarioCriado ? exibirPerfil(usuarioCriado) : console.log(" \n Usuário inválido");
break;
case "3":
exibirCatalogo();
break;
case "4":
calcularCompatibilidades(criarPerfilUsuario(), catalogo);
break;
case "5":
exibirRecomendacaoPrincipal(criarPerfilUsuario(), catalogo);
break;
case "6":
console.log("Até a próxima maratona!");
break;
default:
console.log("Opção inválida, tente novamente.");
}
} while (opcao !== "6");
}


criaMenuInterativo();