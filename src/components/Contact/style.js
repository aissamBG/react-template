import styled from 'styled-components'

export const ContactSection = styled.div`
    margin:50px 0;
    text-align: center;
`;
export const ContactTitle = styled.h2`
    font-size: 60px;
    margin-bottom:30px;
`;
export const Span = styled.span`
    font-weight:normal;
`;
export const Form = styled.form`
    width:70%;
    margin:auto;
`;
export const Input = styled.input`
    width: 49%;
    padding: 5px;
    font-size: 18px;
    outline: 0;
    margin-bottom: 10px;
    box-sizing: border-box;
`;
export const InputDiv = styled.div`
    overflow: hidden;
`;
export const InputText = styled(Input)`
    float: left;
`;
export const InputEmail = styled(Input)`
    float: right;
`;
export const InputSub = styled.input`
    width: 100%;
    padding: 5px;
    font-size: 18px;
    outline: none;
    margin-bottom: 10px;
    box-sizing: border-box;
`;
export const Textarea = styled.textarea`
    width: 100%;
    font-size: 18px;
    outline: 0;
    background-color: #ddd;
    margin-bottom: 10px;
    box-sizing: border-box;
`;
export const InputSubmit = styled.input`
    width:60%;
    height: 30px;
    background-color: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
    color:#888;
    font-size: 18px;
    transition:all .5s;
    &:hover{
        background-color:#888 ;
    color: #fff;
    };
`
