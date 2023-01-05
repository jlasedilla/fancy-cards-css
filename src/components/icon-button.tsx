import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './icon-button.css';

interface IconButtonProps {
    name: string;
    icon: IconProp;
    onClick: () => void;
}

export const IconButton = ({ name, icon, onClick }: IconButtonProps) => {
    return (
        <button className={`icon-button ${name}`} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};
