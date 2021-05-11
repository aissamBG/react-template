import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Footer from '../Footer'

import { PortfolioSection, PortfolioTitle, TitleSpan, PortfolioList, PortfolioItem, FirstItem, BoxDiv, BoxImg, BoxOverlay, OverlaySpan } from './style.js'


const Portfolio = () => {

    const [images, setImages] = useState([]);
    useEffect(() => axios.get('js/data.json').then(res => setImages(res.data.portfolio)), [])
    const arrayImages = images.map(img => <BoxDiv key={img.id}>
        <BoxImg src={img.image} alt="" />
        <BoxOverlay>
            <OverlaySpan>Show Image</OverlaySpan>
        </BoxOverlay>
    </BoxDiv>)
    console.log(images)
    return (
        <React.Fragment>
            <PortfolioSection>
                <PortfolioTitle><TitleSpan>My</TitleSpan> Portfolio</PortfolioTitle>
                <PortfolioList>
                    <PortfolioItem first="1">All</PortfolioItem>
                    <PortfolioItem>HTML</PortfolioItem>
                    <PortfolioItem>Photoshop</PortfolioItem>
                    <PortfolioItem>Wordpress</PortfolioItem>
                    <PortfolioItem>Mobile</PortfolioItem>
                </PortfolioList>
                <div className='box'>
                    {arrayImages}
                </div>
            </PortfolioSection>
            <Footer />
        </React.Fragment>
    );
}

export default Portfolio;
