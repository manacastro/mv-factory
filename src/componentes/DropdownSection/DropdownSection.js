import React from 'react';
import Form from "react-bootstrap/Form";
import { Col, Row } from 'react-bootstrap';
import Checkbox from '../Checkbox/Checkbox';
import Search from '../Search/Search';

const DropdownSection = () => (
    <Col>
        <Row>
            <Col col lg-6>
                <Form.Select aria-label="Default select example" className="dropdown" >
                    <option>Seleccione la ciudad</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Col>
            <Col col lg-2>
                <Checkbox />
            </Col>
            <Col col lg-4>
                <Search />
            </Col>
        </Row>
    </Col>
)

export default DropdownSection