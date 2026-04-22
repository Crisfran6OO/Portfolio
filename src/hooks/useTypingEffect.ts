import { useState, useEffect } from 'react';

/**
 * Hook for a typewriter effect that cycles through an array of words.
 */
export function useTypingEffect(words: string[], speed = 100, pause = 2000): string {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && text === currentWord) {
            timeout = setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        } else {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
            }, isDeleting ? speed / 2 : speed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, speed, pause]);

    return text;
}
