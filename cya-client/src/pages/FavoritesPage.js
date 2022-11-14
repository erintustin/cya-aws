import { Container, Row, Col, Button } from 'reactstrap';
import FavoritesList from '../features/favorites/FavoritesList';

const FavoritesPage = () => {
     return (
        <Container fluid='true' className='confetti'>
            <Row>
                <Col xs='6' className='mx-auto mt-5'>
            <Button className='btn btn-lg' href='/toolkit'>View All Resources</Button>
            </Col>
            </Row>
            <Row>
            <FavoritesList />
            </Row>
        </Container>
    );

    
};

export default FavoritesPage;