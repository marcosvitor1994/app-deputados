import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import Contato from './pages/contato/Contato'
import Deputados from './pages/deputados/Deputados'
import Partido from './pages/partido/Partido'
import Transparencia from './pages/partido/Transparencia'

const Rotas = () => {
    return (
        <>
            
            <Switch>
                <Container className='md-3'>

                    <Route exact path="/" component={Partido} />   
                    <Route exact path="/partido" component={Partido} />   
                    <Route exact path="/deputados" component={Deputados} />  
                    <Route exact path="/contato" component={Contato} />   
                    <Route exact path="/transparencia" component={Transparencia} />   

                </Container>          
            </Switch>
        </>


        
    )
}

export default Rotas
