import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from "./components/HomePage";
import CollectionPage from "./components/CollectionPage";
import './index.css';

const App = () => {
    return (
        // <Layout>
        //     <Routes>
        //         <Route exact key="Home" path="/" element={<HomePage />} />
        //         <Route exact key="Collection" path="/collection" element={<CollectionPage />} />
        //     </Routes>
        // </Layout>
        <p>App goes here</p>
    );
}

export default App;
