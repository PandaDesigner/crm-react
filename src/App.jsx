import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Inicio from './pages/Inicio';
import NuevoCliente from './pages/NuevoCliente'
import EdicionCliente from './pages/EdicionCliente'
import { ViewClient } from './pages/ViewClient';


export default function App() {
console.log(import.meta.env.VITE_API_URL)
  return (
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
  <Route path="/clientes" element={<Layout />}>
    <Route index element={<Inicio />} />
    <Route path="nuevo" element={<NuevoCliente />} />
    <Route path=':id' element={<ViewClient/>} />
    <Route path="editar/:id" element={<EdicionCliente/>}/>
  </Route>
  </Routes>
</BrowserRouter>
  )
}

