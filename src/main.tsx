import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';

// render the app to the root element
createRoot(document.getElementById('root')!).render(
    // enable strict mode
    <StrictMode>
        {/* render the main app */}
        <App />
    </StrictMode>
);
