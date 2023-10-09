import { useState, useEffect } from 'react'

function useDebounce(value: any, delay: number, callback: any) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  useEffect(() => {
    if (debouncedValue) {
      callback(debouncedValue)
    }
  }, [debouncedValue])

  return debouncedValue
}

export default useDebounce
