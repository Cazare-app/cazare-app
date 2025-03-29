
import Footer from './components/Footer';
import Header from './components/Header';
import styled from 'styled-components';
import SearchHotel from './components/SearchHotel';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1; 
`;
const SearchContainer = styled.div`
  position: absolute;
  top: 180px; /* Ajuste a altura conforme necessário */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1100; /* Maior que o Header */
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchContainer>
      <SearchHotel/>
      </SearchContainer>
     <Main>
     </Main>
       <Footer/>

    </Container>
     
   
  );
}

export default App;

