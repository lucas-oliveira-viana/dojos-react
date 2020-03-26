import React from 'react'
// import Navbar from './Navbar'
import { FizzBuzz } from './FizzBuzz'
import Marvel from './Marvel'
import '../styles/layout.css'

const App = () => {
    // <Navbar/>
    return (
        <React.Fragment>
            <FizzBuzz/>
            <Marvel />
        </React.Fragment>
    )
}

export default App;