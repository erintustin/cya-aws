import { formatDate } from '../../utils/formatDate';
import { deleteNote } from './notesSlice';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';

const Note = ({ note }) => {
    const { text: noteText, date } = note;
    const dispatch = useDispatch();

    return (
        <Container>
            <Row>
                <Col style={{border:'1px solid black', padding: 4, margin:5}}>
                <p align='left' style={{margin:1}} className='mx=auto'>
            {noteText} 
        </p>
                </Col>
            </Row><Row>
                <Col>
              <p>{formatDate(date)}</p>
                </Col>
           <Col>
            <p><Button
            style={{color:'red'}}
            onClick={() => dispatch(deleteNote(note))}>Delete</Button></p>
            </Col>
            </Row>
        </Container>
       
    
    );
};

export default Note;