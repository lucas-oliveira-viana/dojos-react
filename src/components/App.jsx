import React from 'react'
import Navbar from './Navbar'
import { FizzBuzz } from './FizzBuzz'
import '../styles/layout.css'

const App = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <FizzBuzz/>
        </React.Fragment>
    )
}

export default App;