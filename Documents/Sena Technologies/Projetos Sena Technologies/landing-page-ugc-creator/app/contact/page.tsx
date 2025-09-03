import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageLayout } from "@/components/page-layout"
import { ContactForm } from "@/components/contact-form"
import { Mail, MessageCircle, Clock, Instagram, MapPin } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "contato@beautycreator.com",
      action: "Enviar email",
      href: "mailto:contato@beautycreator.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "@beautycreator",
      action: "Seguir no Instagram",
      href: "#",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "(11) 99999-9999",
      action: "Chamar no WhatsApp",
      href: "https://wa.me/5511999999999",
    },
  ]

  const faqs = [
    {
      question: "Qual o prazo médio de entrega?",
      answer:
        "Normalmente entre 5-10 dias úteis, dependendo da complexidade do projeto. Para projetos urgentes, ofereço entrega expressa.",
    },
    {
      question: "Vocês fazem revisões no conteúdo?",
      answer:
        "Sim! Incluo até 2 rodadas de revisões no valor do projeto. Revisões adicionais têm custo extra de R$ 200 cada.",
    },
    {
      question: "Como funciona o processo de pagamento?",
      answer:
        "50% na aprovação da proposta e 50% na entrega final. Aceito PIX, transferência bancária e cartão de crédito.",
    },
    {
      question: "Posso usar o conteúdo em todas as plataformas?",
      answer:
        "Os direitos básicos incluem uso em redes sociais da marca. Para uso em campanhas pagas ou outros canais, conversamos sobre direitos estendidos.",
    },
  ]

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Vamos Trabalhar Juntas
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Pronta para criar conteúdo autêntico que conecta sua marca com o público? Vamos conversar sobre seu projeto!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info & Methods */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="font-semibold mb-4">Outras Formas de Contato</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <method.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{method.title}</div>
                          <div className="text-sm text-muted-foreground">{method.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Tempo de Resposta</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Respondo todas as mensagens em até <strong>24 horas</strong>. Para projetos urgentes, entre em contato
                  via WhatsApp.
                </p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Localização</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  São Paulo, SP - Brasil
                  <br />
                  Atendo clientes de todo o país
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground">Respostas para as dúvidas mais comuns sobre meus serviços</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ainda Tem Dúvidas?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Estou sempre disponível para esclarecer qualquer questão sobre meus serviços ou seu projeto específico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chamar no WhatsApp
            </a>
            <a
              href="mailto:contato@beautycreator.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
