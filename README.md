# Hidrauboa — Landing Page Institucional

> Landing page institucional e catálogo técnico desenvolvido para a **Hidrauboa** (Boa Esperança - MG), empresa especializada em mangueiras hidráulicas de alta pressão, terminais, conexões, engates rápidos e serviços de prensagem imediata para linhas agrícola, rodoviária e industrial.

---

## 📌 Sobre o Projeto

Este projeto foi concebido com um duplo propósito:
1. **Laboratório Acadêmico e Prático**: Servir como ambiente de estudo aprofundado em desenvolvimento frontend moderno, arquitetura de bundlers, otimização de performance (Core Web Vitals), tipagem estática e práticas contemporâneas de deploy e hospedagem de aplicações web estáticas.
2. **Aplicação Profissional de Mercado**: Criar uma solução digital real, altamente performática e orientada a conversão de clientes para o comércio local e regional, conectando proprietários de máquinas, oficinas e produtores rurais aos canais de atendimento direto via WhatsApp e balcão físico.

---

## 🛠️ Tecnologias Utilizadas e Justificativas Técnicas

A escolha das ferramentas priorizou **velocidade de carregamento**, **simplicidade arquitetural** e **manutenibilidade a longo prazo**, dispensando o peso de frameworks de renderização complexos para uma página puramente institucional.

### 1. **Vite 8** (Build Tool & Dev Server)
- **Por que foi escolhido:** Proporciona inicialização instantânea no desenvolvimento local (Hot Module Replacement) e empacotador otimizado para produção baseado em Rollup/Rolldown, gerando arquivos estáticos minificados e cacheados com máxima eficiência.
- **Resultado:** Build final gerado em menos de 300ms com saída compacta pronta para qualquer servidor ou CDN.

### 2. **TypeScript**
- **Por que foi escolhido:** Adiciona tipagem estática rigorosa sobre JavaScript, prevenindo erros em tempo de desenvolvimento na manipulação do DOM, nas estruturas de catálogo de produtos, dados de contato e rotas dinâmicas.
- **Resultado:** Código seguro, autoexplicativo e fácil de receber manutenção ou expansões futuras.

### 3. **Tailwind CSS v4 (`@tailwindcss/vite`)**
- **Por que foi escolhido:** A versão 4 do Tailwind integra o compilador diretamente ao pipeline do Vite, eliminando configurações antigas de PostCSS e permitindo a definição de tokens de design diretamente via regra `@theme` no CSS.
- **Resultado:** Folha de estilo utilitária extremamente enxuta, responsiva de ponta a ponta e com suporte nativo a transições suaves e temas escuros.

### 4. **Ícones Vetoriais Inline (Zero Dependências Externas)**
- **Por que foi escolhido:** Em vez de importar bibliotecas pesadas de ícones (como FontAwesome ou pacotes npm volumosos), todos os ícones (WhatsApp, telefone, mapa, relógio, lupa de zoom, checagem) são SVGs vetoriais puros inseridos diretamente no código.
- **Resultado:** Zero requisições HTTP adicionais e renderização instantânea sem layout shift.

---

## 🎨 Identidade Visual e Decisões de UI/UX

O design foi estruturado para refletir a robustez, confiabilidade e a forte ligação da Hidrauboa com o **agronegócio e a mecânica pesada**:

- **Paleta de Cores Temática:**
  - **Solo Profundo / Chassi Escuro (`#0f1411`, `#151d18`)**: Fundo sóbrio de alto contraste que valoriza fotografias e leitura sob luz intensa em celulares no campo.
  - **Verde Campo / Safra (`#23683f`, `#3da869`)**: Elemento de identificação agrícola e botões de ação e sucesso.
  - **Amarelo Ouro / Trator (`#d99a22`, `#f3b942`)**: Destaque para botões de orçamento, detalhes técnicos e chamadas de ação.
  - **Areia & Creme (`#ece7df`, `#c7bea9`)**: Tipografia legível, suave aos olhos e sem cansaço visual.
