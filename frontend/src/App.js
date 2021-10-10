import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Container className="py-3">
        <h1>welcome</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
