//==========================================================================
//**SCTEC: Projeto Avaliativo M1S6 - Desenvolvimento Mobile React Native**
//==========================================================================

const prompt = require('prompt-sync')({ sigint: true });

<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

// --- CLASSES ---
class Conteudo {
  constructor(id, titulo, tipo, generos){
    this.id = id;
    this.titulo = titulo;
    this.tipo = tipo;
    this.generos = generos;
  }

<<<<<<< Updated upstream
  exibirResumoConteudo(){
=======
  exibirResumoConteudo() {
>>>>>>> Stashed changes
    return `
      ID: ${this.id}
      Título: ${this.titulo}
      Tipo: ${this.tipo}
<<<<<<< Updated upstream
      Gêneros: ${this.generos}`;
=======
      Gêneros: ${this.generos.join(", ")}`;
>>>>>>> Stashed changes
  }
}

class Filmes extends Conteudo {
  constructor(id, titulo, tipo, generos, duracaoMinutos, classificacao){
    super(id, titulo, tipo, generos);
    this.duracaoMinutos = duracaoMinutos;
    this.classificacao = classificacao;
  }
<<<<<<< Updated upstream
  exibirResumoFilmes(){
=======
  exibirResumoFilmes() {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  exibirResumoSeries(){
=======
  exibirResumoSeries() {
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
catalogo.forEach(item => {
                    (item.tipo === "Filme") 
                    ? console.log(item.exibirResumoConteudo() + item.exibirResumoFilmes())
                    : console.log(item.exibirResumoConteudo() + item.exibirResumoSeries());
})
=======
// --- CONCEITO: ASYNC / AWAIT ---
const simularCarregamento = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function carregarCatalogoAsync() {
  console.log("\n🔄 Carregando dados do catálogo...");
  await simularCarregamento(5000); // Espera 5s simulando requisição de rede
  
  catalogo.forEach((item) => {
    if (item instanceof Filmes) {
      console.log(item.exibirResumoConteudo() + item.exibirResumoFilmes());
    } else if (item instanceof Series) {
      console.log(item.exibirResumoConteudo() + item.exibirResumoSeries());
    }
  });
}

// 1 - CRIAR PERFIL (OBRIGATÓRIO)
function criarPerfilUsuario() {
  console.log("\n---🎬 BEM-VINDO AO CINEMATCH JS 📽️---\n");

  let nome = "";
  // 🔒 Validação de Nome
  do {
    const entradaNome = prompt("Qual é o seu nome?: ");
    // Garante que se o prompt retornar null/undefined, vira string vazia ""
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

    // Se o texto estiver vazio, mantemos NaN
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
    generosFavoritos
  };
}

// 2 - EXIBIR PERFIL
function exibirPerfil(usuario) {
  console.log(`\n-------------------------MEU PERFIL-------------------------`);
  console.log(`👤 Nome: ${usuario.nome}`);
  console.log(`🆔 Idade: ${usuario.idade}`);
  console.log(`💖 Gêneros favoritos: ${usuario.generosFavoritos.join(', ')}`);
  console.log(`--------------------------------------------------------------\n`);
}

// 4 - CALCULAR COMPATIBILIDADE 
function calcularCompatibilidadeConteudo(usuario, conteudo) {
  function classificarCompatibilidade(percentual) {
    if (percentual >= 80) return "Alta afinidade";
    if (percentual >= 50) return "Média afinidade";
    if (percentual > 0) return "Baixa afinidade";
    return "Nenhuma afinidade";
  }

  const generosEmComum = conteudo.generos.filter((genero) =>
    usuario.generosFavoritos.some(
      (fav) => fav.toLowerCase() === genero.toLowerCase()
    )
  );

  const generosNaoExplorados = conteudo.generos.filter(
    (genero) => !generosEmComum.includes(genero)
  );

  const percentual = Math.round(
    (generosEmComum.length / conteudo.generos.length) * 100
  );

  return {
    titulo: conteudo.titulo,
    tipo: conteudo.tipo,
    percentual: `${percentual}%`,
    classificacao: classificarCompatibilidade(percentual),
    generosEmComum,
    generosNaoExplorados
  };
}

// 5 - COMPATIBILIDADE COM TODO O CATÁLOGO (ASYNC)
async function exibirCompatibilidadeAsync(usuarioCriado, catalogo) {
  console.log("\n🔄 Processando compatibilidade com o algoritmo...");
  await simularCarregamento(3000);
  
  console.log("\n ========== COMPATIBILIDADE COM O CATÁLOGO =========\n");
  catalogo.forEach((conteudo) => {
    const resultado = calcularCompatibilidadeConteudo(usuarioCriado, conteudo);
    console.log(`\nTítulo: ${resultado.titulo} (${resultado.tipo})`);
    console.log(`Compatibilidade: ${resultado.percentual} (${resultado.classificacao})`);
    console.log(`Gêneros em comum: ${resultado.generosEmComum.length > 0 ? resultado.generosEmComum.join(", ") : "Nenhum"}`);
    console.log(`Gêneros não explorados: ${resultado.generosNaoExplorados.length > 0 ? resultado.generosNaoExplorados.join(", ") : "Nenhum"}`);
  });
}

// 6 - RECOMENDAÇÃO PRINCIPAL
function exibirConteudoMaisRecomendado(usuario, catalogo) {
  const analises = catalogo.map((conteudo) =>
    calcularCompatibilidadeConteudo(usuario, conteudo)
  );

  const maisRecomendado = analises.reduce((maior, atual) => {
    const numAtual = parseInt(atual.percentual);
    const numMaior = parseInt(maior.percentual);
    return numAtual > numMaior ? atual : maior;
  }, analises[0]);

  console.log("\n========== CONTEÚDO MAIS RECOMENDADO ==========");
  console.log(`\n🏆 Título: ${maisRecomendado.titulo} (${maisRecomendado.tipo})`);
  console.log(`Compatibilidade: ${maisRecomendado.percentual} (${maisRecomendado.classificacao})`);
  console.log(`Gêneros em comum: ${maisRecomendado.generosEmComum.length > 0 ? maisRecomendado.generosEmComum.join(", ") : "Nenhum"}`);
  console.log(`Gêneros não explorados: ${maisRecomendado.generosNaoExplorados.length > 0 ? maisRecomendado.generosNaoExplorados.join(", ") : "Nenhum"}`);
  console.log("================================================\n");
}

// ==============================================================
// MENU INTERATIVO (ASYNC/AWAIT)
// ==============================================================

async function criaMenuInterativo() {
  let opcao = "";
  let usuarioCriado = null;

  do {
    console.log("\n===== CineMatch JS =====\n");
    console.log("1 - 🔑 Criar Perfil");
    console.log("2 - 📝 Ver meu perfil");
    console.log("3 - 📺 Ver catálogo completo");
    console.log("4 - 📈 Calcular compatibilidade");
    console.log("5 - 🎯 Ver o conteúdo mais recomendado");
    console.log("6 - ◀ Sair");

    opcao = prompt("\nEscolha uma opção: ");

    switch (opcao) {
      case "1":
        usuarioCriado = criarPerfilUsuario();
        break;
      case "2":
        usuarioCriado
          ? exibirPerfil(usuarioCriado)
          : console.log("\n❌ Usuário não encontrado. Crie seu perfil primeiro (Opção 1).");
        break;
      case "3":
        // Usando o AWAIT dentro do loop do menu
        await carregarCatalogoAsync();
        break;
      case "4":
        usuarioCriado
          ? await exibirCompatibilidadeAsync(usuarioCriado, catalogo)
          : console.log("\n❌ Usuário não encontrado. Crie seu perfil primeiro (Opção 1).");
        break;
      case "5":
        usuarioCriado
          ? exibirConteudoMaisRecomendado(usuarioCriado, catalogo)
          : console.log("\n❌ Usuário não encontrado. Crie seu perfil primeiro (Opção 1).");
        break;
      case "6":
        console.log("Até a próxima maratona! 🍿\n");
        break;
      default:
        console.log("⚠️ Opção inválida, tente novamente.");
    }
  } while (opcao !== "6");
}

// Executa a função assíncrona do menu
criaMenuInterativo();
>>>>>>> Stashed changes
