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