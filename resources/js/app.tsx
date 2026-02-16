import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Importy tvých opravených layoutů a contextu
import { ContextProvider } from './contexts/ContextProvider';
import DefaultLayout from './components/layout/defaultLayout';
import GuestLayout from './components/layout/guestLayout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        // Načtení komponenty stránky
        const page: any = await resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        );

        // PŘIŘAZENÍ LAYOUTU:
        // Pokud je stránka 'Login', použije GuestLayout. 
        // Všechny ostatní (Home, Dashboard, Game) použijí DefaultLayout.
        page.default.layout = name === 'Login' 
            ? (page: any) => <GuestLayout children={page} />
            : (page: any) => <DefaultLayout children={page} />;

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ContextProvider>
                <App {...props} />
            </ContextProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});