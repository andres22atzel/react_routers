import React from "react";
import Rainbow from '../hoc/Rainbow'

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi vel
        accusantium tempora labore maiores voluptatum totam architecto
        reprehenderit eius, porro deserunt veritatis voluptates explicabo sint
        tenetur natus rerum expedita. Quibusdam.
      </p>
    </div>
  );
};

export default Rainbow(About);