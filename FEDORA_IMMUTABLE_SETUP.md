# Comando de Desenvolvimento para Fedora Immutable

Como você está usando **Fedora Cosmic Immutable**, use `toolbox` para desenvolver este projeto.

## 🛠️ Iniciar o Servidor de Desenvolvimento

```bash
toolbox run -c mydev bash -c "cd /var/home/recifecrypto/OneDrive/MySite && npm run dev"
```

O site estará disponível em: **http://localhost:5173/MySite/**

## 📦 Instalar Dependências

```bash
toolbox run -c mydev bash -c "cd /var/home/recifecrypto/OneDrive/MySite && npm install"
```

## 🏗️ Fazer Build para Produção

```bash
toolbox run -c mydev bash -c "cd /var/home/recifecrypto/OneDrive/MySite && npm run build"
```

## ✅ Fazer Deploy no GitHub Pages

```bash
toolbox run -c mydev bash -c "cd /var/home/recifecrypto/OneDrive/MySite && npm run deploy"
```

## 💡 Dicas

- **Entrar no toolbox**: `toolbox enter mydev` (você pode trabalhar livremente lá)
- **Sair do toolbox**: `exit`
- **Listar toolboxes**: `toolbox list`
- **Deletar toolbox**: `toolbox remove mydev` (se precisar recriar)

## 📁 Estrutura do Projeto

Todos os arquivos do seu projeto estão em:
```
/var/home/recifecrypto/OneDrive/MySite/
├── src/
│   ├── components/     # Componentes React
│   ├── styles/         # Estilos globais
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Personalizar seu Portfólio

1. **Informações pessoais**: Edite os componentes em `src/components/`
2. **Cores**: Modifique as variáveis CSS em `src/styles/index.css`
3. **Projetos**: Atualize `src/components/Projects.jsx`
4. **Blog**: Modifique `src/components/Blog.jsx`
5. **Contato**: Atualize `src/components/Contact.jsx`

## 🚀 Deploy Checklist

- [ ] Atualize seu nome e informações em todos os componentes
- [ ] Adicione os links reais do GitHub, LinkedIn, Twitter
- [ ] Configure o formulário de contato com seu email
- [ ] Adicionar seus projetos reais
- [ ] Verificar responsividade em mobile
- [ ] Testar em diferentes navegadores
- [ ] Fazer deploy no GitHub Pages

---

**Seu site está pronto para uso! 🎉**
