import React from 'react'
import './styles/Welcome.css'

//Componentes funcionlaes, porque son hechos con funciones de JS
const Welcome = ({username}) =>(
    <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {username}!</h1>
                <p>Let´s workout to get someones gains!</p>
            </div>
        </div>
)

export default Welcome