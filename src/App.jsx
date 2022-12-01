import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Carrusel from './components/carrusel/Carruseel';
import './styles/styles.css';
import Carruseel from './components/carrusel/Carruseel';
function App() {
  return (
    <div className="home">
      <Header/>
      <Carruseel/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
