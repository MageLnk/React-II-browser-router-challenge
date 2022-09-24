const ContactForm = () => {
  return (
    <form className="contact-content-form">
      <h3>Correo:</h3>
      <input className="contact-email-input" />
      <h3>Descripción</h3>
      <input className="contact-description-input" />
      <button>Enviar</button>
    </form>
  );
};

export default ContactForm;
