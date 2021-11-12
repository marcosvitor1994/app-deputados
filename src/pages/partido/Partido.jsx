import React, { useEffect, useState } from "react";
import ApiDeputados from "../../services/apiBase";
import "./partido.style.css";
import dadosComplementares from "./dadosComplementares";

const Partido = () => {
  const [partido, setPartido] = useState([]);

  useEffect(() => {
    ApiDeputados.get("/partidos/36898").then((response) => {
      setPartido(response.data.dados);
    });
  }, []);

  return (
    <>
      <div className="partido-container">
        <div className="partido-left-box">
          {partido.id && (
            <div>
              <img
                src={partido.status.lider.urlFoto}
                alt={partido.status.lider.nome}
              />
            </div>
          )}
        </div>
        <div className="partido-right-box">
          {partido.id && (
            <div className="partido-box">
              <h3 className="partido-title">
                Lider: {partido.status.lider.nome}
              </h3>
              <span>
                Partido: <img src={partido.urlLogo} alt={partido.nome} />
              </span>
              <span>UF: {partido.status.lider.uf}</span>
              <div className="partido-situacao">
                Situação:
                <span style={{ background: "green", color: "white" }}>
                  {partido.status.situacao}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <p>{dadosComplementares[partido.sigla]?.historia}</p>
      <p>Números de Filiados: 215.015</p>
    </>
  );
};

export default Partido;
