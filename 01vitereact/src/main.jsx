import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Hi</h1>
    </div>
  )
}

const anotherUser = " | chai aur react"

const anotherElement = (
  <a href="https://google.com" target='-blank'>google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://youtube.com', target: '_blanlk'},
  'Click me to visit YouTube',
  anotherUser
)

createRoot(document.getElementById('root')).render(
    reactElement
)
