import * as React from 'react'
import {Title} from './components/title'
import {Logo} from './components/logo'




function App() {
  
  return (
    <>
    <h1>hello</h1>
    <Title></Title>
    <Logo width="80" height="80" />
    <h1>Bookshelf</h1>
    <div>
      <button onClick={() => alert('login clicked')}>Login</button>
    </div>
    <div>
      <button onClick={() => alert('register clicked')}>Register</button>
    </div>
    </>
  )
}

export default App