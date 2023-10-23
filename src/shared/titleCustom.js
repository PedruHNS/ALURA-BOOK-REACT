import styled from "styled-components";

 const TitleCustom = styled.h2`
    color:${({color}) => color || '#000'};
    font-weight: bold;
    font-size: 34px;
    text-transform:uppercase;
`
export default TitleCustom;