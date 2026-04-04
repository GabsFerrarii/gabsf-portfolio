import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";

const experiences = {
  pt: [
    {
      role: "Estagiário em Desenvolvimento",
      company: "LinQA Seguros",
      period: "2025 - Presente",
      desc: "Liderei a transformação digital da empresa, estruturando o ecossistema tecnológico e operacional. Fui responsável pelo desenvolvimento do website e landing pages integradas ao Strapi e CRM, implementação de IA para atendimento, além da configuração de sistemas ERP e gestão de bases de dados. Conduzi a automação de fluxos operacionais, o desenvolvimento de soluções para análise de dados e a criação de uma intranet unificada para otimizar a performance da equipe.",
    },
    {
      role: "Desenvolvedor da Diretoria de Pesquisa",
      company: "IFRN - Campus Natal-Central",
      period: "2023",
      desc: "Projetei e implementei interfaces para o sistema de gerenciamento de empresas incubadas (Projeto Atlantis) e para o redesign do Portal de Periódicos da Editora IFRN, com foco na digitalização de processos e melhoria da experiência do usuário.",
    },
  ],
  en: [
    {
      role: "Development Intern",
      company: "LinQA Seguros",
      period: "2025 - Present",
      desc: "I led the company's digital transformation by structuring its technological and operational ecosystem. I was responsible for developing the website and landing pages integrated with Strapi and CRM, implementing AI-powered customer support, and configuring ERP systems alongside database management. I also spearheaded operational workflow automation, developed business data analytics solutions, and built a unified intranet to enhance team performance.",
    },
    {
      role: "Research Department Developer",
      company: "IFRN - Campus Natal-Central",
      period: "2023",
      desc: "Designed and implemented interfaces for the incubated companies management system (Project Atlantis) and the IFRN Publisher's Periodicals Portal redesign, focusing on process digitization and UX improvement.",
    },
  ],
};

const education = {
  pt: [
    {
      title: "Graduando em Tecnologia da Informação",
      institution: "UFRN - Campus Natal (IMD)",
      period: "2025 - 2028",
      desc: "Estudar em um polo de inovação tem sido fundamental para expandir minha visão técnica. Busco aproveitar esse ecossistema para desenvolver projetos práticos, colaborar com outros profissionais e aprimorar continuamente minhas habilidades como desenvolvedor.",
    },
    {
      title: "Técnico em Informática para Internet",
      institution: "IFRN - Campus Natal-Central",
      period: "2021 - 2025",
      desc: "Formação técnica focada no ciclo completo do desenvolvimento de aplicações web, incluindo organização de projetos, prototipação de design (UX/UI) e implantação de servidores.",
    },
  ],
  en: [
    {
      title: "B.Sc. in Information Technology",
      institution: "UFRN - Campus Natal (IMD)",
      period: "2025 - 2028",
      desc: "Studying at an innovation hub has been fundamental to expanding my technical vision. I seek to leverage this ecosystem to develop practical projects, collaborate with other professionals, and continuously improve my skills as a developer.",
    },
    {
      title: "Technical Diploma in Internet Computing",
      institution: "IFRN - Campus Natal-Central",
      period: "2021 - 2025",
      desc: "Technical training focused on the complete web application development cycle, including project organization, UX/UI design prototyping, and server deployment.",
    },
  ],
};

const AboutSection = () => {
  const { lang, t } = useLang();
  const [tab, setTab] = useState<"exp" | "edu">("exp");

  const items = tab === "exp" ? experiences[lang] : education[lang];

  return (
    <AnimatedSection id="about" className="section-container">
      <h2 className="section-title">
        {t("Sobre Mim", "About Me")}
      </h2>

      <p className="text-muted-foreground mb-10 max-w-2xl">
        {t(
          "Sou um entusiasta de tecnologia com formação técnica e graduação em andamento. Como um apaixonado por arte e design, minha missão é criar projetos web que se destaquem pela funcionalidade e pela estética, unindo o melhor do código e da criatividade para entregar experiências digitais memoráveis.",
          "I'm a tech enthusiast with a technical background and an ongoing degree. Passionate about art and design, my mission is to create web projects that stand out for their functionality and aesthetics, merging the best of code and creativity to deliver memorable digital experiences."
        )}
      </p>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setTab("exp")}
          className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${
            tab === "exp"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {t("Experiência", "Experience")}
        </button>
        <button
          onClick={() => setTab("edu")}
          className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${
            tab === "edu"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {t("Formação", "Education")}
        </button>
      </div>

      <div className="space-y-0 border-l-2 border-primary/30 ml-3">
        {items.map((item, i) => (
          <div key={i} className="relative pl-8 pb-10 last:pb-0">
            <div className="absolute left-[-7px] top-1.5 w-3 h-3 rounded-full bg-primary" />
            <p className="text-xs font-mono text-primary mb-1">
              {"period" in item ? item.period : ""}
            </p>
            <h3 className="text-lg font-semibold">
              {"role" in item ? item.role : item.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {"company" in item ? item.company : item.institution}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
