"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, Heart, MessageCircle, Share } from "lucide-react"

interface MediaEmbedProps {
  type: "tiktok" | "instagram"
  title: string
  description: string
  category: string
  thumbnail: string
  embedUrl?: string
  stats?: {
    likes?: number
    comments?: number
    shares?: number
  }
}

export function MediaEmbed({ type, title, description, category, thumbnail, embedUrl, stats }: MediaEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const handlePlay = () => {
    setIsLoaded(true)
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[9/16] bg-secondary">
        {!isLoaded ? (
          <div
            className="relative w-full h-full bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${thumbnail})` }}
            onClick={handlePlay}
          >
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                <Play className="h-6 w-6 text-primary ml-1" />
              </div>
            </div>
            <Badge className="absolute top-3 left-3" variant={type === "tiktok" ? "default" : "secondary"}>
              {type === "tiktok" ? "TikTok" : "Instagram"}
            </Badge>
          </div>
        ) : embedUrl ? (
          <iframe
            src={embedUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <p className="text-secondary-foreground">Embed não disponível</p>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <ExternalLink className="h-4 w-4 text-muted-foreground" />
        </div>

        <h3 className="font-semibold text-sm mb-2 line-clamp-2">{title}</h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{description}</p>

        {stats && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {stats.likes && (
              <div className="flex items-center gap-1">
                <Heart className="h-3 w-3" />
                <span>{stats.likes > 1000 ? `${(stats.likes / 1000).toFixed(1)}k` : stats.likes}</span>
              </div>
            )}
            {stats.comments && (
              <div className="flex items-center gap-1">
                <MessageCircle className="h-3 w-3" />
                <span>{stats.comments}</span>
              </div>
            )}
            {stats.shares && (
              <div className="flex items-center gap-1">
                <Share className="h-3 w-3" />
                <span>{stats.shares}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
