import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importy tvých komponent (stránek)
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Game from './pages/Game';
import Contact from './pages/Contact';

// Importy tvých layoutů a contextu
import { ContextProvider, useStateContext } from './contexts/ContextProvider';
import DefaultLayout from './components/layout/defaultLayout';
import GuestLayout from './components/layout/guestLayout';
import { JSX } from 'react';

// Pomocná komponenta pro ochranu cest (Protected Routes)
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

// Pomocná komponenta pro hosty (aby přihlášený nelezl na Login)
const GuestRoute = ({ children }: { children: JSX.Element }) => {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/" replace />;
    }
    return children;
};

const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);

    root.render(
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    {/* Cesty pro hosty (Login) */}
                    <Route path="/login" element={
                        <GuestRoute>
                            <GuestLayout>
                                <Login />
                            </GuestLayout>
                        </GuestRoute>
                    } />

                    {/* Chráněné cesty (Hra, Dashboard, Home) */}
                    <Route path="/" element={
                        <ProtectedRoute>
                            <DefaultLayout>
                                <Home />
                            </DefaultLayout>
                        </ProtectedRoute>
                    } />
                    
                    <Route path="/game" element={
                        <ProtectedRoute>
                            <DefaultLayout>
                                <Game />
                            </DefaultLayout>
                        </ProtectedRoute>
                    } />

                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <DefaultLayout>
                                <Dashboard />
                            </DefaultLayout>
                        </ProtectedRoute>
                    } />

                    <Route path="/contact" element={
                        <ProtectedRoute>
                            <DefaultLayout>
                                <Contact />
                            </DefaultLayout>
                        </ProtectedRoute>
                    } />

                    {/* Catch-all přesměrování (pokud uživatel zadá nesmysl) */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
}