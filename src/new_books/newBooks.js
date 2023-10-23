import styled from 'styled-components';
import TitleCustom from '../shared/titleCustom'
import CardCustom from '../shared/cardCustom';
import {ListNewBooks} from './dadosNewBooks'

const SectionNewBooks = styled.section`

    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: #FFF;
    text-align: center;
    height: 100%;
    width: 100%;    
`

const ListNew= styled.div`
    display: flex;
`



function Newbooks(params) {
    return(
        <SectionNewBooks>
            <TitleCustom color='#ffb145'>Lançamentos</TitleCustom>
             <ListNew>
                {ListNewBooks.map((e)=>(
                        <CardCustom color='#ffb145'
                            titulo={e.nome}
                            img = {e.src}
                        />
                        )
                    )
                }
                    
                  
              
             </ListNew> 
        </SectionNewBooks>
    )
}

export default Newbooks;


// {books.map((e) => (
//     <CardCustom>
//         <p>{e.nome}</p>
//         <img src={e.src} alt="imagem"/>
//     </CardCustom>
// ))}