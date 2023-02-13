import React from 'react'
import ServiceCard from './ServiceCard'
import { Row, Col } from 'reactstrap';
import './service-card.css';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const serviceData =[
    {
        imgUrl: weatherImg,
        title:"Revisa el clima ",
        desc:"lorem ipsum dolor sit amet, consectetur adip"
    },
    {
        imgUrl: guideImg,
        title:"EL mejor guia Turistico",
        desc:"lorem ipsum dolor sit amet, consectetur adip"
    },
    {
        imgUrl: customizationImg,
        title:"A tu gusto!",
        desc:"lorem ipsum dolor sit amet, consectetur adip"
    }
]

const ServiceList = () => {
  return (
    <Row className="text-right">
      {serviceData.map((item, index) => (
        <Col lg='4'  key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </Row>
  );
}

export default ServiceList;
