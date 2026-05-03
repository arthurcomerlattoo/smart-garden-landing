import { Leaf, Droplets, Sun, Cpu, Mail, MapPin, ArrowRight, Sprout } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import heroImg from "@/assets/hero-garden.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

const benefits = [
  { icon: Droplets, title: "Irrigação Automática", desc: "Sistema inteligente que rega suas plantas no momento exato com a quantidade certa de água." },
  { icon: Cpu, title: "Sensores de Solo", desc: "Monitoramento contínuo de umidade, pH e nutrientes para um cultivo sempre saudável." },
  { icon: Sun, title: "LED Integrado", desc: "Iluminação de espectro completo que simula a luz solar para crescimento acelerado." },
];

const products = [
  { img: p1, name: "Manjericão" },
  { img: p2, name: "Alfaces" },
  { img: p3, name: "Tomate Cereja" },
  { img: p4, name: "Morangos" },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <Sprout className="text-primary" />
            <span>Verdee</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a>
            <a href="#galeria" className="hover:text-primary transition-colors">Galeria</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </div>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href="#contato">Comprar</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <Leaf className="w-4 h-4" /> Cultivo inteligente em casa
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Sua horta que <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>cuida sozinha</span> de você.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Alimentos frescos o ano inteiro, sem terra, sem sujeira e sem esforço. A tecnologia faz tudo — você só colhe.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-soft)]">
                <a href="#contato">Quero a minha <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#beneficios">Como funciona</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in-95 duration-700">
            <div className="absolute inset-0 blur-3xl opacity-40" style={{ background: "var(--gradient-hero)" }} />
            <img src={heroImg} alt="Horta inteligente automatizada com LEDs" width={1536} height={1024}
              className="relative rounded-3xl shadow-[var(--shadow-glow)] border border-border" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tecnologia que faz brotar</h2>
            <p className="text-muted-foreground text-lg">Três sistemas trabalhando 24/7 para o cultivo perfeito.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-primary-foreground group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-hero)" }}>
                  <b.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-24 bg-secondary/40">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Do plantio à colheita</h2>
            <p className="text-muted-foreground text-lg">O que você pode cultivar com a Verdee.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <div key={p.name} className="group relative overflow-hidden rounded-2xl aspect-square">
                <img src={p.img} alt={p.name} loading="lazy" width={768} height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-background font-semibold text-lg">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-24 bg-background">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Vamos plantar essa ideia?</h2>
            <p className="text-muted-foreground text-lg">Deixe seu contato e receba uma demonstração.</p>
          </div>
          <form onSubmit={submit} className="space-y-4 p-8 rounded-3xl bg-card border border-border shadow-[var(--shadow-soft)]">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Seu nome" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Seu e-mail" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40" />
            <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Como podemos ajudar?" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">Enviar mensagem</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 bg-secondary/30">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <Sprout className="text-primary w-5 h-5" /> Verdee
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> ola@verdee.com</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> São Paulo, BR</span>
          </div>
          <div>© 2026 Verdee. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
