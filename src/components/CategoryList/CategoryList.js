import React from 'react';
import { Row, Col } from 'reactstrap';
import Category from '../Category/Category';
import { data } from '../../assets/data';

const CategoryList = () => {
  return (
    <Row>
      {data.map((cat) => (
        <Col key={cat.id} sm={4} md={3} className="mb-3">
          <Category data={cat} />
        </Col>
      ))}
    </Row>
  );
};

export default CategoryList;
