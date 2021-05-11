import styled from 'styled-components'

export const Media = styled.div`
height: auto;
    overflow: hidden;
    margin-bottom:15px;
`;
export const Social = styled.div`
width: 33.3%;
    float: left;
    padding:100px 0 100px 60px;
    box-sizing: border-box;
    background-color:${props => props.item === 1 ? '#3B5998' : ''};
    background-color:${props => props.item === 2 ? '#498cbf' : ''};
    background-color:${props => props.item === 3 ? '#cc2127' : ''};    
`;
export const Icon = styled.i`
    color:#888;
 `;
export const Div = styled.div`
 width:50px;
 height:50px;
 background-color:#fff;
 border-radius: 3px;
    float: left;
    margin-right:10px;
    margin-top: 5px;
    text-align:center;
    line-height:60px;

 `;
export const Para = styled.p`
 font-weight: bold;
    font-size:20px;
    text-transform:uppercase;
    color:#fff;
    margin-top: 0;
`;
export const Span = styled.span`
    display:block;
    margin-bottom: 3px;
`;
export const Span2 = styled.span`
    font-weight:normal;
`;
