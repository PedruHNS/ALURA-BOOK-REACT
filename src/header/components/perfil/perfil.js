
import styled from 'styled-components';

const Icone = styled.li`
    list-style: none;
    min-width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border-color: black;
    border: 2px;
    border-style: groove;
`

const Icones = styled.ul`
    display: flex;
    justify-content: center;
`
function Perfil(params) {
    var icones = ['perfil', 'compra']
    return(
        <Icones>
            {icones.map((value)=>(
                <Icone>
                    <p>{value}</p>
                </Icone>
            ))}
        </Icones>
    )
}
export default Perfil