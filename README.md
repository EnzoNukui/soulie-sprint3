# Soulie — Sua IA inteligente que irá te acompanhar na SoulUp 🌱

## 📌 Descrição do Projeto

A **Soulie** se trata de uma IA inteligente sebdo a solução desenvolvida para o Challenge de 2026 junto  da empresa **SoulUp**,   sendo criada para solucionar um dos maiores problemas de plataformas de engajamento dentro do aplicativo: a **queda de retenção de usuários**.

A Soulie é um avatar gamificado e interativo que acompanha o usuário em sua jornada dentro do app, reagindo com expressões e mensagens de acordo com  a maneira que o mesmo progride dentro da plataforma. A proposta combina **onboarding inteligente**, **missões dinâmicas** personalizadas e um **sistema de recorrência** (streaks e retenção diária), transformando o uso da plataforma em um hábito recompensador e assim tornando a mesma mais interessante para os usuários.

Nesta etapa (Sprint 03), o front-end foi desenvolvido em **React + Vite + TypeScript**, estruturado como uma **Single Page Application (SPA)** componentizada, moderna e responsiva.

---

## 🛠️ Tecnologias Utilizadas

- **React** — construção da interface e componentização
- **Vite** — build e ambiente de desenvolvimento
- **TypeScript** — tipagem estática do código
- **Tailwind CSS** — estilização e responsividade da interface
- **React Router DOM** — navegação entre páginas (SPA)
- **React Hook Form** — validação de formulários
- **Git & GitHub** — versionamento e colaboração entre os integrantes


## 📁 Estrutura de Pastas do Projeto

A arquitetura do repositório foi organizada para separar componentes, páginas, rotas e recursos visuais, facilitando a manutenção e a escalabilidade da aplicação.

soulie-sprint3/
├── my-app/
│   ├── public/
│   │   └── favicon/
│   │       └── soulie_favicon.svg
│   ├── src/
│   │   ├── assets/
│   │   │   ├── avatar/             # expressões do avatar (feliz, bravo, triste, radiante, tímido...)
│   │   │   ├── avatar_integrantes/ # ilustrações do Soulie usadas na página de integrantes
│   │   │   ├── integrantes/        # fotos dos membros do grupo
│   │   │   └── produto/            # imagens do protótipo e conceito do produto
│   │   ├── components/
│   │   │   ├── Botoes/
│   │   │   ├── Cabecalho/
│   │   │   ├── CardIntegrantes/
│   │   │   ├── Cards/
│   │   │   ├── Conteudo/
│   │   │   └── Rodape/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Sobre/
│   │   │   ├── Solucao/
│   │   │   ├── Faq/
│   │   │   ├── Contato/
│   │   │   ├── Integrantes/
│   │   │   └── Error/
│   │   ├── routes/
│   │   │   └── Routes.tsx
│   │   ├── App.tsx
│   │   ├── globals.css
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
└── README.md


## 🖼️  Ícones do Projeto

O Soulie utiliza um avatar animado com diferentes expressões faciais para reforçar a experiência de gamificação, reagindo ao progresso e ao comportamento do usuário dentro da plataforma:

| Expressão | Imagem | Quando aparece |
|---|---|---|
| Feliz | <img src="./my-app/src/assets/avatar/avatar_feliz.png" width="60"> | Conclusão de missões |
| Radiante | <img src="./my-app/src/assets/avatar/avatar_radiante.png" width="60"> | Marcos de streak |
| Sorridente | <img src="./my-app/src/assets/avatar/avatar_sorridente.png" width="60"> | Progresso positivo geral |
| Bravo | <img src="./my-app/src/assets/avatar/avatar_bravo.png" width="60"> | Quebra de streak |
| Triste | <img src="./my-app/src/assets/avatar/avatar_triste.png" width="60"> | Longa inatividade |
| Entediado | <img src="./my-app/src/assets/avatar/avatar_entediado.png" width="60"> | Inatividade moderada |
| Tímido | <img src="./my-app/src/assets/avatar/avatar_timido.png" width="60"> | Onboarding, primeiras interações |
| Com dúvida | <img src="./my-app/src/assets/avatar/avatar_duvida.png" width="60"> | Momentos de ajuda/tutorial |
| Com pressa | <img src="./my-app/src/assets/avatar/avatar_cta.png" width="60"> | Lembretes e urgência de missões |

