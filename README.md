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

O site já está no ar em:

**[https://hidrauboa.nlux.workers.dev](https://hidrauboa.nlux.workers.dev)**

Hospedagem atual: **Cloudflare Workers**. A pasta `dist/` também pode ser publicada em outras plataformas:

- **Vercel**: Importe o repositório; o framework preset `Vite` será detectado automaticamente.
- **Netlify**: Build command `npm run build`, Publish directory `dist`.
- **GitHub Pages**: Configurado via GitHub Actions para publicação do diretório `dist/`.
- **Hospedagem Tradicional / cPanel / VPS**: Faça upload do conteúdo da pasta `dist/` para a pasta raiz web (`public_html` ou `/var/www/html`).

---

## 📄 HTML atual da página inicial (`index.html`)

Ponto de entrada do site no ar. Contém metadados de SEO, verificação do Google Search Console, Open Graph, geo tags e Schema.org JSON-LD. O conteúdo visual da landing page é injetado em `#app` por `src/main.ts`.

```html
<!doctype html>
<html lang="pt-BR" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="0y2UYrYmsJrG_cvDht6JFzfnVOG2nQ0ID_xqnc29tC8" />

    <!-- Primary Meta Tags -->
    <title>Hidrauboa | Mangueiras Hidráulicas, Conexões e Prensagem em Boa Esperança - MG</title>
    <meta name="title" content="Hidrauboa | Mangueiras Hidráulicas, Conexões e Prensagem em Boa Esperança - MG" />
    <meta name="description" content="Hidrauboa em Boa Esperança - MG: Especialista em mangueiras hidráulicas de alta e super pressão, conexões, terminais, adaptadores, engates rápidos, pistões e prensagem imediata na hora para linhas agrícola, rodoviária e industrial. Atendimento direto via WhatsApp." />
    <meta name="keywords" content="hidrauboa, hidrauboa boa esperança, hidrauboa mg, mangueiras hidraulicas hidrauboa, prensagem de mangueiras boa esperança, conexoes hidraulicas boa esperanca, terminais hidraulicos, engates rapidos hidraulica, hidraulica boa esperança mg, mangueiras alta pressao minas gerais, almir hidrauboa, joao pedro hidrauboa, oficina hidraulica boa esperanca" />
    <meta name="author" content="Hidrauboa" />
    <meta name="publisher" content="Hidrauboa" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="https://hidrauboa.com.br/" />
    <meta name="theme-color" content="#151d18" />

    <!-- Geo Tags (Local SEO para Boa Esperança - MG) -->
    <meta name="geo.region" content="BR-MG" />
    <meta name="geo.placename" content="Boa Esperança" />
    <meta name="geo.position" content="-21.090406;-45.580272" />
    <meta name="ICBM" content="-21.090406, -45.580272" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://hidrauboa.com.br/" />
    <meta property="og:site_name" content="Hidrauboa" />
    <meta property="og:title" content="Hidrauboa | Mangueiras Hidráulicas, Conexões e Prensagem na Hora" />
    <meta property="og:description" content="Loja especializada em mangueiras hidráulicas de alta pressão, terminais e conexões para tratores, caminhões e máquinas agrícolas em Boa Esperança - MG." />
    <meta property="og:image" content="https://hidrauboa.com.br/img/produtos-lista.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="pt_BR" />

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://hidrauboa.com.br/" />
    <meta name="twitter:title" content="Hidrauboa | Mangueiras Hidráulicas e Conexões em Boa Esperança - MG" />
    <meta name="twitter:description" content="Prensagem imediata, estoque completo de mangueiras de alta pressão, conexões e engates rápidos para o agronegócio e linha pesada." />
    <meta name="twitter:image" content="https://hidrauboa.com.br/img/produtos-lista.png" />

    <!-- Favicons -->
    <link rel="icon" type="image/png" href="/img/logo-reimaginada.png" />
    <link rel="apple-touch-icon" href="/img/logo-reimaginada.png" />

    <!-- Google Fonts: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,800&display=swap" rel="stylesheet" />

    <!-- Schema.org JSON-LD Structured Data for Google Ranking -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "Store", "AutoRepair"],
          "@id": "https://hidrauboa.com.br/#business",
          "name": "Hidrauboa",
          "legalName": "Hidrauboa Mangueiras Hidráulicas e Conexões",
          "alternateName": ["Hidrau Boa", "Hidrauboa Boa Esperança", "Hidrauboa Mangueiras", "Hidrauboa MG"],
          "url": "https://hidrauboa.com.br/",
          "logo": "https://hidrauboa.com.br/img/logo-reimaginada.png",
          "image": [
            "https://hidrauboa.com.br/img/logo-reimaginada.png",
            "https://hidrauboa.com.br/img/produtos-lista.png",
            "https://hidrauboa.com.br/img/exemplos-produtos.png",
            "https://hidrauboa.com.br/img/marca-explicacao.png"
          ],
          "description": "Empresa especializada em mangueiras hidráulicas de alta e super pressão, conexões, terminais, adaptadores, engates rápidos, comandos, pistões e prensagem na hora para linhas agrícola, industrial e transporte em Boa Esperança - MG.",
          "telephone": "+5535988442004",
          "priceRange": "$$",
          "currenciesAccepted": "BRL",
          "paymentAccepted": "Cash, Credit Card, Debit Card, Pix, Boleto",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Boa Esperança",
            "addressRegion": "MG",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -21.090406,
            "longitude": -45.580272
          },
          "hasMap": "https://maps.app.goo.gl/TYkL2svWdjg9xiSUA",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "07:30",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Saturday"],
              "opens": "07:30",
              "closes": "12:00"
            }
          ],
          "areaServed": [
            "Boa Esperança",
            "Três Pontas",
            "Campo Belo",
            "Santana da Vargem",
            "Coqueiral",
            "Ilicínea",
            "Guapé",
            "Sul de Minas"
          ],
          "knowsAbout": [
            "Mangueiras Hidráulicas de Alta Pressão",
            "Prensagem de Mangueiras na Hora",
            "Terminais DKO, JIC, BSP, NPT e Flanges",
            "Engates Rápidos Hidráulicos",
            "Linhas de Retorno para Tratores",
            "Cilindros e Pistões Hidráulicos",
            "Vedações e Molas Plásticas Espirais"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+55-35-98844-2004",
              "contactType": "sales",
              "contactOption": "WhatsApp",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+55-35-99957-8758",
              "contactType": "customer service",
              "contactOption": "WhatsApp",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
            }
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://hidrauboa.com.br/#website",
          "url": "https://hidrauboa.com.br/",
          "name": "Hidrauboa",
          "alternateName": ["Hidrauboa", "Hidrau Boa", "Hidrauboa Mangueiras"],
          "description": "Site institucional e catálogo da Hidrauboa em Boa Esperança - MG"
        },
        {
          "@type": "FAQPage",
          "@id": "https://hidrauboa.com.br/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Onde encontrar a Hidrauboa para prensagem de mangueiras hidráulicas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Hidrauboa está localizada em Boa Esperança - MG, com balcão de atendimento e oficina especializada em corte, montagem e prensagem na hora de mangueiras hidráulicas de alta pressão."
              }
            },
            {
              "@type": "Question",
              "name": "Quais produtos e serviços a Hidrauboa oferece?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Hidrauboa oferece mangueiras hidráulicas de 1 a 4 tramas de aço (normas SAE), terminais DKO, JIC, BSP, NPT, flanges, engates rápidos, linhas de retorno para tratores agrícolas, pistões, comandos e prensagem imediata."
              }
            },
            {
              "@type": "Question",
              "name": "Como solicitar um orçamento na Hidrauboa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Você pode solicitar um orçamento diretamente pelo WhatsApp com Almir no número (35) 98844-2004 ou com João Pedro no (35) 99957-8758."
              }
            }
          ]
        }
      ]
    }
    </script>
  </head>
  <body class="bg-[#0f1411] text-[#ece7df] font-sans antialiased selection:bg-[#d99a22] selection:text-[#0f1411] overflow-x-hidden">
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

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
