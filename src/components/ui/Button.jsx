// Button.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";



const Button = ({ label = "Get GSAP", href = "#", b_radius = "full" }) => {

    const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

    const buttonRef = useRef(null);
    const flairRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const flair = flairRef.current;

            // GSAP hover animation for label span
            // if (button) {
            //     const labelSpan = button.querySelector(".relative");
            //     if (labelSpan) {
            //         const tl = gsap.timeline({ paused: true });
            //         tl.to(labelSpan, { duration: 0.2, yPercent: -150, ease: "power2.in" });
            //         tl.set(labelSpan, { yPercent: 150 });
            //         tl.to(labelSpan, { duration: 0.2, yPercent: 0 });
            //         const playTimeline = () => tl.play(0);
            //         button.addEventListener("mouseenter", playTimeline);
            //         return () => {
            //             button.removeEventListener("mouseenter", playTimeline);
            //         };
            //     }
            // }

        // Enable both GSAP flair and label span animation
        if (!button || !flair) return;

        // Register SplitText plugin
        gsap.registerPlugin(SplitText);

        // Label span animation setup
        const labelSpan = button.querySelector('.relative');
        let labelTimeline;
        let split;
        if (labelSpan) {
            split = new SplitText(labelSpan, { type: 'chars' });
            labelTimeline = gsap.timeline({ paused: true });
            labelTimeline.to(split.chars, {
                duration: 0.1,
                yPercent: -150,
                ease: 'power2.in',
                stagger: 0.005
            });
            labelTimeline.set(split.chars, { yPercent: 150 });
            labelTimeline.to(split.chars, {
                duration: 0.2,
                yPercent: 0,
                ease: 'power2.out',
                stagger: 0.005
            });
        }

        const xSet = gsap.quickSetter(flair, 'xPercent');
        const ySet = gsap.quickSetter(flair, 'yPercent');

        const getXY = (e) => {
            const { left, top, width, height } = button.getBoundingClientRect();
            const xTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, width, 0, 100),
                gsap.utils.clamp(0, 100)
            );
            const yTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, height, 0, 100),
                gsap.utils.clamp(0, 100)
            );
            return {
                x: xTransformer(e.clientX - left),
                y: yTransformer(e.clientY - top),
            };
        };

        const onEnter = (e) => {
            const { x, y } = getXY(e);
            xSet(x);
            ySet(y);
            gsap.to(flair, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out',
            });
            if (labelTimeline) labelTimeline.play(0);
        };

        const onLeave = (e) => {
            const { x, y } = getXY(e);
            gsap.killTweensOf(flair);
            gsap.to(flair, {
                xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
                yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
                scale: 0,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        const onMove = (e) => {
            const { x, y } = getXY(e);
            gsap.to(flair, {
                xPercent: x,
                yPercent: y,
                duration: 0.4,
                ease: 'power2',
            });
        };

        button.addEventListener('mouseenter', onEnter);
        button.addEventListener('mouseleave', onLeave);
        button.addEventListener('mousemove', onMove);

        return () => {
            button.removeEventListener('mouseenter', onEnter);
            button.removeEventListener('mouseleave', onLeave);
            button.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <Link
        onClick={handleScrollTop}
            to={href}
            ref={buttonRef}
            className={`relative group inline-flex items-center justify-center gap-2 px-4 py-2  text-white rounded-[${b_radius}] border  overflow-hidden transition-colors duration-150 hover:text-black bg-amber-800`}
        >
            <span
                ref={flairRef}
                className="absolute inset-0 pointer-events-none scale-0 origin-top-left will-change-transform"
            >
                <span className="absolute block bg-white rounded-full w-[170%] aspect-square -translate-x-1/2 -translate-y-1/2" />
            </span>
            <span className="relative flex  items-center justify-center ">{label} <ArrowUpRight className="rotate-45 group-hover:rotate-0 transition-all duration-300 ml-2" /></span>
        </Link>
    );
};

export default Button;