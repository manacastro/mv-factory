import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import './CitySection.scss'
import Button from "react-bootstrap/Button";
import { useCity } from "../../componentes/ContextCity/ContextCity";


const CitySection = () => {
    const { cities, selectedCity, changeCitySelected } = useCity();
    const [historySelected, setHistorySelected] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);
  
    const handleDropdownChange = (e) => {
      changeCitySelected(e.target.value);
      setCanSubmit(e.target.value !== "-1");
    };
  
    const handleHistory = (e) => {
      setHistorySelected(e.target.value === "on");
    };
  
    if (cities && cities.length > 0) {
      return (
        <div class="citySearch">
          <div className="city">
            {/* <h1>{selectedCity}</h1> */}
            <Form.Select
              aria-label="Default select example"
              className="dropdown"
              onChange={handleDropdownChange}
            >
              <option value="-1">Seleccione la ciudad</option>
              {cities.map((cities) => (
                <option value={cities.id}>{cities.description}</option>
              ))}
            </Form.Select>
            <input onChange={handleHistory} id="history" type="checkbox" />
            <label htmlFor="history">Incluir historico</label>
          </div>
          <Button variant="primary" className="citytton" disabled={!canSubmit}>
            Consultar
          </Button>
        </div>
      );
    } else {
      return <p className="text-center">Cargando ciudades...</p>;
    }
  };
     
export default CitySection