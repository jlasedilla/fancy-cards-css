import { Card } from '~/components/card';
import { CardGallery } from './components/card-gallery';
import { CardStack } from './components/card-stack';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function App() {
    return (
        <div className="App">
            <CardGallery />
        </div>
    );
}

export default App;
