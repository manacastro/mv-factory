import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Checkbox from '../Checkbox/Checkbox';
import Search from '../Search/Search';
import Dropdawn from '../Dropdawn/Dropdawn';

const CitySection = () => (
    
    <Row>
        <Col col lg-6>
            <Dropdawn />         
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