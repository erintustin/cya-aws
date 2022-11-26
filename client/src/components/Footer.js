import { Container, Row, Col, Button } from 'reactstrap';
import Feedback from './Feedback';


const Footer = () => {
    return (
        <footer>
            <Container fluid='true'>
                <Row>
                    <Col md='8' className='mx-auto my-auto'>
                        <Feedback />
                    </Col>
                    <Col className='mx-auto my-auto order-first order-md-last'>
                        <h3>
                            Build Your Own Toolkit
                        </h3>
                        <p className='mx-auto p-2'> Coming Soon! Use the mobile app to create a custom toolkit using these curated resources and adding your own favorites from the web.</p>
                        <div class="text-center">
                            <Button className="btn btn-dark btn-small" href='https://www.loom.com/share/45e38eac0346450889aa984485132465'
                            target="new_window">Watch a Demo</Button>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            </footer>

    
        



    );
};

export default Footer;