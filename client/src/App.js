import React from 'react'
import { Home } from './components'

import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='min-w-[680px] h-auto bg-primary flex justify-center justify-items-center'>
      <Routes>
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App