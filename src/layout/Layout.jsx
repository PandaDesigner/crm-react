import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation();
  const urlPosition = location.pathname;


  return (
     <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-indigo-600 px-5 py-10 md:h-screen'>
        <h2 className='text-white text-2xl uppercase font-bold text-center'>CRM - Cliente</h2>
        <nav className="mt-10">
          <Link
            className= {`${urlPosition === '/clientes'? 'text-cyan-300': 'text-white'} text-white text-lm block mt-2 hover:text-cyan-400 ease-in-out duration-300`}
            to="/clientes">Clientes</Link>
          <Link
            className= {`${urlPosition === '/clientes/nuevo'? 'text-cyan-300': 'text-white'} text-white text-lm block mt-2 hover:text-cyan-400 ease-in-out duration-300`}
            to="/clientes/nuevo">Nuevo Cliente</Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-10 bg-sky-100 md:h-screen overflow-auto">
         <Outlet />
      </div>
     
     </div>
  )
}

export default Layout