Além do avatar principal, o projeto também conta com ilustrações complementares do Soulie (acenando, apontando, espiando, em pose positiva) utilizadas na página de Integrantes, reforçando a identidade visual e o tom lúdico do produto.

## 📸 Páginas do Site e Evolução Visual

Esta seção apresenta as principais páginas do Soulie, seu propósito dentro da experiência do usuário, e a evolução visual de cada uma em relação à versão anterior do projeto.

### 🏠 Página Home

A página inicial apresenta o posicionamento central da Soulie: "Pequenas ações. Impacto que continua." — reforçando a proposta de transformar hábitos sustentáveis em missões, progresso e recompensas.

| Antes | Depois |
| :---: | :---: |
| <img src="./my-app/src/assets/produto/home-antigo.png" alt="Home antiga do Soulie" width="100%"> | <img src="./my-app/src/assets/produto/home-novo.png" alt="Home nova do Soulie" width="100%"> |

### 🛰️ Página Sobre

A página Sobre conta a origem da Soulie — inspirada no personagem "22" do filme Soul — e como ela atua como assistente virtual da SoulUp, guiando os usuários em práticas ambientais de forma fluida e engajadora.

| Antes | Depois |
| :---: | :---: |
| <img src="./my-app/src/assets/produto/sobre-antigo.png" alt="Sobre antiga do Soulie" width="100%"> | <img src="./my-app/src/assets/produto/sobre-novo.png" alt="Sobre nova do Soulie" width="100%"> |

### ⚙️ Página Solução

A página Solução detalha como a Soulie transforma sustentabilidade em hábito por meio de missões sociais, sistema de pontos e recompensas, com uma prévia da interface do aplicativo (carteira de pontos, comunidades e trilhas de missão).

| Antes | Depois |
| :---: | :---: |
| <img src="./my-app/src/assets/produto/solucao-antigo.png" alt="Solução antiga do Soulie" width="100%"> | <img src="./my-app/src/assets/produto/solucao-novo.png" alt="Solução nova do Soulie" width="100%"> |

### 👥 Página Integrantes

A página Integrantes apresenta os cinco desenvolvedores responsáveis pelo projeto, com nome completo, RM, turma e links para GitHub e LinkedIn de cada um.

| Antes | Depois |
| :---: | :---: |
| <img src="./my-app/src/assets/produto/integrantes-antigo.png" alt="Integrantes antiga do Soulie" width="100%"> | <img src="./my-app/src/assets/produto/integrantes-novo.png" alt="Integrantes nova do Soulie" width="100%"> |

### ❓ Página FAQ

A página FAQ reúne as principais dúvidas sobre a Soulie: sua relação com a SoulUp, frequência de notificações, retenção de uso e como o impacto do investimento é mensurado.

| Antes | Depois |
| :---: | :---: |
| <img src="./my-app/src/assets/produto/faq-antigo.png" alt="FAQ antigo do Soulie" width="100%"> | <img src="./my-app/src/assets/produto/faq-novo.png" alt="FAQ novo do Soulie" width="100%"> |

### ✉️ Página Contato

A página Contato disponibiliza um formulário para o usuário relatar problemas, tirar dúvidas ou dar sugestões de gamificação diretamente para a equipe.

| Antes | Depois |
| :---: | :---: |
| <img src="./my-app/src/assets/produto/contato-antigo.png" alt="Contato antigo do Soulie" width="100%"> | <img src="./my-app/src/assets/produto/contato-novo.png" alt="Contato novo do Soulie" width="100%"> |

