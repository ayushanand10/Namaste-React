import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));      // select root to render all the react content

const parent = React.createElement('div', {id: 'parent'},
    React.createElement('div', {id: 'child'},
        [React.createElement('h1', {}, 'I am h1'), React.createElement('h2', {}, 'I am h2')]    // for siblings we need to give an array of react Elements
    )
)

root.render(parent)
console.log(parent);