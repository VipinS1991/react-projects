import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { IoMdMail } from 'react-icons/io'
import {AiTwotoneMessage} from 'react-icons/ai'
import InfoCard from '../../components/InfoCard'
import { Stack } from '@chakra-ui/react'

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="80px">
      <SupportCard leftComponent={<ContactCard/>} 
      title="Contact Us" 
      text="Have a question or just want to know more? Feel free to reach out to us." 
      icon={IoMdMail}/>
      <SupportCard leftComponent={<InfoCard
      imgUrl="/Visual2.svg" text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
        tagText="Loan"
      />} 
      title="Live Chat" 
      text="Don’t have time to wait for the answer? Chat with us now." 
      icon={AiTwotoneMessage}/>
      </Stack>
    </DashboardLayout>
  )
}

export default Support