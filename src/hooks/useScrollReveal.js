import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollReveal(offset = 60, duration = 0.8) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.fromTo(
      el,
      { y: offset, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          invalidateOnRefresh: true,
          toggleActions: 'play none none none',
        },
      }
    );

    return () => ctx.revert();
  }, [offset, duration]);

  return ref;
}