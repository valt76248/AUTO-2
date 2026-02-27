import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete, loading }) {
    const preloaderRef = useRef(null)
    const counterRef = useRef(null)
    const lineRef = useRef(null)

    useEffect(() => {
        if (!loading) return

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.to(preloaderRef.current, {
                        clipPath: 'inset(0 0 100% 0)',
                        duration: 0.8,
                        ease: 'power3.inOut',
                        onComplete,
                    })
                },
            })

            const proxy = { percent: 0 }
            tl.to(proxy, {
                percent: 100,
                duration: 2,
                ease: 'power2.inOut',
                onUpdate: () => {
                    if (counterRef.current) {
                        counterRef.current.textContent = Math.round(proxy.percent) + '%'
                    }
                },
            })

            tl.to(
                lineRef.current,
                {
                    scaleX: 1,
                    duration: 2,
                    ease: 'power2.inOut',
                },
                0
            )

            tl.to({}, { duration: 0.3 })
        }, preloaderRef)

        return () => ctx.revert()
    }, [loading, onComplete])

    return (
        <div
            ref={preloaderRef}
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A] ${!loading ? 'pointer-events-none' : ''
                }`}
            style={{ clipPath: 'inset(0 0 0% 0)' }}
        >
            <h2 className="font-unbounded text-white/40 text-sm tracking-[0.3em] uppercase mb-8">
                Alexander Auto
            </h2>
            <div className="w-48 h-[1px] bg-white/10 mb-6 overflow-hidden">
                <div
                    ref={lineRef}
                    className="w-full h-full bg-white origin-left"
                    style={{ transform: 'scaleX(0)' }}
                />
            </div>
            <span
                ref={counterRef}
                className="font-unbounded text-white text-4xl font-light"
            >
                0%
            </span>
        </div>
    )
}
