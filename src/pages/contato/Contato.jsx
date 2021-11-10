import React, { useEffect } from 'react'
import { Col, FloatingLabel, Form, Row, Button, Card, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
//import Box from '../../components/Box'

import validador from '../../validators/ContatoValidator'
import ContatoService from '../../services/ContatoService'

const Contato = (props) => {

    const variant = props.variant ? props.variant : 'info'
    const teste = localStorage.getItem('contato')
    console.log(JSON.parse(teste))

    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const contato = ContatoService.get(id)
            for (let campo in contato) {
                setValue(campo, contato[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? ContatoService.update(dados, id) : ContatoService.create(dados)
        window.confirm('Mensagem enviada com sucesso!')
        props.history.push('/')
    }

    return (
        <>
            
            <Card md={8} className='mb-3' border={variant}>
                <Container>
                 
                <Card.Header>
                    <h3>Contato: </h3>
                </Card.Header>

                <Form>
                <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={4}>Nome: </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="email">
                        <Form.Label column sm={4}>E-mail: </Form.Label>
                        <Col sm={12}>
                            <Form.Control type="email" {...register("email", validador.email)} />
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </Col>
                    </Form.Group>
                    <FloatingLabel controlId="floatingTextarea2" label="Deixe sua mensagem">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                    <br />
                    
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>{ ' ' }
                        <Link className="btn btn-danger" to="/contato"><FaArrowLeft /> Voltar</Link> 
                    </div>
                </Form>
                </Container> 
            </Card>
        </>
    )
};

export default Contato
