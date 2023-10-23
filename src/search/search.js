import styled from "styled-components";
import TitleCustom from "../shared/titleCustom";
import CardCustom from "../shared/cardCustom";
import SubTitle from "./components/sub_title/sub_title";
import Input from "./components/input/input";
import { useState } from "react";
import { Books } from "./dadosSearch";

const SectionSearch = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    color: #FFF;
    text-align: center;
    height: 100%;
    width: 100%;
    

`
const ListBooks = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 80%;

margin: 40px;

`





function Search(params) {
    // livrospesquisados, setlivros
    const [books, setBook] = useState([])

   
    return(
        <SectionSearch>
            <TitleCustom color="#ffff">Já sabe por onde começar?</TitleCustom>
            <SubTitle>encontre seu livro em nossa estante.</SubTitle>
            <Input 
                placeholder="digite o nome do livro" 
                onBlur={event => {
                  const inputText = event.target.value
                  const resultSearch = Books.filter(book => book.nome.includes(inputText))
                  setBook(resultSearch); 
                }}
            />
          <ListBooks>
            {books.map((e) => (
                <CardCustom 
                    titulo={e.nome}
                    img={e.src}
                />
            ))}
          </ListBooks>
        </SectionSearch>
    )
}

export default Search;
