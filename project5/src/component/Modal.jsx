import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({onClose, isOpen, children}) => {
  return (
    <>
    {
        isOpen && (
            <div  
            className='grid place-items-center backdrop-blur  h-screen w-screen 
            z-40
            absolute top-0'>
            <div className='m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white p-4'>
                <div className='flex justify-end'>
                    <AiOutlineClose onClick={onClose} 
                    className='self-end text-2xl'/>
                </div>
                {children}
            </div>
            
            </div>
        )
    }
    </>
  )
}

export default Modal