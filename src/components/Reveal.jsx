import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveal — wraps children and animates them into view on scroll.
 * @param {string} direction — 'up' | 'down' | 'left' | 'right'
 * @param {number} delay — animation delay in seconds
 * @param {number} distance — travel distance in px
 * @param {number} duration — animation duration
 */
export default function Reveal({
    children,
    direction = 'up',
    delay = 0,
    distance = 60,
    duration = 1,
    className = '',
}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const axes = {
            up: { y: distance },
            down: { y: -distance },
            left: { x: distance },
            right: { x: -distance },
        }

        const from = { opacity: 0, ...axes[direction] }

        const ctx = gsap.context(() => {
            gsap.fromTo(el, from, {
                opacity: 1,
                x: 0,
                y: 0,
                duration,
                delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    toggleActions: 'play none none none',
                },
            })
        })

        return () => ctx.revert()
    }, [direction, delay, distance, duration])

    return (
        <div ref={ref} className={`opacity-0 ${className}`}>
            {children}
        </div>
    )
}
