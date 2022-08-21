import { useNavigate } from 'react-router-dom'

const ClienteItem = ({cliente, handelDelet}) => {

    const navigate = useNavigate()
    const {nombre, empresa, email, telefono, notas, id }= cliente
console.log(nombre)
  return (
    <tr className='border-indigo-200 hover:bg-slate-100 border-b '>
    <td className='p-3 text-sm '>{nombre}</td>
    <td className='p-3 text-sm '> {empresa} </td>
    <td className='p-3 text-sm '>
      <p><span className='text-indigo-800 uppercase font-bold'>Email:</span>{email}</p>
      <p><span className='text-indigo-800 uppercase font-bold'>Tel:</span>{telefono}</p>
    </td>
    <td className='px-5'>
    <button
    type='button'
    className='bg-green-600 hover:bg-green-700 text-white p-2 block uppercase w-full m-auto my-1 mx-1 text-xs'
    onClick={() => navigate(`/clientes/${id}`)}
    >
        Ver
      </button>
      <button
      type='button'
      className='bg-indigo-600 hover:bg-purple-700 text-white p-2 block uppercase w-full m-auto my-1 mx-1 text-xs'
      onClick={()=> navigate(`/clientes/editar/${id}`)}
      >
        Editar
      </button>
      <button 
      type='button'
      onClick={()=>handelDelet(id)}
      className='bg-red-600 hover:bg-red-900 text-white p-2 block uppercase w-full m-auto my-1 mx-1 text-center text-xs'>Eliminar</button>
    </td>
    
    </tr>
  )
}

export default ClienteItem