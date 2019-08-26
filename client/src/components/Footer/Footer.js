import React from 'react';
import classes from './Footer.module.css';
import Footer from 'react-bulma-components/lib/components/footer';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';

function footer() {
    return <Hero.Footer>
                <Footer className={classes.footer}>
                    <Container>
                        <Heading subtitle size={5} renderAs="h2">This is footer Area</Heading>
                    </Container> 
                </Footer>
           </Hero.Footer>
};

export default footer;