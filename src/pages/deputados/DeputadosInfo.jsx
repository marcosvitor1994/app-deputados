import React, { useEffect, useState } from 'react';
import ApiDeputados from '../../services/apiBase';
import { Card, Col, Container, Row, Table } from 'react-bootstrap'

const DeputadosInfo = (props) => {
    
    const [detalhes, setDetalhes] = useState([])
    const [despesas, setDespesas] = useState([])


    useEffect(() => {
       
        const id = props.match.params.id

        ApiDeputados.get(`/deputados/${id}`).then(resultado => {
        setDetalhes(resultado.data.dados);
        })
        
        ApiDeputados.get(`/deputados/${id}/despesas?itens=100`).then(resultado => {
        setDespesas(resultado.data.dados);
        console.log(resultado.data.dados);
        })

    }, [props])


    
    return (
        <>
            
            <br />

            <div className="gridContainer" >
                <Container>
                    
                    <Row> 
                        <Col md={5}>
                            <Card>
                                <Card.Header>
                                    {detalhes.id &&
                                    <h3>Nome: {detalhes.ultimoStatus.nomeEleitoral}</h3>
                                    }
                                </Card.Header>
                                {detalhes.id && 
                                    
                                    <>                         
                                        <img
                                            src={detalhes.ultimoStatus.urlFoto}
                                            width="187"
                                            height="236"
                                            className="d-inline-block align-top"
                                            alt=""
                                        />
                                    </>
                                    
                                }
                            </Card>
                        </Col>
                        <Col md={7}>
                            <Card>
                                <Card.Header>
                                    {detalhes.id &&
                                    <h3>Informações: </h3>
                                    }
                                </Card.Header>
                                {detalhes.id && 
                                    
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
                                    
                                }
                            </Card>
                        </Col>

                        <br />
                        
                        <Col md={12}>
                            <Card>
                                <Card.Header>
                                    <h3>Despesas: </h3>   
                                </Card.Header>
                                
                                <Table striped bordered hover>
                                    
                                    <thead>
                                        <tr>

                                            <th>Data</th>
                                            <th>Nome Fornecedor</th>
                                            <th>Tipo</th>
                                            <th>Valor</th>
                                            
                                        </tr>
                                    </thead>
                                    
                                    <tbody>

                                        {despesas.map((info) => (
                                            
                                            <tr key={info.id}>
                                            <td>{info.dataDocumento}</td>
                                            <td>{info.nomeFornecedor}</td>
                                            <td>{info.tipoDespesa}</td>
                                            <td>{info.valorLiquido}</td>
                                                
                                            </ tr>
                                        ))}
                                    </tbody>
                                
                                </ Table>
                                
                              
                            </Card>
                        </Col>


                    </Row>
                </Container>
            </div>

            
        </>
    )


}

export default DeputadosInfo
