import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function LensFlare({ delay = 2.2, interval = 10 }) {
    const flareRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        const flare = flareRef.current
        const container = containerRef.current
        if (!flare || !container) return

        const runFlare = () => {
            const tl = gsap.timeline()
            tl.set(flare, {
                left: '-30%',
                opacity: 0,
            })
            tl.to(flare, {
                left: '130%',
                opacity: 1,
                duration: 1.6,
                ease: 'power2.inOut',
            })
            tl.to(flare, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.in',
            }, '-=0.4')
        }

        // Initial flare after delay
        const initialTimeout = setTimeout(() => {
            runFlare()
        }, delay * 1000)

        // Recurring flare
        const recurring = setInterval(() => {
            runFlare()
        }, interval * 1000)

        return () => {
            clearTimeout(initialTimeout)
            clearInterval(recurring)
        }
    }, [delay, interval])

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none z-[6]"
            aria-hidden="true"
        >
            {/* Main flare beam */}
            <div
                ref={flareRef}
                className="absolute top-0 h-full opacity-0"
                style={{
                    width: '180px',
                    left: '-30%',
                    background: `linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(255, 255, 255, 0.01) 15%,
                        rgba(255, 248, 230, 0.06) 30%,
                        rgba(255, 248, 230, 0.12) 45%,
                        rgba(255, 255, 255, 0.18) 50%,
                        rgba(255, 248, 230, 0.12) 55%,
                        rgba(255, 248, 230, 0.06) 70%,
                        rgba(255, 255, 255, 0.01) 85%,
                        transparent 100%
                    )`,
                    transform: 'skewX(-12deg)',
                }}
            />
        </div>
    )
}
