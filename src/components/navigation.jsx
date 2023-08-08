import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Barra de herramientas</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="page-scroll" href="#page-top">
          <img src='img/logo/logoSNS.png' height={60} alt="..." className="team-img" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Nuestra Empresa
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a href="#products" className="page-scroll">
                Productos
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
