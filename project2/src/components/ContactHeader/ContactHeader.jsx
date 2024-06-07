import styles from './ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <div className={`container  ${styles.contact_section}`}>
        <h1>CONTACT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorum amet dolorem molestiae facere, fugiat pariatur debitis saepe. 
            Iure asperiores aliquam doloremque nostrum quo.
             Nihil, aliquam facilis debitis autem possimus asperiores.</p>
    </div>
  )
}

export default ContactHeader