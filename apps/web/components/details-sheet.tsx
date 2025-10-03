"use client"

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { MovieDetails } from '@repo/core/types/api-response.types'

interface DetailsSheetProps {
  item: MovieDetails
}

export default function DetailsSheet({ item }: DetailsSheetProps) {
  const trailer = item.videos?.results?.find((v) => v.type === 'Trailer' && v.site === 'YouTube')

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Mais informações</Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="bg-gray-950 text-white max-h-[80vh] overflow-auto p-6">
        <SheetHeader>
          <SheetTitle className='text-primary'>{item.title || item.name}</SheetTitle>
          {item.tagline && <SheetDescription>{item.tagline}</SheetDescription>}
        </SheetHeader>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {trailer && (
              <div className="aspect-video w-full bg-black rounded overflow-hidden shadow">
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title={trailer.name}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Sinopse</h3>
              <p className="text-sm text-gray-200 leading-relaxed">{item.overview}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Informações</h3>
              <ul className="text-sm text-gray-200 space-y-1">
                {item.runtime && (
                  <li>
                    <strong className="text-accent">Duração:</strong> <span className="ml-2">{item.runtime} min</span>
                  </li>
                )}
                <li>
                  <strong className="text-accent">Lançamento:</strong>
                  <span className="ml-2">{item.release_date || item.first_air_date}</span>
                </li>
                <li>
                  <strong className="text-accent">Avaliação:</strong>
                  <span className="ml-2">{item.vote_average.toFixed(1)}/10</span>
                </li>
                {item.homepage && (
                  <li>
                    <strong className="text-accent">Site:</strong>
                    <a className="ml-2 text-accent hover:underline" href={item.homepage} target="_blank" rel="noreferrer">
                      Acessar
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Elenco</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {item.credits?.cast?.slice(0, 12).map((c) => (
                  <div key={c.id} className="text-center text-xs">
                    {c.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w185${c.profile_path}`}
                        alt={c.name}
                        className="w-full aspect-[2/3] object-cover rounded"
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-gray-800 rounded" />
                    )}
                    <div className="mt-2">
                      <div className="font-medium text-gray-100">{c.name}</div>
                      <div className="text-gray-400">{c.character}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SheetFooter>
          <div className="flex items-center justify-end gap-3">
            <SheetClose asChild>
              <Button variant="outline">Fechar</Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
