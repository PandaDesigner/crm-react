import React from 'react'

export const Alert = ({children}) => {
  return (
    <>
    <div className='bg-red-200 text-center text-red-600 py-3 mt-2'>
        <p className='uppercase'>{children}</p>
    </div>
    </>
  )
}
