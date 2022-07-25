import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("my-form");
  if (state.succeeded) {
    return <h3>Thanks !</h3>;
  }
  return (
    <div className="container-fluid">
      <h1>Contactez-moi</h1>
      <p>
        Une question? Un besoin? Remplissez le formulaiure et expliquez moi
        votre projet
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div class="mb-3">
          <label class="form-label" for="name">
            Nom
          </label>
          <input class="form-control" id="name" type="text" />
        </div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" className="input-txt" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label for="message">Message</label>
        <textarea id="message" name="message" className="input-txt-area" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="btn btn-submit"
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
