import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { FileText } from "lucide-react";

// Blog posts will be loaded from /content/blog/*.md in the future.
// For now, this is a placeholder structure ready for markdown integration.
const posts = {
  pt: [
    {
      title: "Em breve...",
      date: "2025",
      excerpt: "Novos artigos sobre desenvolvimento web, design e tecnologia estão a caminho. Fique ligado!",
    },
  ],
  en: [
    {
      title: "Coming soon...",
      date: "2025",
      excerpt: "New articles about web development, design, and technology are on the way. Stay tuned!",
    },
  ],
};

const BlogSection = () => {
  const { lang, t } = useLang();
  const items = posts[lang];

  return (
    <AnimatedSection id="blog" className="section-container">
      <h2 className="section-title">{t("Blog", "Blog")}</h2>

      <div className="space-y-4">
        {items.map((post, i) => (
          <div key={i} className="glass-card p-6 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-primary mb-1">{post.date}</p>
              <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default BlogSection;
