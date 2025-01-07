import React from 'react';

import { Routes, Route } from 'react-router-dom';
import ItemManagement from './pages/ItemManagement';
import InvoiceManagement from './pages/InvoiceManagement';
import Sidebar from './components/Sidebar';
// import AddItem from './pages/AddItem';

function App() {

  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden font-sans text-3xl font-bold'>
      {/* background */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
        <div className='absolute inset-0 backdrop-blur-sm'/>
      </div>

      <Sidebar/>
      <Routes>
        <Route path='/' element={<ItemManagement />}></Route>
        <Route path='/invoice' element={<InvoiceManagement />}></Route>
        {/* <Route path='/create' element={<AddItem />}></Route> */}
      </Routes>
    </div>
  )

}

export default App
