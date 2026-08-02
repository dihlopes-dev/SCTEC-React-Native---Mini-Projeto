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

  /*const generosFavoritos = [];
  let generoAtual = "";

  for (let i = 0; i < generosInput.length; i++) {
    const caractere = generosInput[i];

    if (caractere === ',') {
      
      const generoLimpo = generoAtual.trim();
      if (generoLimpo !== "") {
        generosFavoritos.push(generoLimpo);
      }
      generoAtual = "";
    } else {
      generoAtual += caractere;    
    }
  }

  const ultimoGenero = generoAtual.trim();
  if (ultimoGenero !== "") {
    generosFavoritos.push(ultimoGenero);
  }
    
  **Trocamos o FOR pelo método .split(",") / IF-ELSE por template literals*/
  
  const generosFavoritos = generosInput
    ? generosInput.split(",").map((g) => g.trim()).filter((g) => g.length > 0) : [];
    // Métodos de array que não vimos em aula: 
    // .split() transforma string em array ( toda vez que digitar o gênero no terminal)
    // .trim() elimina os espaços criado nas strings pelo usuário

  const usuario = {
    nome: nome || "Convidado",
    idade: idade || 0,
    generosFavoritos: generosFavoritos
  };

  return usuario;
}

//Teste do código no terminal

const usuarioAtual = criarPerfilUsuario()

console.log ("--- Usuário Criado com Sucesso! ---")
console.log (usuarioAtual)

