import { useState, useEffect } from "react"
import ClienteItem from '../components/ClienteItem'
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
  

  return <>
    <h1 className='font-black text-4xl text-indigo-900'>Clientes</h1>
    <p className='mt-1 text-gray-500'>Administra tus clientes</p>
    <table className="w-full mt-5 table-auto shadow bg-white border-collapse">
      <thead>
        <tr className="bg-indigo-800 text-sky-400">
          <th className="p-2 text-sm uppercase">Empresa</th>
          <th className="p-2 text-sm uppercase">Correo</th>
          <th className="p-2 text-sm uppercase">Contacto</th>
          <th className="p-2 text-sm uppercase">Aciones</th>

        </tr>
      </thead>
      <tbody className="border-collapse border-indigo-500	">
      {clientes.map((cliente) => <ClienteItem cliente={cliente}/>)}
      </tbody>

    </table>

  </>
  
}

export default Inicio