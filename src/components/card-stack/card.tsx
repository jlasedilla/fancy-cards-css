import { FunctionComponent, ReactNode } from 'react';
import './card.css';

interface CardProps {
    /**
     * Card size
     */
    size?: 's' | 'm' | 'l';
    /**
     * Image string/url
     */
    img?: string;
    /**
     * Card content
     */
    children?: ReactNode;
}

/**
 * Basic card component
 */
export const Card: FunctionComponent<CardProps> = ({
    size = 'm',
    img = '',
    children,
}: CardProps) => {
    return (
        <div className={`card ${size}`}>
            <img className="image" src={img} />
            {children}
        </div>
    );
};
