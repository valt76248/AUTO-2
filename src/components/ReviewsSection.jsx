import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const reviews = [
    {
        name: 'Дмитрий К.',
        text: 'Купил Genesis G70 у Александра. Всё как описано в объявлении, без сюрпризов. Машина в идеальном состоянии, все документы прозрачны. Рекомендую!',
        rating: 5,
        date: 'Январь 2026',
    },
    {
        name: 'Михаил С.',
        text: 'Приобрёл Ram 1500 — профессиональный подход к сделке. Александр подробно рассказал об автомобиле, показал все нюансы. Очень доволен покупкой.',
        rating: 5,
        date: 'Декабрь 2025',
    },
    {
        name: 'Андрей В.',
        text: 'Отличный продавец! Быстро ответил на все вопросы, организовал осмотр в удобное время. Машина полностью соответствовала описанию. Пять звёзд заслуженно.',
        rating: 5,
        date: 'Ноябрь 2025',
    },
    {
        name: 'Сергей Л.',
        text: 'Сделка прошла максимально комфортно. Александр — профессионал, который ценит своё время и время клиента. Автомобиль без нареканий.',
        rating: 5,
        date: 'Октябрь 2025',
    },
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

                    {/* Reviews grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="bg-surface rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-500 opacity-0"
                            >
                                {/* Stars */}
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <svg
                                            key={i}
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="#0A0A0A"
                                            stroke="none"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Review text */}
                                <p className="font-unbounded text-text-primary text-sm font-light leading-relaxed mb-6">
                                    «{review.text}»
                                </p>

                                {/* Author */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-unbounded text-text-primary text-xs font-medium">
                                            {review.name}
                                        </p>
                                        <p className="font-unbounded text-text-secondary text-[10px] font-light">
                                            {review.date}
                                        </p>
                                    </div>
                                    <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center">
                                        <span className="font-unbounded text-text-secondary text-[10px] font-medium">
                                            {review.name.charAt(0)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
