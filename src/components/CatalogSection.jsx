import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CatalogSection({ cars, onCarSelect }) {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const scrollContainerRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(
                titleRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 85%',
                    },
                }
            )

            // Cards stagger animation
            cardsRef.current.forEach((card, index) => {
                if (!card) return
                gsap.fromTo(
                    card,
                    { y: 80, opacity: 0, scale: 0.95 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 88%',
                        },
                        delay: index * 0.1,
                    }
                )
            })

            // Horizontal scroll for catalog
            if (scrollContainerRef.current && window.innerWidth >= 1024) {
                const scrollWidth = scrollContainerRef.current.scrollWidth
                const viewportWidth = window.innerWidth

                gsap.to(scrollContainerRef.current, {
                    x: -(scrollWidth - viewportWidth + 100),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 10%',
                        end: () => `+=${scrollWidth - viewportWidth + 200}`,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                })
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="catalog"
            className="relative bg-background min-h-screen py-24 md:py-32"
        >
            {/* Section title */}
            <div className="px-6 md:px-12 mb-12 md:mb-16">
                <div className="max-w-7xl mx-auto">
                    <p
                        className="font-unbounded text-text-secondary text-[10px] tracking-[0.3em] uppercase mb-4"
                    >
                        Автомобили в наличии
                    </p>
                    <h2
                        ref={titleRef}
                        className="font-unbounded text-text-primary text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0"
                    >
                        Коллекция
                    </h2>
                </div>
            </div>

            {/* Horizontal scroll container (desktop) */}
            <div className="lg:overflow-visible overflow-hidden">
                <div
                    ref={scrollContainerRef}
                    className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-6 md:px-12 lg:pl-12 lg:pr-0"
                >
                    {cars.map((car, index) => (
                        <div
                            key={car.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            onClick={() => onCarSelect(car)}
                            className="group cursor-pointer flex-shrink-0 w-full lg:w-[480px] opacity-0"
                        >
                            {/* Card */}
                            <div className="bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500">
                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={car.heroImage}
                                        alt={`${car.brand} ${car.model}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        loading="lazy"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                                        <span className="font-unbounded text-white text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50 px-6 py-3 rounded-full">
                                            Подробнее
                                        </span>
                                    </div>

                                    {/* Status badge */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 rounded-full px-3 py-1.5">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                        <span className="font-unbounded text-[9px] tracking-[0.15em] uppercase text-text-primary">
                                            {car.condition === 'Новый' ? 'Новый' : 'В наличии'}
                                        </span>
                                    </div>

                                    {/* Year badge */}
                                    <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1.5">
                                        <span className="font-unbounded text-[10px] font-medium text-text-primary">
                                            {car.year}
                                        </span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-6">
                                    <h3 className="font-unbounded text-text-primary text-xl md:text-2xl font-semibold mb-1">
                                        {car.brand} {car.model}
                                    </h3>
                                    <p className="font-unbounded text-text-secondary text-xs tracking-wide mb-4">
                                        {car.shortSpecs}
                                    </p>

                                    {/* Quick specs */}
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <div className="flex items-center gap-1.5 text-text-secondary">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M12 6v6l4 2" />
                                            </svg>
                                            <span className="font-unbounded text-[11px]">{car.mileage} км</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-text-secondary">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                            </svg>
                                            <span className="font-unbounded text-[11px]">{car.body}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-text-secondary">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            <span className="font-unbounded text-[11px]">{car.country}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
