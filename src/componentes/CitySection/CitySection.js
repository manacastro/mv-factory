import React from 'react';
import Form from "react-bootstrap/Form";
import './CitySection.scss'
import Button from "react-bootstrap/Button";
import ContextCity from '../../componentes/ContextCity/ContextCity';

class CitySection extends React.Component {

    state = {
        selectedCity: ""
    }

    constructor() {
        super();
        this.state = { cities: [], historySelected: false, canSubmit: false };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleHistory = this.handleHistory.bind(this);
    }

    handleDropdownChange(e) {
        this.setState({ selectedCity: e.target.value, canSubmit: e.target.value !== "-1" });
    }

    handleHistory(e) {
        this.setState({ historySelected: e.target.value === 'on' });
    }

    componentDidMount() {
        fetch("http://localhost:5000/getcities", {
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => this.setState({ cities: data.cities }))
    }

    render() {
        if (this.state.cities.length > 0) {
            return (
            
                <div class="citySearch">
                    <ContextCity.Provider value="BLABLA">
                        <div className="city">
                            <h1>{this.props.selectedCity}</h1>
                            <Form.Select aria-label="Default select example" className="dropdown" onChange={this.handleDropdownChange}>
                                <option value="-1">Seleccione la ciudad</option>
                                {this.state.cities.map(cities => (
                                    <option value={cities.id}>
                                        {cities.description}
                                    </option>
                                ))}
                            </Form.Select>
                            <input onChange={this.handleHistory} id="history" type="checkbox" />
                            <label htmlFor="history">Incluir historico</label>
                        </div>
                        <Button variant="primary" className="citytton" disabled={!this.state.canSubmit} >Consultar</Button>
                    
                        {this.props.children}
                    </ContextCity.Provider>
                </div>              
                
            );
        } else {
            return <p className="text-center">Cargando ciudades...</p>;
        }
    }
}
//export const ContextCity = ContextCity.Consumer
export default CitySection