import api from '@/lib/api'
import { MovieDetails } from '@repo/core/types/api-response.types'
import { useEffect, useState } from 'react'

export function useDetails(type: 'movie' | 'tv', id: string | number, language: string = 'pt-BR') {
  const [data, setData] = useState<MovieDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!type || !id) return

    const fetchDetails = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await api.get(`/movies/details/${type}/${id}?language=${language}`)

        if (response.data.success) {
          setData(response.data.data)
        } else {
          throw new Error(response.data.message)
        }
      } catch (err: any) {
        setError(err.response?.data?.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [type, id, language])

  return { data, loading, error }
}
