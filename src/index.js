import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './styles/styles.scss';
import App from './App';

const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(<App />);
