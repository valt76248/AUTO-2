import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import Magnetic from './Magnetic'

export default function CarModal({ car, onClose }) {
    const overlayRef = useRef(null)
    const modalRef = useRef(null)
    const [activePhoto, setActivePhoto] = useState(0)
    const galleryRef = useRef(null)

    useEffect(() => {
        // Entrance animation
        const ctx = gsap.context(() => {
            gsap.fromTo(
                overlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.4, ease: 'power2.out' }
            )
            gsap.fromTo(
                modalRef.current,
                { y: 60, opacity: 0, scale: 0.97 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power3.out',
                    delay: 0.1,
                    onComplete: () => {
                        const titleEl = modalRef.current?.querySelector('.modal-title')
                        const subtitleEl = modalRef.current?.querySelector('.modal-subtitle')
                        const descEl = modalRef.current?.querySelector('.modal-desc')

                        if (titleEl) {
                            const titleSplit = new SplitType(titleEl, { types: 'words,chars' })
                            gsap.fromTo(titleSplit.chars,
                                { y: 20, opacity: 0 },
                                { y: 0, opacity: 1, duration: 0.5, stagger: 0.02, ease: 'back.out(1.7)' }
                            )
                        }
                        if (subtitleEl) {
                            const subtitleSplit = new SplitType(subtitleEl, { types: 'words' })
                            gsap.fromTo(subtitleSplit.words,
                                { y: 10, opacity: 0 },
                                { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out', delay: 0.2 }
                            )
                        }
                        if (descEl) {
                            const descSplit = new SplitType(descEl, { types: 'lines' })
                            gsap.fromTo(descSplit.lines,
                                { y: 10, opacity: 0 },
                                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 0.4 }
                            )
                        }
                    }
                }
            )
        })

        // ESC key to close
        const handleEsc = (e) => {
            if (e.key === 'Escape') handleClose()
        }
        window.addEventListener('keydown', handleEsc)

        return () => {
            ctx.revert()
            window.removeEventListener('keydown', handleEsc)
        }
    }, [])

    const handleClose = () => {
        gsap.to(modalRef.current, {
            y: 40,
            opacity: 0,
            scale: 0.97,
            duration: 0.3,
            ease: 'power2.in',
        })
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: onClose,
        })
    }

    const handlePrev = () => {
        setActivePhoto((prev) => (prev === 0 ? car.photos.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActivePhoto((prev) => (prev === car.photos.length - 1 ? 0 : prev + 1))
    }

    const specLabels = {
        type: 'Тип двигателя',
        displacement: 'Объём',
        cylinders: 'Цилиндры',
        power: 'Мощность',
        torque: 'Крутящий момент',
        turbo: 'Наддув',
        gearbox: 'КПП',
        drive: 'Привод',
        acceleration: 'Разгон 0-100',
        topSpeed: 'Макс. скорость',
        fuelCity: 'Расход (город)',
        fuelHighway: 'Расход (трасса)',
        fuelCombined: 'Расход (смеш.)',
        fuelType: 'Топливо',
        length: 'Длина',
        width: 'Ширина',
        height: 'Высота',
        wheelbase: 'Колёсная база',
        clearance: 'Клиренс',
        trunk: 'Багажник',
        frontBrakes: 'Передние тормоза',
        rearBrakes: 'Задние тормоза',
        frontSuspension: 'Передняя подвеска',
        rearSuspension: 'Задняя подвеска',
        wheels: 'Колёса',
        frontTires: 'Шины (перед)',
        rearTires: 'Шины (зад)',
    }

    const specSections = [
        { title: 'Двигатель', data: car.specs.engine },
        { title: 'Трансмиссия', data: car.specs.transmission },
        { title: 'Динамика и расход', data: car.specs.performance },
        { title: 'Размеры', data: car.specs.dimensions },
        { title: 'Шасси', data: car.specs.chassis },
    ]

    return (
        <div className="fixed inset-0 z-[90]" role="dialog" aria-modal="true" aria-label={`${car.brand} ${car.model} — подробности`}>
            {/* Backdrop */}
            <div
                ref={overlayRef}
                onClick={handleClose}
                className="absolute inset-0 bg-black/60 modal-backdrop opacity-0"
            />

            {/* Modal */}
            <div className="absolute inset-0 flex items-start justify-center overflow-y-auto py-8 px-4 md:py-12 md:px-8">
                <div
                    ref={modalRef}
                    className="relative bg-surface rounded-3xl w-full max-w-5xl shadow-modal opacity-0"
                    data-lenis-prevent
                >
                    {/* Close button */}
                    <Magnetic>
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-sm"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </Magnetic>

                    {/* Gallery */}
                    <div className="relative">
                        {/* Main image */}
                        <div
                            className="relative aspect-[16/10] md:aspect-[16/9] rounded-t-3xl overflow-hidden bg-background"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = (e.clientX - rect.left) / rect.width - 0.5;
                                const y = (e.clientY - rect.top) / rect.height - 0.5;

                                gsap.to(e.currentTarget.querySelector('img'), {
                                    x: x * -40,
                                    y: y * -40,
                                    scale: 1.1,
                                    duration: 0.5,
                                    ease: 'power2.out'
                                })
                            }}
                            onMouseLeave={(e) => {
                                gsap.to(e.currentTarget.querySelector('img'), {
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    duration: 1,
                                    ease: 'power3.out'
                                })
                            }}
                        >
                            <img
                                src={car.photos[activePhoto]}
                                alt={`${car.brand} ${car.model} — фото ${activePhoto + 1}`}
                                className="w-full h-full object-cover origin-center will-change-transform"
                            />

                            {/* Nav arrows */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-sm"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-sm"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>

                            {/* Counter */}
                            <div className="absolute bottom-4 right-4 bg-black/50 text-white font-unbounded text-[10px] tracking-wider px-3 py-1.5 rounded-full">
                                {activePhoto + 1} / {car.photos.length}
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div
                            ref={galleryRef}
                            className="flex gap-2 p-4 overflow-x-auto hide-scrollbar"
                        >
                            {car.photos.map((photo, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActivePhoto(index)}
                                    className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${index === activePhoto
                                        ? 'border-accent opacity-100'
                                        : 'border-transparent opacity-50 hover:opacity-80'
                                        }`}
                                >
                                    <img
                                        src={photo}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 font-unbounded text-[9px] tracking-[0.15em] uppercase px-3 py-1 rounded-full">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                        {car.condition === 'Новый' ? 'Новый' : 'В наличии'}
                                    </span>
                                    {car.accidents === false && (
                                        <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 font-unbounded text-[9px] tracking-[0.15em] uppercase px-3 py-1 rounded-full">
                                            Без ДТП
                                        </span>
                                    )}
                                </div>
                                <h2 className="modal-title font-unbounded text-text-primary text-3xl md:text-4xl font-bold mb-1">
                                    {car.brand} {car.model}
                                </h2>
                                <p className="modal-subtitle font-unbounded text-text-secondary text-sm">
                                    {car.year} · {car.mileage} км · {car.color} · {car.body}
                                </p>
                            </div>

                            <Magnetic>
                                <a
                                    href="tel:+79636740329"
                                    className="inline-flex items-center gap-2 font-unbounded text-xs tracking-[0.1em] uppercase bg-accent text-white px-8 py-4 rounded-full hover:bg-accent-hover transition-colors duration-300 flex-shrink-0"
                                    aria-label="Позвонить по поводу этого автомобиля"
                                    rel="nofollow"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    Позвонить
                                </a>
                            </Magnetic>
                        </div>

                        {/* Tagline */}
                        <p className="modal-desc font-unbounded text-text-secondary text-sm font-light leading-relaxed mb-10 max-w-2xl">
                            {car.tagline}
                        </p>

                        {/* Specs grid */}
                        <div className="space-y-8">
                            {specSections.map((section) => {
                                if (!section.data || Object.keys(section.data).length === 0) return null
                                return (
                                    <div key={section.title}>
                                        <h3 className="font-unbounded text-text-primary text-sm font-semibold mb-4 pb-2 border-b border-divider">
                                            {section.title}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                            {Object.entries(section.data).map(([key, value]) => (
                                                <div key={key} className="flex items-center justify-between py-1.5">
                                                    <span className="font-unbounded text-text-secondary text-xs font-light">
                                                        {specLabels[key] || key}
                                                    </span>
                                                    <span className="font-unbounded text-text-primary text-xs font-medium text-right">
                                                        {value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-10 pt-8 border-t border-divider text-center">
                            <p className="font-unbounded text-text-secondary text-xs font-light mb-4">
                                Интересует этот автомобиль?
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Magnetic>
                                    <a
                                        href="tel:+79636740329"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-unbounded text-sm tracking-[0.1em] uppercase bg-accent text-white px-10 py-5 rounded-full hover:bg-accent-hover transition-colors duration-300"
                                        aria-label="Позвонить Борису по поводу автомобиля"
                                        rel="nofollow"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        Позвонить Борису
                                    </a>
                                </Magnetic>

                                <Magnetic>
                                    <a
                                        href="https://t.me/carsfortheelite"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-unbounded text-sm tracking-[0.1em] uppercase bg-transparent text-text-primary border border-text-primary/20 px-10 py-5 rounded-full hover:bg-text-primary hover:text-white transition-all duration-300"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m22 2-7 20-4-9-9-4Z" />
                                            <path d="M22 2 11 13" />
                                        </svg>
                                        Telegram
                                    </a>
                                </Magnetic>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
