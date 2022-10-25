import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './contexts/firebase';
import {firebase,FieldValue} from './lib/firebase'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{firebase , FieldValue}}>
    <App />
    </FirebaseContext.Provider>
);


//client side rendered app : react 
//database: firebase 
//styling : tailwind css

//FOLDER STRUCTURE
//src
 //-> components
 //-> constants
 //-> contexts
 //-> helpers
 //-> pages
 //-> hooks
 //-> lib(firebase is going to be here...)
 //-> services(firebase functions are going to be here...)
 //-> styles