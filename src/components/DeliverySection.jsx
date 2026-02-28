import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function DeliverySection() {
    const sectionRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        if (!textRef.current) return

        // Разбиваем текст посимвольно
        const splitText = new SplitType(textRef.current, { types: 'chars,words' })

        const ctx = gsap.context(() => {
            // Эффект плавного проявления текста по мере скролла (Скраббинг)
            gsap.fromTo(splitText.chars,
                { opacity: 0.1, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        end: 'bottom 70%',
                        scrub: 0.5, // Привязываем позицию анимации к скроллу с небольшой плавностью
                    }
                }
            )
        }, sectionRef)

        return () => {
            splitText.revert()
            ctx.revert()
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="py-32 md:py-48 bg-background px-6 md:px-12 relative overflow-hidden"
            aria-label="Заказ любого автомобиля"
            style={{ minHeight: '80vh' }}
        >
            <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
                <p
                    ref={textRef}
                    className="font-unbounded text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter leading-tight md:leading-[1.15] text-text-primary"
                >
                    Любой вариант машины может быть привезен на максимально удобных и быстрых условиях.
                </p>
                <div className="mt-16 md:mt-24 inline-flex items-center gap-3 px-8 py-4 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm text-xs text-text-primary uppercase tracking-[0.2em] font-unbounded shadow-sm hover:shadow-md transition-shadow duration-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Доставка под ключ
                </div>
            </div>
        </section>
    )
}
