import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import FlagBR from "@/components/icons/FlagBR";
import FlagUS from "@/components/icons/FlagUS";

const navItems = [
  { pt: "Sobre", en: "About", href: "#about" },
  { pt: "Habilidades", en: "Skills", href: "#skills" },
  { pt: "Projetos", en: "Projects", href: "#projects" },
  
  { pt: "Contato", en: "Contact", href: "#contact" },
];

const Header = () => {
  const { lang, toggle, t } = useLang();
  const [open, setOpen] = useState(false);

  const FlagButton = ({ className }: { className?: string }) => (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 font-mono rounded-md border border-border hover:border-primary transition-colors ${className}`}
    >
      {lang === "pt" ? <><FlagBR className="w-5 h-auto" /> PT</> : <><FlagUS className="w-5 h-auto" /> EN</>}
    </button>
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-primary font-heading">
            GabsF
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {lang === "pt" ? item.pt : item.en}
              </a>
            ))}
            <FlagButton className="text-xs px-3 py-1.5" />
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {createPortal(
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-[90] md:hidden"
                onClick={() => setOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-y-0 right-0 w-64 border-l border-border z-[100] p-8 flex flex-col gap-6 md:hidden shadow-2xl"
                style={{ backgroundColor: "hsl(216, 80%, 14%)" }}
              >
                <button onClick={() => setOpen(false)} className="self-end text-foreground">
                  <X size={24} />
                </button>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-foreground hover:text-primary transition-colors"
                  >
                    {lang === "pt" ? item.pt : item.en}
                  </a>
                ))}
                <FlagButton className="text-sm px-3 py-2 self-start" />
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Header;
