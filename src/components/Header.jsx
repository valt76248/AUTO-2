import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-unbounded text-text-primary text-lg font-semibold tracking-tight">
                    ALEXANDER<span className="font-light text-text-secondary ml-1">AUTO</span>
                </a>

                {/* Nav — desktop */}
                <nav className="hidden md:flex items-center gap-8">
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
                </nav>

                {/* CTA */}
                <a
                    href="tel:+70000000000"
                    className="font-unbounded text-xs tracking-[0.1em] uppercase bg-accent text-white px-6 py-3 rounded-full hover:bg-accent-hover transition-colors duration-300 cta-glow"
                >
                    Позвонить
                </a>
            </div>
        </header>
    )
}
