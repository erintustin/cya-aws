import { Button, Media } from 'reactstrap';
import feedbacklogo from '../app/assets/img/feedbacklogo.png';

const Feedback = () => {
return(
<Media className='row feedback'>
                            <Media object 
                                    className='img my-auto mx-auto col-md-4'
                                    id='feedback-logo' 
                                    src={feedbacklogo} 
                                    alt='a colorful brain with a thought bubble coming out of it'/>
                            
                            <Media body className=' my-auto mx-auto col-md-8'>
                                <h3 id='feedback-heading'>Support This Project With Feedback</h3>
                                <p>Feedback from the autistic community is vital to keeping this toolkit true to its purpose
                                of compiling the best resources to help newly diagnosed and self-diagnosed Autistic 
                                people and their loved ones have a neurodiversity-affirming introduction to the Autistic 
                                neurotype. 
                                </p>
                                <div class="text-center">
                                    <Button href='mailto:congratsyoureautistic@gmail.com' className="btn btn-light btn-small">Submit Feedback</Button>
                                </div>
                            </Media>
                        </Media>
)};

export default Feedback;