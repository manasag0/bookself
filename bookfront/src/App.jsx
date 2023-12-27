import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBooks from './pages/CreateBooks'
import Home from './pages/Home'
import DeleteBooks from './pages/DeleteBooks'
import EditBooks from './pages/EditBooks'
import ShowBooks from './pages/ShowBooks'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/books/create' element={<CreateBooks />} />
        <Route path='/books/delete/:id' element={<DeleteBooks />} />
        <Route path='/books/edit/id' element={<EditBooks />} />
        <Route path='books/details/:id' element={<ShowBooks />} />
      </Routes>
    </div>

  )
}
