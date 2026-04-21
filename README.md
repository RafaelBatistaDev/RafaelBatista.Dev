# Meu Portfólio - Portfolio Site

Um portfólio profissional moderno construído com React e Vite, otimizado para GitHub Pages.

## ✨ Características

- ✅ Design responsivo e moderno
- ✅ Seções: Sobre, Skills, Projetos, Blog e Contato
- ✅ Formulário de contato interativo
- ✅ Animações suaves
- ✅ Tema escuro
- ✅ Otimizado para performance
- ✅ Pronto para GitHub Pages

## 🚀 Stack Tecnológico

- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **CSS3** - Estilização
- **React Icons** - Ícones SVG
- **GitHub Pages** - Hospedagem

## 📋 Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

## 🛠️ Instalação

1. Clone ou faça download do projeto
2. Instale as dependências:

```bash
npm install
```

## 🏃 Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173/`

## 🏗️ Build

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

## 🔍 Preview

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## 📤 Deploy no GitHub Pages

1. Certifique-se de ter um repositório GitHub
2. Configure a branch de deploy nas configurações do repositório (Settings > Pages > Build and deployment > Branch: `gh-pages`)
3. Execute:

```bash
npm run deploy
```

Seu site estará disponível em `https://seu-usuario.github.io/MySite/`

## 📝 Customização

### Alterar informações pessoais

Edite os componentes para adicionar suas informações:

- [Navbar.jsx](src/components/Navbar.jsx) - Nome/brand
- [Hero.jsx](src/components/Hero.jsx) - Descrição principal
- [Skills.jsx](src/components/Skills.jsx) - Suas tecnologias
- [Projects.jsx](src/components/Projects.jsx) - Seus projetos
- [Blog.jsx](src/components/Blog.jsx) - Seus artigos
- [Contact.jsx](src/components/Contact.jsx) - Informações de contato
- [Footer.jsx](src/components/Footer.jsx) - Links sociais

### Cores

As cores estão definidas no arquivo [src/styles/index.css](src/styles/index.css) como CSS variables:

```css
--color-primary: #6366f1
--color-secondary: #ec4899
--color-bg: #0f172a
--color-bg-light: #1e293b
--color-text: #f1f5f9
--color-text-muted: #cbd5e1
--color-border: #334155
```

## 📁 Estrutura

```
src/
├── components/          # Componentes React
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── *.css
├── styles/
│   └── index.css        # Estilos globais
├── App.jsx
└── main.jsx
```

## 🔗 Links Úteis

- [Documentação React](https://react.dev/)
- [Documentação Vite](https://vite.dev/)
- [GitHub Pages](https://pages.github.com/)
- [Marketplace VS Code](https://marketplace.visualstudio.com/)

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ por [Seu Nome](seu-github-profile)
