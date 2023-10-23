

import styled from 'styled-components';

const LogoContainer = styled.div`
    font-size: 24px;
    display: flex;
`
const DestaqueText = styled.span`
    font-size: 30px;
    margin-right: 5px;
    font-family: Georgia, 'Times New Roman', Times, serif;

`


function Logo() {
    return(
        <LogoContainer>
            <p><DestaqueText>LOGO</DestaqueText>aqui</p>
        </LogoContainer>
    );
}

export default Logo