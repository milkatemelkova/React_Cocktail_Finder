import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function About() {
  return (
    <div>
       <Hero>
        <Banner
          title="The best cocktails"
          subtitle="24/7"
        >
        
        </Banner>
      </Hero>
      <section className="section about-section">
      <Link to="/" className="btn btn-primary">
          back home
        </Link>
      <h1 className="section-title">about us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
    </section>
    </div>
  );
}