- **Geometria Utilitária e Técnica:** Bordas nítidas, divisores industriais e padrões de grid que remetem a bancadas de prensagem e medições mecânicas.
- **Destaque Visual para Imagens Reais:** Espaços ampliados para visualização de estoque, montagens, catálogo técnico e a identidade da marca, integrados a um sistema de *Lightbox* (zoom interativo) em tela cheia.
- **Foco em Conversão e Praticidade:**
  - Roteamento direto de mensagens no WhatsApp com texto pré-definido para cada responsável (Vendas, Atendimento Rápido e Financeiro).
  - Cópia de números de telefone com 1 clique.
  - Botão flutuante (FAB) de WhatsApp no mobile.
  - Mapa interativo do Google Maps com rota para Boa Esperança - MG.

---

## 📁 Estrutura de Pastas

```text
hidrauboa-site/
├── public/                 # Assets estáticos públicos (copiados diretamente para o build)
│   └── img/                # Imagens institucionais, catálogo e logotipo
├── src/
│   ├── styles.css          # Configuração do Tailwind CSS v4, tema e classes utilitárias
│   ├── main.ts             # Estrutura HTML da landing page e lógica interativa (DOM/Eventos)
│   └── vite-env.d.ts       # Declarações de tipos do Vite
├── index.html              # Ponto de entrada HTML com metadados e Google Fonts
├── package.json            # Metadados do projeto, dependências e scripts npm
├── tsconfig.json           # Configuração do compilador TypeScript
├── vite.config.ts          # Configuração do Vite e plugin oficial Tailwind v4
└── .gitignore              # Arquivos e diretórios ignorados pelo Git
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Gerenciador de pacotes `npm` (incluso no Node.js)

### 1. Clonar o repositório
```bash
git clone https://github.com/NathanLuceat/hidrauboa-site.git
cd hidrauboa-site
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O Vite iniciará o servidor local. Abra o navegador no endereço:
```text
http://localhost:5173
```

### 4. Compilar para produção
```bash
npm run build
```
Os arquivos estáticos otimizados (HTML, CSS e JS minificados, imagens processadas) serão gerados na pasta `dist/`.

### 5. Pré-visualizar o build de produção localmente
```bash
npm run preview
```

---

## 🌐 Hospedagem / Deploy

Por ser uma aplicação puramente estática, a pasta `dist/` pode ser hospedada gratuitamente em qualquer plataforma moderna de hospedagem com deploy contínuo via GitHub:

- **Vercel**: Importe o repositório; o framework preset `Vite` será detectado automaticamente.
- **Netlify**: Build command `npm run build`, Publish directory `dist`.
- **GitHub Pages**: Configurado via GitHub Actions para publicação do diretório `dist/`.
- **Hospedagem Tradicional / cPanel / VPS**: Faça upload do conteúdo da pasta `dist/` para a pasta raiz web (`public_html` ou `/var/www/html`).

---

## 👨‍💻 Autor

Desenvolvido por **Nathan Rodrigues Oliveira**.

---

## 📄 Licença e Solicitações de Uso

Este projeto é protegido sob termos de **Todos os Direitos Reservados (All Rights Reserved)**. É proibida a reprodução, cópia, alteração ou distribuição total ou parcial do código, design e ativos visuais sem autorização prévia por escrito.

Para dúvidas, solicitações de licenciamento ou autorização de uso, consulte o arquivo [`LICENSE`](LICENSE) ou entre em contato com:

- **Responsável Comercial:** Almir (Hidrauboa — Vendas & Orçamentos)
- **WhatsApp / Telefone:** [(35) 98844-2004](https://wa.me/5535988442004?text=Ol%C3%A1%20Almir,%20gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20o%20software/site%20da%20Hidrauboa.)
- **Localização:** Boa Esperança - MG
