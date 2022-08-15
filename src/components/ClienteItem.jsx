import React from 'react'

const ClienteItem = ({cliente}) => {
    const {nombre, empresa, email, telefono }= cliente
console.log(nombre)
  return (
    <tr className='border-indigo-500 hover:bg-slate-100'>
    <td className='p-1 text-sm '>{nombre}</td>
    <td className='p-1 text-sm '> {empresa} </td>
    <td className='p-1 text-sm '> {email}</td>
    
    </tr>
  )
}

export default ClienteItem