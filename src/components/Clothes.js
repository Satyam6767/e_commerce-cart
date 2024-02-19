import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import ClothesData from './Data/ClothesData';

const Electronics = () => {

  const [data, setData] = useState(ClothesData);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  }

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className='container mt-3'>
        <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', margin: '20px 0' }}>clothes</div>

        <div className="row d-flex justify-content-center align-items-center">
          {
            data.map((element, id) => {
              return (
                <>
                  <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                    <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>
                        Price : ₹ {element.price}
                      </Card.Text>

                      <div className="button_div d-flex justify-content-center">
                        <Button variant="success" onClick={() => send(element)} className='col-lg-6'>Add to Cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Electronics