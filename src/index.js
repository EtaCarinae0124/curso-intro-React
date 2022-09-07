import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/index.js';
import './index.css';

// function App(props) {
//     return (
//         <h1>
//             {props.saludo} {props.nombre}
//         </h1>
//     );
// }

// function withSaludo(WrappedComponent) {
//     return function WrappedComponentWithSaludo(saludo) {
//         return function ComponenteDeVerdad(props) {
//             return(
//             // Esta función TIENE que ser COMPONENTE DE REACT
//                 <>
//                     <WrappedComponent {...props} saludo={saludo} />
//                     <p>Estamos acompañando al Wrapped Component</p>
//                 </>
//             )
//         }
//     }
// }

// // const AppWithWhatever = withWhatever(App);
// const AppWithSaludo = withSaludo(App)('Holi');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // <App saludo='Hola' nombre='Dani'/>
    <App/>
  
);

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );
