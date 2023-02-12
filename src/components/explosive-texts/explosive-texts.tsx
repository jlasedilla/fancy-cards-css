import React from 'react';
import './explosive-text.css';

const convertStringToArray = (texts: string, rows: number) => {
    const stringLen = Math.ceil(texts.length / rows);
    // var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\\S+?(\\s|$)');
    const regex = '.{' + stringLen + '}|.+$';
    const lines = texts.match(RegExp(regex, 'g')) as string[];
    const trimmedLines = lines.map((line) => line.trim());

    return trimmedLines;
};

interface LinesProps {
    lines: string[];
}

function getRandomNumber(range: number) {
    const multiplier = range * 2 + 1;
    return Math.floor(Math.random() * multiplier) - range;
}

const Lines = ({ lines }: LinesProps) => {
    console.log('lines', lines);

    const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const words = e.currentTarget.children;
        for (const word of words ?? []) {
            const letters = word.getElementsByClassName('letter') as HTMLCollectionOf<HTMLElement>;
            for (const letter of letters ?? []) {
                console.log('over', letter);
                letter.style.transform = `translate(${getRandomNumber(5)}px, ${getRandomNumber(
                    20
                )}px) rotate(${getRandomNumber(30)}deg)`;
            }
        }
    };

    const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const words = e.currentTarget.children;
        for (const word of words ?? []) {
            const letters = word.getElementsByClassName('letter') as HTMLCollectionOf<HTMLElement>;
            for (const letter of letters ?? []) {
                console.log('out', letter);
                letter.style.transform = `translate(0%) rotate(0deg)`;
            }
        }
    };

    const lineElement = lines.map((line, i) => {
        const words = line.split(' ');
        console.log('words', words);
        const wordElement = words.map((word, i) => {
            const characters = word.split('');
            console.log('characters', characters);
            const lineChar = characters.map((char, i) => {
                return (
                    <span className="letter" key={i} style={{ display: 'inline-block' }}>
                        {char}
                    </span>
                );
            });
            return (
                <p className="word" key={i}>
                    {lineChar}
                </p>
            );
        });

        return (
            <div className="line" key={i} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {wordElement}
            </div>
        );
    });
    return <>{lineElement}</>;
};

interface ExplosiveTextsProps {
    texts: string;
    rows: number;
}

export const ExplosiveTexts = ({ texts, rows = 4 }: ExplosiveTextsProps) => {
    const stringLines = convertStringToArray(texts, rows);

    return (
        <div className={'e-texts'}>
            <Lines lines={stringLines} />
        </div>
    );
};
