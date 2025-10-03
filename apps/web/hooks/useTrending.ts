import api from '@/lib/api'
import { Movie } from '@repo/core/types/api-response.types'
import { useEffect, useState } from 'react'

export function useTrending(type: 'movie' | 'tv') {
  const [data, setData] = useState<{ day: Movie[], week: Movie[] }>({ day: [], week: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const [dayRes, weekRes] = await Promise.all([
          api.get(`/movies/trending?time=day&type=${type}`),
          api.get(`/movies/trending?time=week&type=${type}`)
        ])
        setData({
          day: dayRes.data.data.results,
          week: weekRes.data.data.results
        })
      } catch (err) {
        setError('Failed to fetch trending data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [type])

  return { data, loading, error }
}
