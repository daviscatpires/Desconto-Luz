import './App.css';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Explication from './Components/Explication/Explication';
import Footer from './Components/Footer/Footer';
import VideoSection from './Components/VideoSection/VideoSection';

function App() {
  return (
    <><Header />
    <Form />
    <VideoSection /> {/* Renderize o componente VideoSection aqui */}
    <Explication />
    <Footer /></>
  );
}

export default App;
