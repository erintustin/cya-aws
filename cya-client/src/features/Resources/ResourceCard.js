import { Card, CardImg, CardHeader, CardFooter, CardTitle, 
         Collapse, ButtonGroup, Button, CardBody } from 'reactstrap';
import { useState } from 'react';
import ShareResource from './ShareResource';
import NotesList from '../notes/NotesList';
import NoteForm from '../notes/NoteForm';
import MarkFavorite from '../../components/MarkFavorite';


const ResourceCard = ({resource}) => {
    const [shareOpen, setShareOpen] = useState(false);
    const [notesOpen, setNotesOpen] = useState(false);
    const { name, img, author, source, url, type} = resource;

    return (
        
            <Card className='m-2 mx-auto'>
                <CardHeader>
                        <CardTitle><h4>{name}</h4></CardTitle>
                </CardHeader>
                <CardBody className='p-0'>
                        <CardImg 
                                className='m-0'
                                src={img}
                                alt={name}
                        /> 
                        <p> {type} by: {author}<br />
                                Source: 
                                <a href={url} target='new_window'> {source}</a>
                                </p>
                </CardBody>
                
                <Collapse isOpen={shareOpen}>
                        <ShareResource resource={resource} />
                </Collapse>
                <Collapse isOpen={notesOpen}>
                        <NotesList resource={resource} />
                        <NoteForm resource={resource}/>
                </Collapse>
                <CardFooter>
                    <ButtonGroup className='mx-auto'>
                        <Button color='secondary'
                                href={url} target='new_window'
                                size='sm'>View</Button>
                        <Button 
                                color='secondary'
                                size='sm'
                                onClick={() => setShareOpen(!shareOpen)}>
                                Share</Button>
                        <Button
                                color='secondary'
                                size='sm'
                                onClick={() => setNotesOpen(!notesOpen)}>
                                Notes</Button>
                        <MarkFavorite resource={resource} />

                    </ButtonGroup>
                    
                    

                                
                </CardFooter>
            </Card>
    );
}

export default ResourceCard;