import React from "react";
import { Link } from "react-router-dom";
export default function ToRandom({ image, name, id, info, glass }) {
  return (
    <main className="section main-random">
        <Link to="/random" className="btn btn-primary">
          Random
        </Link>
   </main>
 
  );
}