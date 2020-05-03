import React from 'react'
import './styles/Welcome.css'

//Componentes funcionlaes, porque son hechos con funciones de JS
function Welcome(props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}!</h1>
                <p>Let´s workout to get someones gains!</p>
            </div>
        </div>
    )
}

export default Welcome