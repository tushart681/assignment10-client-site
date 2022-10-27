import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const HomeCard = ({premium}) => {
    const {title, image_url, details} = premium
    

    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>Title: {title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
      </Card.Body>
    </Card>
    );
};

export default HomeCard;