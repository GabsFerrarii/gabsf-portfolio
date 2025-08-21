<script setup>
import { ref, onMounted } from 'vue';

// Import de imagens
import pfp from '@/assets/images/pfp.png';
import bemtevista from '@/assets/images/Feed.png';
import atlantis from '@/assets/images/atlantis.png';
import periodicos from '@/assets/images/periodicos.png';
import linqa from '@/assets/images/linqa.png';

// Ícones de tecnologias
import htmlIcon from '@/assets/images/techs/html.png';
import cssIcon from '@/assets/images/techs/css.png';
import jsIcon from '@/assets/images/techs/javascript.png';
import tsIcon from '@/assets/images/techs/typescript.png';
import reactIcon from '@/assets/images/techs/react.png';
import tailwindIcon from '@/assets/images/techs/tailwind.png';
import viteIcon from '@/assets/images/techs/vite.png';
import vueIcon from '@/assets/images/techs/vue.png';
import nodeIcon from '@/assets/images/techs/node.png';
import nextIcon from '@/assets/images/techs/next.png';
import pythonIcon from '@/assets/images/techs/python.png';
import csIcon from '@/assets/images/techs/cs.png';
import dotnetIcon from '@/assets/images/techs/dotnet.png';
import mysqlIcon from '@/assets/images/techs/mysql.png';
import postgreIcon from '@/assets/images/techs/postgre.png';
import prismaIcon from '@/assets/images/techs/prisma.png';
import figmaIcon from '@/assets/images/techs/figma.png';
import photoshopIcon from '@/assets/images/techs/photoshop.png';
import lightroomIcon from '@/assets/images/techs/lightroom.png';
import davinciIcon from '@/assets/images/techs/davinci.png';
import gitIcon from '@/assets/images/techs/git.png';
import oracleIcon from '@/assets/images/techs/oracle.png';
import ciscoIcon from '@/assets/images/techs/cisco.png';
import astahIcon from '@/assets/images/techs/astah.png';
import powerautoIcon from '@/assets/images/techs/powerauto.png';

// --- DADOS ---

const timelineItems = ref([
  { type: 'work', title: 'Estagiário em Desenvolvimento', subtitle: 'LinQA Seguros', period: '2025 - Presente', description: 'Liderei a transformação digital completa da empresa, gerenciando projetos-chave como o desenvolvimento do novo website (Next.js/Strapi) e a implementação de uma intranet no SharePoint. Paralelamente, estruturei fluxos de automação com Power Automate para otimizar a captação e qualificação de leads e unifiquei a identidade visual e o calendário de conteúdo, fortalecendo a autoridade da marca no mercado regional através de uma comunicação estratégica e consistente.' },
  { type: 'education', title: 'Graduando em Tecnologia da Informação', subtitle: 'UFRN - Campus Natal', period: '2025 - Cursando', description: '' },
  { type: 'work', title: 'Desenvolvedor da Diretoria de Pesquisa', subtitle: 'IFRN - Campus Natal-Central', period: '2023', description: 'Atuei no desenvolvimento de soluções digitais, projetando e implementando as interfaces para o sistema de gerenciamento de empresas incubadas (Projeto Atlantis) e para o redesign do Portal de Periódicos da Editora IFRN, com foco na digitalização de processos e na melhoria da experiência do usuário. Adicionalmente, fui responsável por garantir a integridade e a disponibilidade dos websites da diretoria através de rotinas de manutenção e backup.' },
  { type: 'education', title: 'Técnico em Informática para Internet', subtitle: 'IFRN - Campus Natal-Central', period: '2021 - 2025', description: 'Formação técnica focada no ciclo completo do desenvolvimento de aplicações web, onde desenvolvi competências em organização e diagramação de projetos, planejamento e prototipação de design (UX/UI), e implantação de servidores. O conhecimento foi consolidado através da criação de projetos práticos, como uma rede social de moda, uma plataforma para troca de livros e um jogo 2D em Pygame.' },
].sort((a, b) => parseInt(b.period) - parseInt(a.period)));

