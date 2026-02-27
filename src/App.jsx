import { useEffect, useRef, useState } from 'react'
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

    const handlePreloaderComplete = () => {
        setLoading(false)
    }

    const handleCarSelect = (car) => {
        setSelectedCar(car)
    }

    const handleCloseModal = () => {
        setSelectedCar(null)
    }

    return (
        <>
            <Preloader onComplete={handlePreloaderComplete} loading={loading} />

            <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                <Header />
                <main>
                    <HeroSection car={carsData[0]} loading={loading} />
                    <CatalogSection cars={carsData} onCarSelect={handleCarSelect} />
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
