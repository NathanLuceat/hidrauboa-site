import './styles.css';

/* ─── Inline SVG Icons (lightweight, no dependency) ─── */
const ic = {
  whatsapp: `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
  phone: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`,
  mapPin: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  clock: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  ext: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
  copy: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
  close: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`,
  menu: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  arrow: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>`,
  check: `<svg class="w-3.5 h-3.5 text-[#3da869]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`,
  zoom: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>`,
};

/* ─── Contact Data ─── */
const WA = {
  almir: {
    name: 'Almir',
    role: 'Vendas e Orçamentos',
    phone: '(35) 98844-2004',
    url: 'https://api.whatsapp.com/send/?phone=5535988442004&text=Ol%C3%A1+Almir%2C+tudo+bem%3F%0AGostaria+de+fazer+um+or%C3%A7amento&type=phone_number&app_absent=0',
    tag: 'AL',
  },
  jp: {
    name: 'João Pedro',
    role: 'Atendimento e Cotações Rápidas',
    phone: '(35) 99957-8758',
    url: 'https://api.whatsapp.com/send/?phone=5535999578758&text=Ol%C3%A1+Jo%C3%A3o+Pedro%2C+tudo+bem%3F%0AGostaria+de+fazer+um+or%C3%A7amento&type=phone_number&app_absent=0',
    tag: 'JP',
  },
  fin: {
    name: 'Financeiro',
    role: 'Faturamento e Administrativo',
    phone: '(35) 98429-0119',
    url: 'https://api.whatsapp.com/send/?phone=553584290119&text=Ol%C3%A1%2C+preciso+falar+com+o+setor+Financeiro+da+Hidrauboa&type=phone_number&app_absent=0',
    tag: 'FN',
  },
};

const MAPS = {
  url: 'https://maps.app.goo.gl/TYkL2svWdjg9xiSUA',
  embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.5555707398876!2d-45.5802719!3d-21.090405599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b575bf96c9fd37%3A0x2d2b6d2009c94eea!2sHIDRAUBOA!5e0!3m2!1spt-BR!2sbr!4v1790357846523!5m2!1spt-BR!2sbr',
};

/* ─── Product catalog ─── */
interface CatalogItem {
  title: string;
  category: string;
  desc: string;
  specs: string[];
}

const catalog: CatalogItem[] = [
  {
    title: 'Mangueiras de Alta Pressão',
    category: 'mangueiras',
    desc: 'Mangueiras de 1, 2 e 4 tramas de aço para circuitos hidráulicos de média, alta e super alta pressão.',
    specs: ['Normas SAE 100R1, R2, R12, R13', 'Corte e prensagem sob medida', 'Óleos minerais e sintéticos'],
  },
  {
    title: 'Terminais, Flanges e Adaptadores',
    category: 'conexões',
    desc: 'Roscas milimétricas DKO, em polegadas JIC 37°, BSP, NPT e flanges para vedação de força.',
    specs: ['Aço carbono zincado', 'Macho, fêmea e giratórios', 'Todas as bitolas disponíveis'],
  },
  {
    title: 'Engates Rápidos Hidráulicos',
    category: 'conexões',
    desc: 'Conexão e desconexão ágil sem perda de fluido para implementos de tratores e circuitos industriais.',
    specs: ['Tipo face plana e agrícola', 'Válvula de retenção automática', 'Trava de segurança contra soltura'],
  },
  {
    title: 'Linhas de Retorno para Tratores',
    category: 'agrícola',
    desc: 'Conjuntos completos de retorno hidráulico para Valtra, Massey, John Deere, New Holland e similares.',
    specs: ['Conexões e mangueiras reforçadas', 'Encaixe direto, sem vazamentos', 'Evita superaquecimento do óleo'],
  },
  {
    title: 'Pistões e Cilindros Hidráulicos',
    category: 'componentes',
    desc: 'Cilindros de simples e dupla ação para basculantes, pás carregadeiras e elevadores.',
    specs: ['Hastes cromadas temperadas', 'Vedações PU e nitrílica', 'Montagem de conjuntos sob medida'],
  },
  {
    title: 'Comandos e Detentores',
    category: 'componentes',
    desc: 'Válvulas direcionais monobloco e fatiadas para acionamento de pistões e motores hidráulicos.',
    specs: ['Vazões 40L, 80L, 120L', 'Acionamento alavanca ou cabo', 'Válvula de alívio ajustável'],
  },
  {
    title: 'Mola Plástica Espiral',
    category: 'proteção',
    desc: 'Revestimento espiral em PEAD contra atrito, esmagamento, pedras e raios UV.',
    specs: ['Polietileno de alta densidade', 'Prolonga vida útil da mangueira', 'Diversas bitolas e cores'],
  },
  {
    title: 'Mangueiras para Engraxadeiras',
    category: 'mangueiras',
    desc: 'Alta pressão com terminais especiais para bicos de graxa e bombas manuais ou pneumáticas.',
    specs: ['Pressão de trabalho 4.000+ PSI', 'Flexível para locais de difícil acesso', 'Ponteiras reforçadas'],
  },
];

/* ─── Helpers ─── */
function waBtn(contact: typeof WA.almir, label: string, variant: 'primary' | 'flat' = 'primary') {
  const base = variant === 'primary'
    ? 'bg-[#d99a22] hover:bg-[#c48717] text-[#0f1411] font-bold'
    : 'bg-[#1c2620] hover:bg-[#222f28] text-[#ece7df] border border-[#28382f]';
  return `<a href="${contact.url}" target="_blank" rel="noopener noreferrer"
    class="inline-flex items-center gap-2 px-5 py-3 text-sm ${base} transition-colors"
  >${ic.whatsapp} ${label}</a>`;
}

/* ─── Render ─── */
const app = document.getElementById('app');
if (!app) throw new Error('#app não encontrado');

app.innerHTML = `

<!-- ═══ top bar ═══ -->
<div class="bg-[#151d18] border-b border-[#28382f] text-xs text-[#c7bea9] py-2 px-4">
  <div class="max-w-6xl mx-auto flex items-center justify-between gap-4">
    <span class="flex items-center gap-2">
      <span class="w-1.5 h-1.5 bg-[#3da869] inline-block"></span>
      Boa Esperança – MG &middot; Balcão aberto para safra, transporte e indústria
    </span>
    <a href="tel:35988442004" class="hidden sm:flex items-center gap-1.5 hover:text-[#d99a22] transition-colors font-semibold">
      ${ic.phone} (35) 98844-2004
    </a>
  </div>
</div>

<!-- ═══ header ═══ -->
<header id="navbar" class="sticky top-0 z-40 bg-[#0f1411]/95 backdrop-blur-sm border-b border-[#28382f] transition-all">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
    <a href="#top" class="flex items-center gap-3 group">
      <img src="/img/logo-reimaginada.png" alt="Hidrauboa" class="h-10 w-auto"/>
      <div class="hidden sm:block leading-tight">
        <span class="block text-[#ece7df] font-extrabold text-base tracking-tight group-hover:text-[#d99a22] transition-colors">HIDRAUBOA</span>
        <span class="block text-[10px] text-[#3da869] font-bold tracking-widest uppercase">Mangueiras & Conexões</span>
      </div>
    </a>

    <nav class="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#c7bea9]">
      <a href="#produtos" class="hover:text-[#ece7df] transition-colors">Produtos</a>
      <a href="#servicos" class="hover:text-[#ece7df] transition-colors">Serviços</a>
      <a href="#contato" class="hover:text-[#ece7df] transition-colors">Contato</a>
      <a href="#localizacao" class="hover:text-[#ece7df] transition-colors">Localização</a>
    </nav>

    <div class="flex items-center gap-3">
      <a href="${WA.almir.url}" target="_blank" rel="noopener noreferrer"
        class="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-bold bg-[#d99a22] hover:bg-[#c48717] text-[#0f1411] transition-colors">
        ${ic.whatsapp} Orçamento
      </a>
      <button id="mobileMenuBtn" class="lg:hidden p-2 text-[#c7bea9] hover:text-[#ece7df]" aria-label="Abrir menu">
        <span id="menuOpen">${ic.menu}</span>
        <span id="menuClose" class="hidden">${ic.close}</span>
      </button>
    </div>
  </div>

  <!-- mobile drawer -->
  <div id="mobileDrawer" class="hidden lg:hidden bg-[#151d18] border-t border-[#28382f] px-4 py-4 space-y-1">
    <a href="#produtos" class="mob-link block py-2.5 text-sm font-semibold text-[#c7bea9] hover:text-[#ece7df] border-b border-[#28382f]/60">Produtos</a>
    <a href="#servicos" class="mob-link block py-2.5 text-sm font-semibold text-[#c7bea9] hover:text-[#ece7df] border-b border-[#28382f]/60">Serviços</a>
    <a href="#contato" class="mob-link block py-2.5 text-sm font-semibold text-[#c7bea9] hover:text-[#ece7df] border-b border-[#28382f]/60">Contato</a>
    <a href="#localizacao" class="mob-link block py-2.5 text-sm font-semibold text-[#c7bea9] hover:text-[#ece7df] border-b border-[#28382f]/60">Localização</a>
    <div class="pt-3 flex flex-col gap-2">
      ${waBtn(WA.almir, 'Falar com Almir')}
      ${waBtn(WA.jp, 'Falar com João Pedro', 'flat')}
    </div>
  </div>
</header>

<!-- ═══ hero ═══ -->
<section id="top" class="bg-field-pattern relative">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      <!-- text -->
      <div class="space-y-6 max-w-lg">
        <div class="flex items-center gap-3 text-xs font-bold text-[#c7bea9] uppercase tracking-wider">
          <span class="w-8 h-px bg-[#d99a22]"></span>
          Prensagem de mangueiras na hora
        </div>

        <h1 class="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#ece7df] leading-[1.15] tracking-tight">
          Mangueiras hidráulicas e conexões de alta pressão
        </h1>

        <p class="text-sm sm:text-base text-[#c7bea9] leading-relaxed">
          Estoque completo para tratores, caminhões, colheitadeiras e máquinas pesadas.
          Corte, montagem e crimpagem sob medida no balcão — sua operação não fica parada.
        </p>

        <div class="flex flex-col sm:flex-row gap-3 pt-2">
          ${waBtn(WA.almir, 'Solicitar orçamento')}
          <a href="#produtos" class="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#c7bea9] hover:text-[#ece7df] border border-[#28382f] hover:border-[#384d41] bg-[#1c2620] transition-colors">
            Ver produtos ${ic.arrow}
          </a>
        </div>

        <div class="flex items-center gap-6 pt-4 text-xs text-[#c7bea9] border-t border-dashed border-[#28382f]">
          <span class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 bg-[#3da869]"></span>
            Atendentes online
          </span>
          <span class="flex items-center gap-1.5">
            ${ic.mapPin}
            Boa Esperança – MG
          </span>
        </div>
      </div>

      <!-- image -->
      <div class="relative h-full min-h-[400px] lg:min-h-[550px]">
        <div class="absolute inset-0 panel-agro overflow-hidden cursor-pointer group shadow-2xl border-2 border-[#384d41]" id="heroImgClick">
          <img src="/img/produtos-lista.png"
            alt="Catálogo de mangueiras e conexões hidráulicas Hidrauboa"
            class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"/>

          <!-- Gradient overlay for text legibility -->
          <div class="absolute inset-x-0 bottom-0 py-6 px-6 bg-gradient-to-t from-[#0f1411] via-[#0f1411]/90 to-transparent flex items-end justify-between">
            <div class="space-y-1">
              <span class="text-[#d99a22] font-black uppercase tracking-wider text-sm block">Visualizar Catálogo</span>
              <span class="text-[#c7bea9] text-xs font-semibold">Mangueiras, flanges, adaptadores e engates</span>
            </div>
            <span class="w-12 h-12 flex items-center justify-center bg-[#d99a22] text-[#0f1411] rounded-none group-hover:bg-[#f3b942] transition-colors">${ic.zoom}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ capabilities strip ═══ -->
<section class="border-y border-[#28382f] bg-[#151d18]">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#28382f]">

      <div class="bg-[#151d18] p-5 space-y-1.5">
        <h3 class="text-sm font-bold text-[#ece7df]">Prensagem na hora</h3>
        <p class="text-xs text-[#c7bea9] leading-relaxed">Montagem e crimpagem imediata para máquinas em operação</p>
      </div>
      <div class="bg-[#151d18] p-5 space-y-1.5">
        <h3 class="text-sm font-bold text-[#ece7df]">Linha agrícola</h3>
        <p class="text-xs text-[#c7bea9] leading-relaxed">Retorno, engates e mangueiras para tratores e colheitadeiras</p>
      </div>
      <div class="bg-[#151d18] p-5 space-y-1.5">
        <h3 class="text-sm font-bold text-[#ece7df]">Todas as roscas</h3>
        <p class="text-xs text-[#c7bea9] leading-relaxed">DKO milimétricas, JIC, BSP, NPT e flanges de todas as bitolas</p>
      </div>
      <div class="bg-[#151d18] p-5 space-y-1.5">
        <h3 class="text-sm font-bold text-[#ece7df]">Atendimento direto</h3>
        <p class="text-xs text-[#c7bea9] leading-relaxed">WhatsApp com Almir e João Pedro para orçamento ágil</p>
      </div>

    </div>
  </div>
</section>

<!-- ═══ products ═══ -->
<section id="produtos" class="py-16 lg:py-24">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">

    <div class="max-w-xl space-y-3 mb-10">
      <div class="flex items-center gap-3 text-xs font-bold text-[#c7bea9] uppercase tracking-wider">
        <span class="w-8 h-px bg-[#3da869]"></span>
        Catálogo
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-[#ece7df] tracking-tight">
        O que você encontra na Hidrauboa
      </h2>
      <p class="text-sm text-[#c7bea9]">
        Componentes de alta durabilidade para condições severas de trabalho e pressões extremas.
      </p>
    </div>

    <!-- filter tabs -->
    <div class="flex flex-wrap gap-1 mb-8 text-xs font-semibold border-b border-[#28382f]" id="catFilters">
      <button data-filter="all" class="cat-btn px-4 py-2.5 text-[#d99a22] border-b-2 border-[#d99a22]">Todos</button>
      <button data-filter="mangueiras" class="cat-btn px-4 py-2.5 text-[#c7bea9] hover:text-[#ece7df] border-b-2 border-transparent">Mangueiras</button>
      <button data-filter="conexões" class="cat-btn px-4 py-2.5 text-[#c7bea9] hover:text-[#ece7df] border-b-2 border-transparent">Conexões</button>
      <button data-filter="agrícola" class="cat-btn px-4 py-2.5 text-[#c7bea9] hover:text-[#ece7df] border-b-2 border-transparent">Agrícola</button>
      <button data-filter="componentes" class="cat-btn px-4 py-2.5 text-[#c7bea9] hover:text-[#ece7df] border-b-2 border-transparent">Componentes</button>
      <button data-filter="proteção" class="cat-btn px-4 py-2.5 text-[#c7bea9] hover:text-[#ece7df] border-b-2 border-transparent">Proteção</button>
    </div>

    <!-- product grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#28382f]" id="productsGrid">
      ${catalog.map(p => `
        <article class="product-card bg-[#151d18] p-5 flex flex-col justify-between hover:bg-[#1a231e] transition-colors" data-cat="${p.category}">
          <div class="space-y-3">
            <div class="flex items-center justify-between gap-2">
              <h3 class="text-sm font-bold text-[#ece7df] leading-snug">${p.title}</h3>
              <span class="shrink-0 text-[10px] uppercase tracking-wider font-bold text-[#3da869]">${p.category}</span>
            </div>
            <p class="text-xs text-[#c7bea9] leading-relaxed">${p.desc}</p>
            <ul class="space-y-1 pt-2 border-t border-dashed border-[#28382f]">
              ${p.specs.map(s => `<li class="flex items-start gap-1.5 text-[11px] text-[#c7bea9]">${ic.check} <span>${s}</span></li>`).join('')}
            </ul>
          </div>
          <div class="pt-4 mt-4 border-t border-[#28382f]">
            <a href="https://api.whatsapp.com/send/?phone=5535988442004&text=Ol%C3%A1+Almir%2C+gostaria+de+um+or%C3%A7amento+sobre+${encodeURIComponent(p.title)}"
              target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-2 text-xs font-semibold text-[#c7bea9] hover:text-[#d99a22] transition-colors">
              ${ic.whatsapp} Cotar esta linha ${ic.arrow}
            </a>
          </div>
        </article>
      `).join('')}
    </div>

    <!-- gallery -->
    <div class="mt-16 space-y-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#28382f] pb-4">
        <div>
          <div class="flex items-center gap-3 text-xs font-bold text-[#c7bea9] uppercase tracking-wider mb-1">
            <span class="w-8 h-px bg-[#d99a22]"></span>
            Galeria Técnica em Destaque
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-[#ece7df] tracking-tight">
            Qualidade visível em cada montagem e prensagem
          </h3>
        </div>
        <p class="text-xs text-[#c7bea9] max-w-md">
          Peças reais, mangueiras prontas para montagem imediata e estoque diversificado para atendimento rápido no balcão.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Gallery Card 1 -->
        <div class="gallery-item group relative panel-agro overflow-hidden cursor-pointer border-2 border-[#28382f] hover:border-[#d99a22] transition-all duration-300 shadow-xl"
             data-src="/img/exemplos-produtos.png"
             data-title="Mangueiras montadas, conexões prensadas e engates rápidos">
          <div class="relative h-80 sm:h-96 w-full overflow-hidden bg-[#0f1411]">
            <img src="/img/exemplos-produtos.png"
                 alt="Exemplos de produtos e mangueiras hidráulicas Hidrauboa"
                 class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0f1411] via-[#0f1411]/40 to-transparent"></div>

            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-[#0f1411]/90 border border-[#3da869] text-[#3da869] text-xs font-bold uppercase tracking-wider">
                Exemplos de Montagem
              </span>
            </div>

            <div class="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
              <div class="space-y-1 pr-4">
                <h4 class="text-lg font-bold text-[#ece7df] group-hover:text-[#d99a22] transition-colors">Mangueiras Prontas & Engates</h4>
                <p class="text-xs text-[#c7bea9]">Padrão de crimpagem industrial para tratores e implementos</p>
              </div>
              <span class="w-10 h-10 shrink-0 flex items-center justify-center bg-[#d99a22] text-[#0f1411] group-hover:bg-[#f3b942] transition-colors">
                ${ic.zoom}
              </span>
            </div>
          </div>
        </div>

        <!-- Gallery Card 2 -->
        <div class="gallery-item group relative panel-agro overflow-hidden cursor-pointer border-2 border-[#28382f] hover:border-[#d99a22] transition-all duration-300 shadow-xl"
             data-src="/img/produtos-lista.png"
             data-title="Catálogo de mangueiras, conexões, adaptadores e flanges">
          <div class="relative h-80 sm:h-96 w-full overflow-hidden bg-[#0f1411]">
            <img src="/img/produtos-lista.png"
                 alt="Catálogo técnico de mangueiras e conexões Hidrauboa"
                 class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0f1411] via-[#0f1411]/40 to-transparent"></div>

            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-[#0f1411]/90 border border-[#d99a22] text-[#d99a22] text-xs font-bold uppercase tracking-wider">
                Catálogo Técnico
              </span>
            </div>

            <div class="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
              <div class="space-y-1 pr-4">
                <h4 class="text-lg font-bold text-[#ece7df] group-hover:text-[#d99a22] transition-colors">Linha Completa de Terminais</h4>
                <p class="text-xs text-[#c7bea9]">Flanges, adaptadores, curvas e conexões métricas/polegadas</p>
              </div>
              <span class="w-10 h-10 shrink-0 flex items-center justify-center bg-[#d99a22] text-[#0f1411] group-hover:bg-[#f3b942] transition-colors">
                ${ic.zoom}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ═══ services / brand ═══ -->
<section id="servicos" class="py-16 lg:py-24 bg-[#151d18] border-y border-[#28382f]">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

      <!-- left: process -->
      <div class="space-y-6">
        <div class="flex items-center gap-3 text-xs font-bold text-[#c7bea9] uppercase tracking-wider">
          <span class="w-8 h-px bg-[#3da869]"></span>
          Serviço técnico
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-[#ece7df] tracking-tight">
          Prensagem com precisão técnica e agilidade
        </h2>
        <p class="text-sm text-[#c7bea9] leading-relaxed">
          Um vazamento ou rompimento paralisa tratores, caminhões e linhas de fábrica. A Hidrauboa investe em maquinário de prensagem de alta precisão e técnicos experientes para resolver rápido.
        </p>

        <div class="space-y-4 pt-2">
          <div class="flex items-start gap-4 p-4 border-l-2 border-[#d99a22] bg-[#1a231e]">
            <span class="text-[#d99a22] font-extrabold text-sm shrink-0 pt-0.5">01</span>
            <div>
              <h4 class="text-sm font-bold text-[#ece7df]">Identificação da rosca e bitola</h4>
              <p class="text-xs text-[#c7bea9] mt-0.5">Padrão milimétrico, polegadas, flange ou cônica — sem margem a vazamento.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border-l-2 border-[#d99a22] bg-[#1a231e]">
            <span class="text-[#d99a22] font-extrabold text-sm shrink-0 pt-0.5">02</span>
            <div>
              <h4 class="text-sm font-bold text-[#ece7df]">Corte limpo e crimpagem no padrão de fábrica</h4>
              <p class="text-xs text-[#c7bea9] mt-0.5">Diâmetro calibrado para suportar pressão máxima de trabalho com segurança.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border-l-2 border-[#d99a22] bg-[#1a231e]">
            <span class="text-[#d99a22] font-extrabold text-sm shrink-0 pt-0.5">03</span>
            <div>
              <h4 class="text-sm font-bold text-[#ece7df]">Proteções especiais</h4>
              <p class="text-xs text-[#c7bea9] mt-0.5">Molas plásticas espirais contra atrito no chassi da máquina.</p>
            </div>
          </div>
        </div>

        ${waBtn(WA.almir, 'Falar com o técnico')}
      </div>

      <!-- right: brand card -->
      <div class="panel-agro p-6 sm:p-7 space-y-6 border-2 border-[#28382f] shadow-2xl">
        <div class="flex items-center justify-between border-b border-[#28382f] pb-4">
          <div class="flex items-center gap-3">
            <img src="/img/logo-reimaginada.png" alt="Logo Hidrauboa" class="h-10 w-auto"/>
            <div>
              <h3 class="font-bold text-base text-[#ece7df]">Identidade Hidrauboa</h3>
              <span class="text-xs text-[#d99a22] font-semibold">Força, Campo & Tecnologia Hidráulica</span>
            </div>
          </div>
          <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#3da869] border border-[#3da869]/40 bg-[#3da869]/10">
            Conceito
          </span>
        </div>

        <div class="gallery-item relative overflow-hidden cursor-pointer group border-2 border-[#28382f] hover:border-[#d99a22] transition-all duration-300 bg-[#0a0e0c]"
             data-src="/img/marca-explicacao.png"
             data-title="Identidade, significado e conceito da marca Hidrauboa">
          <div class="relative min-h-[320px] sm:min-h-[400px] w-full flex items-center justify-center p-2 bg-[#0c120e]">
            <img src="/img/marca-explicacao.png"
                 alt="Conceito e Identidade da Marca Hidrauboa"
                 class="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"/>

            <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0f1411] via-[#0f1411]/80 to-transparent flex items-end justify-between">
              <div class="space-y-0.5">
                <span class="text-xs font-bold text-[#ece7df] block group-hover:text-[#d99a22] transition-colors">
                  Clique para ampliar o manifesto da marca
                </span>
                <span class="text-[11px] text-[#c7bea9] block">Significado das cores, conexões e elementos agrícolas</span>
              </div>
              <span class="w-9 h-9 shrink-0 flex items-center justify-center bg-[#d99a22] text-[#0f1411] group-hover:bg-[#f3b942] transition-colors">
                ${ic.zoom}
              </span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 text-center">
          <div class="p-4 bg-[#1a231e] border border-[#28382f]">
            <span class="block text-xl font-extrabold text-[#d99a22]">100%</span>
            <span class="text-[11px] text-[#c7bea9]">Foco em hidráulica e agronegócio</span>
          </div>
          <div class="p-4 bg-[#1a231e] border border-[#28382f]">
            <span class="block text-lg font-extrabold text-[#3da869]">Na hora</span>
            <span class="text-[11px] text-[#c7bea9]">Atendimento ágil no balcão</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ contact / whatsapp ═══ -->
<section id="contato" class="py-16 lg:py-24">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">

    <div class="max-w-xl space-y-3 mb-10">
      <div class="flex items-center gap-3 text-xs font-bold text-[#c7bea9] uppercase tracking-wider">
        <span class="w-8 h-px bg-[#d99a22]"></span>
        Atendimento
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-[#ece7df] tracking-tight">
        Fale com a equipe no WhatsApp
      </h2>
      <p class="text-sm text-[#c7bea9]">
        Clique no atendente para iniciar uma conversa agora. Orçamentos e dúvidas técnicas resolvidas direto no celular.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#28382f]">

      <!-- almir -->
      <div class="bg-[#151d18] p-6 flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-11 h-11 bg-[#d99a22] text-[#0f1411] flex items-center justify-center font-extrabold text-sm">${WA.almir.tag}</span>
            <div>
              <h3 class="font-bold text-base text-[#ece7df] group-hover:text-[#d99a22] transition-colors">${WA.almir.name}</h3>
              <p class="text-[11px] text-[#c7bea9]">${WA.almir.role}</p>
            </div>
          </div>
          <div class="flex items-center justify-between p-3 bg-[#1a231e] border border-[#28382f]">
            <span class="text-sm font-mono text-[#c7bea9]">${WA.almir.phone}</span>
            <button class="copy-btn text-[#c7bea9] hover:text-[#d99a22] transition-colors" data-phone="${WA.almir.phone}" title="Copiar">${ic.copy}</button>
          </div>
          <p class="text-xs text-[#c7bea9] leading-relaxed">Especificações de mangueiras de alta pressão, cotações para produtores rurais e oficinas.</p>
        </div>
        <div class="pt-5 mt-4 border-t border-[#28382f]">
          ${waBtn(WA.almir, 'Falar com Almir')}
        </div>
      </div>

      <!-- jp -->
      <div class="bg-[#151d18] p-6 flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-11 h-11 bg-[#3da869] text-[#0f1411] flex items-center justify-center font-extrabold text-sm">${WA.jp.tag}</span>
            <div>
              <h3 class="font-bold text-base text-[#ece7df] group-hover:text-[#3da869] transition-colors">${WA.jp.name}</h3>
              <p class="text-[11px] text-[#c7bea9]">${WA.jp.role}</p>
            </div>
          </div>
          <div class="flex items-center justify-between p-3 bg-[#1a231e] border border-[#28382f]">
            <span class="text-sm font-mono text-[#c7bea9]">${WA.jp.phone}</span>
            <button class="copy-btn text-[#c7bea9] hover:text-[#3da869] transition-colors" data-phone="${WA.jp.phone}" title="Copiar">${ic.copy}</button>
          </div>
          <p class="text-xs text-[#c7bea9] leading-relaxed">Verificação de estoque, preços de conexões, adaptadores e engates rápidos.</p>
        </div>
        <div class="pt-5 mt-4 border-t border-[#28382f]">
          ${waBtn(WA.jp, 'Falar com João Pedro', 'flat')}
        </div>
      </div>

      <!-- fin -->
      <div class="bg-[#151d18] p-6 flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-11 h-11 bg-[#28382f] text-[#c7bea9] flex items-center justify-center font-extrabold text-sm">${WA.fin.tag}</span>
            <div>
              <h3 class="font-bold text-base text-[#ece7df]">${WA.fin.name}</h3>
              <p class="text-[11px] text-[#c7bea9]">${WA.fin.role}</p>
            </div>
          </div>
          <div class="flex items-center justify-between p-3 bg-[#1a231e] border border-[#28382f]">
            <span class="text-sm font-mono text-[#c7bea9]">${WA.fin.phone}</span>
            <button class="copy-btn text-[#c7bea9] hover:text-[#ece7df] transition-colors" data-phone="${WA.fin.phone}" title="Copiar">${ic.copy}</button>
          </div>
          <p class="text-xs text-[#c7bea9] leading-relaxed">Boletos, notas fiscais e cadastros de faturamento para empresas parceiras.</p>
        </div>
        <div class="pt-5 mt-4 border-t border-[#28382f]">
          ${waBtn(WA.fin, 'Setor financeiro', 'flat')}
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ location ═══ -->
<section id="localizacao" class="py-16 lg:py-24 bg-[#151d18] border-t border-[#28382f]">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

      <!-- info -->
      <div class="lg:col-span-5 panel-agro p-6 sm:p-8 flex flex-col justify-between">
        <div class="space-y-5">
          <div class="flex items-center gap-3 text-xs font-bold text-[#c7bea9] uppercase tracking-wider">
            <span class="w-8 h-px bg-[#d99a22]"></span>
            Localização
          </div>
          <h2 class="text-xl sm:text-2xl font-extrabold text-[#ece7df] tracking-tight">
            Venha nos visitar em Boa Esperança – MG
          </h2>
          <p class="text-xs text-[#c7bea9] leading-relaxed">
            Fácil acesso para caminhões e maquinário agrícola. Balcão preparado para atendimento técnico imediato.
          </p>

          <div class="space-y-3">
            <div class="flex items-start gap-3 p-3 bg-[#1a231e] border border-[#28382f]">
              <span class="text-[#d99a22] pt-0.5">${ic.mapPin}</span>
              <div class="text-xs text-[#c7bea9]">
                <span class="block text-[#ece7df] font-bold text-sm">Endereço</span>
                Boa Esperança, Minas Gerais
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-[#1a231e] border border-[#28382f]">
              <span class="text-[#3da869] pt-0.5">${ic.clock}</span>
              <div class="text-xs text-[#c7bea9]">
                <span class="block text-[#ece7df] font-bold text-sm">Horários</span>
                Seg–Sex: 07:30 às 18:00<br/>Sábado: 07:30 às 12:00
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-[#1a231e] border border-[#28382f]">
              <span class="text-[#c7bea9] pt-0.5">${ic.phone}</span>
              <div class="text-xs text-[#c7bea9]">
                <span class="block text-[#ece7df] font-bold text-sm">Telefones</span>
                <span class="font-mono">(35) 98844-2004 / (35) 99957-8758</span>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-6 mt-6 border-t border-[#28382f]">
          <a href="${MAPS.url}" target="_blank" rel="noopener noreferrer"
            class="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold bg-[#d99a22] hover:bg-[#c48717] text-[#0f1411] transition-colors">
            ${ic.ext} Abrir rota no Google Maps
          </a>
        </div>
      </div>

      <!-- map -->
      <div class="lg:col-span-7 panel-agro overflow-hidden flex flex-col min-h-[380px] lg:min-h-[480px]">
        <div class="px-4 py-2.5 bg-[#1a231e] border-b border-[#28382f] flex items-center justify-between text-xs text-[#c7bea9]">
          <span class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 bg-[#3da869]"></span>
            Google Maps
          </span>
          <a href="${MAPS.url}" target="_blank" rel="noopener noreferrer" class="text-[#d99a22] hover:underline flex items-center gap-1 font-semibold">
            Ampliar ${ic.ext}
          </a>
        </div>
        <div class="flex-1 relative">
          <iframe src="${MAPS.embed}" width="100%" height="100%"
            style="border:0; min-height:380px;"
            allowfullscreen="" loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            title="Localização Hidrauboa no Google Maps"
            class="w-full h-full"></iframe>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ cta banner ═══ -->
<section class="border-y border-[#28382f] bg-[#1a231e]">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
    <div class="space-y-1 max-w-xl">
      <h3 class="text-xl sm:text-2xl font-extrabold text-[#ece7df] tracking-tight">
        Precisa de uma solução hidráulica agora?
      </h3>
      <p class="text-sm text-[#c7bea9]">
        Envie a foto da peça ou passe no balcão em Boa Esperança.
      </p>
    </div>
    ${waBtn(WA.almir, 'Chamar no WhatsApp')}
  </div>
</section>

<!-- ═══ footer ═══ -->
<footer class="bg-[#0f1411] border-t border-[#28382f] pt-12 pb-8 text-xs text-[#c7bea9]">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#28382f]">

      <!-- brand -->
      <div class="md:col-span-5 space-y-3">
        <div class="flex items-center gap-3">
          <img src="/img/logo-reimaginada.png" alt="Hidrauboa" class="h-9 w-auto"/>
          <div class="leading-tight">
            <span class="block text-[#ece7df] font-extrabold text-sm">HIDRAUBOA</span>
            <span class="block text-[10px] text-[#3da869] font-bold tracking-widest uppercase">Mangueiras & Conexões</span>
          </div>
        </div>
        <p class="text-xs text-[#c7bea9] leading-relaxed max-w-xs">
          Mangueiras hidráulicas de alta pressão, conexões, prensagens, engates rápidos e componentes para linhas agrícola, industrial e transporte.
        </p>
      </div>

      <!-- links -->
      <div class="md:col-span-3 space-y-2">
        <h4 class="text-[#ece7df] font-bold text-sm mb-2">Navegação</h4>
        <a href="#produtos" class="block hover:text-[#ece7df] transition-colors py-0.5">Produtos</a>
        <a href="#servicos" class="block hover:text-[#ece7df] transition-colors py-0.5">Serviços</a>
        <a href="#contato" class="block hover:text-[#ece7df] transition-colors py-0.5">Contato</a>
        <a href="#localizacao" class="block hover:text-[#ece7df] transition-colors py-0.5">Localização</a>
      </div>

      <!-- phones -->
      <div class="md:col-span-4 space-y-2">
        <h4 class="text-[#ece7df] font-bold text-sm mb-2">Contatos</h4>
        <div class="flex items-center justify-between p-2 bg-[#1a231e] border border-[#28382f]">
          <span>Almir (Vendas)</span>
          <a href="${WA.almir.url}" target="_blank" rel="noopener noreferrer" class="font-bold text-[#d99a22] hover:underline">(35) 98844-2004</a>
        </div>
        <div class="flex items-center justify-between p-2 bg-[#1a231e] border border-[#28382f]">
          <span>João Pedro</span>
          <a href="${WA.jp.url}" target="_blank" rel="noopener noreferrer" class="font-bold text-[#3da869] hover:underline">(35) 99957-8758</a>
        </div>
        <div class="flex items-center justify-between p-2 bg-[#1a231e] border border-[#28382f]">
          <span>Financeiro</span>
          <a href="${WA.fin.url}" target="_blank" rel="noopener noreferrer" class="font-bold text-[#c7bea9] hover:underline">(35) 98429-0119</a>
        </div>
      </div>

    </div>

    <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#384d41]">
      <span>© ${new Date().getFullYear()} Hidrauboa — Boa Esperança, MG</span>
      <span>Landing page institucional</span>
    </div>
  </div>
</footer>

<!-- ═══ floating whatsapp ═══ -->
<div class="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2" id="fabGroup">
  <div id="fabMenu" class="hidden bg-[#151d18] border border-[#28382f] shadow-xl w-56 text-xs">
    <div class="px-3 py-2 border-b border-[#28382f] text-[11px] font-bold text-[#c7bea9] uppercase tracking-wider flex items-center justify-between">
      WhatsApp
      <span class="w-1.5 h-1.5 bg-[#3da869]"></span>
    </div>
    <a href="${WA.almir.url}" target="_blank" rel="noopener noreferrer"
      class="flex items-center gap-2.5 px-3 py-2.5 hover:bg-[#1a231e] transition-colors text-[#c7bea9] hover:text-[#ece7df]">
      <span class="w-7 h-7 bg-[#d99a22] text-[#0f1411] flex items-center justify-center font-bold text-[10px]">${WA.almir.tag}</span>
      <div><span class="block text-[#ece7df] font-semibold">${WA.almir.name}</span><span class="text-[10px]">${WA.almir.role}</span></div>
    </a>
    <a href="${WA.jp.url}" target="_blank" rel="noopener noreferrer"
      class="flex items-center gap-2.5 px-3 py-2.5 hover:bg-[#1a231e] transition-colors text-[#c7bea9] hover:text-[#ece7df] border-t border-[#28382f]">
      <span class="w-7 h-7 bg-[#3da869] text-[#0f1411] flex items-center justify-center font-bold text-[10px]">${WA.jp.tag}</span>
      <div><span class="block text-[#ece7df] font-semibold">${WA.jp.name}</span><span class="text-[10px]">${WA.jp.role}</span></div>
    </a>
  </div>
  <button id="fabBtn"
    class="w-14 h-14 bg-[#23683f] hover:bg-[#3da869] text-white flex items-center justify-center shadow-lg transition-colors"
    aria-label="WhatsApp">
    <span class="scale-125">${ic.whatsapp}</span>
  </button>
</div>

<!-- ═══ lightbox ═══ -->
<div id="imgModal" class="fixed inset-0 z-50 hidden bg-[#0f1411]/95 flex items-center justify-center p-4">
  <div class="relative max-w-3xl w-full bg-[#151d18] border border-[#28382f] overflow-hidden">
    <div class="flex items-center justify-between px-4 py-3 border-b border-[#28382f]">
      <h4 id="modalTitle" class="font-bold text-sm text-[#ece7df]">Produto</h4>
      <button id="modalClose" class="text-[#c7bea9] hover:text-[#ece7df] transition-colors">${ic.close}</button>
    </div>
    <div class="p-3 bg-[#0f1411] flex items-center justify-center">
      <img id="modalImg" src="" alt="" class="max-h-[70vh] w-auto object-contain"/>
    </div>
    <div class="px-4 py-3 border-t border-[#28382f] flex flex-col sm:flex-row items-center justify-between gap-3">
      <span class="text-[11px] text-[#c7bea9]">Hidrauboa — Boa Esperança, MG</span>
      <a href="${WA.almir.url}" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold bg-[#d99a22] hover:bg-[#c48717] text-[#0f1411] transition-colors">
        ${ic.whatsapp} Cotar no WhatsApp
      </a>
    </div>
  </div>
</div>

`;

/* ─── Interactivity ─── */
setup();

function setup() {
  // Mobile drawer
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const openIcon = document.getElementById('menuOpen');
  const closeIcon = document.getElementById('menuClose');
  const mobLinks = document.querySelectorAll('.mob-link');

  menuBtn?.addEventListener('click', () => {
    const open = drawer?.classList.toggle('hidden') === false;
    openIcon?.classList.toggle('hidden', open);
    closeIcon?.classList.toggle('hidden', !open);
  });

  mobLinks.forEach(l => l.addEventListener('click', () => {
    drawer?.classList.add('hidden');
    openIcon?.classList.remove('hidden');
    closeIcon?.classList.add('hidden');
  }));

  // Category filter tabs
  const filterBtns = document.querySelectorAll('.cat-btn');
  const cards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.getAttribute('data-filter')!;

      filterBtns.forEach(b => {
        b.classList.remove('text-[#d99a22]', 'border-[#d99a22]');
        b.classList.add('text-[#c7bea9]', 'border-transparent');
      });
      btn.classList.add('text-[#d99a22]', 'border-[#d99a22]');
      btn.classList.remove('text-[#c7bea9]', 'border-transparent');

      cards.forEach(c => {
        const cat = c.getAttribute('data-cat');
        (c as HTMLElement).style.display = (f === 'all' || cat === f) ? '' : 'none';
      });
    });
  });

  // Copy phone buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = btn.getAttribute('data-phone') || '';
      navigator.clipboard.writeText(phone).then(() => {
        const el = btn as HTMLElement;
        el.innerHTML = '✓';
        el.classList.add('text-[#3da869]');
        setTimeout(() => {
          el.innerHTML = ic.copy;
          el.classList.remove('text-[#3da869]');
        }, 1800);
      });
    });
  });

  // FAB toggle
  const fab = document.getElementById('fabBtn');
  const fabMenu = document.getElementById('fabMenu');

  fab?.addEventListener('click', () => fabMenu?.classList.toggle('hidden'));

  document.addEventListener('click', (e) => {
    if (!document.getElementById('fabGroup')?.contains(e.target as Node)) {
      fabMenu?.classList.add('hidden');
    }
  });

  // Lightbox
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg') as HTMLImageElement;
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');

  const open = (src: string, tit: string) => {
    if (modal && modalImg && modalTitle) {
      modalImg.src = src;
      modalTitle.textContent = tit;
      modal.classList.remove('hidden');
    }
  };
  const close = () => modal?.classList.add('hidden');

  document.querySelectorAll('.gallery-item').forEach(el => {
    el.addEventListener('click', () => {
      open(el.getAttribute('data-src') || '', el.getAttribute('data-title') || 'Produto');
    });
  });

  document.getElementById('heroImgClick')?.addEventListener('click', () => {
    open('/img/produtos-lista.png', 'Catálogo de mangueiras e conexões Hidrauboa');
  });

  modalClose?.addEventListener('click', close);
  modal?.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}
