import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Homee from './pages/Homee'
import CreateBooks from './pages/CreateBooks'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBooks from './pages/DeleteBooks'
const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Homee/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
    </Routes>
   
  )
}

export default App