import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Servicios</h2>
          <p>
          Actualmente a las empresas de cualquier sector les es necesario contar con herramientas que 
          les permitan incrementar su productividad y reducir significativamente sus costos y gastos de operación; 
          Por lo tanto SNS Inteligencia y Tecnología pone al alcance de las todas las organizaciones la más alta calidad en servicios 
          relacionados con el manejo electrónico de información, con el propósito de colaborar a evaluar sus estrategias y apoyar la toma de decisiones.
          <br></br><br></br>
          Ofrecemos soluciones informáticas completas, apoyados en metodologías, experiencia, disciplina y el dinamismo de nuestra gente, la cual se especializa 
          en alguna de nuestras prácticas y al mismo tiempo se desarrolla dentro de alguno de nuestros sectores de negocios; esto sin duda 
          hace la diferencia en los servicios que ofrecemos.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
