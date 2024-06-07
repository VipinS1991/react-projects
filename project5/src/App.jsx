import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import {FiSearch } from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'
import {collection, getDocs, onSnapshot} from 'firebase/firestore'
import ContactCard from './component/ContactCard'
import Modal from './component/Modal'
import AddAndUpdateContact from './component/AddAndUpdateContact'
import useDisclose from './hooks/useDisclose'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from './component/NotFoundContact'

const App = () => {
const [contacts, setContacts] = useState([]);

const {isOpen, onClose, onOpen} = useDisclose()

useEffect(() => {
  const getContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");

      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
        return contactLists;
      });
    } catch (error) {
      console.log(error);
    }
  };

  getContacts();
}, []);

const filterContacts = (e) => {
  const value = e.target.value;

  const contactsRef = collection(db, "contacts");

  onSnapshot(contactsRef, (snapshot) => {
    const contactLists = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    const filteredContacts = contactLists.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );

    setContacts(filteredContacts);

    return filteredContacts;
  });
};
  return (
    <>
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar />
      <div className='flex gap-1'>
      <div className='relative flex flex-grow items-center'>
        <FiSearch className='text-white 
        ml-1 absolute text-3xl'/>
        <input 
        onChange={filterContacts} type="text" className='bg-transparent border-white
        h-10 rounded-md border 
        text-white pl-9
        flex-grow' />
      </div>
     
        <AiFillPlusCircle 
        onClick={onOpen} className='text-5xl
        cursor-pointer text-white '/>
     
      </div>
      <div className='mt-4 gap-3 flex-col'>
        {
          contacts.length <= 0 ? <NotFoundContact /> : contacts.map((contact)=> {
            <ContactCard key={contact.id} contact={contact}/>
          })
        }
      </div>
    </div>
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
    <ToastContainer position='bottom-center'/>
    </>
  )
}

export default App