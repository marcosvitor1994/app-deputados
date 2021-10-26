import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import Deputados from './Pages/deputados/Deputados'

const Rotas = () => {
    return (
        <>
            
            <Switch>
                <Container className='md-3'>

                    <Route exact path="/partidos" component={Deputados} />   
                    <Route exact path="/deputados" component={Deputados} />  
                    <Route exact path="/contato" component={Deputados} />   
                    <Route exact path="/transparencia" component={Deputados} />   

                </Container>          
            </Switch>
        </>


        
    )
}

export default Rotas
