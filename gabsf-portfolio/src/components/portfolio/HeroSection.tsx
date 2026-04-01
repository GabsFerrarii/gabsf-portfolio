import { Github, Linkedin, FileText } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import profileImg from "@/assets/eu.png";
import bgImg from "@/assets/bg-1.png";

const HeroSection = () => {
  const { lang, t } = useLang();

  const resumeUrl =
    lang === "pt"
      ? "https://www.linkedin.com/in/gabes-ferreira/"
      : "https://drive.google.com/file/d/1UZHe_QhPd8pVARB6aXrQ3YSuZXrHfe7n/view?usp=sharing";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }} />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 section-container flex flex-col md:flex-row items-center gap-10 md:gap-16 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="shrink-0"
        >
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-primary overflow-hidden yellow-glow">
            <img src={profileImg} alt="Gabriel Ferreira" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center md:text-left"
        >
          <p className="text-primary font-mono text-sm mb-2">{t("Olá! 👋", "Hello! 👋")}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {t("Me chamo Gabriel Ferreira e sou Desenvolvedor", "I'm Gabriel Ferreira, a Developer")}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            {t(
              "Unindo código e criatividade para experiências digitais memoráveis.",
              "Merging code and creativity for memorable digital experiences.",
            )}
          </p>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <FileText size={18} />
              {t("Currículo", "Resume")}
            </a>
            <a
              href="https://github.com/GabsFerrarii"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border text-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabes-ferreira/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border text-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
