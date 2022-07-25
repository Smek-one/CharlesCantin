import "../style.css";
import "bootstrap/dist/css/bootstrap.css";
import { FormspreeProvider } from "@formspree/react";
import { useEffect } from "react";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <FormspreeProvider project="1994002593981922432">
      <Component {...pageProps} />;
    </FormspreeProvider>
  );
}

export default MyApp;
