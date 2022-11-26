import { useState } from 'react';
import { Container, Row, Col,  Carousel,
        CarouselItem, CarouselControl, CarouselIndicators,
        } from 'reactstrap';
import cake from '../app/assets/img/cake.png';

const Welcome = () => {
    const messages = [
        {
            id: 1,
            text: `If you’re visiting this page maybe you were recently diagnosed as autistic, 
            or have come to the realization on your own. You may have been told that someone 
            you know or care about is autistic. For any of the above, Congratulations! 
            You have been given a wonderful opportunity to better get to know yourself or 
            someone you love.`
        },
        {
            id: 2,
            text: `Understanding Autism through the lens of Neurodiversity is an important first 
            step and something to be celebrated! This toolkit seeks to provide streamlined 
            access to some of the best online resources about the autistic experience as 
            told by the true experts—autistic people.`
        },
        {
            id: 3,
            text: `Autistic people deserve to be loved and accepted just as we are. This toolkit is not
            designed to fix Autistic people, but to fix the way people think about us.`
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
        <Container fluid='true' className='pl-5 pr-5 pt-4 pb-2' id='welcome' >
            <Row>
                <Col md='2' className='mx-auto my-auto order-last order-md-first'>
                    <img src={cake}
                     alt="a rainbow birthday-cake-shaped pop-it fidget tool"
                     className='img'
                     />
                </Col>
                <Col xs='9' md='6' className='mx-auto'>
                    <h3 className="text-center congrats">Welcome to the Autistic Community!</h3>
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

export default Welcome;