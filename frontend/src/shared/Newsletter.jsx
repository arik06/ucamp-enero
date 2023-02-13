import React from 'react'
import './newsletter.css'


import {Container,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg="6">
                <div className="newsletter__content">
                    <h2>Suscribete para obtener nueva info cada semana!</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Ingresa tu email' />
                        <button className='btn newsletter__btn'>Suscribirse</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor fugiat modi ad,.</p>
                </div>
            </Col>
            <Col lg="6">
                <div className="newsletter__img">
                    <img src={maleTourist} alt="male" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter