//const element = document.createElement('h1')
//element.innerText = 'Hello React..'
//const container = document.getElementById('root')
//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName: 'Daniel',
    lastName: 'Armas',
    avatar: 'https://image.flaticon.com/icons/svg/1674/1674292.svg'
}

function getName(user){
    return '${user.firstName} ${user.lastName}'
}

function getGretting(user){
    if(user){
        return <h1>Hello {getName(user)} </h1>
    }
    return <h1>Hello Stranger </h1>

}

const element = (
    <div>
        <h1>{getGretting(user)}</h1>
        <img src={user.avatar} />
    </div>
)

const container = document.getElementById('root')

//ReactDOM.render(__QUE__, __DONDE__)

ReactDOM.render(element, container)