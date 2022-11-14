import { Container, Row, Col } from "reactstrap";
import Feedback from "../components/Feedback";

const FeedbackPage = () => {
    return(
        <Container className='confetti p-5'>
            <Row>
                <Col className='featured-heading'>
                    <h1>Thank you for taking the time to explore this demo...</h1>
                </Col>
            </Row>
            <Row>
                <Col xs='8' md='6' className='feedback-container m-5 mx-auto'>
                    <Feedback />
                </Col>
            </Row>
            <Row>
                <Col className='featured-heading'>
                    <h1>...and thank you for your feedback!</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default FeedbackPage;