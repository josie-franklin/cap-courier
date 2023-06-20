import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import About from "./components/Home";
// import Play from "./components/Play/Play";
import { Layout } from './components/Layout';
import PlayContextProvider from "./context/PlayContext";
import './custom.css';

const App = () => {
    return (
        <Layout>
            <Routes>
                {/* <Route exact key="Play" path="/" element={<PlayContextProvider><Play /></PlayContextProvider>} /> */}
                {/* <Route exact key="About" path="/about" element={<About />} /> */}
            </Routes>
        </Layout>
    );
}

export default App;
