import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Nome */}
          <Link href="/" className="text-2xl font-semibold text-brand-brown-dark">
            UGC Creator
          </Link>

          {/* Links de Navegação */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/portfolio" 
              className="text-brand-brown-light hover:text-brand-brown-medium transition-colors"
            >
              Portfólio
            </Link>
            <Link 
              href="/services" 
              className="text-brand-brown-light hover:text-brand-brown-medium transition-colors"
            >
              Serviços
            </Link>
            <Link 
              href="/contact" 
              className="text-brand-brown-light hover:text-brand-brown-medium transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-brown-medium hover:bg-brand-brown-dark transition-colors"
            >
              Fazer Orçamento
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
