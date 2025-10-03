import { Badge } from '@/components/ui/badge'
import { useGenres } from '@/hooks/useGenres'
import { Star } from 'lucide-react'
import Image from "next/image"

interface MoviceCardProps {
    imgUrl: string
    title: string
    description: string
    rating: number
    releaseDate: string
    genres: number[]
    id: number
    type?: 'movie' | 'tv'
    language?: string
}

const calcRating = (rating: number) => {
    return Math.round(rating * 10);
}

export default function MovieCard({ imgUrl, title, description, rating, releaseDate: releaseData, genres, id, type = 'movie', language }: MoviceCardProps) {
    const { getGenreNames } = useGenres(type, language)
    const imageUrl = `https://image.tmdb.org/t/p/w342${imgUrl}`;
    
    const genreNames = getGenreNames(genres)

    return (
        <div
            key={id}
            data-id={id}
            className="relative w-full max-w-xs mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
        >
            <div className="relative w-full aspect-[2/3]">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover object-center transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <header className="mb-3">
                            <h2 className="text-lg font-bold mb-2 line-clamp-2">{title}</h2>
                            <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
                        </header>

                        <footer className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4" />
                                <span className="font-semibold">{calcRating(rating)}</span>
                            </div>

                            <div className="text-gray-300">
                                {releaseData.split('-')[0]}
                            </div>
                        </footer>

                        {genreNames.length > 0 && (
                            <div className="mt-2 flex gap-2 flex-wrap">
                                {genreNames.slice(0, 3).map((genreName) =>
                                    <Badge key={genreName} variant="outline" className='border-accent text-accent text-xs'>
                                        {genreName}
                                    </Badge>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}