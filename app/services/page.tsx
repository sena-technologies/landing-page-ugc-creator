import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PageLayout } from "@/components/page-layout"
import { Check, Clock, Video, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "UGC para Maquiagem",
      description: "Vídeos autênticos testando e aplicando produtos de maquiagem",
      icon: "💄",
      features: [
        "Tutoriais de aplicação passo a passo",
        "Reviews honestas e detalhadas",
        "Before & After transformações",
        "Comparações entre produtos",
        "Looks para diferentes ocasiões",
      ],
      deliverables: ["3-5 vídeos por campanha", "Fotos em alta resolução", "Stories complementares"],
      timeline: "5-7 dias úteis",
      price: "A partir de R$ 800",
    },
    {
      title: "UGC para Skincare",
      description: "Conteúdo sobre rotinas de cuidados com a pele",
      icon: "✨",
      features: [
        "Rotinas matinais e noturnas",
        "Testes de produtos com resultados reais",
        "Explicação de ingredientes ativos",
        "Dicas para diferentes tipos de pele",
        "Acompanhamento de resultados",
      ],
      deliverables: ["4-6 vídeos por campanha", "Fotos de textura e aplicação", "Depoimento escrito"],
      timeline: "7-10 dias úteis",
      price: "A partir de R$ 900",
    },
    {
      title: "UGC para Cabelo",
      description: "Demonstrações de produtos capilares e penteados",
      icon: "💇‍♀️",
      features: [
        "Styling tutorials detalhados",
        "Product reviews com teste real",
        "Hair transformations completas",
        "Dicas para diferentes texturas",
        "Cuidados específicos por tipo de cabelo",
      ],
      deliverables: ["3-4 vídeos por campanha", "Fotos antes/durante/depois", "Reels de processo"],
      timeline: "5-7 dias úteis",
      price: "A partir de R$ 750",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Briefing Inicial",
      description: "Conversamos sobre seus objetivos, público-alvo e expectativas para o conteúdo",
    },
    {
      step: "02",
      title: "Estratégia de Conteúdo",
      description: "Desenvolvo roteiro personalizado alinhado com a identidade da sua marca",
    },
    {
      step: "03",
      title: "Produção",
      description: "Criação do conteúdo com equipamentos profissionais e edição cuidadosa",
    },
    {
      step: "04",
      title: "Entrega e Revisões",
      description: "Envio do material final com até 2 rodadas de ajustes incluídas",
    },
  ]

  const testimonials = [
    {
      name: "Marina Silva",
      role: "Marketing Manager - Marca de Skincare",
      content: "O conteúdo da Beauty Creator aumentou nosso engajamento em 150%. Autenticidade que realmente converte!",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      role: "Founder - Startup de Beleza",
      content: "Profissionalismo excepcional e resultados que superaram nossas expectativas. Recomendo sem hesitar!",
      rating: 5,
    },
  ]

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Serviços Especializados
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Serviços de UGC</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Ofereço conteúdo autêntico e envolvente para marcas de beleza que desejam conectar-se genuinamente com seu
            público através de storytelling visual impactante
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardTitle className="text-primary text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />O que está incluído:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="h-4 w-4 text-primary" />
                    <span className="font-medium">Entregáveis:</span>
                  </div>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="text-sm text-muted-foreground ml-6">
                      • {item}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{service.timeline}</span>
                  </div>
                  <div className="font-semibold text-primary">{service.price}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Processo simples e transparente para garantir que seu conteúdo seja exatamente como você imaginou
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground mx-auto mt-4 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O que Dizem Sobre Meu Trabalho</h2>
            <p className="text-muted-foreground">Depoimentos reais de marcas que confiaram no meu trabalho</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronta para Começar?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Vamos criar conteúdo autêntico que conecta sua marca com o público certo e gera resultados reais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Solicitar Orçamento</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/portfolio">Ver Portfólio</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
