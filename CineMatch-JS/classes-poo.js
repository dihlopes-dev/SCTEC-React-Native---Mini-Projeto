//==========================================================================
//**SCTEC: Projeto Avaliativo M1S6 - Desenvolvimento Mobile React Native**
//==========================================================================

const prompt = require('prompt-sync')({ sigint: true });

// --- CLASSES ---
class Conteudo {
  constructor(id, titulo, tipo, generos) {
    this.id = id;
    this.titulo = titulo;
    this.tipo = tipo;
    this.generos = generos;
  }

  exibirResumoConteudo() {
    return `
     ID: ${this.id}
     Título: ${this.titulo}
     Tipo: ${this.tipo}
     Gêneros: ${this.generos.join(", ")}`;
  }
}

class Filmes extends Conteudo {
  constructor(id, titulo, tipo, generos, duracaoMinutos, classificacao) {
    super(id, titulo, tipo, generos);
    this.duracaoMinutos = duracaoMinutos;
    this.classificacao = classificacao;
  }
  exibirResumoFilmes() {
    return `
     Duração (min): ${this.duracaoMinutos}
     Classificação: ${this.classificacao}`;
  }
}

class Series extends Conteudo {
  constructor(id, titulo, tipo, generos, classificacao, temporadas, episodios) {
    super(id, titulo, tipo, generos);
    this.classificacao = classificacao;
    this.temporadas = temporadas;
    this.episodios = episodios;
  }
  exibirResumoSeries() {
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

// 1 - CRIAR PERFIL (OBRIGATÓRIO)
// CLOSURE CRIADA AQUI
function gerarPerfilUsuario() {
  let contadorPerfil = -1;
  return function() {
    console.log("\n---🎬 BEM-VINDO AO CINEMATCH JS 📽️---\n");

    contadorPerfil++;

    let nome = "";
    // 🔒 Validação de Nome
    do {
      const entradaNome = prompt("Qual é o seu nome?: ");
      nome = entradaNome ? entradaNome.trim() : "";

      if (!nome) {
        console.log("⚠️ O nome é obrigatório para continuar!");
      }
    } while (!nome);

    let idade = NaN;
    // 🔒 Validação de Idade 
    do {
      const entradaIdade = prompt("Qual é a sua idade?: ");
      const textoLimpo = entradaIdade ? entradaIdade.trim() : "";

      idade = textoLimpo !== "" ? Number(textoLimpo) : NaN;

      if (isNaN(idade) || idade <= 0) {
        console.log("⚠️ Por favor, digite uma idade válida (apenas números maiores que 0)!");
      }
    } while (isNaN(idade) || idade <= 0);

    // Exibição e seleção dos gêneros favoritos
    const generosDisponiveis = [...new Set(catalogo.flatMap(conteudo => conteudo.generos))].sort();
    console.log("\n--- Gêneros Disponíveis ---");
    console.log(generosDisponiveis.join(" | "));
    console.log("---------------------------");

    const generosInput = prompt("Quais gêneros você mais gosta? (separe por vírgula): ");
    const generosTexto = generosInput ? generosInput.trim() : "";

    const generosFavoritos = generosTexto
      ? generosTexto.split(",").map((g) => g.trim()).filter((g) => g.length > 0)
      : [];

    console.log("\n✅ Perfil criado com sucesso!");

    return {
      nome,
      idade,
      generosFavoritos,
      versaoPerfil: contadorPerfil
    };
  };
}

const criarPerfilUsuario = gerarPerfilUsuario();

// 2 - EXIBIR PERFIL
function exibirPerfil(usuario) {
  console.log(`\n-------------------------MEU PERFIL-------------------------`);
  console.log(`👤 Nome: ${usuario.nome}`);
  console.log(`🆔 Idade: ${usuario.idade}`);
  console.log(`💖 Gêneros favoritos: ${usuario.generosFavoritos.join(", ")}`);

  const tipoAcao =
    usuario.versaoPerfil === 0
      ? "Perfil original"
      : `${usuario.versaoPerfil}ª modificação`;
  console.log(`🔄 Status do perfil: ${tipoAcao}`);
  console.log(`--------------------------------------------------------------\n`);
}