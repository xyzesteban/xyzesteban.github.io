import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResponsiveProvider } from './context/ResponsiveContext';

// These components pass data+assets to a ResponsiveLayout component
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Music from './pages/Music';

const App = () => {
    return (
        <ResponsiveProvider>
            <Router>
                <Routes>
                    {/* Landing page is set to "About" */}
                    <Route path="/" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/software" element={<Projects />} />
                    <Route path="/music" element={<Music />} />
                    {/* Define more routes as needed */}
                </Routes>
            </Router>
        </ResponsiveProvider>
    );
}

export default App;