import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedText({ text, className, delay = 0, triggerStart = 'top 85%' }) {
    const textRef = useRef(null)

    useEffect(() => {
        const words = textRef.current.querySelectorAll('.word')

        gsap.fromTo(words,
            { y: '100%', opacity: 0, rotateZ: 5 },
            {
                y: '0%',
                opacity: 1,
                rotateZ: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: 'power3.out',
                delay: delay,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: triggerStart,
                }
            }
        )
    }, [delay, triggerStart])

    return (
        <span ref={textRef} className={`inline-block ${className}`}>
            {text.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em] pb-[0.1em]">
                    <span className="word inline-block origin-bottom-left">
                        {word}
                    </span>
                </span>
            ))}
        </span>
    )
}
