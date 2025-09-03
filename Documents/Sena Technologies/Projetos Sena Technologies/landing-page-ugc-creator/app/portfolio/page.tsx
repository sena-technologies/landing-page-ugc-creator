"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { MediaEmbed } from "@/components/media-embed"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", label: "Todos" },
    { id: "makeup", label: "Maquiagem" },
    { id: "skincare", label: "Skincare" },
    { id: "hair", label: "Cabelo" },
  ]

  const portfolioItems = [
    {
      type: "tiktok" as const,
      title: "Tutorial: Base perfeita para pele oleosa",
      description: "Testando a nova base da marca X e mostrando como aplicar para durar o dia todo",
      category: "makeup",
      thumbnail: "/makeup-tutorial-base-foundation-application.jpg",
      stats: { likes: 15200, comments: 342, shares: 89 },
    },
    {
      type: "instagram" as const,
      title: "Rotina noturna de skincare",
      description: "Minha rotina completa de cuidados noturnos com produtos incríveis",
      category: "skincare",
      thumbnail: "/skincare-routine-nighttime-products-beauty.jpg",
      stats: { likes: 8900, comments: 156, shares: 45 },
    },
    {
      type: "tiktok" as const,
      title: "Transformação capilar com máscara",
      description: "Testando máscara capilar que promete hidratar em 3 minutos",
      category: "hair",
      thumbnail: "/hair-mask-transformation-before-after.jpg",
      stats: { likes: 22100, comments: 567, shares: 134 },
    },
    {
      type: "instagram" as const,
      title: "Look natural para o dia a dia",
      description: "Maquiagem rápida e natural usando apenas 5 produtos",
      category: "makeup",
      thumbnail: "/natural-makeup-look-everyday-beauty.jpg",
      stats: { likes: 12400, comments: 289, shares: 67 },
    },
    {
      type: "tiktok" as const,
      title: "Serum anti-idade: vale a pena?",
      description: "Review honesta do serum mais caro que já testei",
      category: "skincare",
      thumbnail: "/anti-aging-serum-review-skincare-test.jpg",
      stats: { likes: 18700, comments: 423, shares: 98 },
    },
    {
      type: "instagram" as const,
      title: "Penteado fácil para cabelo cacheado",
      description: "Tutorial de penteado que funciona para todos os tipos de cacho",
      category: "hair",
      thumbnail: "/curly-hair-hairstyle-tutorial-easy.jpg",
      stats: { likes: 9800, comments: 178, shares: 52 },
    },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Portfólio</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos mais recentes criando conteúdo autêntico para marcas de beleza
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                className={activeFilter === category.id ? "bg-primary" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <MediaEmbed
              key={index}
              type={item.type}
              title={item.title}
              description={item.description}
              category={item.category}
              thumbnail={item.thumbnail}
              stats={item.stats}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-secondary to-accent/50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Resultados que Falam por Si</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <div className="text-sm text-muted-foreground">Total de Visualizações</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Taxa de Engajamento</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Marcas Parceiras</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Vídeos Criados</div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
