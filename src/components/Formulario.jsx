import React from 'react'
import { Formik, Form, Field } from 'formik'
const Formulario = () => {
  return (
    <div className='bg-gray-50 mt-10 px-5 py-10 rounded-md shadow-md w-full md:w-[100%] mx-auto'>
        <h1 className='text-indigo-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>
        <Formik>
            <Form
            className='mt-5'
            >
                <div>
                <label
                className='text-indigo-800'
                htmlFor="nombre">Nombre:</label>
                <Field
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-indigo-50"
                    placeholder="Nombre del Cliente"
                />
                </div>

                <div className='mt-5'>
                <label
                className='text-indigo-800'
                htmlFor="empresa">Empresa:</label>
                <Field
                    id="empresa"
                    type="text"
                    className="mt-2 block w-full p-3 bg-indigo-50"
                    placeholder="Empresa del Cliente"
                />
                </div>

                <div className='mt-5'>
                <label
                className='text-indigo-800'
                htmlFor="email">E-mail:</label>
                <Field
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-indigo-50"
                    placeholder="E-mail del Cliente"
                />
                </div>

                <div className='mt-5'>
                <label
                className='text-indigo-800'
                htmlFor="telefono">Telefono:</label>
                <Field
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-indigo-50"
                    placeholder="Telefono del Cliente"
                />
                </div>


                <div className='mt-5'>
                <label
                className='text-indigo-800'
                htmlFor="notas">Notas:</label>
                <Field
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-indigo-50 h-40"
                    placeholder="Notas del Cliente"
                />
                </div>

                <input
                type="submit"
                value="Agregar Cliente"
                className='mt-5 w-full bg-indigo-700 p-3 text-sky-50 uppercase font-bold rounded-md hover:text-indigo-100 hover:bg-black ease-in-out duration-300 '
                />

            </Form>
        </Formik>
    </div>
  )
}

export default Formulario