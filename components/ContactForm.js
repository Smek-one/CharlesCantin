import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("my-form");
  if (state.succeeded) {
    return (
      <h3 className="thk-txt">
        Merci pour votre message. Retour à la page{" "}
        <a href="/" className="back-link">
          <span>d'accueil</span>
        </a>
        .
      </h3>
    );
  }
  return (
    <div className="container-fluid">
      <h1 className="d-flex justify-content-center mt-auto page-title">
        Contactez-moi
      </h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <p className="d-flex justify-content-center mt-auto">
          Une question? Un besoin? Remplissez le formulaire et expliquez-moi
          votre projet
        </p>

        <label htmlFor="name" className="d-flex justify-content-center">
          Nom
        </label>
        <ValidationError
          prefix="Nom"
          field="name"
          errors={state.errors}
          className="error-msg"
        />
        <input id="name" type="text" name="name" className="input-txt" />

        <label htmlFor="firstName" className="d-flex justify-content-center">
          Prénom
        </label>
        <ValidationError
          prefix="Prenom"
          field="firstName"
          errors={state.errors}
          className="error-msg"
        />
        <input
          id="firstName"
          type="text"
          name="firstName"
          className="input-txt"
        />

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
          className="btn btn-submit d-flex justify-content-center w-auto"
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
