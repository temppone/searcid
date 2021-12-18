import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

const App = function () {
    return (
        <div className='App'>
            <Router>
                <Suspense fallback={<div>Carregando...</div>}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
};

export default App;
