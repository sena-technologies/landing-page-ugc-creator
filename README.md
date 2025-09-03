# 💄 Landing Page UGC Creator

<div align="center">
  <img src="./public/placeholder-logo.svg" alt="UGC Creator Logo" width="120" height="120">
  
  <p align="center">
    <strong>Landing page profissional para criadores de conteúdo UGC focados em beleza</strong>
  </p>
  
  <p align="center">
    <a href="#-sobre">Sobre</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-instalação">Instalação</a> •
    <a href="#-uso">Uso</a> •
    <a href="#-deploy">Deploy</a> •
    <a href="#-contribuição">Contribuição</a>
  </p>
  
  <p align="center">
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js">
    <img alt="React" src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css">
  </p>
</div>

---

## 📖 Sobre

Esta é uma **landing page moderna e responsiva** desenvolvida especificamente para criadores de conteúdo UGC (User Generated Content) que trabalham com produtos de beleza. O projeto oferece uma experiência visual atrativa e profissional para apresentar portfolios, serviços e capturar leads.

### 🎯 Objetivo

Fornecer uma presença digital profissional para criadores de conteúdo que desejam:
- Apresentar seu trabalho de forma elegante
- Atrair marcas e colaborações
- Converter visitantes em clientes
- Demonstrar expertise em produtos de beleza

## ✨ Funcionalidades

### 🏠 **Hero Section**
- Design impactante com call-to-action
- Estatísticas de engajamento (500K+ seguidores)
- Badges de especialização em beleza
- Botões de ação para contato e portfolio

### 🎨 **Portfolio**
- Galeria de trabalhos realizados
- Categorização por tipo de conteúdo
- Integração com redes sociais
- Depoimentos de marcas parceiras

### 📞 **Contato**
- Formulário de contato inteligente
- Integração com e-mail
- Links para redes sociais
- Informações de preços e serviços

### 📱 **Design Responsivo**
- Experiência otimizada para mobile
- Interface adaptável a diferentes telas
- Performance otimizada
- Carregamento rápido

## 🛠 Tecnologias

### **Frontend Framework**
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática

### **Estilização**
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework de CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis
- **[Radix UI](https://www.radix-ui.com/)** - Primitivos de UI acessíveis

### **Ícones e Assets**
- **[Lucide React](https://lucide.dev/)** - Ícones SVG modernos
- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas

### **Build e Deploy**
- **[PostCSS](https://postcss.org/)** - Processamento CSS
- **[ESLint](https://eslint.org/)** - Linting de código
- **[Vercel](https://vercel.com/)** - Hospedagem e deploy

## 🚀 Instalação

### **Pré-requisitos**
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### **Clone o repositório**
```bash
git clone https://github.com/sena-technologies/landing-page-ugc-creator.git
cd landing-page-ugc-creator
```

### **Instale as dependências**
```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install

# bun
bun install
```

### **Configure as variáveis de ambiente**
```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite as variáveis necessárias
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=seu-email@exemplo.com
```

## 💻 Uso

### **Desenvolvimento**
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no navegador

### **Build de Produção**
```bash
npm run build
npm start
```

### **Linting e Formatação**
```bash
# Verificar código
npm run lint

# Corrigir problemas
npm run lint:fix
```

### **Análise de Bundle**
```bash
npm run analyze
```

## 📁 Estrutura do Projeto

```
landing-page-ugc-creator/
├── app/                    # App Router (Next.js 15)
│   ├── contact/           # Página de contato
│   ├── portfolio/         # Página de portfolio
│   ├── services/          # Página de serviços
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx          # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── navigation.tsx    # Navegação
│   ├── footer.tsx        # Rodapé
│   └── ...
├── hooks/                # Custom hooks
├── lib/                  # Utilitários e configurações
├── public/               # Assets estáticos
│   ├── images/          # Imagens do portfolio
│   └── logos/           # Logos e ícones
├── styles/              # Estilos adicionais
└── ...
```

## 🎨 Customização

### **Cores e Tema**
Edite o arquivo `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          500: '#f97316',
          900: '#9a3412',
        }
      }
    }
  }
}
```

### **Conteúdo**
- **Hero Section**: `app/page.tsx`
- **Informações de contato**: `components/contact-form.tsx`
- **Portfolio**: `app/portfolio/page.tsx`
- **Serviços**: `app/services/page.tsx`

### **SEO e Metadados**
Configure em `app/layout.tsx`:

```tsx
export const metadata = {
  title: 'Seu Nome - UGC Creator',
  description: 'Criadora de conteúdo especializada em beleza...',
}
```

## 🌐 Deploy

### **Vercel (Recomendado)**
```bash
# Instale a CLI da Vercel
npm i -g vercel

# Deploy
vercel
```

### **Netlify**
```bash
# Build
npm run build

# Deploy pasta 'out'
```

### **Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci --only=production
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📈 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

### **Otimizações implementadas**
- ✅ Lazy loading de imagens
- ✅ Code splitting automático
- ✅ Compressão de assets
- ✅ SEO otimizado
- ✅ PWA ready

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **feature branch** (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -m 'feat: adicionar nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um **Pull Request**

### **Padrões de Commit**
Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação
- `refactor:` - Refatoração
- `chore:` - Tarefas de build/configuração

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

**Sena Technologies**
- 🌐 Website: [senatechnologies.com](https://senatechnologies.com)
- 📧 Email: contato@senatechnologies.com
- 🐙 GitHub: [@sena-technologies](https://github.com/sena-technologies)

---

<div align="center">
  <p>Desenvolvido com ❤️ pela <strong>Sena Technologies</strong></p>
  <p>
    <a href="https://github.com/sena-technologies">GitHub</a> •
    <a href="https://senatechnologies.com">Website</a> •
    <a href="mailto:contato@senatechnologies.com">Email</a>
  </p>
</div>