const skills = ref({
  frontend: [ { name: 'HTML', icon: htmlIcon }, { name: 'CSS', icon: cssIcon }, { name: 'JavaScript', icon: jsIcon }, { name: 'TypeScript', icon: tsIcon }, { name: 'React', icon: reactIcon }, { name: 'Vue.js', icon: vueIcon }, { name: 'Tailwind CSS', icon: tailwindIcon }, { name: 'Vite', icon: viteIcon }, ],
  backend: [ { name: 'Node.js', icon: nodeIcon }, { name: 'Next.js', icon: nextIcon }, { name: 'Python', icon: pythonIcon }, { name: 'C#', icon: csIcon }, { name: '.Net', icon: dotnetIcon }, { name: 'MySQL', icon: mysqlIcon }, { name: 'PostgreSQL', icon: postgreIcon }, { name: 'Prisma', icon: prismaIcon }, ],
  producao: [ { name: 'Figma', icon: figmaIcon }, { name: 'Photoshop', icon: photoshopIcon }, { name: 'Lightroom', icon: lightroomIcon }, { name: 'Davinci Resolve', icon: davinciIcon }, ],
  outros: [ { name: 'Git', icon: gitIcon }, { name: 'MS Power Automate', icon: powerautoIcon }, { name: 'OracleVM', icon: oracleIcon }, { name: 'Cisco Packet Tracer', icon: ciscoIcon }, { name: 'Astah UML', icon: astahIcon }, ]
});

const projects = ref([
  { title: 'LinQA Seguros', year: '2025', description: 'Website institucional e blog para corretora de seguros, com foco em performance (SEO) e design moderno para captação de leads.', image: linqa, tags: [reactIcon, nextIcon, tailwindIcon], liveLink: 'www.linqaseguros.com.br', },
  { title: 'Bem te vista', year: '2024', description: 'Rede social com foco em moda, visando um interesse crescente no Brasil em nichos digitais que discutam o mundo fashion.', image: bemtevista, tags: [reactIcon, tailwindIcon, viteIcon, nodeIcon, mysqlIcon, prismaIcon], figmaLink: 'https://www.figma.com/design/hh1PhHCgeZTkGHY2G7aodO/Bem-te-vista?m=auto&t=i7UMDbc3K6X779rm-6', repoLink: 'https://github.com/GabsFerrarii/Bem-te-vista', },
  { title: 'Atlantis', year: '2023', description: 'Plataforma que automatiza o cadastro e manutenção das empresas presentes na Incubadora do IFRN, antes mantidos em arquivos soltos.', image: atlantis, tags: [figmaIcon, reactIcon, tailwindIcon, postgreIcon], figmaLink: 'https://www.figma.com/design/PMR3EiQAf5er2mwd8s8v0F/ITNC?m=auto&t=i7UMDbc3K6X779rm-6', },
  { title: 'Portal de Periódicos', year: '2023', description: 'Redesign do portal de periódicos (revistas científicas) da editora do IFRN, antes desfuncional e com interfaces antigas.', image: periodicos, tags: [figmaIcon], figmaLink: 'https://www.figma.com/design/rfU5C1QPJwQjoSptRTVm01/Prot%C3%B3tipos-site-de-peri%C3%B3dicos?m=auto&t=i7UMDbc3K6X779rm-6', },
]);


// --- LÓGICA DE ANIMAÇÃO ---
onMounted(() => {
  // IntersectionObserver é uma API do navegador para observar quando elementos entram na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Se o elemento está visível na tela
      if (entry.isIntersecting) {
        // Adiciona a classe 'is-visible' para ativar a animação CSS
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
  });

  // Pede ao observer para observar todos os elementos com a classe 'animate-on-scroll'
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(el => observer.observe(el));
});

</script>

