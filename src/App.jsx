import { useEffect, useRef, useState, useCallback } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from './components/Header'
import Preloader from './components/Preloader'
import HeroSection from './components/HeroSection'
import CatalogSection from './components/CatalogSection'
import AboutSection from './components/AboutSection'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'
import CarModal from './components/CarModal'
import DeliverySection from './components/DeliverySection'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Marquee from './components/Marquee'
import carsData from './data/cars'

gsap.registerPlugin(ScrollTrigger)

function App() {
    const [loading, setLoading] = useState(true)
    const [selectedCar, setSelectedCar] = useState(null)
    const lenisRef = useRef(null)

    useEffect(() => {
        // Initialize Lenis smooth scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
        })

        lenisRef.current = lenis

        // Sync Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        return () => {
            lenis.destroy()
            gsap.ticker.remove(lenis.raf)
        }
    }, [])

    // Stop/start Lenis when modal is open/closed
    useEffect(() => {
        if (!lenisRef.current) return
        if (selectedCar) {
            lenisRef.current.stop()
        } else {
            lenisRef.current.start()
        }
    }, [selectedCar])

    const handlePreloaderComplete = useCallback(() => {
        setLoading(false)
    }, [])

    const handleCarSelect = (car) => {
        setSelectedCar(car)
    }

    const handleCloseModal = () => {
        setSelectedCar(null)
    }

    return (
        <>
            <Cursor />
            <ScrollProgress />
            <Preloader onComplete={handlePreloaderComplete} loading={loading} />

            <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                <Header />
                <main role="main" aria-label="Основное содержимое сайта Prestige Auto">
                    <HeroSection car={carsData[0]} loading={loading} />
                    <CatalogSection cars={carsData} onCarSelect={handleCarSelect} />
                    <DeliverySection />
                    <Marquee
                        items={['Ferrari', 'BMW', 'Dodge', 'Jeep', 'Chevrolet', 'Ford', 'Nissan', 'Genesis', 'Prestige Auto']}
                        speed={40}
                        separator="✦"
                        className="bg-[#0A0A0A] text-white/60 border-y border-white/5"
                    />
                    <AboutSection />
                    <ReviewsSection />
                </main>
                <Footer />
            </div>

            {selectedCar && (
                <CarModal car={selectedCar} onClose={handleCloseModal} />
            )}
        </>
    )
}

export default App
