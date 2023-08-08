import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Productos</h2>
          <p>
          La experiencia lograda por nuestro equipo nos ha permitido diseñar software para ayudarte a controlar mejor tus operaciones dentro de una institución o negocio.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Cargando..."}
          </div>
        </div>
      </div>
    </div>
  );
};
