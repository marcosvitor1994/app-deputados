import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Box from '../../components/Box'
import { Button, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'


import { Card } from "react-bootstrap";



const Deputados = () => {
    
    
    const [responseData, setResponseData] = useState([]);

    const [show, setShow] = useState(false);
    const [deputado, setDeputado] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        fetch(
        `https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data.dados);
            setDeputado(data.dados);
        });
        setShow(true)
        
    };

    useEffect(() => {
        fetch(
        "https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=AVANTE"
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data.dados);
            setResponseData(data.dados);
        });
    }, []);


    return (
        <>
            <h1>Deputados AVANTE</h1>
    

            

            <div className="gridContainer" >

            <Container>
            <Row md={4}>
                {responseData.map((data) => (
                
                <Box title={data.nome} key={data.id} style={{ width: '18rem' }}>
                    <Card.Img key={data.id} className='test' variant="top" src={data.urlFoto} onClick={ () => handleShow(data.id)} />
                    <hr />
                </Box>

                ))}
                
            </Row>
            </Container>

            

            </div>
                
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{deputado.nomeCivil}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                   {deputado.id &&
                        <>
                                <p>Email: {deputado.ultimoStatus.email}</p>
                                <p>Telefone: {deputado.ultimoStatus.gabinete.telefone}</p>
                        </>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Link to={"/filmes/" + deputado.id}>
                        <div className="d-grid gap-2">
                            <Button className='bt bt-danger' variant="primary" onClick={handleClose}>
                               Saiba Mais
                            </Button>
                                    
                        </div>
                    </Link>
                    
                    
            </Modal.Footer>
            </Modal>
            
        
        </>
    )


}

export default Deputados
