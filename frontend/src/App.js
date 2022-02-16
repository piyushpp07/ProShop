import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import { Container } from 'react-bootstrap'
function App() {
  return (
    <>
      <Header />
      <Container>
        <main className="py-3" >
          <HomeScreen />
        </main>
      </Container>
      <Footer />
    </> 
  );
}

export default App;
