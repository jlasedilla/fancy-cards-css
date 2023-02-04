import { Card } from '~/components/card-stack/card';
import { CardGallery } from './components/card-stack/card-gallery';
import { CardStack } from './components/card-stack/card-stack';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { TextMatrix } from './components/text-matrix/text-matrix';

function App() {
    return (
        <div className="App">
            <CardGallery />
        </div>
    );
}

export default App;
