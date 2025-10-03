'use client'

import { useTrending } from '@/hooks/useTrending'
import { useState } from 'react'
import { TrendingCarousel } from './trending-carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export default function TrendingSection() {
  const [type, setType] = useState<'movie' | 'tv'>('movie')
  const { data, loading, error } = useTrending(type)

  return (
    <Tabs defaultValue="movie" onValueChange={(value) => setType(value as 'movie' | 'tv')}>
      <TabsList>
        <TabsTrigger value="movie" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Filmes</TabsTrigger>
        <TabsTrigger value="tv" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Séries</TabsTrigger>
      </TabsList>
      <TabsContent value="movie">
        <TrendingCarousel title="Em Alta Hoje" movies={data.day} loading={loading} type="movie" />
        <TrendingCarousel title="Em Alta Esta Semana" movies={data.week} loading={loading} type="movie" />
      </TabsContent>
      <TabsContent value="tv">
        <TrendingCarousel title="Em Alta Hoje" movies={data.day} loading={loading} type="tv" />
        <TrendingCarousel title="Em Alta Esta Semana" movies={data.week} loading={loading} type="tv" />
      </TabsContent>
    </Tabs>
  )
}
