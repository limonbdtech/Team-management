import React from 'react'
import Api from './Api'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Container>
        <h1 className='text-danger text-center'>Team-Builder</h1>
      <Api/>
    </Container>
  )
}

export default App