import '../css/app.css';
import '../css/nav.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importy tvých komponent (stránek)
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Game from './pages/Game';
import Contact from './pages/Contact';
import GameEnd from './pages/GameEnd';
import NotFound from './pages/NotFound';

// Importy tvých layoutů a contextu
import { ContextProvider, useStateContext } from './contexts/ContextProvider';
import DefaultLayout from './components/layout/defaultLayout';
import GuestLayout from './components/layout/guestLayout';
import { JSX } from 'react';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
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
                    <Route path="/login" element={
                        <GuestRoute>
                            <GuestLayout>
                                <Login />
                            </GuestLayout>
                        </GuestRoute>
                    } />

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

                    <Route path="/gameEnd" element={
                        <ProtectedRoute>
                            <DefaultLayout>
                                <GameEnd />
                            </DefaultLayout>
                        </ProtectedRoute>
                    } />

                    <Route path="*" element={
                        <GuestLayout>
                            <NotFound />
                        </GuestLayout>
                    } />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
}