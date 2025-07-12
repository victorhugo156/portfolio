
import { useEffect, useState } from 'react'
import { ScrollContainer, ScrollIndicator } from './styles'

export function ScrollProgressBar() {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.body.scrollHeight

      const totalScrollable = docHeight - windowHeight
      const scrollPercent = (scrollTop / totalScrollable) * 100
      setScrollHeight(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ScrollContainer>
      <ScrollIndicator style={{ height: `${scrollHeight}%` }} />
    </ScrollContainer>
  )
}
