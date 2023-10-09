// const heading = React.createElement("h1", {id:"heading", xyz:'abc'}, "Hello from nobody");     //("element", object - give attributes to the element, "innerHTML content")
// // console.log(heading);   // heading is an object

const root = ReactDOM.createRoot(document.getElementById("root"));      // select root to render all the react content

// root.render(heading);



/* 
suppose we need to create this nested structure
    <div id='parent'>
        <div id='child'>
            <h1>I m h1</h1>
            <h2>I m h2</h2>
        </div>
    </div>
*/

const parent = React.createElement('div', {id: 'parent'},
    React.createElement('div', {id: 'child'},
        [React.createElement('h1', {}, 'I am h1'), React.createElement('h2', {}, 'I am h2')]    // for siblings we need to give an array of react Elements
    )
)

root.render(parent)
console.log(parent);