import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/logo/logo";
import { NAV_LINKS, SITE, SOCIAL_LINKS, whatsappUrl } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-white/8 bg-background-secondary"
      aria-label="Rodapé"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="h-12 w-auto sm:h-14" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
              A nova geração da telefonia móvel. Conectividade premium em todo o Brasil.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground-muted">
                <MapPin className="h-4 w-4 text-primary" />
                {SITE.address}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Redes sociais
            </h3>
            <ul className="mt-4 space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-foreground-muted">
            © {currentYear} {SITE.name}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/termo-smp"
              className="text-xs text-foreground-muted transition-colors hover:text-white"
            >
              Termo SMP
            </a>
            <a
              href="/termo-smp#privacidade"
              className="text-xs text-foreground-muted transition-colors hover:text-white"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
