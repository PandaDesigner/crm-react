import { useState, useEffect } from "react"
import {Client} from '../components/Client'
const Inicio = () => {

  const [ clientes, setClientes ] = useState([]) 
  useEffect(() => {
    const obtenerClienteAPI = async () =>{
      try {
        const url = 'http://localhost:4000/clientes'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        
        setClientes(resultado);
      } catch (error) {
        console.log(error)
      }
    }
  
    obtenerClienteAPI()
  }, [])
  

  return (
    <>
    <h1 className='font-black text-4xl text-indigo-900'>Clientes</h1>
    <p className='mt-1 text-gray-500'>Administra tus clientes</p>

    <table className="w-full mt-5 table-auto shadow bg-white">
      <thead>
        <tr className="bg-indigo-800 text-sky-400">
          <th className="p-2">Nombre</th>
          <th className="p-2">Empresa</th>
          <th className="p-2">Correo</th>
          <th className="p-2">Contacto</th>
          <th className="p-2">Aciones</th>

        </tr>
      </thead>
      <tbody>
        {clientes.map( cliente =>(
            <Client/>
        ))}
      </tbody>

    </table>
</>
  )
}

export default Inicio