import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';

function Layout(props) {
    return <div className="layout">
                <Header />
                    <div className="content">
                        <Section class="section">
                            <Container>
                                {props.children}
                            </Container>
                        </Section>
                    </div>
                <Footer />
            </div>
};

export default Layout; 