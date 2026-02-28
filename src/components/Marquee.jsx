import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Marquee({ items = [], speed = 30, separator = '·', className = '' }) {
    const trackRef = useRef(null)
    const tweenRef = useRef(null)

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        // Wait for fonts and layout
        const setupMarquee = () => {
            const firstSet = track.querySelector('.marquee-set')
            if (!firstSet) return

            const width = firstSet.offsetWidth
            const duration = width / speed

            // Kill previous tween
            if (tweenRef.current) tweenRef.current.kill()

            gsap.set(track, { x: 0 })

            tweenRef.current = gsap.to(track, {
                x: -width,
                duration,
                ease: 'none',
                repeat: -1,
            })
        }

        // Small delay for layout
        requestAnimationFrame(() => {
            requestAnimationFrame(setupMarquee)
        })

        // Pause on hover
        const handleEnter = () => tweenRef.current?.timeScale(0.3)
        const handleLeave = () => tweenRef.current?.timeScale(1)

        track.parentElement.addEventListener('mouseenter', handleEnter)
        track.parentElement.addEventListener('mouseleave', handleLeave)

        return () => {
            if (tweenRef.current) tweenRef.current.kill()
            track.parentElement?.removeEventListener('mouseenter', handleEnter)
            track.parentElement?.removeEventListener('mouseleave', handleLeave)
        }
    }, [items, speed])

    const content = items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-4 md:gap-8">
            <span className="font-unbounded text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap uppercase tracking-wider">
                {item}
            </span>
            <span className="text-accent/40 text-xl md:text-3xl select-none">{separator}</span>
        </span>
    ))

    return (
        <div className={`overflow-hidden py-8 md:py-12 ${className}`}>
            <div ref={trackRef} className="flex items-center gap-4 md:gap-8 will-change-transform">
                <div className="marquee-set flex items-center gap-4 md:gap-8 flex-shrink-0 pr-4 md:pr-8">
                    {content}
                </div>
                <div className="marquee-set flex items-center gap-4 md:gap-8 flex-shrink-0 pr-4 md:pr-8" aria-hidden="true">
                    {content}
                </div>
            </div>
        </div>
    )
}
