import React, { useEffect, useState } from "react";
import ApiDeputados from "../../services/apiBase";
import { Card, Col, Container, Form, Row, Table } from "react-bootstrap";

const DeputadosInfo = (props) => {
  const [detalhes, setDetalhes] = useState([]);
  const [despesas, setDespesas] = useState([]);
  const [ano, setAno] = useState([]);

  function handleChange(event) {
    setAno({ value: event.target.value });
  }

  useEffect(() => {
    const id = props.match.params.id;

    ApiDeputados.get(`/deputados/${id}`).then((resultado) => {
      setDetalhes(resultado.data.dados);
    });

    ApiDeputados.get(
      `/deputados/${id}/despesas?itens=10000&ano=${ano.value}`
    ).then((resultado) => {
      setDespesas(resultado.data.dados);
    });
  }, [props, ano]);

  const totalDespesas = despesas.reduce((acumulator, despesa) => {
    return (acumulator += despesa.valorLiquido);
  }, 0);

  return (
    <>
      <br />

      <div className="gridContainer">
        <Container>
          <Row>
            <Col md={5}>
              <Card>
                <Card.Header>
                  {detalhes.id && (
                    <h3>Nome: {detalhes.ultimoStatus.nomeEleitoral}</h3>
                  )}
                </Card.Header>
                {detalhes.id && (
                  <>
                    <img
                      src={detalhes.ultimoStatus.urlFoto}
                      width="187"
                      height="236"
                      className="d-inline-block align-top"
                      alt=""
                    />
                  </>
                )}
              </Card>
            </Col>
            <Col md={7}>
              <Card>
                <Card.Header>
                  {detalhes.id && <h3>Informações: </h3>}
                </Card.Header>
                {detalhes.id && (
                  <>
                    <p>Nome Cível: {detalhes.nomeCivil}</p>
                    <p>Data de Nascimento: {detalhes.dataNascimento}</p>
                    <p>Email: {detalhes.ultimoStatus.email}</p>
                    <p>Local de Nascimento: {detalhes.municipioNascimento}</p>
                    <p>Escolaridade: {detalhes.escolaridade}</p>
                    <p>Situação: {detalhes.ultimoStatus.situacao}</p>

                    <h4>Gabinete</h4>

                    <p>Prédio: {detalhes.ultimoStatus.gabinete.predio}</p>
                    <p>Andar: {detalhes.ultimoStatus.gabinete.andar}</p>
                    <p>Sala: {detalhes.ultimoStatus.gabinete.sala}</p>
                    <p>Telefone: {detalhes.ultimoStatus.gabinete.telefone}</p>
                  </>
                )}
              </Card>
            </Col>

            <br />

            <Col md={12}>
              <Card>
                <Card.Header>
                  <h3>Despesas: </h3>
                  <Form.Select
                    aria-label="Default select example"
                    value={ano.value}
                    onChange={handleChange}
                  >
                    <option disabled selected value="">
                      Escolha o ano de interesse
                    </option>
                    <option value={ano[ano.value]}>2021</option>
                    <option value={ano[ano.value]}>2020</option>
                    <option value={ano[ano.value]}>2019</option>
                  </Form.Select>
                </Card.Header>

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Ano</th>
                      <th>Nome Fornecedor</th>
                      <th>Tipo</th>
                      <th>Valor</th>
                      <th>Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {despesas.map((info, index) => (
                      <tr key={index}>
                        <td></td>
                        <td>{info.dataDocumento}</td>
                        <td>{info.ano}</td>
                        <td>{info.nomeFornecedor}</td>
                        <td>{info.tipoDespesa}</td>
                        <td>{info.valorLiquido}</td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Total de gastos:</td>
                      <td>
                        {totalDespesas.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DeputadosInfo;
