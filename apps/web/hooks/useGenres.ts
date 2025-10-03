import api from '@/lib/api'
import { Genre } from '@repo/core/types/api-response.types'
import { useEffect, useState } from 'react'

export function useGenres(type: 'movie' | 'tv' = 'movie', language: string = 'pt-BR') {
  const [genres, setGenres] = useState<Genre[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setLoading(true)
        const response = await api.get(`/movies/genres?type=${type}&language=${language}`)

        if (response.data.success && response.data.data) {
          setGenres(response.data.data)
        } else {
          throw new Error(response.data.message )
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error'
        setError(errorMessage)
        console.error('Error fetching genres:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchGenres()
  }, [type, language])

  const getGenreNames = (genreIds: number[]): string[] => {
    return genreIds
      .map(id => genres.find(genre => genre.id === id)?.name)
      .filter(Boolean) as string[]
  }

  const getGenreName = (genreId: number): string => {
    return genres.find(genre => genre.id === genreId)?.name || `Genre ${genreId}`
  }

  return {
    genres,
    loading,
    error,
    getGenreNames,
    getGenreName,
  }
}
