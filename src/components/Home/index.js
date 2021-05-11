import React from 'react';
import { HomeSection, HomeInformation, HomeTitle, HomeDirectory, HomeDesc, HomeDescSpan, HomeBtn } from './style.js'
import Footer from '../Footer'

const Home = () => {

    return (<React.Fragment>
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Aissam Bagari</HomeTitle>
                    <HomeDirectory>Creative Directory</HomeDirectory>
                    <HomeDesc>I am a proffessional <HomeDescSpan>front-End developper</HomeDescSpan>, creating modern and<HomeDescSpan> responsing</HomeDescSpan> design to
                    web
                    and mobile.Let us
                    work together.Thank You.
                </HomeDesc>
                    <HomeBtn>Let's begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
        <Footer />
    </React.Fragment>
    );
}

export default Home;
