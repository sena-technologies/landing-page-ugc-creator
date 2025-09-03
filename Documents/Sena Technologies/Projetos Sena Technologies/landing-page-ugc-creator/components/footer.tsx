import Link from "next/link"
import { Instagram, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-brown-deep text-beige-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold">Beauty Creator</h3>
            <p className="text-sm opacity-90">
              UGC Creator especializada em conteúdo autêntico para marcas de beleza. Transformando produtos em histórias
              que conectam.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/portfolio" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Portfólio
              </Link>
              <Link href="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Serviços
              </Link>
              <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Contato
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-medium">Conecte-se</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-rose-burnt rounded-full hover:bg-rose-burnt/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-rose-burnt rounded-full hover:bg-rose-burnt/80 transition-colors"
                aria-label="TikTok"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="mailto:contato@beautycreator.com"
                className="p-2 bg-rose-burnt rounded-full hover:bg-rose-burnt/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-dark mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">© 2024 Beauty Creator. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
