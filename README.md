# QuickFlix

Uma aplicação completa de reserva de ingressos de cinema (SPA React + API Node). Este repositório contém o frontend (client/) e o backend (server/) para pesquisar filmes, visualizar sessões, selecionar assentos e efetuar pagamento via Stripe.

 [![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://reactjs.org)  [![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev)  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white&style=for-the-badge)](https://tailwindcss.com) 
 [![react-router](https://img.shields.io/badge/react--router-CA4245?logo=react-router&logoColor=white&style=for-the-badge)](https://reactrouter.com)  [![Clerk](https://img.shields.io/badge/Clerk-5B21B6?logo=clerk&logoColor=white&style=for-the-badge)](https://clerk.com)  [![lucide-react](https://img.shields.io/badge/lucide--react-0EA5A9?style=for-the-badge)](https://lucide.dev) 
 [![react-hot-toast](https://img.shields.io/badge/react--hot--toast-FF6B6B?style=for-the-badge)](https://react-hot-toast.com)  [![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org)  [![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge)](https://expressjs.com) 
 [![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)](https://www.mongodb.com)  [![Mongoose](https://img.shields.io/badge/Mongoose-CC4A36?logo=mongodb&logoColor=white&style=for-the-badge)](https://mongoosejs.com)  [![Stripe](https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=white&style=for-the-badge)](https://stripe.com) 
 [![Inngest](https://img.shields.io/badge/Inngest-F59E0B?style=for-the-badge)](https://www.inngest.com)  [![nodemailer](https://img.shields.io/badge/nodemailer-FF9900?style=for-the-badge)](https://nodemailer.com)  [![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)](https://vercel.com) 

## Principais funcionalidades
- Listagem de filmes e detalhes
- Seleção de data/horário e assentos
- Criação de reserva e checkout integrado com Stripe
- Área de usuário com visualização de reservas
- Painel administrativo para gerenciar sessões e reservas

## Arquitetura / Estrutura do repositório
- `client/` — Frontend React (Vite)
  - `src/` — componentes, páginas, contexto e utilitários
- `server/` — API Node/Express
  - `controllers/`, `models/`, `routes/`, `configs/`

## Tecnologias utilizadas

- Frontend
  - React
  - Vite
  - react-router-dom (rotas SPA)
  - Clerk (autenticação)
  - lucide-react (ícones)
  - react-hot-toast (notificações)
  - Tailwind CSS (classes utilitárias)

- Backend
  - Node.js + Express
  - Mongoose + MongoDB
  - Stripe (checkout)
  - Clerk (middleware de autenticação no server)
  - Inngest (webhooks/funções assíncronas)
  - nodemailer (envio de e-mails, opcional)

## Requisitos
- Node.js (recomenda-se LTS)
- MongoDB (URI de acesso)
- Conta Stripe para gerar `STRIPE_SECRET_KEY`
- Chaves do Clerk (frontend e server)

## Variáveis de ambiente (exemplos)

Crie `.env` nos diretórios `client/` e `server/` (esses arquivos NÃO devem ser commitados). Exemplo de chaves necessárias:

server/.env (exemplo)
- MONGODB_URI=your_mongo_connection_string
- STRIPE_SECRET_KEY=sk_test_...
- CLERK_SECRET_KEY=...

client/.env (exemplo)
- VITE_BASE_URL=http://localhost:3000
- VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
- VITE_CLERK_PUBLISHABLE_KEY=pk_...

> Atenção: caso uma chave de API tenha sido exposta, revogue/rotacione imediatamente.

## Como rodar localmente

No root do repositório há duas pastas; instale dependências e rode o frontend e backend separadamente.

1) Backend

```bash
cd server
npm install
npm run server
```

2) Frontend

```bash
cd client
npm install
npm run dev
```

Abra `http://localhost:5173` (ou porta configurada pelo Vite) para acessar a aplicação.

## Observações sobre checkout/redirect
- O fluxo de pagamento utiliza Stripe Checkout. Ao criar a sessão, o backend define `success_url` apontando para uma rota do frontend `/loading/:nextUrl` que faz o redirecionamento final para a página desejada (por exemplo, `/my-bookings`).

## Deploy
- Frontend: Vercel (ou outro host estático compatível com SPA)
- Backend: qualquer provedor Node (Heroku, Railway, DigitalOcean, etc.) com variável de ambiente para `STRIPE_SECRET_KEY` e `MONGODB_URI`.

Se usar Vercel para o frontend, configure reescrita de rotas para servir `index.html` em rotas dinâmicas (SPA).
