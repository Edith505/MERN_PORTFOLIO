import { useEffect } from 'react'

/** Animate once on entry; content stays readable without animation support. */
export function useScrollReveal() {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches || !('IntersectionObserver' in window)) return
    const animations = new Set<Animation>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        observer.unobserve(entry.target)
        if (motion.matches || entry.target.contains(document.activeElement)) return
        const animation = entry.target.animate([
          { opacity: 0.2, transform: 'translateY(24px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 550, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' })
        animations.add(animation)
        animation.onfinish = () => animations.delete(animation)
      })
    }, { threshold: 0.08 })
    document.querySelectorAll('main section:not(#home) > h2, main section:not(#home) > p, main section:not(#home) article').forEach((element) => observer.observe(element))
    const stop = () => {
      if (!motion.matches) return
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
      animations.clear()
    }
    motion.addEventListener('change', stop)
    return () => {
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
      motion.removeEventListener('change', stop)
    }
  }, [])
}
