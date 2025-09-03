"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <CardContent className="p-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
          <p className="text-muted-foreground mb-6">
            Obrigada pelo seu interesse! Retornarei em até 24 horas com uma proposta personalizada.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Enviar Nova Mensagem
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Send className="h-5 w-5 text-primary" />
          Solicitar Orçamento
        </CardTitle>
        <CardDescription>
          Preencha o formulário abaixo com detalhes do seu projeto. Quanto mais informações, melhor será minha proposta!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo *</Label>
              <Input id="name" placeholder="Seu nome" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" placeholder="seu@email.com" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Empresa/Marca *</Label>
              <Input id="company" placeholder="Nome da sua empresa" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" placeholder="(11) 99999-9999" />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <Label htmlFor="service">Tipo de Serviço *</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo de conteúdo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="makeup">UGC para Maquiagem</SelectItem>
                <SelectItem value="skincare">UGC para Skincare</SelectItem>
                <SelectItem value="hair">UGC para Cabelo</SelectItem>
                <SelectItem value="multiple">Múltiplas Categorias</SelectItem>
                <SelectItem value="other">Outro (especificar na mensagem)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Orçamento Estimado</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione sua faixa de orçamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="500-1000">R$ 500 - R$ 1.000</SelectItem>
                <SelectItem value="1000-2500">R$ 1.000 - R$ 2.500</SelectItem>
                <SelectItem value="2500-5000">R$ 2.500 - R$ 5.000</SelectItem>
                <SelectItem value="5000+">R$ 5.000+</SelectItem>
                <SelectItem value="discuss">Prefiro discutir</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Prazo Desejado</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Quando precisa do conteúdo?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urgent">Urgente (até 3 dias)</SelectItem>
                <SelectItem value="week">1 semana</SelectItem>
                <SelectItem value="2weeks">2 semanas</SelectItem>
                <SelectItem value="month">1 mês</SelectItem>
                <SelectItem value="flexible">Flexível</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Detalhes do Projeto *</Label>
            <Textarea
              id="message"
              placeholder="Conte-me mais sobre seu projeto: objetivos, público-alvo, produtos específicos, estilo desejado, onde será usado o conteúdo, etc."
              className="min-h-[120px]"
              required
            />
          </div>

          {/* Additional Options */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Serviços Adicionais (opcionais)</Label>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="rush" />
                <Label htmlFor="rush" className="text-sm">
                  Entrega expressa (+30%)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="revisions" />
                <Label htmlFor="revisions" className="text-sm">
                  Revisões extras (+R$ 200)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="usage" />
                <Label htmlFor="usage" className="text-sm">
                  Direitos de uso estendidos
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="consultation" />
                <Label htmlFor="consultation" className="text-sm">
                  Consultoria de estratégia
                </Label>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm">
              Concordo com os termos de serviço e política de privacidade *
            </Label>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar Solicitação"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
