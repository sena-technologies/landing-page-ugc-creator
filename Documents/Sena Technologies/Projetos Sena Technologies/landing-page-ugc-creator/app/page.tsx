import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageLayout } from "@/components/page-layout"
import { Star, Users, Video, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <PageLayout className="bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              ✨ UGC Creator Especializada em Beleza
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              Criando conteúdo autêntico para marcas de <span className="text-primary">beleza</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              UGC Creator especializada em maquiagem, skincare e produtos capilares. Transformo produtos em histórias
              que conectam com seu público através de conteúdo genuíno e envolvente.
            </p>

            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">500K+ seguidores</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">200+ vídeos UGC</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">50+ marcas parceiras</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/portfolio">Ver Portfólio</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Vamos Conversar</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/professional-beauty-creator-portrait-with-makeup-a.jpg"
                alt="UGC Creator - Foto de perfil profissional"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <Card className="absolute -bottom-6 -left-6 w-64 bg-background/95 backdrop-blur-sm border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  "Conteúdo autêntico que realmente converte. Resultados incríveis!"
                </p>
                <p className="text-xs font-medium mt-2">— Marca de Skincare</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Especialidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crio conteúdo autêntico e envolvente para diferentes categorias de beleza
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💄</span>
              </div>
              <h3 className="font-semibold mb-2">Maquiagem</h3>
              <p className="text-sm text-muted-foreground">
                Tutoriais, reviews e demonstrações de produtos de maquiagem
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold mb-2">Skincare</h3>
              <p className="text-sm text-muted-foreground">Rotinas de cuidados e testes de produtos para a pele</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💇‍♀️</span>
              </div>
              <h3 className="font-semibold mb-2">Cabelo</h3>
              <p className="text-sm text-muted-foreground">Styling, tratamentos e produtos capilares</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronta para criar conteúdo incrível?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Vamos trabalhar juntas para criar conteúdo autêntico que conecta sua marca com o público certo
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Solicitar Orçamento</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  )
}
