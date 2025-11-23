# 📦 Gestor de Estoque

Sistema de gerenciamento de estoque desenvolvido com React e React Router DOM para controle de inventário com dashboard interativo e armazenamento local.

## 🚀 Funcionalidades

- **Dashboard Interativo**: Visualização em tempo real de métricas do estoque
  - Diversidade de itens (códigos únicos)
  - Inventário total (soma de quantidades)
  - Itens adicionados recentemente (últimos 10 dias)
  - Itens com estoque baixo (quantidade < 10)

- **Gerenciamento de Itens**: CRUD completo de produtos do estoque
- **Armazenamento Local**: Persistência de dados usando localStorage
- **Navegação**: Sistema de rotas com React Router DOM
- **Context API**: Gerenciamento de estado global com React Context

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** - Gerenciamento de rotas
- **Context API** - Gerenciamento de estado global
- **CSS Modules** - Estilização com escopo local
- **LocalStorage** - Persistência de dados no navegador
- **Vite** - Build tool e dev server

## 📋 Estrutura do Projeto

```
src/
├── components/
│   └── DashboardCard/       # Componente de card do dashboard
├── contexts/
│   └── StockContext.jsx     # Context API para gerenciar estoque
├── pages/
│   ├── Home/                # Página principal com dashboard
│   ├── StockItems/          # Página de listagem de itens
│   └── layout/              # Componentes de layout (Header, RootLayout)
├── router.jsx               # Configuração de rotas
└── App.jsx                  # Componente principal

```

## 🎯 Estrutura de Dados

Cada item do estoque possui:
- `id` - Identificador único
- `codigo` - Código do produto
- `descricao` - Descrição do item
- `quantidade` - Quantidade em estoque
- `preco` - Preço unitário
- `categoria` - Categoria do produto
- `criado_em` - Data de criação
- `atualizado_em` - Data da última atualização

## 🚦 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/SEU-USUARIO/gestor-de-estoque.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 📚 Aprendizados

Este projeto foi desenvolvido como parte de estudos práticos, aplicando conceitos de:
- React Hooks (useState, useEffect, useContext)
- Context API para gerenciamento de estado
- React Router DOM para navegação
- CSS Grid e Flexbox
- Manipulação de LocalStorage
- Componentização e reutilização de código

## 📝 Licença

Projeto desenvolvido para fins educacionais.
