import React from 'react'
import ReactDOM from 'react-dom/client';
import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return <Counter/>
}
root.render(<App/>)

