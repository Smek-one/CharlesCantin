import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Logo from "../public/logo.svg";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Charles Cantin - Photographe</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navigation />

      <main>
        <h3 className="title">Charles Cantin - Photographe</h3>

        <p className="description">Photographe évenementiel</p>

        <Image src={Logo} alt="logo" width={200} height={200} />

        <div className="grid">
          <a href="#" className="card">
            <h3>Galerie &rarr;</h3>
            <p>Toutes mes photos</p>
          </a>

          <a href="/contact" className="card">
            <h3>Contact &rarr;</h3>
            <p>Contactez-moi</p>
          </a>

          <a href="#" className="card">
            <h3>Tarifs & prestations &rarr;</h3>
            <p>Découvrez mes prestations</p>
          </a>
        </div>
      </main>
      <footer>Bertrand Bovet © 2022 Tous droits réservés</footer>
    </div>
  );
}
