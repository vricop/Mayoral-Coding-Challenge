import { Employee } from '@types'
import { useEffect, useState } from 'react'

export function useFetch(
  url: string,
  options: RequestInit | undefined = undefined
) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const request = await fetch(url, options)
    const { data } = await request.json()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading }
}
