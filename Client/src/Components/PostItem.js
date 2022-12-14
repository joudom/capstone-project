import React from 'react';
import Navigation from "./Navigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "./Footer";
import './PostItem.css'

const PostItem = () => {
  const staticKey = process.env.REACT_APP_GOOGLE_MAPS_STATIC_API_KEY;
  const stAddress = encodeURIComponent('2537 Piedmont Rd NE');
  const city = encodeURIComponent('Atlanta');
  const state = encodeURIComponent('GA');
  const zip = encodeURIComponent('30324');

  const isLoaded = true;

  return (
    <>
    <Navigation />
      <Container className="postbox">
        <Row className="h-50">
          <Col xxl={8} className='text border'>
            Image Carousel<br/>
            <img src
            ="https://media.istockphoto.com/id/1202959798/photo/macbook-pro-16-inch-with-touchbar-front-view.jpg
              ?s=612x612&w=0&k=20&c=Uj7nnv5j_STbkW03MaXNKQtdUxiN5AQD9JF0Dw1i0WQ="className="img" alt="..."/>
          </Col>
          <Col xxl={4} className='border'>
            <div className="text">
                Pricing / Location / Status<br/>
                  <h1>$750.00</h1>
                Posted: 12/06/2022<br/>
                Ends: 12/09/2022<br/><br/>
              <div className="text location">
                STORE:    <br/>Best Buy <br/><br/>
                ADDRESS:  <br/> 2537 Piedmont Rd NE Atlanta, GA 30324 <br/><br/>
                DEAL:     <br/>They have brand new MacBooks for the low out here!
                              Manager says they have to sell everything to close Q4 on a strong note.
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{height: "48.5vh"}}>
          <Col xxl={4} className='text border'>
            Item Description<br/><br/>
            The new MacBook Pro delivers game-changing performance for pro users. 
            With the powerful M1 Pro to supercharge pro-level workflows while getting amazing battery life.
            And with an immersive 14-inch Liquid Retina XDR display and an array of pro ports, you can do more than ever with MacBook Pro.
          </Col>

          {isLoaded && (
          <Col xxl={5} className='text border'>
            <img 
              width="95%" 
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${stAddress}%20${city}%20${state}%20${zip}&zoom=17&scale=2&size=500x400&maptype=roadmap&format=jpg&key=${staticKey}&markers=size:mid%7Ccolor:0xf13709%7Clabel:%7C${stAddress}%20${city}%20${state}%20${zip}`}
              alt="Google Map Image" />
          </Col>
          )}

          <Col xxl={3} className='text border'>
            Local:<br/>
            Leo D.<br/>
            <img src="https://images.t3n.de/news/wp-content/uploads/2022/05/Leonardo-DiCaprio-Meme.png?class=structuredData-small" className='local' alt="..."/>
          </Col>
        </Row>
      </Container>
      <Footer/> 
    </>
  );
};

export default PostItem;
