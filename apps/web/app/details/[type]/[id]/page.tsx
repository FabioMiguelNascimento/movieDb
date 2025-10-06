'use client'

import DetailsSheet from '@/components/details-sheet';
import { useDetails } from '@/hooks/useDetails';
import { notFound, useParams, useRouter } from 'next/navigation';

export default function DetailsPage() {
  const params = useParams<{ type: 'movie' | 'tv'; id: string }>()
  const router = useRouter()
  const { type, id } = params

  if (!['movie', 'tv'].includes(type)) {
    notFound()
  }

  const { data: item, loading, error } = useDetails(type, id)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-primary/20 rounded mb-8 w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="w-full aspect-[2/3] bg-primary/20 rounded-lg"></div>
              </div>
              <div className="md:col-span-2 space-y-4">
                <div className="h-4 bg-primary/20 rounded w-full"></div>
                <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                <div className="h-4 bg-primary/20 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !item) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Erro ao carregar detalhes</h1>
          <p className="text-gray-400 mb-8">{error || 'Conteúdo não encontrado'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {item.backdrop_path && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="relative z-10 min-h-screen text-white flex items-center">
        <div className="max-w-7xl mx-auto px-8 py-16 w-full">
          <div className="max-w-4xl space-y-1">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              {item.runtime && <span>{item.runtime} min</span>}
              {item.runtime && <span>•</span>}
              <span>{item.genres?.slice(0, 2).map((g) => g.name).join(', ')}</span>
              <span>•</span>
              <span>{item.release_date?.split('-')[0] || item.first_air_date?.split('-')[0]}</span>
            </div>

            <h1 className="text-primary text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {item.title || item.name}
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-accent">{item.vote_average.toFixed(1)}</span>
                <span className="text-gray-400">/10</span>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-gray-200 max-w-3xl">
              {item.overview}
            </p>

             <div>
                <DetailsSheet item={item} />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
