import style from 'styled-components';
import { Link } from 'react-router-dom'

export const NavbarSection = style.div`
    padding:5px 0;
    overflow:hidden;
    border-bottom:3px solid #ddd;
`;
export const Logo = style.div`
    width:50%;
    float:left;
    `;
export const LogoText = style.h2`
    font-size: 30px;
    font-weight: bold;
`;
export const UlList = style.ul`
    float: left;
    list-style: none;
    padding: 0;
    `;
export const ListItem = style.li`
    display: inline-block;
`;
export const AnchorLink = style(Link)`
display: block;
    color:#222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    transition: color .4s;
    &:hover{
        color: #eb5424;
    }
`;
