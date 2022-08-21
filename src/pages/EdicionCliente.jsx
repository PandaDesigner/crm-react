import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Formulario from "../components/Formulario"


const EdicionCliente = () => {

  const [cliente, setCliente] = useState({})
  const [load, setLoad] = useState(false)
  const {id} = useParams()
  
  const {nombre, empresa, telefono, email, notas} = cliente
  useEffect(() => {

    setLoad(!load)
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
      setTimeout(()=>{
        setLoad(false)
      },1500)
    }
    obtenerClienteAPI()
  }, [])

  return (
    <>
        <h1 className='font-black text-4xl text-indigo-900'>Editar Cliente</h1>
        <p className='mt-1 text-gray-500'>Actualiza los datos necesarios</p>
        { Object.keys(cliente).length === 0?<p className="text-center text-4xl font-bold text-red-500"> No Hay Resultado cliente ID no válido </p> :( 
        <Formulario 
        cliente={cliente}
        load={load}
        />
        )}
    </> )
}

export default EdicionCliente