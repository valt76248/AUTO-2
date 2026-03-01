import { useEffect, useRef, useCallback } from 'react'

export default function FloatingParticles({ count = 60 }) {
    const canvasRef = useRef(null)
    const mouseRef = useRef({ x: -1000, y: -1000 })
    const particlesRef = useRef([])
    const animationRef = useRef(null)

    const createParticle = useCallback((width, height, forceBottom = false) => {
        const golden = Math.random() > 0.5
        return {
            x: Math.random() * width,
            y: forceBottom ? height + Math.random() * 100 : Math.random() * height,
            size: Math.random() * 2.5 + 0.5,
            speedY: -(Math.random() * 0.3 + 0.1),
            speedX: (Math.random() - 0.5) * 0.15,
            opacity: Math.random() * 0.5 + 0.1,
            opacityTarget: Math.random() * 0.5 + 0.1,
            // Golden-warm or cool-white palette
            r: golden ? 255 : 220 + Math.floor(Math.random() * 35),
            g: golden ? 215 + Math.floor(Math.random() * 40) : 220 + Math.floor(Math.random() * 35),
            b: golden ? 140 + Math.floor(Math.random() * 60) : 240 + Math.floor(Math.random() * 15),
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.005,
            // Drift offset for organic feel
            driftPhase: Math.random() * Math.PI * 2,
            driftSpeed: Math.random() * 0.003 + 0.001,
            driftAmplitude: Math.random() * 0.5 + 0.2,
        }
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let width = 0
        let height = 0

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width * window.devicePixelRatio
            canvas.height = height * window.devicePixelRatio
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
            canvas.style.width = width + 'px'
            canvas.style.height = height + 'px'
        }

        resize()

        // Initialize particles
        particlesRef.current = Array.from({ length: count }, () =>
            createParticle(width, height)
        )

        const onMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY }
        }

        const MOUSE_RADIUS = 120
        const MOUSE_FORCE = 0.8

        const animate = () => {
            ctx.clearRect(0, 0, width, height)
            const mouse = mouseRef.current

            particlesRef.current.forEach((p, i) => {
                // Pulse opacity
                p.pulse += p.pulseSpeed
                const pulseFactor = Math.sin(p.pulse) * 0.3 + 0.7

                // Organic drift
                p.driftPhase += p.driftSpeed
                const driftX = Math.sin(p.driftPhase) * p.driftAmplitude

                // Base movement
                p.x += p.speedX + driftX
                p.y += p.speedY

                // Mouse repulsion
                const dx = p.x - mouse.x
                const dy = p.y - mouse.y
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < MOUSE_RADIUS && dist > 0) {
                    const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE
                    p.x += (dx / dist) * force
                    p.y += (dy / dist) * force
                }

                // Reset particle when offscreen
                if (p.y < -20 || p.x < -20 || p.x > width + 20) {
                    particlesRef.current[i] = createParticle(width, height, true)
                    return
                }

                // Draw particle with glow
                const currentOpacity = p.opacity * pulseFactor
                ctx.save()

                // Subtle glow
                ctx.shadowBlur = p.size * 4
                ctx.shadowColor = `rgba(${p.r}, ${p.g}, ${p.b}, ${currentOpacity * 0.5})`

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${currentOpacity})`
                ctx.fill()

                ctx.restore()
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('resize', resize)
        animate()

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('resize', resize)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [count, createParticle])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-[5]"
            aria-hidden="true"
        />
    )
}
