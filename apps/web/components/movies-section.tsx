import { Movie } from '@repo/core/types/api-response.types'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import MovieCard from './movie-card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel'

interface MoviesSectionProps {
  title: string
  movies: Movie[]
  loading?: boolean
  seeMore?: boolean
  seeMoreHref?: string
  className?: string
  type?: 'movie' | 'tv'
  language?: string
}

export function MoviesSection({
  title,
  movies,
  loading = false,
  seeMore = true,
  seeMoreHref = '#',
  className = '',
  type = 'movie',
  language = 'pt-BR',
}: MoviesSectionProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>

        {seeMore && (
          <Link
            href={seeMoreHref}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
          >
            <span className="text-sm font-medium">Ver mais</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>

      {loading ? (
        <div className="flex gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 w-64">
              <div className="w-full aspect-[2/3] bg-gray-700 rounded-lg animate-pulse mb-3" />
              <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse mb-2" />
              <div className="h-3 w-1/2 bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>
      ) : (
        <Carousel
          opts={{
            align: 'start',
            slidesToScroll: 1,
            watchDrag: true,
            watchResize: true,
            watchSlides: true,
            dragFree: true,
            containScroll: 'trimSnaps',
          }}
          plugins={[WheelGesturesPlugin()]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {movies.map((movie) => (
              <CarouselItem
                key={movie.id}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  description={movie.overview}
                  imgUrl={movie.poster_path}
                  rating={movie.vote_average}
                  releaseDate={movie.release_date || movie.first_air_date || ''}
                  genres={movie.genre_ids}
                  type={type}
                  language={language}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      )}
    </section>
  )
}
