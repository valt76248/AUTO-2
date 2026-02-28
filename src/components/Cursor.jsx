import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
    const cursorRef = useRef(null)
    const cursorDotRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorDot = cursorDotRef.current

        let mouseX = 0
        let mouseY = 0
        let cursorX = 0
        let cursorY = 0

        const onMouseMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY

            // Immediately move the dot
            gsap.to(cursorDot, {
                x: mouseX,
                y: mouseY,
                duration: 0,
            })
        }

        const tick = () => {
            // Smoothly move the outer ring
            cursorX += (mouseX - cursorX) * 0.15
            cursorY += (mouseY - cursorY) * 0.15

            gsap.set(cursor, {
                x: cursorX,
                y: cursorY
            })

            requestAnimationFrame(tick)
        }

        const onMouseEnterLink = () => {
            gsap.to(cursor, { scale: 1.5, opacity: 0.5, duration: 0.3, backgroundColor: 'rgba(255, 255, 255, 0.1)' })
            gsap.to(cursorDot, { scale: 0, duration: 0.3 })
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, backgroundColor: 'transparent' })
            gsap.to(cursorDot, { scale: 1, duration: 0.3 })
        }

        window.addEventListener('mousemove', onMouseMove)
        requestAnimationFrame(tick)

        // Add event listeners to all links and buttons
        const attachEventListeners = () => {
            const links = document.querySelectorAll('a, button, .interactive')
            links.forEach(link => {
                link.classList.add('cursor-none')
                // Hide cursor children
                link.querySelectorAll('*').forEach(child => child.classList.add('cursor-none'))

                link.addEventListener('mouseenter', onMouseEnterLink)
                link.addEventListener('mouseleave', onMouseLeaveLink)
            })
        }

        // Slight delay to ensure DOM is ready
        setTimeout(attachEventListeners, 1000)

        // MutationObserver to attach to new elements
        const observer = new MutationObserver(attachEventListeners)
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            observer.disconnect()
            const links = document.querySelectorAll('a, button, .interactive')
            links.forEach(link => {
                link.removeEventListener('mouseenter', onMouseEnterLink)
                link.removeEventListener('mouseleave', onMouseLeaveLink)
            })
        }
    }, [])

    // Hide cursor on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
            />
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
            />
        </>
    )
}
