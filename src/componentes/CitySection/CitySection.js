import React from 'react';
import Form from "react-bootstrap/Form";
import './CitySection.scss'
import Button from "react-bootstrap/Button";

class CitySection extends React.Component {
    constructor() {
        super();
        this.state = { cities: [] };
        //this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(event) {
    //     this.setState({value: event.target.cities});
    // }

    componentDidMount() {
        fetch("http://localhost:5000/getcities", {
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => this.setState({ cities: data.cities }))
    }

    render() {
        console.log(this.state)
        if (this.state.cities.length > 0) {
            return (
               
                <div class="citySearch">
                    <div class="city">
                        <Form.Select aria-label="Default select example" className="dropdown" >
                            <option>Seleccione la ciudad</option>
                            {this.state.cities.map(cities => (
                                <option id={cities.id} value={cities.description}>
                                    {cities.description}
                                </option>
                            ))}
                        </Form.Select>
                        <div class="check">
                            <Form.Check.Input />
                            <Form.Check.Label>Incluir historico</Form.Check.Label>
                        </div>
                    </div>
                    <Button variant="primary"  class="citytton">Consultar</Button>
                </div>
                
            );
        } else {
            return <p className="text-center">Cargando ciudades...</p>;
        }
    }
}

export default CitySection