import { Card } from '~/components/card-stack/card';
import { CardGallery } from './components/card-stack/card-gallery';
import { CardStack } from './components/card-stack/card-stack';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { TextMatrix } from './components/text-matrix/text-matrix';
import { PhotoScroll } from './components/photo-scroll/photo-scroll';

function App() {
    return (
        <div className="App">
            <CardGallery />
            <TextMatrix text={'hyperplexed'} />
            <PhotoScroll />
        </div>
    );
}

export default App;
