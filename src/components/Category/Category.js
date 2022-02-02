import React from 'react';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
  CardImg,
} from 'reactstrap';

const Category = ({ data: { title, desc, imgSrc } }) => {
  return (
    <Card>
      <CardImg
        alt={title}
        src={imgSrc}
        top
        width="100%"
        style={{ maxHeight: '170px' }}
      />
      <CardBody>
        <CardTitle tag="h5"> {title}</CardTitle>

        <CardText>{desc}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default Category;
