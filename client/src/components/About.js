import { useState } from 'react';
import { Container, Row, Col,  Carousel,
        CarouselItem, CarouselControl, CarouselIndicators,
        } from 'reactstrap';
import squishmallow from '../app/assets/img/squishmallow.png';

const About = () => {
    const messages = [
        {
            id: 1,
            text: `This toolkit seeks to clear up common misconceptions many people 
            have about Autism and to help you begin to truly understand
            and appreciate the Autistic neurotype. Rather than inspire fear, dread, or 
            grief, these Autistic-authored resources will help you learn to support
            yourself or someone you love in the world as an Autistic person.`
        },
        {
            id: 2,
            text: `A positive understanding of one's neurotype along with a supportive 
            community are building blocks to living a fulfilling autistic life. This 
            toolkit is designed to easily share information and resources
            with those you are closest to. The goal is to spread accurate information
            about the Autistic experience that can help build strong, informed, and 
            neurodiveristy-affirming support systems around Autistic people and their loved ones.`
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    
    const slides = messages.map((message) => {
        return(
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={message.id}
                className='messages'
            >
            {message.text}
            </CarouselItem> 
            );
    });

    return(
        <Container fluid='true' className='pl-5 pr-5 pt-4 pb-5' id='about'>
        <Row>
            <Col md='2' className='mx-auto my-auto order-last'>
                <img src={squishmallow}
                 className="img" 
                 alt="a Squishmallow Axolotl Plush with Balloon"
                 />
            </Col>
            <Col xs='9' md='6' className='mx-auto my-auto'>
                <h3 className="text-center">About This ToolKit</h3>
                <Container className='carousel-container'>
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            slide={String(true)}
                            keyboard={String(true)}
                            enableTouch={String(true)}
                            pause='hover'
                            interval='10000'
                            className='mx-auto'
                            dark
                        >
                            <CarouselIndicators
                            items={messages}
                            activeIndex={activeIndex}
                            onClickHandler={goToIndex}
                            className='carousel-indicators'
                            />
                            {slides}
                            <CarouselControl
                            direction="prev"
                            directionText="Previous"
                            onClickHandler={previous}
                            className='carousel-control'
                            />
                            <CarouselControl
                            direction="next"
                            directionText="Next"
                            onClickHandler={next}
                            className='carousel-control'
                            />
                        </Carousel>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};


export default About;