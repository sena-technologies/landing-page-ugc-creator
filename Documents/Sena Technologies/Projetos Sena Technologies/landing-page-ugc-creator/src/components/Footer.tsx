import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1 - Info */}
          <div>
            <h3 className="text-lg font-semibold text-brand-brown-dark mb-4">UGC Creator</h3>
            <p className="text-brand-brown-light mb-4">
              Criação de conteúdo autêntico e profissional para marcas de beleza.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-brand-brown-dark mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/portfolio"
                  className="text-brand-brown-light hover:text-brand-brown-medium transition-colors"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-brand-brown-light hover:text-brand-brown-medium transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-brand-brown-light hover:text-brand-brown-medium transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-lg font-semibold text-brand-brown-dark mb-4">Contato</h3>
            <ul className="space-y-2 text-brand-brown-light">
              <li>Email: contato@ugccreator.com</li>
              <li>Instagram: @ugccreator</li>
              <li>TikTok: @ugccreator</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-brand-brown-light/20">
          <p className="text-center text-brand-brown-light">
            © {new Date().getFullYear()} UGC Creator. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
