# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para o projeto Landing Page UGC Creator! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Posso Contribuir?](#como-posso-contribuir)
- [Processo de Desenvolvimento](#processo-de-desenvolvimento)
- [Padrões de Código](#padrões-de-código)
- [Commits](#commits)
- [Pull Requests](#pull-requests)
- [Issues](#issues)

## 📜 Código de Conduta

Este projeto segue o [Código de Conduta do Contributor Covenant](https://www.contributor-covenant.org/). Ao participar, você está concordando em seguir este código.

## 🚀 Como Posso Contribuir?

### 🐛 Reportar Bugs
- Use o template de issue para bugs
- Descreva o comportamento esperado vs. atual
- Inclua screenshots quando aplicável
- Forneça informações do ambiente (OS, navegador, etc.)

### 💡 Sugerir Melhorias
- Use o template de issue para feature requests
- Explique o problema que a feature resolve
- Descreva a solução proposta
- Considere alternativas

### 🔧 Contribuir com Código
1. Fork o repositório
2. Crie uma branch para sua feature
3. Faça suas mudanças
4. Adicione testes se aplicável
5. Garanta que todos os testes passem
6. Envie um Pull Request

## 🛠 Processo de Desenvolvimento

### Setup Local
```bash
# Clone o repositório
git clone https://github.com/sena-technologies/landing-page-ugc-creator.git
cd landing-page-ugc-creator

# Instale dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Estrutura de Branches
- `main` - Branch principal (produção)
- `develop` - Branch de desenvolvimento
- `feature/nome-da-feature` - Novas funcionalidades
- `fix/nome-do-bug` - Correções de bugs
- `hotfix/nome-do-hotfix` - Correções urgentes

### Workflow
1. Sempre trabalhe a partir da branch `develop`
2. Crie uma nova branch para sua feature/fix
3. Faça commits pequenos e descritivos
4. Teste suas mudanças localmente
5. Envie PR para `develop`

## 📝 Padrões de Código

### TypeScript
- Use tipagem estrita
- Evite `any` - prefira tipos específicos
- Use interfaces para objetos complexos
- Documente tipos públicos

```typescript
// ✅ Bom
interface UserProps {
  name: string;
  email: string;
  isActive: boolean;
}

// ❌ Evitar
const user: any = { ... }
```

### React Components
- Use function components com hooks
- Prefira named exports
- Props devem ser tipadas
- Use memo() quando apropriado

```typescript
// ✅ Bom
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  // ...
}
```

### CSS/Tailwind
- Use classes Tailwind quando possível
- Evite CSS inline
- Use variáveis CSS para temas
- Mantenha responsividade

```typescript
// ✅ Bom
<div className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg">

// ❌ Evitar
<div style={{ backgroundColor: '#f97316', padding: '8px 16px' }}>
```

### Estrutura de Arquivos
```
components/
├── ui/           # Componentes base (shadcn/ui)
├── forms/        # Componentes de formulário
├── layout/       # Componentes de layout
└── common/       # Componentes reutilizáveis
```

## 📦 Commits

### Conventional Commits
Usamos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Tipos de Commit
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação, linting
- `refactor:` - Refatoração sem mudança de funcionalidade
- `perf:` - Melhoria de performance
- `test:` - Testes
- `chore:` - Tarefas de build, dependências

### Exemplos
```bash
feat: adicionar componente de filtro no portfolio
fix: corrigir layout responsivo no mobile
docs: atualizar README com instruções de deploy
style: formatear código com prettier
refactor: reorganizar estrutura de componentes
```

## 🔄 Pull Requests

### Checklist do PR
- [ ] Título descritivo
- [ ] Descrição clara das mudanças
- [ ] Testes passando
- [ ] Sem conflitos com a branch base
- [ ] Screenshots para mudanças visuais
- [ ] Documentação atualizada se necessário

### Template do PR
```markdown
## 📝 Descrição
Breve descrição das mudanças

## 🎯 Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## 🧪 Como Testar
1. Passo 1
2. Passo 2
3. Passo 3

## 📷 Screenshots
(se aplicável)

## ✅ Checklist
- [ ] Código testado localmente
- [ ] Testes unitários adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Sem warnings de linting
```

## 🐛 Issues

### Templates

#### Bug Report
```markdown
**Descrição do Bug**
Descrição clara do problema

**Como Reproduzir**
1. Vá para '...'
2. Clique em '....'
3. Role para baixo até '....'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer

**Screenshots**
Se aplicável

**Ambiente:**
- OS: [ex: iOS]
- Navegador: [ex: chrome, safari]
- Versão: [ex: 22]
```

#### Feature Request
```markdown
**Problema Relacionado**
Descrição do problema que esta feature resolve

**Solução Proposta**
Descrição da solução

**Alternativas Consideradas**
Outras soluções consideradas

**Contexto Adicional**
Qualquer informação adicional
```

## 🔍 Code Review

### Critérios
- Funcionalidade correta
- Performance adequada
- Código limpo e legível
- Testes apropriados
- Documentação necessária
- Acessibilidade considerada

### Processo
1. Revise o código linha por linha
2. Teste localmente se necessário
3. Verifique se segue os padrões
4. Forneça feedback construtivo
5. Aprove ou solicite mudanças

## 🎉 Reconhecimento

Todos os contribuidores serão reconhecidos no README e releases. Contribuições de qualquer tamanho são valiosas!

## 📞 Dúvidas?

Se tiver dúvidas sobre como contribuir:
- Abra uma issue com label `question`
- Entre em contato: contato@senatechnologies.com
- Consulte a documentação

---

**Obrigado por contribuir! 🙏**
