import Header from'./header/header';
import Search from './search/search';
import Newbooks from './new_books/newBooks';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg, #002f52 35%, #326589);
`
function App() {
 
  return (
    <AppContainer>
      <Header/>
      <Search/>
      <Newbooks/>
    </AppContainer>
  );
}

export default App;
