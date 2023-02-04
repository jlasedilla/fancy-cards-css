import { useEffect, useState } from 'react';
import './text-matrix.css';

interface TextMatrixProps {
    /**
     * Text to disaplay
     */
    text: string;
}

const LETTERS_C = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const LETTERS_S = 'abcdefghijklmnopqrstuvwxyz';

export const TextMatrix = ({ text }: TextMatrixProps) => {
    const [textDisplay, setTextDisplay] = useState<string>('');

    const handleMouseOver = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            setTextDisplay((prevState) => {
                return prevState
                    .split('')
                    .map((l, i) => {
                        if (i < iterations) return text[i];
                        else if (text[i] === ' ') return text[i];
                        else return LETTERS_C[Math.floor(Math.random() * 26)];
                    })
                    .join('');
            });
            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        setTextDisplay(text);
    }, [text]);

    return (
        <h1 className="text-matrix" onMouseOver={handleMouseOver}>
            {textDisplay.toUpperCase()}
        </h1>
    );
};
