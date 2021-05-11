import React from 'react';
import { AboutSection, AboutTitle, AboutInfo, TitleSpan, AboutDir, AboutDirSpan, AboutDesc, DescLink } from './style.js'
import Social from './../SocialMedia'
import Footer from '../Footer'


const About = () => {

    return (<>
        <AboutSection>
            <div class="container">
                <AboutInfo>
                    <AboutTitle><TitleSpan>This is</TitleSpan> Me</AboutTitle>
                    <AboutDir><AboutDirSpan>Creative</AboutDirSpan> Directory</AboutDir>
                    <AboutDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe impedit totam
                    deserunt molestiae id
                    vitae unde nisi ipsam doloribus, ipsa quae non. <DescLink href="#">Laboriosam</DescLink>, sapiente veniam
                    consequuntur
                    exercitationem optio alias adipisci?</AboutDesc>
                    <AboutDesc>Lorem ipsum dolor sit amet consectetur <DescLink href="">adipisicing</DescLink> elit. Saepe
                    impedit totam
                    deserunt molestiae id
                    vitae unde nisi ipsam doloribus, ipsa quae non. Laboriosam, sapiente veniam consequuntur
                    exercitationem optio alias adipisci?</AboutDesc>
                </AboutInfo>
            </div>
        </AboutSection>
        <Social />
        <Footer />
    </>
    );
}

export default About;
