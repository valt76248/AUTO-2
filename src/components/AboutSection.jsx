import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Magnetic from './Magnetic'

export default function AboutSection() {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)
    const statsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 85%',
                    },
                }
            )

            statsRef.current.forEach((stat, index) => {
                if (!stat) return
                gsap.fromTo(
                    stat,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: stat,
                            start: 'top 90%',
                        },
                        delay: index * 0.15,
                    }
                )
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const advantages = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'PRO-дилер',
            desc: 'Верифицированный статус на площадках. Прозрачная история каждого автомобиля.',
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ),
            title: 'Рейтинг 5.0 ★',
            desc: '13 положительных отзывов. Безупречная репутация на рынке.',
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
            ),
            title: 'Полная проверка',
            desc: 'Каждый автомобиль проверен по всем базам. Юридическая чистота гарантирована.',
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: 'Москва',
            desc: 'Все автомобили доступны для осмотра и тест-драйва в Москве.',
        },
    ]

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative bg-surface py-24 md:py-32"
            aria-label="О компании Prestige Auto"
        >
            {/* Divider */}
            <div className="section-divider max-w-7xl mx-auto mb-24 md:mb-32" />

            <div className="px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div ref={contentRef} className="mb-8 md:mb-20 opacity-0 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-0 lg:gap-20">
                        <div className="flex-1 w-full relative">
                            <p className="font-unbounded text-text-secondary text-[10px] tracking-[0.3em] uppercase mb-4">
                                О продавце
                            </p>
                            <h2 className="font-unbounded text-text-primary text-3xl md:text-4xl font-semibold mb-6">
                                Prestige Auto
                            </h2>
                            <p className="font-unbounded text-text-secondary text-base md:text-xl font-light leading-relaxed max-w-4xl text-justify mb-6 lg:mb-12 relative z-10">
                                Профессиональный дилер с многолетним опытом на рынке премиальных и коллекционных
                                автомобилей. Специализация — подбор, проверка и продажа автомобилей высшего класса.
                                Каждый экземпляр проходит тщательную диагностику и юридическую проверку перед
                                выставлением на продажу. Прозрачность и честность — главные принципы работы.
                            </p>

                            {/* Realistic Dealership Image container */}
                            <div className="relative w-full mt-2 lg:mt-0 z-0">
                                {/* The Image with overflow-hidden */}
                                <div className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-2xl overflow-hidden shadow-xl group">
                                    <img
                                        src="/images/white_suv_showroom.png"
                                        alt="Большой современный белый внедорожник в шоуруме"
                                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                                </div>
                            </div>

                            {/* Unified WOW Effect Badge - centered below image */}
                            <div className="flex justify-center -mt-12 md:-mt-16 relative z-20">
                                <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center pointer-events-none drop-shadow-2xl">
                                    {/* Glassmorphism backing behind text to keep it readable */}
                                    <div className="absolute inset-1.5 bg-[#f6f6f6]/95 backdrop-blur-xl rounded-full border border-black/5" />

                                    {/* Outer animated rings */}
                                    <div className="absolute inset-1.5 rounded-full border border-black/10 border-dashed animate-[spin_20s_linear_infinite]" />
                                    <div className="absolute inset-[15%] rounded-full border border-black/10 animate-[spin_15s_linear_infinite_reverse]" />

                                    {/* Rotating Circular Text */}
                                    <div className="absolute inset-0 animate-[spin_25s_linear_infinite] flex items-center justify-center">
                                        <svg className="w-[110%] h-[110%] text-text-primary/70" viewBox="0 0 100 100">
                                            <path id="textCircleUnified" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                                            <text className="font-unbounded text-[8.2px] tracking-[0.14em] uppercase font-medium" fill="currentColor">
                                                <textPath href="#textCircleUnified" startOffset="0%">
                                                    PRESTIGE AUTO • PREMIUM SELECTION •
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>

                                    {/* Center Emblem/Star */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto group/star">
                                        <div className="absolute inset-0 bg-accent/5 rounded-full animate-pulse blur-md" />
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent relative z-10 w-6 h-6 md:w-10 md:h-10 transition-transform duration-700 group-hover/star:rotate-180 group-hover/star:scale-110">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advantages grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {advantages.map((item, index) => (
                            <Magnetic key={index}>
                                <div
                                    ref={(el) => (statsRef.current[index] = el)}
                                    className="group p-6 md:p-8 rounded-2xl bg-background hover:bg-white border border-transparent hover:border-black/5 transition-all duration-500 opacity-0 will-change-transform"
                                >
                                    <div className="text-text-secondary group-hover:text-text-primary transition-colors duration-300 mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-unbounded text-text-primary text-base font-semibold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="font-unbounded text-text-secondary text-xs font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </Magnetic>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
