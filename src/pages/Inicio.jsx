import { useState, useEffect } from "react"
import ClienteItem from '../components/ClienteItem'

const Inicio = () => {

  const [ clientes, setClientes ] = useState([])

  
  useEffect(() => {

    const obtenerClienteAPI = async () =>{
      try {
        const url = import.meta.env.VITE_API_URL
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        
        setClientes(resultado);
      } catch (error) {
        console.log(error)
      }

    }
  
    obtenerClienteAPI()
  }, [])
  
  const handelDelet = async(id) =>{
    console.log('eliminando....' + id);
    const confirmate = confirm(`¿Deseas eliminar el cliente ${id}?`)
    if(confirmate){
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`
        const ress = await fetch(url, {
          method: 'DELETE'
        })
        await ress.json()
        const arrayClient = clientes.filter(cliente => cliente.id !== id)
        setClientes(arrayClient)
      } catch (error) {
        console.log(error)
      }
    }

  }

  return <>
  
    <h1 className='font-black text-4xl text-indigo-900'>Clientes</h1>
    <p className='mt-1 text-gray-500'>Administra tus clientes | <span className="font-bold text-indigo-900">clientes registrados # { clientes.length}</span></p>
    <table className="w-full mt-5 table-auto shadow bg-white border-collapse">
      <thead>
        <tr className="bg-indigo-800 text-sky-400">
          <th className="p-2 text-sm uppercase">Nombre</th>
          <th className="p-2 text-sm uppercase">Empresa</th>
          <th className="p-2 text-sm uppercase">Contacto</th>
          <th className="p-2 text-sm uppercase">Aciones</th>

        </tr>
      </thead>
      <tbody className="border-collapse border-indigo-500	">
      {clientes.map((cliente) => < ClienteItem 
      key={cliente.id}
      cliente={ cliente } 
      handelDelet={handelDelet}
      />)}
      </tbody>

    </table>

  </>
  
}

export default Inicio