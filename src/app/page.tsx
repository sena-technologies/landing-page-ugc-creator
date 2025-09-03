import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative bg-brand-beige/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="text-center md:text-left">
              <h1 className="mb-6 text-brand-brown-dark">
                Criação de Conteúdo Autêntico para Marcas de Beleza
              </h1>
              <p className="text-lg mb-8 text-brand-brown-light">
                Transforme sua marca em uma referência no mundo da beleza com conteúdo UGC profissional e autêntico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-brown-medium hover:bg-brand-brown-dark transition-colors"
                >
                  Ver Portfólio
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-brand-brown-light rounded-md shadow-sm text-base font-medium text-brand-brown-medium hover:bg-brand-brown-light/10 transition-colors"
                >
                  Fazer Orçamento
                </Link>
              </div>
            </div>
            
            {/* Imagem */}
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/hero.jpg"
                alt="UGC Creator em ação"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-brand-brown-dark">Serviços</h2>
            <p className="text-lg text-brand-brown-light max-w-2xl mx-auto">
              Conteúdo personalizado e profissional para sua marca de beleza se destacar nas redes sociais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-lg border border-brand-beige hover:border-brand-pink transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4 text-brand-brown-dark">{service.title}</h3>
                <p className="text-brand-brown-light mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-brand-brown-medium hover:text-brand-brown-dark transition-colors inline-flex items-center"
                >
                  Saiba mais
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="bg-brand-beige/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="relative h-[400px]">
              <Image
                src="/images/about.jpg"
                alt="Sobre a UGC Creator"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Texto */}
            <div>
              <h2 className="mb-6 text-brand-brown-dark">Sobre Mim</h2>
              <p className="text-lg mb-6 text-brand-brown-light">
                Sou uma criadora de conteúdo especializada no nicho de beleza, com mais de 5 anos de experiência em produção de conteúdo para redes sociais.
              </p>
              <p className="text-lg mb-8 text-brand-brown-light">
                Trabalho com marcas de maquiagem, skincare e produtos capilares, criando conteúdo autêntico que conecta seu produto ao público-alvo.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-brown-medium hover:bg-brand-brown-dark transition-colors"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "UGC para Maquiagem",
    description: "Criação de conteúdo mostrando aplicação, swatches e resultados dos seus produtos de maquiagem."
  },
  {
    title: "UGC para Skincare",
    description: "Demonstração da aplicação e rotina com seus produtos skincare, destacando texturas e benefícios."
  },
  {
    title: "UGC para Cabelo",
    description: "Conteúdo focado em tutoriais de aplicação e resultados dos seus produtos capilares."
  }
]
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
