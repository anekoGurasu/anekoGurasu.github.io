import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// 1. IMPORTUJ SVŮJ CONTEXT
import { ContextProvider } from './contexts/ContextProvider'; // Uprav cestu podle reality

const appName = 'Internet bez obav';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            // 2. OBAL APLIKACI ZDE
            <ContextProvider>
                <App {...props} />
            </ContextProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});