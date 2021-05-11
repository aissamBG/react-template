import styled from 'styled-components'

export const AboutSection = styled.div`
height: 500px;
    background:url("../images/Creative/about-bg.jpg");
    background-size: cover;
    background-position: center;
    background-attachment:fixed;
`;
export const AboutInfo = styled.div`
width: 50%;
    float: right;
    padding-top: 20px ;
`;
export const AboutTitle = styled.h2`
font-size: 40px;
    font-weight:bold;
    letter-spacing:4px;
`;
export const TitleSpan = styled.span`
    font-weight: normal;
`;
export const AboutDir = styled.h4`
 font-size: 30px;
    font-weight: bold;
    color: #eb5424;
    margin-bottom: 30px;
`;
export const AboutDirSpan = styled.span`
    font-weight: normal;
`;
export const AboutDesc = styled.p`
color:#888;
    letter-spacing:2px;
    line-height: 1.8;
    margin-bottom: 15px;
`;
export const DescLink = styled.a`
    text-decoration:none;
`;
