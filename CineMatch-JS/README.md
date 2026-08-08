# 🎬 CineMatch JS - Sistema de Recomendação no Terminal

Projeto avaliativo do **Módulo 1 - Semana 6** do curso de **Desenvolvimento Mobile React Native** (SCTEC).

O **CineMatch JS** é uma aplicação interativa via linha de comando (CLI) desenvolvida em JavaScript/Node.js que gerencia um catálogo de filmes e séries, calcula a compatibilidade do perfil do usuário com as produções e indica os conteúdos mais recomendados.

---

## 📌 Funcionalidades Principais

1. **🔑 Criar/Atualizar Perfil:** Coleta nome, idade e gêneros favoritos com validação interativa.
2. **📝 Ver Perfil:** Exibe as informações do usuário e acompanha o número de modificações do perfil.
3. **📺 Catálogo Completo:** Carrega e exibe todos os filmes e séries disponíveis com simulação de tempo de rede.
4. **📈 Calcular Compatibilidade:** Executa o algoritmo de afinidade baseado nos gêneros favoritos.
5. **🎯 Conteúdo Mais Recomendado:** Filtra e apresenta a(s) produção(ões) com a maior porcentagem de compatibilidade.

---

## 🚀 Conceitos de JavaScript Aplicados

O projeto foi estruturado utilizando recursos fundamentais do ecossistema JavaScript moderno:

### 1. Orientação a Objetos (POO)
* **Classe Base (`Conteudo`):** Define a estrutura genérica de um título do catálogo (ID, título, tipo e gêneros).
* **Herança (`Filmes` e `Series`):** As classes filhas herdam de `Conteudo` e expandem seus atributos e métodos específicos (como duração, episódios e classificação indicativa).
* **Operador `instanceof`:** Utilizado para identificar a instância e formatar a exibição corretamente.

### 2. Closures
* A função `gerarPerfilUsuario()` cria um escopo fechado que mantém o estado da variável `contadorPerfil`. A cada vez que o perfil é recriado ou editado, a *closure* incrementa e preserva o histórico de modificações do usuário.

### 3. Programação Assíncrona (`Async / Await` e `Promises`)
* As funções `carregarCatalogoAsync` e `exibirCompatibilidadeAsync` utilizam a palavra-chave `await` em conjunto com uma `Promise` (`simularCarregamento`) para simular a busca de dados em uma API/Banco de dados com tempo de espera realista.

### 4. Callbacks
* Na opção de compatibilidade (`exibirCompatibilidadeAsync`), uma função **Callback** é passada por parâmetro. Após o término do processamento assíncrono dos dados, o callback é executado de forma reativa para emitir uma notificação de sucesso com métricas ao usuário.

### 5. Tratamento e Validação de Dados
* Implementação de laços de repetição (`do...while`) e métodos de higienização de strings (`.trim()`) para garantir que o programa não aceite entradas em branco ou idades inválidas.

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript (ES6+)**
* **Node.js**
* **[prompt-sync](https://www.npmjs.com/package/prompt-sync):** Para leitura síncrona de entradas do usuário no terminal.

---

## 📂 Estrutura do Projeto

```text
├── index.js          # Código principal da aplicação
├── package.json      # Dependências do projeto
└── README.md         # Documentação detalhada
└── planejamento/ 
    └── tarefas-kanban.md 

-----------------------------------------------------------------------------------------------------------

🏁 Como Executar o Projeto

1 - Instale as dependências no terminal:

npm install

2 - Execute a aplicação:

cd <NOME_DA_PASTA>
node cinematch.js

💻 Exemplo de Uso no Terminal

===== CineMatch JS =====

1 - 🔑 Criar Perfil
2 - 📝 Ver meu perfil
3 - 📺 Ver catálogo completo
4 - 📈 Calcular compatibilidade
5 - 🎯 Ver o conteúdo mais recomendado
6 - ◀ Sair

Escolha uma opção: 1

---🎬 BEM-VINDO AO CINEMATCH JS 📽️---

Qual é o seu nome?: Diego
Qual é a sua idade?: 36

--- Gêneros Disponíveis ---
Acao | Animes | Aventura | Comedia | Crime | Drama | Fantasia | Suspense | Terror
---------------------------
Quais gêneros você mais gosta? (separe por vírgula): Acao, Suspense

✅ Perfil criado com sucesso!



***Este mini projeto foi desenvolvido por Roberto Pedro da Silva e Diego Pereira Lopes para o curso de Desenvolvimento Mobile React Native - SCTEC.***