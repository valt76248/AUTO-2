import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function GlitchEffect({ delay = 1.8, interval = 12 }) {
    const containerRef = useRef(null)
    const [isGlitching, setIsGlitching] = useState(false)
    const timeoutRef = useRef(null)
    const intervalRef = useRef(null)

    const triggerGlitch = () => {
        if (isGlitching) return
        setIsGlitching(true)

        const container = containerRef.current
        if (!container) return

        const slices = container.querySelectorAll('.glitch-slice')
        const scanlines = container.querySelector('.glitch-scanlines')
        const rgbShift = container.querySelector('.glitch-rgb')

        const tl = gsap.timeline({
            onComplete: () => setIsGlitching(false),
        })

        // Phase 1: Quick RGB split flash
        tl.to(rgbShift, {
            opacity: 1,
            duration: 0.05,
        })

        // Phase 2: Rapid glitch slices - horizontal displacement
        slices.forEach((slice, i) => {
            const direction = i % 2 === 0 ? 1 : -1
            const offset = (Math.random() * 30 + 5) * direction

            tl.to(slice, {
                x: offset,
                opacity: 0.8 + Math.random() * 0.2,
                duration: 0.05,
                ease: 'steps(1)',
            }, 0.05 + Math.random() * 0.15)

            tl.to(slice, {
                x: -offset * 0.5,
                duration: 0.04,
                ease: 'steps(1)',
            }, 0.12 + Math.random() * 0.1)

            tl.to(slice, {
                x: 0,
                opacity: 0,
                duration: 0.05,
                ease: 'steps(1)',
            }, 0.25 + Math.random() * 0.05)
        })

        // Phase 3: Scanlines flash
        tl.to(scanlines, {
            opacity: 0.4,
            duration: 0.05,
        }, 0.05)
        tl.to(scanlines, {
            opacity: 0,
            duration: 0.08,
        }, 0.18)
        tl.to(scanlines, {
            opacity: 0.2,
            duration: 0.04,
        }, 0.22)
        tl.to(scanlines, {
            opacity: 0,
            duration: 0.1,
        }, 0.28)

        // Phase 4: RGB shift out
        tl.to(rgbShift, {
            opacity: 0,
            duration: 0.1,
        }, 0.2)
    }

    useEffect(() => {
        // Initial glitch after hero reveal
        timeoutRef.current = setTimeout(() => {
            triggerGlitch()
        }, delay * 1000)

        // Recurring subtle glitch
        intervalRef.current = setInterval(() => {
            triggerGlitch()
        }, interval * 1000)

        return () => {
            clearTimeout(timeoutRef.current)
            clearInterval(intervalRef.current)
        }
    }, [delay, interval])

    // Generate random horizontal slice positions
    const sliceCount = 8
    const slices = Array.from({ length: sliceCount }, (_, i) => {
        const top = (i / sliceCount) * 100
        const height = (1 / sliceCount) * 100 + Math.random() * 3
        return { top: `${top}%`, height: `${height}%` }
    })

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none z-[6] overflow-hidden"
            aria-hidden="true"
        >
            {/* Glitch slices — horizontal displacement bars */}
            {slices.map((style, i) => (
                <div
                    key={i}
                    className="glitch-slice absolute left-0 w-full opacity-0"
                    style={{
                        top: style.top,
                        height: style.height,
                        background: `linear-gradient(90deg, 
                            transparent 0%, 
                            rgba(255, 255, 255, 0.03) ${20 + Math.random() * 20}%, 
                            rgba(0, 255, 255, 0.04) ${40 + Math.random() * 10}%, 
                            rgba(255, 0, 100, 0.04) ${60 + Math.random() * 10}%, 
                            rgba(255, 255, 255, 0.03) ${80 + Math.random() * 10}%, 
                            transparent 100%
                        )`,
                        mixBlendMode: 'screen',
                    }}
                />
            ))}

            {/* Scanlines overlay */}
            <div
                className="glitch-scanlines absolute inset-0 opacity-0"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(0, 0, 0, 0.15) 2px,
                        rgba(0, 0, 0, 0.15) 4px
                    )`,
                    backgroundSize: '100% 4px',
                }}
            />

            {/* RGB shift layer — chromatic aberration */}
            <div
                className="glitch-rgb absolute inset-0 opacity-0"
                style={{
                    background: `linear-gradient(
                        90deg,
                        rgba(255, 0, 0, 0.03) 0%,
                        transparent 33%,
                        rgba(0, 255, 0, 0.02) 50%,
                        transparent 66%,
                        rgba(0, 100, 255, 0.03) 100%
                    )`,
                    mixBlendMode: 'screen',
                }}
            />
        </div>
    )
}
