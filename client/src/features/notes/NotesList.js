import { Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import Note from './Note';
import { selectNotesByResource } from './notesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const NotesList = ({ resource }) => {
    const notes = useSelector(selectNotesByResource(resource));

    const isLoading = useSelector((state) => state.notes.isLoading);
    const errMsg = useSelector((state) => state.notes.errMsg);

    if (isLoading) {
        return (
            <Col>
                <Loading />
            </Col>
        );
    }

    if (errMsg) {
        return(
            <Col>
                <Error errMsg={errMsg} />
            </Col>
        );
    }

    if (notes && notes.length > 0) {
        return (
            <Col className='m-1 mx-auto'>
                <h5>Notes</h5>
                {notes.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}

            </Col>
        );
    }
    return (
        <Col md='5' className='m-1 mx-auto'>
            There are no notes yet. 
        </Col>  
    );   
};

export default NotesList;