import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Checkbox from '../Checkbox/Checkbox';
import Search from '../Search/Search';
import Dropdown from '../Dropdown/Dropdown';

const CitySection = () => (
    
    <Row>
        <Col col lg-6>
            <Dropdown />         
        </Col>
        <Col col lg-2>            
            <Checkbox />
        </Col>
        <Col col lg-4>
            <Search />
        </Col>
    </Row>
    
)

export default CitySection