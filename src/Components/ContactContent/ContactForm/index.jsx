import { useState } from "react";
// Style
import { Input } from "antd";
// App
const ContactForm = () => {
  const { TextArea } = Input;
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const validEmail = (email) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  };

  const handleForm = (event) => {
    event.preventDefault();
    if (!email || !description) {
      alert("No debe dejar espacios en blancos");
      return;
    }
    if (!validEmail(email)) {
      alert("Debe ingresar un correo válido");
      return;
    }
    setEmail("");
    setDescription("");
  };
  return (
    <form className="contact-content-form" onSubmit={(e) => handleForm(e)}>
      <h3>Correo:</h3>
      <Input
        className="contact-email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h3>Descripción</h3>
      <TextArea
        rows={6}
        className="contact-description-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default ContactForm;
