import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import { IoMdTrash } from 'react-icons/io'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclose from '../hooks/useDisclose'
import { toast } from 'react-toastify'

const ContactCard = ({contact}) => {
  const {isOpen, onClose, onOpen} = useDisclose()

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id))
      toast.success("Contact deleted successfully")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div key={contact.id} 
            className= 'bg-yellow flex p-2 rounded-lg justify-between items-center'>

              <div className='flex gap-2'>
              <HiOutlineUserCircle className='text-orange text-4xl'/>
              <div className=''>
                <h2 className='text-medium'>{contact.name}</h2>
                <p className='text-sm '>{contact.email}</p>
              </div>
              </div>
              <div className='flex text-3xl'>
                <RiEditCircleLine onClick={onOpen} className='cursor-pointer'/>
                <IoMdTrash onClick={()=>deleteContact(contact.id)

                } className='text-orange cursor-pointer'/>
              </div>
              <AddAndUpdateContact 
              contact={contact} isUpdate isOpen={isOpen} onClose={onclose}/>
            </div>
  )
}

export default ContactCard