<template>
  <!-- SEÇÃO HERO -->
  <section class="parallax bg1 h-[100dvh] flex flex-col text-[#F5F5F3]">
    <header class="mx-auto w-11/12 flex justify-between items-center py-8">
      <a href="/" class="text-2xl font-bold flex items-center">Gabs<span class="text-[#F8E509] mr-1">F</span><svg width="25" viewBox="0 0 92 87" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.0979 1.85411C44.6966 0.01149 47.3034 0.0114798 47.9021 1.8541L57.2257 30.5491C57.4934 31.3732 58.2614 31.9311 59.1278 31.9311H89.2996C91.237 31.9311 92.0426 34.4103 90.4751 35.5491L66.0657 53.2837C65.3647 53.793 65.0714 54.6957 65.3391 55.5197L74.6627 84.2148C75.2614 86.0574 73.1525 87.5896 71.585 86.4508L47.1756 68.7163C46.4746 68.2071 45.5254 68.207 44.8244 68.7163L20.415 86.4508C18.8475 87.5896 16.7386 86.0574 17.3373 84.2148L26.6609 55.5197C26.9286 54.6957 26.6353 53.793 25.9343 53.2837L1.52486 35.5492C-0.0425634 34.4103 0.762982 31.9311 2.70043 31.9311H32.8722C33.7386 31.9311 34.5066 31.3732 34.7743 30.5491L44.0979 1.85411Z" fill="#F8E509"/>
