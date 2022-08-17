import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const ViewClient = () => {
  const [cliente, setCliente] = useState({})
  const {id} = useParams()
  
  const {nombre, empresa, telefono, email, notas} = cliente
  useEffect(() => {

    const obtenerClienteAPI = async () =>{
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const ress = await fetch(url)
        const result = await ress.json()
        setCliente(result)
        console.log(cliente);
      } catch (error) {
        console.log(error)
      }
    }
    obtenerClienteAPI()
  }, [])
  

  return (
    <>
    <div className="mb-10">
    <h1 className='font-black text-4xl text-indigo-900'>Ver Informacion Cliente</h1>
          <p className='mt-1 text-gray-500'>información importante del cliente: {nombre}</p>
          
    </div>
    <div>
      <p className="mb-2">
      <span className="text-gray-600 text-3xl font-bold">Cliente: </span> 
      <span className="text-white text-2xl px-8 py-1 rounded-[50px] bg-indigo-700">{nombre}</span>
      </p>

      <p>
      <span className="text-gray-600 text-1xl font-bold uppercase">Empresa: </span> 
      <span className="text-indigo-400 text-xl">{empresa}</span>
      </p>
      <p>
      <span className="text-gray-600 text-1xl font-bold uppercase">Email: </span> 
      <span className="text-indigo-400 text-xl">{email}</span>
      </p>
      <p>
      <span className="text-gray-600 text-1xl font-bold uppercase">Telefono: </span> 
      <span className="text-indigo-400 text-xl">{telefono}</span>
      </p>
    {notas && (
      <p>
      <span className="text-gray-600 text-1xl font-bold uppercase">Nota: </span> 
      <span className="text-indigo-400 text-xl">{notas}</span>
      </p>
    )}
    </div>

    </>
  )
}
