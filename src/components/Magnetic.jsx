import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Magnetic({ children, scale = 1.1, tension = 0.3 }) {
    const wrapperRef = useRef(null)

    useEffect(() => {
        const wrapper = wrapperRef.current
        if (!wrapper) return

        const xTo = gsap.quickTo(wrapper, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
        const yTo = gsap.quickTo(wrapper, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

        const mouseMove = (e) => {
            const { clientX, clientY } = e
            const { height, width, left, top } = wrapper.getBoundingClientRect()

            const x = clientX - (left + width / 2)
            const y = clientY - (top + height / 2)

            xTo(x * tension)
            yTo(y * tension)
        }

        const mouseLeave = () => {
            gsap.to(wrapper, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" })
            xTo(0)
            yTo(0)
        }

        wrapper.addEventListener("mousemove", mouseMove)
        wrapper.addEventListener("mouseleave", mouseLeave)

        return () => {
            wrapper.removeEventListener("mousemove", mouseMove)
            wrapper.removeEventListener("mouseleave", mouseLeave)
        }
    }, [tension])

    return React.cloneElement(children, {
        ref: wrapperRef,
        className: `${children.props.className || ''} cursor-none`
    })
}
