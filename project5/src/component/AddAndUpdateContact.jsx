import {ErrorMessage, Field, Form, Formik}  from 'formik'
import React from 'react'
import Modal from './Modal'
import { collection, updateDoc } from 'firebase/firestore'
import {db} from '../config/firebase'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is Required")
})
const AddAndUpdateContact = ({isOpen, onClose, isUpdate, contact}) => {
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact)
            toast.success("Contact added successfully")
            onClose();
        } catch (error) {
            console.log(error)
        }
    }
    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact)
            toast.success("Contact updated successfully")
            onClose();
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
      validationSchema={contactSchemaValidation}
      initialValues={isUpdate ?
        {
        name: contact.name,
        email: contact.email,
        }
      :
      {
        name: "",
        email: ""
      }}
      onSubmit={(values)=>{
        console.log(values)
        isUpdate ? updateContact(values, contact.id) :
        addContact(values);
      }}
      >
         <Form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <Field name="name" className='border h-10'/>
            <div className='text-red-500 text-xs'>
                <ErrorMessage name='name' />
            </div>
            </div>
            <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <div className='text-red-500 text-xs'>
                <ErrorMessage name='name' />
            </div>
            <Field type="email" name="name" className='border h-10'/>
            </div>
            <button className='px-3 py-1.5 self-end border bg-orange-500'>
                {isUpdate ? "update" : "add"} contact
            </button>
         </Form>
      </Formik>
    </Modal>
    </div>
  )
}

export default AddAndUpdateContact