import styled from 'styled-components'

export const PortfolioSection = styled.div`
background-color: #f8f8f8;
padding-top: 20px;
overflow: hidden;
margin-bottom:15px;
`;
export const PortfolioTitle = styled.h2`
text-align:center;
    font-size: 35px;
`;
export const TitleSpan = styled.span`
    font-weight: normal;
`;
export const PortfolioList = styled.ul`
text-align: center;
    list-style: none;
    margin: 20px 0;
`;
export const PortfolioItem = styled.li`
    display: inline-block;
    width: 100px;
    padding:5px;
    background-color:${props => props.first === '1' ? '#eb5424' : ''};
    color:${props => props.first === '1' ? '#fff' : ''};
`;
export const BoxDiv = styled.div`
    width:25%;
    overflow: hidden;
    float:left;
    font-size: 0;
    position: relative;
    &:hover > p{
        opacity: 1;
    }
`;
export const BoxImg = styled.img`
    width: 100%;
`;
export const BoxOverlay = styled.p`
    position:absolute;
    background-color: rgba(235,84,36,.5);
    top: 0;
    left:0;
    bottom:0;
    right: 0;
    font-size: 15px;
    padding:50px;
    opacity: 0;
    transition:opacity .5s;
    margin: 0;
`;
export const OverlaySpan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    background-color: rgba(255, 255, 255, 0.534);
    display: block;
    padding:10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
    
`;
