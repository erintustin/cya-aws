import { Button, Modal, ModalBody, ModalHeader, Form } from 'reactstrap';
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShareResource = ({resource}) => {
    
    console.log('resource:', resource);
    const [CopyLinkOpen, setCopyLinkOpen] = useState(false);
    const {url, id} = resource;
   
    return(
        <>
        <Button
                outline
                color='secondary'
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                target='new'
        >
            <i className='fa fa-facebook fa-sm' />
        </Button>
        <Button
            outline
            color='secondary'
            href={`sms:&body=${url}`}
        >
            <i className='fa fa-comment fa-sm' />
        </Button>
        <Button
            outline
            color='secondary'
            href={`mailto:?&body=${url}`}
        >
            <i className='fa fa-envelope fa-sm' />
        </Button>
        <CopyToClipboard text={url}>
        <Button
            outline
            color='secondary'
            onClick={setCopyLinkOpen}
        >
            <i className='fa fa-link fa-sm' />
        </Button>
        </CopyToClipboard>

        <Modal isOpen={CopyLinkOpen}>
                <ModalHeader 
                    className='copylink-header'
                    toggle={() => setCopyLinkOpen(false)}>
                        <div className='login-header p-0'>Copy to Clipboard</div>
                </ModalHeader>
                <ModalBody>
                        <Form>
                                <input type="text" 
                                        className="form-control" 
                                        id={id} 
                                        value={url}
                                />
                                <CopyToClipboard text={url}
                                                onCopy={()=>alert('Link Copied!')}>
                                        <Button className="btn-dark btn-sm mx-auto" 
                                                onclick={() => this.setState({copied: true})}            
                                                >
                                        Click to Copy
                                        </Button>
                                </CopyToClipboard>
                        </Form>
                </ModalBody>
        </Modal>
    </>        
    );
};
export default ShareResource;