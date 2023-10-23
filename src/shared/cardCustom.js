import styled from "styled-components"

const CardStyle = styled.div`
    background-color: white;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    box-sizing: border-box;
    color: ${ ({color})=> color || '#000' };
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 4px 4px 1px #b7bec7;    
    
    img{
        width: 150px;
       
    }
    p{
        font-weight: bold;
        text-transform: capitalize;
        font-family: Arial, Helvetica, sans-serif;
    }

`


function CardCustom({titulo, img}) {
    return(<CardStyle color='#ffb145'>
        <p>{titulo}</p>
        <img src={img} alt="imagem"/>
    </CardStyle>
)}

export default CardCustom;