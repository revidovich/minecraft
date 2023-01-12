import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/containers/App';
import './main.css';

const root = document.querySelector('#app');

if (root === null) {
    throw new Error('#app not found');
}

createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
