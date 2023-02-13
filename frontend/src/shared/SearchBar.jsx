import React,{useRef} from 'react'
import './search-bar.css'
import {Col,Form,FormGroup} from "reactstrap";





const SearchBar = () => {
const locationRef = useRef('')
const distanceRef = useRef(0)
const maxGroupSizeRef = useRef(0)
    
    const searchHandler = () =>{
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value 
if (location ==='' ||  distance === '' || maxGroupSize === '') 
return alert(' todos los campos tienen que ser llenados')

    }

  return <div className='search__bar'>
        <Form className='d-flex align-items-center gap-4'>
            <Col lg='4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Ubicacion!</h6>
                        <input type='text' placeholder='A donde quieres viajar?' ref={locationRef}/>
                    </div>
                </FormGroup>
            </Col>
            <Col lg='4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-map-pin-add-line"></i></span>
                    <div>
                        <h6>Distancia</h6>
                        <input type='number' placeholder='Distancia Km' ref={distanceRef}/>
                    </div>
                </FormGroup>
            </Col>
            <Col lg='6'>
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span><i class="ri-group-fill"></i></span>
                    <div>
                        <h6>Personas que viajan</h6>
                        <input type='number' placeholder='0' ref={maxGroupSizeRef}/>
                    </div>
                </FormGroup>
            </Col>
            <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-eye-line"></i>
            </span>
        </Form>
    </div>
}

export default SearchBar
