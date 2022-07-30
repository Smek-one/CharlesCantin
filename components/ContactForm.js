import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("my-form");
  if (state.succeeded) {
    return <h3>Thanks !</h3>;
  }
  return (
    <div className="container-fluid">
      <h1 className="d-flex justify-content-center mt-5">Contactez-moi</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <p className="d-flex justify-content-center mt-5">
          Une question? Un besoin? Remplissez le formulaire et expliquez moi
          votre projet
        </p>
        <label htmlFor="email" className="d-flex justify-content-center">
          Email
        </label>
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="error-msg"
        />
        <input id="email" type="email" name="email" className="input-txt" />

        <label for="message" className="d-flex justify-content-center">
          Message
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="error-msg"
        />
        <textarea id="message" name="message" className="input-txt-area" />

        <button
          type="submit"
          disabled={state.submitting}
          className="btn btn-submit d-flex justify-content-center"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
