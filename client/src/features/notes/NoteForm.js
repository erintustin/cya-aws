import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import { validateNoteForm } from '../../utils/validateNoteForm';
import { useDispatch } from 'react-redux';
import { addNote } from './notesSlice';


const NoteForm = ({resource}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();


    const handleSubmit = (values) => {
        const note = {
            resource: resource._id,
            text: values.noteText,
            date: new Date(Date.now()).toISOString()
        };
        console.log(note);
        dispatch(addNote(note));
        setModalOpen(false);
    };

    return(
            <>
                <Button outline className="btn-sm" onClick={() => setModalOpen(true)}>
                    <i className='fa fa-pencil fa-lg' /> Add Note
                </Button>
                <Modal isOpen={modalOpen}>
                    <ModalHeader toggle={() =>setModalOpen(false)}>
                        Add Note
                    </ModalHeader>
                    <ModalBody>
                        <Formik 
                            initialValues={{
                            noteText: ''
                            }}
                            onSubmit={handleSubmit}
                            validate={validateNoteForm}
                        >
                            <Form>
                                <FormGroup>
                                    <Label htmlFor='noteText'>Note</Label>
                                    <Field
                                    name='noteText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                                <ErrorMessage name='noteText'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
                                </FormGroup>
                                <Button type='submit'>
                                Add Note
                                </Button>
                            </Form>
                        </Formik>
                    </ModalBody>

                </Modal>
            </>
    );
};

export default NoteForm;