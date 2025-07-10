# NLW Agents - Web

Este é o projeto web desenvolvido durante o evento **NLW Agents** da [Rocketseat](https://rocketseat.com.br). A aplicação consiste em uma interface para criar e gerenciar notas.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias e padrões:

- **React**: Biblioteca para construção da interface de usuário.
- **Vite**: Ferramenta de build para um desenvolvimento rápido e moderno.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework CSS utility-first para estilização.
- **shadcn/ui**: Coleção de componentes de UI reutilizáveis, construídos sobre Radix UI e Tailwind CSS.
- **Lucide React**: Biblioteca de ícones.
- **Biome**: Ferramenta integrada para linting e formatação de código, garantindo consistência e qualidade.

## 📂 Estrutura do Projeto

A estrutura de pastas segue uma abordagem organizada, utilizando aliases de caminho para facilitar a importação de módulos:

- `@/components`: Componentes da aplicação.
- `@/components/ui`: Componentes do shadcn/ui.
- `@/lib`: Funções utilitárias e lógicas.
- `@/hooks`: Hooks customizados do React.

## ⚙️ Setup e Configuração

Siga os passos abaixo para executar o projeto localmente.

**Pré-requisitos:**

- Node.js (versão 18 ou superior)
- npm (ou outro gerenciador de pacotes como pnpm/yarn)

**1. Clone o repositório:**

```bash
git clone https://github.com/Lucashackd/nlw-agents-web.git
cd nlw-agents/web
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Execute o projeto:**

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Scripts Úteis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
