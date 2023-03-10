import React from 'react'
import '../styles/home.css';
import {Container, Row,Col} from 'reactstrap'; 
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from'../assets/images/experience.png'

import Subtitle from './../shared/Subtitle'


import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonImagesGallery';
import Newsletter from '../shared/Newsletter';



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
  <Container>
  <Row>
<Col lg='5' style={{marginLeft: "6rem"}}>
  <h5 className="services__subtitle">Cuales son nuestros servicios?</h5>
  <h2 className='services_title'>Ofrecemos los mejores servicios </h2>
</Col>
<ServiceList/>
</Row>
</Container>
</section>


{/* especial seccion tour  */}
<Container>
  <Row>
    <Col lg="12" className='mb-5'>
      <Subtitle subtitle={'Explora '}/>
      <h2 className='featured__tour-title'>Lo mejores tours que brindamos!</h2>
    </Col>
    <FeaturedTourList/>
  </Row>
</Container>
{/* especial seccion tour final  */}
{/*experiencia clientes inicio */}

<section>
<Container>


  <Row>


    <Col lg="6">
      <div className="experience__content">
        <Subtitle subtitle={'Experience'}/>

        <h2>Lee nuestros comentarios <br/> para que podamos darte una idea</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere soluta, optio autem iure tempora quam, voluptas consequatur minus rem quae<br/>
         quos debitis. Quisquam, odit qui! Atque dolore accusantium voluptas totam?</p>
      </div>

      <div className="counter__wrapper d-flex align-items-center gap-5">
<div className="counter__box">
  <span>12k+</span>
  <h6>Estupendo viaje </h6>
</div>
<div className="counter__box">
  <span>2k+</span>
  <h6>Clientes Regulares </h6>
</div>
<div className="counter__box">
  <span>15</span>
  <h6>A??os de experiencia</h6>
</div>

      </div>
    </Col>
    <Col lg='6'>
     <div className="experience__img">
      <img src={experienceImg} alt="" />
      </div> 
    </Col>
  </Row>
</Container>





</section>
{/*experiencia clientes final */}



{/* seccion de galleria inicia */}
<section>
  <Container>
  <Row>
    <Col lg="12">
      <Subtitle subtitle={'Gallery'}/>
      <h2 className='gallery__title'> Visita nuestro tour en linea </h2>
    </Col>
    <Col lg="12">
<MasonryImagesGallery/>
    </Col>
  </Row>
  </Container>
</section>

{/*seccion de galleria termina  */}
{/*suscripcion inicia */}
<Newsletter/>
{/*suscripcion termina */}
    </>
  )
}

export default Home