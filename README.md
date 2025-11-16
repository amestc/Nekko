# NEKKO - E-commerce de Peças de PC

Loja online moderna para peças de computador com design pixel art retrô.

## 📁 Estrutura do Projeto

```
Nekko/
├── Front/              # Frontend React + Vite
│   ├── client/         # Código React
│   ├── server/         # Express server (dev)
│   ├── shared/         # Types compartilhados
│   └── public/         # Assets estáticos
│
└── Backend/            # Backend Spring Boot (Java)
    └── src/            # Código Java
```

## 🚀 Como Rodar

### Frontend (React + Vite)

```bash
cd Front
pnpm install
pnpm dev
```

Acesse: http://localhost:8080

### Backend (Spring Boot)

```bash
cd Backend
mvn spring-boot:run
```

## 🛠️ Tecnologias

**Frontend:**
- React 18 + TypeScript
- Vite
- TailwindCSS 3
- React Router 6
- Radix UI

**Backend:**
- Java + Spring Boot
- Spring Data JPA
- PostgreSQL

## 📄 Páginas Implementadas

- ✅ Homepage (`/`)
- ✅ Login (`/login`)
- ✅ Cadastro (`/cadastro`)
- ✅ Recuperação de Senha (`/recuperar-senha`)
- ✅ Periféricos (`/perifericos`)
- ✅ Listagem de Produtos (`/produtos/:category`)
- ✅ Detalhes do Produto (`/produto/:id`)

## 👥 Equipe

Desenvolvido para o projeto NEKKO.
