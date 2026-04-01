import { useState, FormEvent } from "react";
import { useLang } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const toastId = toast.loading(t("Enviando mensagem...", "Sending message..."));

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.name,
          email: form.email,
          mensagem: form.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success(t("Mensagem enviada com sucesso!", "Message sent successfully!"), { id: toastId });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error(t("Erro ao enviar. Tente novamente.", "Error sending. Try again."), { id: toastId });
    } finally {
      setStatus("idle");
    }
  };

  return (
    <AnimatedSection id="contact" className="section-container">
      <h2 className="section-title">{t("Contato", "Contact")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder={t("Nome", "Name")}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary text-secondary-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary text-secondary-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors"
          />
          <textarea
            required
            rows={5}
            placeholder={t("Mensagem", "Message")}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary text-secondary-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            {t("Enviar", "Send")}
          </button>
        </form>

        <div className="flex flex-col gap-5 justify-center">
          <a href="mailto:gabesferreira15@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} /> gabesferreira15@gmail.com
          </a>
          <a href="https://github.com/GabsFerrarii" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} /> GabsFerrarii
          </a>
          <a href="https://www.linkedin.com/in/gabes-ferreira/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} /> gabes-ferreira
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
