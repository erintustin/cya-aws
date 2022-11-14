import headerIcon1 from '../app/assets/img/headerIcon1.png';
import headerIcon2 from '../app/assets/img/headerIcon2.png';
import headerIcon3 from '../app/assets/img/headerIcon3.png';
import CYAlogo from '../app/assets/img/CYAlogo.png';
import { Container, Row, Col, Button } from 'reactstrap';



const Header = () => {
    return (
        <>
        <Container className='jumbotron jumbotron-top jumbotron-fluid' fluid='true'>
            <Row>
                <Col md='6' className='my-auto title text-center order-last order-md-first p-5 mx-auto'>
                        <h1>Congrats, You're Autistic!</h1>
                        <h2>a Neurodiversity-Affirming Online Toolkit</h2>
                        <Button href='#featured' className='btn btn-sm btn-info'>Get Started</Button>
                    
                </Col>
                <Col>
                <img className='img-fluid logo-header' src={CYAlogo} alt='logo'/>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row className='mb-0'>
                <Col sm='4' className='header-card mx-auto'>
                    <img src={headerIcon1} alt='headericon1'/>
                    <h6>Ending Myths and Stereotypes</h6>
                     <p className='mx-auto'>
                         Autism is often misrepresented by the medical community,
                         in the media, and by charitable organizations.</p>
                </Col>
                <Col sm='4' className='header-card'>
                    <img src={headerIcon2} alt='headericon2'/>
                    <h6>Nothing About Us Without Us</h6>
                    <p className="mx-auto">
                         Resources written by the #1 experts on the autistic 
                         experience--autistic people.</p>
                </Col>
                <Col sm='4' className='header-card'>
                    <img src={headerIcon3} alt='headericon3' />
                    <h6>Celebrating Neurodiversity</h6>
                    <p className="mx-auto">
                        Autism is a developmental disability--and
                        disability is a natural part of human diversity.</p>
                </Col>
            </Row>
        </Container>
        </>
    
    );

};

export default Header;

