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

