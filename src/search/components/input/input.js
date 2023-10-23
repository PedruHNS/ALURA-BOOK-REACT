import styled from "styled-components";

const Input = styled.input`
    
    background-color: transparent;
    border: 1px solid #FFF;
    border-radius:20px;
    padding: 20px 140px;
    width: 200px;
    color: #FFF;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
    text-transform: lowercase;

    &::placeholder{
        color: #FFF;
        font-size: 16px;
    }
`

export default Input;