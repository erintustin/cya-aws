import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import ResourceCard from "./ResourceCard";
import { selectAllResources } from './ResourcesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const ResourcesList = () => {
    const resources = useSelector(selectAllResources);

    const isLoading = useSelector((state) => state.resources.isLoading);
    const errMsg = useSelector((state) => state.resources.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    };

    return (
        <Container  className='p-5'>
        <Row>
            {resources.map((resource) => {
                return(
                    <Col md='4'
                        sm ='6'
                        className='mt-2 mb-2' 
                        key={resource.id}>
                        <ResourceCard resource={resource} />
                    </Col>
                );
            })}
        </Row>
        </Container>
        )
}

export default ResourcesList;