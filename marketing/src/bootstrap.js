
import React from 'react';  
import ReactDOM from 'react-dom';
import Album from './components/Landing';
import App from './App';
const mount = (element)=>{
    ReactDOM.render(<App/>, element);
}

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#marketing-root');
    if(devRoot){
        mount(devRoot);
    }
}

export { mount };