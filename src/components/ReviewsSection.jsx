import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const reviews = [
    { src: 'images/reviews/1.png', alt: 'Отзыв от клиента Prestige Auto — покупка автомобиля' },
    { src: 'images/reviews/2.png', alt: 'Отзыв о сервисе и качестве обслуживания Prestige Auto' },
    { src: 'images/reviews/3.png', alt: 'Положительный отзыв клиента о покупке авто' },
    { src: 'images/reviews/4.png', alt: 'Отзыв о прозрачности сделки и честности дилера' },
    { src: 'images/reviews/5.png', alt: 'Рейтинг 5.0 звёзд — 13 отзывов клиентов Prestige Auto' },
]

export default function ReviewsSection() {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const cardsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
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

            cardsRef.current.forEach((card, index) => {
                if (!card) return
                gsap.fromTo(
                    card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                        },
                        delay: index * 0.12,
                    }
                )
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="reviews"
            className="relative bg-background py-24 md:py-32"
            aria-label="Отзывы клиентов Prestige Auto"
        >
            {/* Divider */}
            <div className="section-divider max-w-7xl mx-auto mb-24 md:mb-32" />

            <div className="px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 md:mb-16">
                        <p className="font-unbounded text-text-secondary text-[10px] tracking-[0.3em] uppercase mb-4">
                            Отзывы
                        </p>
                        <h2
                            ref={titleRef}
                            className="font-unbounded text-text-primary text-4xl md:text-5xl font-semibold opacity-0"
                        >
                            Клиенты говорят
                        </h2>
                    </div>

                    {/* MASONRY: Reviews images grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="break-inside-avoid opacity-0 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
                            >
                                <img
                                    src={review.src}
                                    alt={review.alt}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
