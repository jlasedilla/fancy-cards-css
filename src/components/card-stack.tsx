import { Card } from '~/components/card';

import './card-stack.css';

export interface CardStackProps {
    /**
     * Image string for the first large card
     */
    imgl1?: string;
    /**
     * Image string for the second large card
     */
    imgl2?: string;
    /**
     * Image string for the third large card
     */
    imgl3?: string;
    /**
     * Image string for the forth large card
     */
    imgl4?: string;
    /**
     * Image string for the first small card
     */
    imgs1?: string;
    /**
     * Image string for the second small card
     */
    imgs2?: string;
    /**
     * Image string for the third small card
     */
    imgs3?: string;
    /**
     * Image string for the forth small card
     */
    imgs4?: string;
    /**
     * Element index
     */
    index: string | number;
}

/**
 * Card stack component
 */
export const CardStack = ({
    imgl1 = '',
    imgl2 = '',
    imgl3 = '',
    imgl4 = '',
    imgs1 = '',
    imgs2 = '',
    imgs3 = '',
    imgs4 = '',
    index,
}: CardStackProps) => {
    return (
        <div className="cardstack" data-index={index}>
            <Card size="s" img={imgs1}></Card>
            <Card size="l" img={imgl1}></Card>
            <Card size="s" img={imgs2}></Card>
            <Card size="l" img={imgl2}></Card>
            <Card size="s" img={imgs3}></Card>
            <Card size="l" img={imgl3}></Card>
            <Card size="s" img={imgs4}></Card>
            <Card size="l" img={imgl4}></Card>
        </div>
    );
};
