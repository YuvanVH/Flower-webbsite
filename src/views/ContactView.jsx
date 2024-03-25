import React, { useState, useEffect } from 'react';
import ContactForm from "../components/ContactForm"



function ContactView() {

  return (
    <>
      <h1>Contact</h1>
      <div className='contactFormContainer'>
        <ContactForm />
      </div>
    </>
  )

}

export default ContactView
