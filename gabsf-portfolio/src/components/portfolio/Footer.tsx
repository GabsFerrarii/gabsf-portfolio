import { useLang } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} GabsF. {t("Todos os direitos reservados.", "All rights reserved.")}
      </p>
    </footer>
  );
};

export default Footer;
