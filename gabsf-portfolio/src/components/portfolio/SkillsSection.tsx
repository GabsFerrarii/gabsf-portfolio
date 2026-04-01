import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const categories = {
  pt: {
    Frontend: ["HTML5", "CSS", "JS", "TS", "React", "Vue", "TailwindCSS", "Vite"],
    Backend: ["NodeJS", "NextJS", "Python", "C#", ".NET", "MySQL", "PostgreSQL", "Prisma", "Azure"],
    "Produção de Conteúdo": ["Figma", "Photoshop", "Lightroom", "Davinci Resolve"],
    Outros: ["n8n", "Git", "Make", "Power Platform", "Oracle VM", "Cisco Packet Tracer", "Astah UML"],
  },
  en: {
    Frontend: ["HTML5", "CSS", "JS", "TS", "React", "Vue", "TailwindCSS", "Vite"],
    Backend: ["NodeJS", "NextJS", "Python", "C#", ".NET", "MySQL", "PostgreSQL", "Prisma", "Azure"],
    "Content Production": ["Figma", "Photoshop", "Lightroom", "Davinci Resolve"],
    Others: ["n8n", "Git", "Make", "Power Platform", "Oracle VM", "Cisco Packet Tracer", "Astah UML"],
  },
};

const softSkills = {
  pt: ["Comunicação", "Trabalho em Equipe", "Resolução de Problemas", "Aprendizado Contínuo"],
  en: ["Communication", "Teamwork", "Problem Solving", "Continuous Learning"],
};

const SkillsSection = () => {
  const { lang, t } = useLang();
  const cats = categories[lang];

  return (
    <AnimatedSection id="skills" className="section-container">
      <h2 className="section-title">{t("Habilidades", "Skills")}</h2>

      <div className="relative mb-14 p-8 rounded-xl bg-primary/5 border border-primary/20 overflow-hidden">
        <div className="absolute top-4 left-6 text-6xl text-primary/20 font-serif leading-none">"</div>
        <blockquote className="relative z-10 text-xl md:text-2xl font-medium italic text-foreground/90 pl-8">
          {t(
            "Toda tecnologia suficientemente avançada é indistinguível de mágica.",
            "Any sufficiently advanced technology is indistinguishable from magic."
          )}
        </blockquote>
        <span className="block mt-4 pl-8 text-sm font-mono text-primary">— Arthur C. Clarke</span>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {softSkills[lang].map((s) => (
          <span key={s} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {s}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(cats).map(([cat, skills]) => (
          <div key={cat} className="glass-card p-6">
            <h3 className="text-sm font-mono text-primary mb-4">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Tooltip key={skill}>
                  <TooltipTrigger asChild>
                    <span className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground cursor-default hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>{skill}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
