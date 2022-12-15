import { useCallback, useEffect, useState } from "react"

export const useMediaQuery = (width: number): boolean => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e: { matches: any }) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addListener(updateTarget)
    if (media.matches) {
      setTargetReached(true)
    }
    return () => media.removeListener(updateTarget)
  }, [])

  return targetReached
}

export const useIsMobile = () => {
  return useMediaQuery(650)
}
