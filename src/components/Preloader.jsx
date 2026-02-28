import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete, loading }) {
    const preloaderRef = useRef(null)
    const counterRef = useRef(null)
    const lineRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(preloaderRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: 'power3.inOut',
                    onComplete
                })
            }
        });

        // Counter animation
        tl.to({ val: 0 }, {
            val: 100,
            duration: 2,
            ease: "power2.inOut",
            onUpdate: function () {
                if (counterRef.current) {
                    counterRef.current.innerText = Math.floor(this.targets()[0].val) + "%";
                }
            }
        });

        // Line animation
        tl.to(lineRef.current, {
            scaleX: 1,
            duration: 2,
            ease: "power2.inOut"
        }, 0);

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div
            ref={preloaderRef}
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A] ${!loading ? 'pointer-events-none' : ''
                }`}
            style={{ clipPath: 'inset(0 0 0% 0)' }}
        >
            <h2 className="font-unbounded text-white/40 text-xs tracking-[0.3em] uppercase mb-8">
                Prestige Auto Moscow
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
