import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='overflow-hidden h-screen'>
    <div>
        <Header/>
    </div>
    <div>
      <Sidebar/>
    </div>
    
    </div>
  )
}

export default App
