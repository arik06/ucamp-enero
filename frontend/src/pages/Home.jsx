import React from 'react'
import '../styles/home.css';
import {Container, Row,Col} from 'reactstrap'; 
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'


import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';



const Home = () =>{
  return (
    <>
    {/* hero section start */}
    <section>
      <Container>
<Row>
  <Col lg="6">
<div className='hero__content'>
  <div className="hero__subtitle d-flex align-items-center">
    <Subtitle subtitle={'Ahora antes de irte'} />
    <img src={worldImg} alt="world" />
  </div>
  <h1>Viajes echos para la creacion<span className='highlight'> de Recuerdos</span> </h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet sed veritatis quibusdam sint cumque, quia illo rerum, fugiat aliquid velit dolor repellendus? Repudiandae tenetur accusamus cum fugit sapiente cumque?</p>
</div>

  </Col>
  <Col lg='2'>
    <div className="hero__img-box">
      <img src={heroImg} alt="" />
    </div>
  </Col>
  <Col lg='2'>
    <div className="hero__img-box mt-4">
      <video src={heroVideo} alt="" controls />
    </div>
  </Col>
  <Col lg='2'>
    <div className="hero__img-box mt-5">
      <img src={heroImg02} alt="" />
    </div>
  </Col>
  <SearchBar/>
</Row>
</Container>
    </section>
    {/* hero section start */}
<section>
<Col lg='5' style={{marginLeft: "6rem"}}>
  <h5 className="services__subtitle">Cuales son nuestros servicios?</h5>
  <h2 className='services_title'>Ofrecemos los mejores servicios </h2>
</Col>
<ServiceList/>
</section>

    </>
  )
}

export default Home