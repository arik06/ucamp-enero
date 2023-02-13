import React from 'react'
import './footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.jpeg"


const quick__links=[
  {
  path: '/home',
  display:'Home'
  },
  {
    path: '/about',
    display:'About'
  },
  {
    path: '/tours',
    display:'Tours'
  },
];

const quick__links2=[
  {
  path: '/gallery',
  display:'Gallery'
  },
  {
    path: '/login',
    display:'Login'
  },
  {
    path: '/register',
    display:'Register'
  },
]
const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg ="3">
          <div className="logo">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum.</p>

            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to="#"><i class="ri-youtube-fill"></i></Link>
                <Link to="#"><i class="ri-github-fill"></i></Link>
                <Link to="#"><i class="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </div>
        </Col>
        <Col lg="3">
          <h5 className='footer__link-title'>Inicio</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path} >{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg="3">
        <h5 className='footer__link-title'>Descubre</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links2.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path} >{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <div  className='kira' lg="3"> KIRA S.A</div>
      </Row>
    </Container>
  </footer>
}

export default Footer