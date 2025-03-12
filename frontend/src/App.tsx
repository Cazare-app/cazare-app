
import Footer from './components/Footer';
import Header from './components/Header';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1; 
`;
const App: React.FC = () => {
  return (
    <Container>
      <Header />
     <Main>
     </Main>
       <Footer/>

    </Container>
     
   
  );
}

export default App;

