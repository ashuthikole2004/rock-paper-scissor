import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App! </h1>
        </div>
    )
}    

const createAnotherElement=(
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const reactElement=React.createElement(
    'a',
    {
        href:'//google.com',target:'_blank'
    },
    'click to open google'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    // <App />//it can be also written as MyApp()
    // reactElement
    createAnotherElement
)