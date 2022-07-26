import Head from "next/head";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Image from "next/image";
import Background from "../public/bg.jpeg";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

        <title>Charles Cantin - Photographe</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="main-block">
        <Navigation />
        <div className="d-flex me-auto flex-wrap align-items-center justify-content-center title-block">
          <h3 className="justify-content-center title">
            Charles Cantin - Photographe
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}
