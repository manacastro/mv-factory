import React from 'react';
import { Table } from 'react-bootstrap';

const Historical = () => (
  
    <Table striped bordered hover class="table">
        <thead>
            <tr>
                <th>Pais</th>
                <th>Ciudad</th>
                <th>Clima</th>
                <th>Sensacion termica</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Argentina</td>
                <td>Buenos Aires</td>
                <td>31.6°</td>
                <td>33°</td>
            </tr>
            <tr>
                <td>Argentina</td>
                <td>Buenos Aires</td>
                <td>33.6°</td>
                <td>27°</td>
            </tr>
            <tr>
                <td>Argentina</td>
                <td>Buenos Aires</td>
                <td>32.5°</td>
                <td>24°</td>
            </tr>
        </tbody>
    </Table>
)

export default Historical