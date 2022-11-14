import { Col } from 'reactstrap';

const Loading = () => {
    return (
        <Col>
            <i className='fa fa-spinner fa-pulse fa-3x fa-fw text-info' />
            <p>Loading...</p>
        </Col>
    );
};

export default Loading;