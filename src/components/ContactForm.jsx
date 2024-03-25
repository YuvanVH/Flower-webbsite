// src/components/ContactForm.jsx
import '../styles/ContactForm.css'
import { useState } from 'react'

function ContactForm() {

  // Tillståndshantering
  const [formSubmit, setFormSubmit] = useState('')

  return (
    <>
      <form action="">
        <p>Hey im a form</p>
      </form>
    </>
  )
}

export default ContactForm
