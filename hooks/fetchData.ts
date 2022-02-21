import { Employee } from '@types'
import { useEffect, useState } from 'react'

export function useFetch<Type>(
  url: string,
  options: RequestInit | undefined = undefined
) {
  const [data, setData] = useState<Type | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const request = await fetch(url, options)
    const response = await request.json()
    setData(response)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading }
}
