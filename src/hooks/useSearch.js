import { useEffect, useRef, useState } from "react"

export function useSearch () {
  const [search, setSearch] = useState("")
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search==="") {
      setError("Debes ingresar una película")
      return 
    }

    if (search.match(/^\d+$/)) {
        setError('No se puede buscar una película con un número')
        return
      }
  
      if (search.length < 3) {
        setError('La búsqueda debe tener al menos 3 caracteres')
        return
      }
      setError(null)
  }, [search])
  
  return {
    search , setSearch, error
    }
}