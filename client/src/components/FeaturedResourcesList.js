import { Col, Row} from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectFeaturedResources } from '../features/Resources/ResourcesSlice';
import ResourceCard from '../features/Resources/ResourceCard';

const FeaturedResourcesList = () => {
    const resources = useSelector(selectFeaturedResources);
    console.log('resources:', resources);
    return (
        <Row className='ms-auto'>
            {resources.map((resource) => {
                return(
                    <Col 
                        sm='6'
                        lg='4' 
                        className='mx-auto mb-5' 
                        key={resource.id}>
                        <ResourceCard resource={resource} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default FeaturedResourcesList;