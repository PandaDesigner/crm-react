import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
     <>
          <h1 className='font-black text-4xl text-indigo-900'>Nuevo Cliente</h1>
          <p className='mt-1 text-gray-500'>LLena los siguientes campos para registrar un Cliente</p>
          <Formulario/>
     </>
  )
}

export default NuevoCliente