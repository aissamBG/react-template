import style from 'styled-components'

export const HomeSection = style.div`
    height: 500px;
    background:url('../images/Home/home-bg.jpg');
    background-size: cover;
    background-position:center;
    text-align: center;
    position: relative;
    margin-bottom:22px;
` ;

export const HomeInformation = style.div`
position: absolute;
top: 50%;
left:50%;
transform:translate(-50%,-50%);
`;
export const HomeTitle = style.h2`
    font-size:60px;
    font-weight: bold;
    color:#5e5e5e;
`;
export const HomeDirectory = style.h4`
    font-size:35px;
    color:#eb5424;
    margin-bottom:20px;
`;
export const HomeDesc = style.p`
    font-size:20px;
    line-height:1.5;
    color:#999;
    margin-bottom:20px;
`;
export const HomeDescSpan = style.span`
color:#000;
`;
export const HomeBtn = style.button`
    background-color:#eb5424;
    color:#fff;
    width: 150px;
    padding:15px;
    font-size: 18px;
    border:0;
    cursor:pointer;
    font-weight:bold;
    transition:all .5s;
    &:hover{
        color:#eb5424;
        background-color:#fff;
    }
`;
