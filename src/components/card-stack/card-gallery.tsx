import { useState } from 'react';
import { faX, faHeart } from '@fortawesome/free-solid-svg-icons';

import './card-gallery.css';
import { CardStack } from './card-stack';
import { IconButton } from '~/components/icon-button/icon-button';

interface CardGalleryProps {
    imageSet1?: { [key: string]: string };
    imageSet2?: { [key: string]: string };
    imageSet3?: { [key: string]: string };
}

export const CardGallery = ({ imageSet1, imageSet2, imageSet3 }: CardGalleryProps) => {
    const [cardIndexes, setCardIndexes] = useState<number[]>([0, 1, 2]);

    const handleXClick = () => {
        setCardIndexes((prevState) => prevState.slice(2).concat(prevState.slice(0, 2)));
    };

    const handleHeartClick = () => {
        setCardIndexes((prevState) => prevState.slice(1).concat(prevState.slice(0, 1)));
    };

    console.log(cardIndexes);

    return (
        <div className="cardgallery">
            <div className="cardgroup">
                <CardStack index={cardIndexes[0]} {...imageSet1} />
                <CardStack index={cardIndexes[1]} {...imageSet2} />
                <CardStack index={cardIndexes[2]} {...imageSet3} />
            </div>
            <div className="gallerybuttons">
                <IconButton name="x" icon={faX} onClick={handleXClick} />
                <IconButton name="heart" icon={faHeart} onClick={handleHeartClick} />
            </div>
        </div>
    );
};
