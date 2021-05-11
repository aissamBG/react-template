import React from 'react';
import { Link } from 'react-router-dom'
import './style.js';
import { NavbarSection, Logo, LogoText, UlList, ListItem, AnchorLink } from './style.js';



const Navbar = () => {

    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><AnchorLink to="/home">Home</AnchorLink></ListItem>
                    <ListItem><AnchorLink to="/work">Work</AnchorLink></ListItem>
                    <ListItem><AnchorLink to="portfolio">Portfolio</AnchorLink></ListItem>
                    <ListItem><AnchorLink to="resume">Resume</AnchorLink></ListItem>
                    <ListItem><AnchorLink to="/about">About</AnchorLink></ListItem>
                    <ListItem><AnchorLink to="/contact">Contact</AnchorLink></ListItem>
                </UlList>

            </div>
        </NavbarSection>
    );
}

export default Navbar;
