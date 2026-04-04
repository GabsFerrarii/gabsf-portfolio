import { ExternalLink, Github, Figma } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import linqaImg from "@/assets/linqa.png";
import bemTeVistaImg from "@/assets/bem-te-vista.png";
import atlantisImg from "@/assets/atlantis.png";
import periodicosImg from "@/assets/periodicos.png";
import hollowShooterImg from "@/assets/hollow-shooter.png";
import finopsImg from "@/assets/finops.png";
import reactrisImg from "@/assets/reactris.png";

const projects = {
  pt: [
    {
      title: "Reactris",
      year: "2026",
      image: reactrisImg,
      desc: "Um jogo de Tetris desenvolvido em React Native, otimizado para Android",
      tags: ["React Native", "Expo", "Zustand"],
      links: { github: "https://github.com/GabsFerrarii/reactris" },
    },
    {
      title: "FinOps Dashboard",
      year: "2026",
      image: finopsImg,
      desc: "Dashboard para análise de custos de serviços de nuvem, com foco em visualização de dados e otimização de custos.",
      tags: ["React Native", "Expo", "Zustand", "NativeWind v4"],
      links: { github: "https://github.com/GabsFerrarii/finops-dash" },
    },
    {
      title: "LinQA Seguros",
      year: "2025",
      image: linqaImg,
      desc: "Website institucional e blog para corretora de seguros, com foco em performance (SEO) e design moderno para captação de leads.",
      tags: ["React", "Vite", "TailwindCSS"],
      links: { live: "https://www.linqaseguros.com.br/" },
    },
    {
      title: "Bem te vista",
      year: "2024",
      image: bemTeVistaImg,
      desc: "Rede social com foco em moda, visando um interesse crescente no Brasil em nichos digitais que discutam o mundo fashion.",
      tags: ["Vite", "React", "NodeJS", "Tailwind", "Prisma", "MySQL"],
      links: {
        github: "https://github.com/GabsFerrarii/Bem-te-vista",
        figma: "https://www.figma.com/design/hh1PhHCgeZTkGHY2G7aodO/Bem-te-vista",
      },
    },
    {
      title: "Atlantis",
      year: "2023",
      image: atlantisImg,
      desc: "Plataforma que automatiza o cadastro e manutenção das empresas presentes na Incubadora do IFRN.",
      tags: ["Figma", "React", "Tailwind", "PostgreSQL"],
      links: {
        figma: "https://www.figma.com/design/PMR3EiQAf5er2mwd8s8v0F/ITNC",
      },
    },
    {
      title: "Portal de Periódicos",
      year: "2023",
      image: periodicosImg,
      desc: "Redesign do portal de periódicos (revistas científicas) da editora do IFRN, antes desfuncional e com interfaces antigas.",
      tags: ["Figma"],
      links: {
        figma: "https://www.figma.com/design/rfU5C1QPJwQjoSptRTVm01/Protótipos-site-de-periódicos",
      },
    },
    {
      title: "Hollow Shooter",
      year: "2021",
      image: hollowShooterImg,
      desc: "Jogo top-down shooter desenvolvido em Pygame como projeto de avaliação do curso técnico em TI.",
      tags: ["Python", "Pygame"],
      links: {
        github: "https://github.com/GabsFerrarii/Hollow-Shooter",
      },
    },
  ],
  en: [
    {
      title: "Reactris",
      year: "2026",
      image: reactrisImg,
      desc: "A Tetris game developed in React Native, optimized for Android",
      tags: ["React Native", "Expo", "Zustand"],
      links: { github: "https://github.com/GabsFerrarii/reactris" },
    },
    {
      title: "FinOps Dashboard",
      year: "2026",
      image: finopsImg,
      desc: "Dashboard for analyzing cloud service costs, focusing on data visualization and cost optimization.",
      tags: ["React Native", "Expo", "Zustand", "NativeWind v4"],
      links: { github: "https://github.com/GabsFerrarii/finops-dash" },
    },
    {
      title: "LinQA Seguros",
      year: "2025",
      image: linqaImg,
      desc: "Institutional website and blog for an insurance brokerage, focused on performance (SEO) and modern design for lead generation.",
      tags: ["React", "Vite", "TailwindCSS"],
      links: { live: "https://www.linqaseguros.com.br/" },
    },
    {
      title: "Bem te vista",
      year: "2024",
      image: bemTeVistaImg,
      desc: "Social network focused on fashion, targeting the growing interest in Brazil in digital niches discussing the fashion world.",
      tags: ["Vite", "React", "NodeJS", "Tailwind", "Prisma", "MySQL"],
      links: {
        github: "https://github.com/GabsFerrarii/Bem-te-vista",
        figma: "https://www.figma.com/design/hh1PhHCgeZTkGHY2G7aodO/Bem-te-vista",
      },
    },
    {
      title: "Atlantis",
      year: "2023",
      image: atlantisImg,
      desc: "Platform that automates the registration and maintenance of companies in the IFRN Incubator.",
      tags: ["Figma", "React", "Tailwind", "PostgreSQL"],
      links: {
        figma: "https://www.figma.com/design/PMR3EiQAf5er2mwd8s8v0F/ITNC",
      },
    },
    {
      title: "Periodicals Portal",
      year: "2023",
      image: periodicosImg,
      desc: "Redesign of the IFRN publisher's scientific journals portal, previously dysfunctional with outdated interfaces.",
      tags: ["Figma"],
      links: {
        figma: "https://www.figma.com/design/rfU5C1QPJwQjoSptRTVm01/Protótipos-site-de-periódicos",
      },
    },
    {
      title: "Hollow Shooter",
      year: "2021",
      image: hollowShooterImg,
      desc: "Top-down shooter game built with Pygame as a course assessment project.",
      tags: ["Python", "Pygame"],
      links: {
        github: "https://github.com/GabsFerrarii/Hollow-Shooter",
      },
    },
  ],
};

const ProjectsSection = () => {
  const { lang, t } = useLang();
  const items = projects[lang];

  return (
    <AnimatedSection id="projects" className="section-container">
      <h2 className="section-title">{t("Projetos", "Projects")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((p, i) => {
          const mainLink = p.links.live || p.links.github || p.links.figma;
          return (
          <motion.a
            key={p.title}
            href={mainLink}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card overflow-hidden flex flex-col justify-between hover:border-primary/50 transition-colors cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {p.image && (
              <div className="w-full h-44 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top" />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="text-xs font-mono text-primary">{p.year}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 px-6 pb-6">
              {p.links.figma && (
                <a href={p.links.figma} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Figma size={18} />
                </a>
              )}
              {p.links.github && (
                <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
              )}
              {p.links.live && (
                <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </motion.a>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
