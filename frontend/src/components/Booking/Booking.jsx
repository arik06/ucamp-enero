import React, {useState} from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom';

const Booking = ({tour, avgRating}) => {

const {price, reviews,} = tour;
const  navigate = useNavigate()

const [credentials, setCredentials] = useState({
    userId:'01',
    userEmail: 'example@example.com',
    fullName: '',
    phone:'',
    guestSize: 1,
    bookAt:''
})

const handleChange = e => {
    setCredentials(prev =>({...prev, [e.target.id]:e.target.value}))
};

const serviceFee =  10
const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)
// envio datos al server

const handleClick = e => {
e.preventDefault()

navigate("/thank-you");
}

  return( 
  <div className="booking">
    <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>${price}<span>/por persona</span></h3> 
        <span className='tour__rating d-flex align-items-center '>
                <i class="ri-star-fill" ></i> {avgRating === 0 ? null :avgRating }({reviews?.length})
                
                </span>
    </div>


{/*bokking inciio----------------------------- */}
<div className='booking__form'>
<h5>Informacion</h5>
<Form className='booking__info-form ' onSubmit={handleClick}>
    <FormGroup >
        <input type="text" placeholder='Nombre Completo' id="NombreCompleto" required onChange={handleChange}/>
    </FormGroup>

    <FormGroup >
        <input type="number" placeholder='Numero de Telefono' id="Numero" required onChange={handleChange}/>
    </FormGroup>

    <FormGroup className='d-flex align-items-center gap-3'>
        <input type="date" placeholder='' id="boookAT" required onChange={handleChange}/>
        <input type="number" placeholder='Invitado' id="guestSize" required onChange={handleChange}/>
    </FormGroup>
</Form>
</div>
{/*bokking final----------------------------- */}
{/* parte de abajo del booking--------------------- */}
<div className="booking__bottom">
    <ListGroup>
        <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>${price} <i class="ri-close-line"> </i> 1 persona</h5>
            <span>${price}</span>
        </ListGroupItem>

        <ListGroupItem className='border-0 px-0'>
            <h5>Cargo por sevicio</h5>
            <span>${serviceFee}</span>
        </ListGroupItem>

        <ListGroupItem className='border-0 px-0 total'>
            <h5>Total</h5>
            <span>${totalAmount}</span>
        </ListGroupItem>
    </ListGroup>

    <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Reserva ahora</Button>
</div>
  </div>
)}

export default Booking;