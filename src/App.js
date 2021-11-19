import "./App.css";
import React from "react";
import "./Styles/Styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Historical from "./componentes/Historical/Historical";
import CurrentWeather from "./componentes/CurrentWeather/CurrentWeather";
import CitySection from "./componentes/CitySection/CitySection";
import { CityProvider } from "./componentes/ContextCity/ContextCity";

const App = () => (

  <div className="App">
    <header>
      <h1 className="title">Informes del clima</h1>
    </header>
    <body>
    <Container>
        <CityProvider>
          <CitySection />
          <CurrentWeather />
          <Historical />
        </CityProvider>
      </Container>
    </body>
  </div>
)

export default App;