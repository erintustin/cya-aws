import { Container} from 'reactstrap';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import About from '../components/About';
import FeaturedResources from '../components/FeaturedResources';


const HomePage = () => {
    return (
        <Container fluid='true'>
            <Header />
            <Welcome />
            <About />
            <FeaturedResources />
        </Container>
    );
};

export default HomePage;