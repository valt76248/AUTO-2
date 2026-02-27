import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function HeroSection({ car, loading }) {
    const sectionRef = useRef(null)
    const imageRef = useRef(null)
    const overlayRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const taglineRef = useRef(null)
    const ctaRef = useRef(null)
    const badgeRef = useRef(null)

    useEffect(() => {
        if (loading) return

        const ctx = gsap.context(() => {
            // Cinematic reveal — clipPath circle expanding
            const revealTl = gsap.timeline({ delay: 0.3 })

            revealTl
                .fromTo(
                    overlayRef.current,
                    { clipPath: 'circle(0% at 50% 50%)' },
                    {
                        clipPath: 'circle(150% at 50% 50%)',
                        duration: 1.8,
                        ease: 'power3.inOut',
                    }
                )
                .fromTo(
                    imageRef.current,
                    { scale: 1.3, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' },
                    0.4
                )
                .fromTo(
                    titleRef.current,
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                    1.0
                )
                .fromTo(
                    subtitleRef.current,
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    1.3
                )
                .fromTo(
                    taglineRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    1.5
                )
                .fromTo(
                    badgeRef.current,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
                    1.6
                )
                .fromTo(
                    ctaRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
                    1.7
                )

            // Parallax on scroll — image stays fixed, content scrolls away
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                onUpdate: (self) => {
                    if (imageRef.current) {
                        gsap.set(imageRef.current, {
                            y: self.progress * 100,
                            scale: 1 + self.progress * 0.1,
                        })
                    }
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [loading])

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]"
        >
            {/* Background overlay with cinematic clip-path reveal */}
            <div
                ref={overlayRef}
                className="absolute inset-0"
                style={{ clipPath: 'circle(0% at 50% 50%)' }}
            >
                {/* Car image */}
                <div className="absolute inset-0">
                    <img
                        ref={imageRef}
                        src={car.heroImage}
                        alt={`${car.brand} ${car.model}`}
                        className="w-full h-full object-cover opacity-0"
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Badge */}
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 opacity-0"
                    >
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="font-unbounded text-white/80 text-[10px] tracking-[0.2em] uppercase">
                            В наличии
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        ref={titleRef}
                        className="font-unbounded text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-4 opacity-0"
                    >
                        {car.brand}
                        <br />
                        <span className="font-light text-white/70">{car.model}</span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        ref={subtitleRef}
                        className="font-unbounded text-white/50 text-sm md:text-base tracking-wide mb-2 opacity-0"
                    >
                        {car.year} · {car.mileage} км · {car.country}
                    </p>

                    {/* Tagline */}
                    <p
                        ref={taglineRef}
                        className="font-unbounded text-white/70 text-base md:text-lg font-light max-w-xl mb-8 opacity-0"
                    >
                        {car.tagline}
                    </p>

                    {/* CTA */}
                    <div ref={ctaRef} className="flex items-center gap-4 opacity-0">
                        <a
                            href="tel:+70000000000"
                            className="font-unbounded text-xs tracking-[0.1em] uppercase bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-3"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Позвонить
                        </a>
                        <a
                            href="#catalog"
                            className="font-unbounded text-xs tracking-[0.1em] uppercase text-white/60 border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
                        >
                            Смотреть все
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <span className="font-unbounded text-white/30 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
                    <div className="w-full h-1/2 bg-white/60 animate-bounce" />
                </div>
            </div>
        </section>
    )
}
