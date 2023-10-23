
import styled from 'styled-components';

const Options = styled.ul`
    display: flex;
`

const Option = styled.li`
    font-size: 18px;
    list-style: none;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    cursor: pointer;
    border-color: black;
    border: 2px;
    border-style: groove;
`

function Menu() {
    var textoOp=['home', 'help','quit']
    return(
        <Options>
            {textoOp.map((value)=>(
                <Option>
                    <p>{value}</p>
                   
                </Option>
            ))}
        </Options>
   
    )
}

export default Menu;