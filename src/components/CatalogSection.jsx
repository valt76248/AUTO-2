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

            // ===== POWERFUL 3D TILT + PARALLAX =====
            cardsRef.current.forEach((cardWrap) => {
                if (!cardWrap) return

                const innerCard = cardWrap.querySelector('.tilt-card')
                const img = cardWrap.querySelector('.tilt-img')
                const glare = cardWrap.querySelector('.tilt-glare')
                const textContent = cardWrap.querySelector('.tilt-content')
                if (!innerCard) return

                const maxRotation = 8 // degrees — subtle but visible
                const parallaxStrength = 20 // px image shift
                const perspective = 800

                const handleMouseMove = (e) => {
                    const rect = innerCard.getBoundingClientRect()
                    const centerX = rect.left + rect.width / 2
                    const centerY = rect.top + rect.height / 2

                    // -1 to 1 normalized
                    const normalX = (e.clientX - centerX) / (rect.width / 2)
                    const normalY = (e.clientY - centerY) / (rect.height / 2)

                    // Clamp values
                    const clampedX = Math.max(-1, Math.min(1, normalX))
                    const clampedY = Math.max(-1, Math.min(1, normalY))

                    // Card 3D rotation
                    gsap.to(innerCard, {
                        rotationY: clampedX * maxRotation,
                        rotationX: -clampedY * maxRotation,
                        transformPerspective: perspective,
                        transformOrigin: 'center center',
                        ease: 'power2.out',
                        duration: 0.4,
                        force3D: true,
                        z: 15, // subtle lift
                    })

                    // Image parallax — moves opposite to cursor for depth
                    if (img) {
                        gsap.to(img, {
                            x: -clampedX * parallaxStrength,
                            y: -clampedY * parallaxStrength,
                            scale: 1.12,
                            ease: 'power2.out',
                            duration: 0.4,
                        })
                    }

                    // Glare highlight follows cursor
                    if (glare) {
                        const glareX = ((e.clientX - rect.left) / rect.width) * 100
                        const glareY = ((e.clientY - rect.top) / rect.height) * 100
                        gsap.to(glare, {
                            opacity: 0.15,
                            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
                            duration: 0.3,
                        })
                    }

                    // Text content subtle shift for extra depth
                    if (textContent) {
                        gsap.to(textContent, {
                            x: clampedX * 5,
                            y: clampedY * 5,
                            ease: 'power2.out',
                            duration: 0.4,
                        })
                    }
                }

                const handleMouseEnter = () => {
                    gsap.to(innerCard, {
                        boxShadow: '0 25px 60px -12px rgba(0,0,0,0.35), 0 10px 25px -5px rgba(0,0,0,0.2)',
                        duration: 0.4,
                    })
                }

                const handleMouseLeave = () => {
                    gsap.to(innerCard, {
                        rotationY: 0,
                        rotationX: 0,
                        z: 0,
                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
                        ease: 'elastic.out(1, 0.4)',
                        duration: 1.2,
                    })
                    if (img) {
                        gsap.to(img, {
                            x: 0,
                            y: 0,
                            scale: 1.05,
                            ease: 'elastic.out(1, 0.5)',
                            duration: 1.2,
                        })
                    }
                    if (glare) {
                        gsap.to(glare, { opacity: 0, duration: 0.5 })
                    }
                    if (textContent) {
                        gsap.to(textContent, { x: 0, y: 0, ease: 'power3.out', duration: 0.6 })
                    }
                }

                cardWrap.addEventListener('mousemove', handleMouseMove)
                cardWrap.addEventListener('mouseenter', handleMouseEnter)
                cardWrap.addEventListener('mouseleave', handleMouseLeave)

                cardWrap._onMouseMove = handleMouseMove
                cardWrap._onMouseEnter = handleMouseEnter
                cardWrap._onMouseLeave = handleMouseLeave
            })
        }, sectionRef)

        return () => {
            cardsRef.current.forEach(cardWrap => {
                if (cardWrap && cardWrap._onMouseMove) {
                    cardWrap.removeEventListener('mousemove', cardWrap._onMouseMove)
                    cardWrap.removeEventListener('mouseenter', cardWrap._onMouseEnter)
                    cardWrap.removeEventListener('mouseleave', cardWrap._onMouseLeave)
                }
            })
            ctx.revert()
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            id="catalog"
            className="relative bg-background min-h-screen py-24 md:py-32"
            aria-label="Каталог автомобилей в наличии"
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
                            style={{ perspective: '800px' }}
                        >
                            {/* Card with 3D transform */}
                            <div
                                className="tilt-card relative bg-surface rounded-2xl overflow-hidden transition-shadow duration-500 will-change-transform"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Glare overlay */}
                                <div
                                    className="tilt-glare absolute inset-0 z-10 pointer-events-none rounded-2xl opacity-0"
                                    style={{ transformStyle: 'preserve-3d' }}
                                />

                                {/* Image with parallax */}
                                <div className="relative aspect-[4/3] overflow-hidden pointer-events-none">
                                    <img
                                        src={car.heroImage}
                                        alt={`Купить ${car.brand} ${car.model} ${car.year} — фото`}
                                        className="tilt-img w-full h-full object-cover scale-105 will-change-transform"
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

                                {/* Info — with tilt-content for depth shift */}
                                <div className="tilt-content p-6" style={{ transformStyle: 'preserve-3d' }}>
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
