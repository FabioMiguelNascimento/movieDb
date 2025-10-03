import { Movie } from '@repo/core/types/api-response.types'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { Ubuntu } from 'next/font/google'
import MovieCard from './movie-card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap'
})

const getLeftClass = (index: number) => {
  if (index < 9) return '-left-8 md:-left-10';
  return '-left-12 md:-left-16';
}

interface TrendingCarouselProps {
  title: string
  movies: Movie[]
  loading: boolean
  type: 'movie' | 'tv'
}

export function TrendingCarousel({ title, movies, loading, type }: TrendingCarouselProps) {
  return (
    <section className="w-full mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      {loading ? (
        <div className="flex gap-4 overflow-x-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 w-64">
              <div className="w-full aspect-[2/3] bg-primary rounded-lg animate-pulse mb-3" />
              <div className="h-4 w-3/4 bg-primary rounded animate-pulse mb-2" />
              <div className="h-3 w-1/2 bg-primary rounded animate-pulse" />
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
            {movies.map((movie, index) => (
              <CarouselItem
                key={movie.id}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/4"
              >
                <div className="relative ml-14 group">
                  <span className={`absolute ${getLeftClass(index)} top-1/4 md:top-1/2 transform -translate-y-1/2 text-8xl md:text-9xl font-bold text-primary z-10 group-hover:opacity-20 pointer-events-none opacity-100 text-center w-12 md:w-16 tracking-[-0.1em] transition-opacity duration-300 ${ubuntu.className}`}>{index + 1}</span>
                  <MovieCard
                    id={movie.id}
                    title={movie.title || movie.name || ''}
                    description={movie.overview}
                    imgUrl={movie.poster_path}
                    rating={movie.vote_average}
                    releaseDate={movie.release_date || movie.first_air_date || ''}
                    genres={movie.genre_ids}
                    type={type}
                    imageSize="w500"
                  />
                </div>
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
