import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Magnetic from './Magnetic'

export default function Header() {
    const headerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top top',
                end: 'max',
                onUpdate: (self) => {
                    const currentScrollY = self.scroll()
                    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                        setIsVisible(false)
                    } else {
                        setIsVisible(true)
                    }
                    lastScrollY.current = currentScrollY
                },
            })
        })

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        gsap.to(headerRef.current, {
            y: isVisible ? 0 : -100,
            duration: 0.4,
            ease: 'power2.out',
        })
    }, [isVisible])

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
            role="banner"
            aria-label="Главная навигация"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-unbounded text-text-primary text-base font-semibold tracking-tight uppercase" aria-label="Prestige Auto — на главную">
                    Prestige<span className="font-light text-text-secondary ml-1">Auto</span>
                </a>

                <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
                    <a
                        href="#catalog"
                        className="font-unbounded text-xs tracking-[0.15em] uppercase text-text-secondary hover:text-text-primary transition-colors duration-300"
                    >
                        Каталог
                    </a>
                    <a
                        href="#about"
                        className="font-unbounded text-xs tracking-[0.15em] uppercase text-text-secondary hover:text-text-primary transition-colors duration-300"
                    >
                        О нас
                    </a>
                    <a
                        href="#reviews"
                        className="font-unbounded text-xs tracking-[0.15em] uppercase text-text-secondary hover:text-text-primary transition-colors duration-300"
                    >
                        Отзывы
                    </a>
                    <a
                        href="https://t.me/carsfortheelite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-unbounded text-xs tracking-[0.15em] uppercase text-blue-500 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                        </svg>
                        Telegram
                    </a>
                </nav>

                {/* CTA */}
                <Magnetic>
                    <a
                        href="tel:+79636740329"
                        className="font-unbounded text-xs tracking-[0.1em] uppercase bg-accent text-white px-6 py-3 rounded-full hover:bg-accent-hover transition-colors duration-300"
                        aria-label="Позвонить в Prestige Auto"
                        rel="nofollow"
                    >
                        Позвонить
                    </a>
                </Magnetic>
            </div>
        </header>
    )
}
