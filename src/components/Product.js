import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
    <Container >
      <Row>
      <Col>
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1673056922626-d7f245d5c8ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZ2xhc3NlcyUyMGFuZCUyMGxvY2tldHxlbnwwfHwwfHx8MA%3D%3D" />
            <Card.Body>
              <Card.Title>Accessories</Card.Title>
              <Card.Text>
                Explore our curated collection of stylish accessories to elevate your look and enhance your shopping experience today.
              </Card.Text>
              <Link to="/accessories">
                <Button variant="primary">Shop now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXMlMjBlY29tbWVyY2V8ZW58MHx8MHx8fDA%3D" />
            <Card.Body>
              <Card.Title>Clothes</Card.Title>
              <Card.Text>
                Stylish dresses, cozy sweaters, trendy jeans, chic blouses, fashionable tops, classic shirts, stylish jackets.
              </Card.Text>
              <Link to="/clothes">
                <Button variant="primary">Shop now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww" />
            <Card.Body>
              <Card.Title>Electronics</Card.Title>
              <Card.Text>
                Browse our latest electronics: smartphones, laptops, TVs, cameras and accessories. Shop now and save!
              </Card.Text>
              <Link to="/electronics">
                <Button variant="primary">Shop now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1684505842134-75d8a739c7ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvb2RlbiUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" />
            <Card.Body>
              <Card.Title>Furniture</Card.Title>
              <Card.Text>
                Transform your space with our exquisite collection of furniture, designed to elevate comfort and style effortlessly.
              </Card.Text>
              <Link to="/furniture">
                <Button variant="primary">Shop now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>

  );
}
export default Products;