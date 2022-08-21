import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Alert } from './Alert'
import { Spinner } from './Spinner'


const Formulario = ({cliente, load}) => {

    const navigete = useNavigate()

    const newClientSchame = Yup.object().shape({
        nombre: Yup.string().min(3, 'El Nombre no es Valido')
                        .max(20, 'El Nombre es muy Largo')
                        .required('El Nombre del Clientes es Obligatorio'),
        empresa: Yup.string()
                    .required('El nombre de la empresa es obligatorio'),
        email:Yup.string()
                    .required('El Correo Electronico es Obligatorio')
                    .email('Email no Valido '),
        telefono:Yup.number()
                    .min(9, 'No es un Numero valido')
                    .positive('Tiene que ser un numero valido')
                    .integer('Numero no valido')
                    .required('El Numero de Telefono es Obligatorio')
                    .typeError('El Numero no es Valido')
    })

    const handelSubmit = async (valores) =>{
        try {
            let respuesta
            if(cliente.id){
                const url = `http://localhost:4000/clientes/${cliente.id}`

                respuesta = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            else{
                const url = 'http://localhost:4000/clientes'

                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }

            await respuesta.json()
            navigete('/clientes')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    load ? <Spinner/>:(
<div className='bg-gray-50 mt-10 px-5 py-10 rounded-md shadow-md w-full md:w-[100%] mx-auto'>
    <h1 className='text-indigo-600 font-bold text-xl uppercase text-center'>{Object.keys(cliente).length === 0 ?"Agregar Cliente":"Editar Cliente"}</h1>
    <Formik
        initialValues={{
            nombre:cliente?.nombre ?? "",
            empresa:cliente?.empresa ??"",
            email:cliente?.email ??"",
            telefono:cliente?.telefono ??"",
            notas:cliente?.notas ??""
        }}
        enableReinitialize={true}
        onSubmit={ async(values, {resetForm}) => {
            await handelSubmit(values)
            resetForm()
        }}
        validationSchema = {newClientSchame}
    >
    {({errors, touched})=> {
        return (
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
            name="nombre"
        />
        {errors.nombre && touched.nombre ? (
            <Alert>{errors.nombre}</Alert>
        ): null }
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
            name="empresa"
        />
                {errors.empresa && touched.empresa ? (
            <Alert>{errors.empresa}</Alert>
        ): null }
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
            name="email"
        />
                {errors.email && touched.email ? (
            <Alert>{errors.email}</Alert>
        ): null }
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
            name="telefono"
        />
                {errors.telefono && touched.telefono ? (
            <Alert>{errors.telefono}</Alert>
        ): null }
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
            name='notas'
        />
        </div>

        <input
        type="submit"
        value={Object.keys(cliente).length === 0 ?"Agregar Cliente":"Editar Cliente"}
        className='mt-5 w-full bg-indigo-700 p-3 text-sky-50 uppercase font-bold rounded-md hover:text-indigo-100 hover:bg-black ease-in-out duration-300 '
        />

    </Form>
    )}}
    </Formik>
</div>
    )
)}

            Formulario.defaultProps = {
                cliente:{},
                load: false
            }

export default Formulario