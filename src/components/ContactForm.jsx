// src/components/ContactForm.jsx
import '../styles/ContactForm.css'
import { useState } from 'react'

function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Här utförs validering elr andra åtgärder innan man visar meddelandet
    setFormSubmitted(true);

    // Återställ formuläret ef några sek
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Namn" />
          <input type="email" placeholder="E-post" />
          <textarea placeholder="Meddelande"></textarea>
          <button type="submit">Skicka</button>
        </form>
        {formSubmitted && <p>Meddelandet har skickats!</p>}
      </div>
    </>
  );
}

export default ContactForm
