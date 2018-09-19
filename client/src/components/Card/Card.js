import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const NumCard = (props) => {
  return (
    <div>
    
      <Card body outline color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      
    </div>
  );
};

export default NumCard;