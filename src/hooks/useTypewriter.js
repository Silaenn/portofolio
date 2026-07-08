import { useEffect, useState } from 'react';

export default function useTypewriter(text, speed = 50) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setDone(false);

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { text: displayed, done };
}