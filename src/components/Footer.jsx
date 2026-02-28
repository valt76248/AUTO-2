import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Magnetic from './Magnetic'

export default function Footer() {
    const footerRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 90%',
                    },
                }
            )
        }, footerRef)

        return () => ctx.revert()
    }, [])

    return (
        <footer
            ref={footerRef}
            className="relative bg-[#0A0A0A] text-white py-20 md:py-28"
            role="contentinfo"
            aria-label="Контактная информация Prestige Auto Moscow"
        >
            <div ref={contentRef} className="px-6 md:px-12 opacity-0">
                <div className="max-w-7xl mx-auto text-center">
                    {/* CTA area */}
                    <p className="font-unbounded text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">
                        Готовы к покупке?
                    </p>
                    <h2 className="font-unbounded text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
                        Свяжитесь с нами
                    </h2>
                    <p className="font-unbounded text-white/50 text-sm font-light mb-10 max-w-lg mx-auto">
                        Позвоните, чтобы узнать подробности, договориться об осмотре или забронировать автомобиль.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Magnetic>
                            <a
                                href="tel:+70000000000"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-unbounded text-sm tracking-[0.1em] uppercase bg-white text-black px-10 py-5 rounded-full hover:bg-white/90 transition-all duration-300"
                                aria-label="Позвонить в Prestige Auto Moscow"
                                rel="nofollow"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                Позвонить
                            </a>
                        </Magnetic>

                        <Magnetic>
                            <a
                                href="https://t.me/Boris_christmas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-unbounded text-sm tracking-[0.1em] uppercase bg-transparent text-white border border-white/20 px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m22 2-7 20-4-9-9-4Z" />
                                    <path d="M22 2 11 13" />
                                </svg>
                                Telegram
                            </a>
                        </Magnetic>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="font-unbounded text-white/30 text-[10px] tracking-[0.15em]">
                            © 2026 Prestige Auto Moscow.
                        </p>
                        <p className="font-unbounded text-white/20 text-[10px] tracking-[0.1em]">
                            PRO-дилер · Рейтинг 5.0 ★ · 13 отзывов
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
