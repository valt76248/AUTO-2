import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollProgress() {
    const barRef = useRef(null)

    useEffect(() => {
        const bar = barRef.current
        if (!bar) return

        gsap.to(bar, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3,
            },
        })

        return () => ScrollTrigger.getAll().forEach(t => {
            if (t.vars?.trigger === document.body) t.kill()
        })
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-[101] h-[3px] pointer-events-none">
            <div
                ref={barRef}
                className="h-full origin-left will-change-transform"
                style={{
                    transform: 'scaleX(0)',
                    background: 'linear-gradient(90deg, #C8A97E, #E8D5B7, #C8A97E)',
                }}
            />
        </div>
    )
}
