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
  const generosInput = prompt("Quais gêneros você mais gosta? (separe por vírgula, ex: Ação, Comédia, Terror): ");
  
  const generosFavoritos = generosInput
    ? generosInput.split(",").map((g) => g.trim()).filter((g) => g.length > 0) : [];
 
  const usuario = {
    nome: nome || "Convidado",
    idade: idade || 0,
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

catalogo.forEach(item => {
                    (item.tipo === "Filme") 
                    ? console.log(item.exibirResumoConteudo() + item.exibirResumoFilmes())
                    : console.log(item.exibirResumoConteudo() + item.exibirResumoSeries());
})