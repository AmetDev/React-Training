import React from 'react';
import ReactDOM from 'react-dom/client';
import COunter from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
    return <COunter/>
}
root.render(<App/>)
