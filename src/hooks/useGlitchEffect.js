import { useEffect, useState } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

export default function useGlitchEffect(text, interval = 80) {
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const maxIterations = text.length * 2;

    const timer = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, i) => {
            if (i < iteration / 2) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1;
      if (iteration >= maxIterations) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [text, interval]);

  return displayed;
}
