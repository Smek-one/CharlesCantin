import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Image from "next/image";
import Background from "../public/bg.jpeg";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import React from "react";

export default class Galerie extends Component {
  render() {
    let { title, pics } = attributes;

    return (
      <div>
        <Navigation />
        <h1 className="d-flex align-items-center justify-content-center me-auto page-title">
          Galerie photos
        </h1>
        <div class="card-group">
          <div class="card">
            {pics.map((pic, k) => (
              <div class="card-body" key={k}>
                <h2>{pic.name}</h2>
                <p>{pic.description}</p>
                <img>{pic.image}</img>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