</svg>
</a>
      <nav>
        <ul class="flex justify-between items-center gap-8 text-lg font-semibold">
          <li><a href="#sobre" class="hover:text-[#F8E509] transition-colors">Sobre mim</a></li>
          <li><a href="#habilidades" class="hover:text-[#F8E509] transition-colors">Habilidades</a></li>
          <li><a href="#projetos" class="hover:text-[#F8E509] transition-colors">Projetos</a></li>
          <li><a href="#contato" class="hover:text-[#F8E509] transition-colors">Contato</a></li>
        </ul>
      </nav>
    </header>

    <div class="w-10/12 mx-auto flex-grow flex justify-center items-center gap-12 pb-12">
      <div class="flex flex-col gap-4 text-right">
        <p class="text-5xl font-semibold text-shadow-lg">Oi! Me chamo</p>
        <h1 class="text-6xl font-bold text-[#F8E509] text-shadow-lg">
          Gabriel Ferreira
        </h1>
        <p class="text-2xl font-semibold text-shadow-lg">e sou Desenvolvedor Web</p>
        <ul class="flex items-center justify-end gap-6 mt-4">
          <li>
            <a href="https://github.com/GabsFerrarii" target="_blank" title="GitHub" class="text-white hover:text-[#F8E509] transition-colors">
              <svg class="w-12" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/></svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gabes-ferreira/" target="_blank" title="LinkedIn" class="text-white hover:text-[#F8E509] transition-colors">
              <svg class="w-12" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1reK7N3095Tl3h8zi7qNAxE-_EEmUIHAe/view?usp=sharing" target="_blank"
               class="flex items-center gap-2 px-6 py-[0.65rem] bg-[#F5F5F3] rounded-sm font-semibold text-xl text-gray-800 hover:bg-gray-200 transition-transform transform hover:scale-105">
              Currículo
            </a>
          </li>
        </ul>
      </div>
      <figure>
        <img :src="pfp" alt="Foto de Gabriel Ferreira"
             class="rounded-full border-4 border-[#F8E509] w-[26rem] object-cover" />
      </figure>
    </div>
  </section>

  <!-- SEÇÃO SOBRE MIM -->
  <section class="py-20 bg-[#F8F8F8]" id="sobre">
    <div class="mx-auto w-9/12">
      <h2 class="text-center text-4xl font-semibold text-[#0A1D3E] mb-12 animate-on-scroll">Sobre mim</h2>
      <div class="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
        <p class="text-xl text-gray-700 leading-relaxed">
          Sou um entusiasta de tecnologia com formação técnica e graduação em andamento. Como um apaixonado por arte e design, minha missão é criar projetos web que se destaquem pela <b>funcionalidade</b> e pela <b>estética</b>, unindo o melhor do código e da criatividade para entregar experiências digitais memoráveis.
        </p>
      </div>

      <!-- LINHA DO TEMPO -->
      <div class="relative wrap overflow-hidden p-4 h-full">
        <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%"></div>
        
        <div v-for="(item, index) in timelineItems" :key="index" 
             class="mb-8 flex justify-between items-center w-full animate-on-scroll"
             :class="{ 'flex-row-reverse': index % 2 !== 0 }">
          <div class="order-1 w-5/12"></div>
          <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 class="mx-auto font-semibold text-lg text-white">
              <svg v-if="item.type === 'work'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </h1>
          </div>
          <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 class="font-bold text-gray-800 text-xl">{{ item.title }}</h3>
            <p class="text-sm font-medium text-[#002668]">{{ item.subtitle }} ({{ item.period }})</p>
            <p v-if="item.description" class="text-sm leading-snug tracking-wide text-gray-600 text-opacity-100 mt-2">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SEÇÃO HABILIDADES -->
  <section class="py-20 bg-[#F8F8F8]" id="habilidades">
    <div class="flex justify-between items-center w-9/12 mx-auto">
      <div class="w-5/12 relative animate-on-scroll">
        <span class="absolute -top-12 -left-8 text-[12rem] font-serif text-gray-200 -z-0">“</span>
        <p class="text-6xl font-semibold text-[#002668] relative z-10">Toda <span class="text-[#BE953F]">tecnologia</span>
          suficientemente avançada é indistinguível de <span class="text-[#BE953F]">mágica</span>.</p>
        <p class="text-xl mt-2 text-right pr-12 text-gray-500 relative z-10">~ Arthur C. Clarke</p>
      </div>
      <div class="w-6/12 flex flex-col gap-6 items-start">
        <template v-for="(skillList, category) in skills" :key="category">
          <div v-if="skillList.length > 0" class="animate-on-scroll w-full">
            <h3 class="font-semibold text-xl capitalize text-[#0A1D3E] mb-3">{{ category }}</h3>
            <ul class="flex flex-wrap items-center gap-4">
              <li v-for="skill in skillList" :key="skill.name" class="p-2 bg-white rounded-full shadow-md">
                <img :src="skill.icon" :alt="skill.name" class="w-12 h-12" :title="skill.name" />
              </li>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </section>
  
  <!-- SEÇÃO PROJETOS E CONTATO -->
  <section class="parallax bg2 bg-cover pt-20">
    <section id="projetos" class="w-9/12 mx-auto mb-20">
      <h2 class="text-center text-4xl font-semibold text-white pb-12 animate-on-scroll">Meus Projetos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(project, index) in projects" :key="project.title"
             class="bg-white rounded-lg flex flex-col overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
             :style="{ 'transition-delay': `${index * 100}ms` }">
          <img :src="project.image" :alt="'Screenshot do projeto ' + project.title" class="w-full h-56 object-cover" />
          <div class="p-6 flex flex-col flex-grow">
            <span class="flex items-baseline gap-3 mb-2">
              <h3 class="font-bold text-2xl text-gray-800">{{ project.title }}</h3>
              <p class="text-gray-500">({{ project.year }})</p>
            </span>
            <p class="text-gray-600 mb-4 flex-grow">{{ project.description }}</p>
            <div class="flex justify-between items-center mt-auto">
              <ul class="flex items-center gap-2">
                <li v-for="(tag, i) in project.tags" :key="i">
                  <img :src="tag" class="w-8 h-8" />
                </li>
              </ul>
              <div class="flex items-center gap-4">
                 <a v-if="project.repoLink" :href="project.repoLink" target="_blank" class="font-semibold text-gray-600 hover:text-[#002668]">Código</a>
                 <a v-if="project.liveLink" :href="'https://' + project.liveLink" target="_blank" class="px-5 py-2 bg-[#002668] text-white rounded-lg font-semibold hover:bg-[#0A1D3E]">Ver Online</a>
                 <a v-if="project.figmaLink" :href="project.figmaLink" target="_blank" class="px-5 py-2 bg-[#002668] text-white rounded-lg font-semibold hover:bg-[#0A1D3E]">Ver no Figma</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTATO -->
    <section id="contato" class="w-9/12 mx-auto">
      <h2 class="text-center text-4xl font-semibold text-white pb-12 animate-on-scroll">Me envie uma mensagem</h2>
      <div class="flex justify-between items-center gap-16">
        <div class="w-5/12 text-white animate-on-scroll">
          <h3 class="text-6xl font-bold">Vamos <span class="text-[#F8E509]">construir</span> algo juntos?</h3>
          <p class="text-xl mt-6">
            Seja para discutir um novo projeto, uma oportunidade de colaboração ou apenas para um bate-papo, estou à
            disposição!
          </p>
          <div class="flex items-center gap-6 mt-8">
            <a href="https://github.com/GabsFerrarii" target="_blank" title="GitHub" class="text-white hover:text-[#F8E509] transition-colors">
              <svg class="w-9 h-9" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/gabes-ferreira/" target="_blank" title="LinkedIn" class="text-white hover:text-[#F8E509] transition-colors">
              <svg class="w-9 h-9" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
          </div>
        </div>
        <form @submit.prevent="handleSubmit"
              class="flex flex-col gap-5 p-8 rounded-lg bg-white/95 backdrop-blur-sm w-7/12 shadow-2xl animate-on-scroll">
          <div class="flex flex-col">
            <label for="nome" class="mb-1 font-semibold text-gray-700">Nome</label>
            <input class="px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002668] focus:bg-white transition-all duration-300"
                   id="nome" name="nome" type="text" placeholder="Seu nome" required />
          </div>
          <div class="flex flex-col">
            <label for="email" class="mb-1 font-semibold text-gray-700">E-mail</label>
            <input class="px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002668] focus:bg-white transition-all duration-300"
                   id="email" name="email" type="email" placeholder="seu.email@exemplo.com" required />
          </div>
          <div class="flex flex-col">
            <label for="mensagem" class="mb-1 font-semibold text-gray-700">Mensagem</label>
            <textarea
              class="px-4 py-3 bg-gray-100 rounded-lg min-h-[120px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002668] focus:bg-white transition-all duration-300"
              id="mensagem" name="mensagem" placeholder="Sua mensagem" required></textarea>
          </div>
          <button type="submit"
                  class="rounded-lg bg-[#002668] px-6 py-3 text-white w-fit self-end font-semibold hover:bg-[#0A1D3E] transition-transform transform hover:scale-105">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
    
    <!-- RODAPÉ -->
    <footer class="text-white py-16">
      <div class="flex justify-between items-center w-11/12 mx-auto">
        <p>© {{ new Date().getFullYear() }} • Desenvolvido por Gabriel Ferreira</p>
        <ul class="flex items-center gap-6">
          <li>
            <a href="https://github.com/GabsFerrarii" target="_blank" title="GitHub" class="text-gray-300 hover:text-white transition-colors">
              <svg class="w-7 h-7" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/></svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gabes-ferreira/" target="_blank" title="LinkedIn" class="text-gray-300 hover:text-white transition-colors">
              <svg class="w-7 h-7" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
          </li>
          <!-- NOVO ÍCONE DE E-MAIL -->
          <li>
            <a href="mailto:gabesferreira15@gmail.com" title="E-mail" class="text-gray-300 hover:text-white transition-colors">
              <svg class="w-7 h-7" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg1 {
  background-image: url('@/assets/images/bg1.webp');
}

.bg2 {
  background-image: url('@/assets/images/bg2.webp');
}

.text-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* --- ESTILOS DE ANIMAÇÃO --- */

/* Define o estado inicial dos elementos que serão animados */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Define o estado final (visível) quando a classe é adicionada via JavaScript */
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Desativa o parallax em telas menores para melhor performance */
@media (max-width: 1024px) {
  .parallax {
    background-attachment: scroll;
  }
}
</style>
