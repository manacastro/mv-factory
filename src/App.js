import './App.css';
import './Styles/Styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container } from 'react-bootstrap';
import Historical from './componentes/Historical/Historical';
import CurrentWeather from './componentes/CurrentWeather/CurrentWeather';
import DropdownSection from './componentes/DropdownSection/DropdownSection';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">Informes del clima</h1>
      </header>
      <body>
        <Container>          
          <DropdownSection />         
          <CurrentWeather />            
          <Historical />          
        </Container>
      </body>
    </div>
  );
}

export default App;
