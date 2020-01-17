import React, { useState } from "react";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Collapse
} from "reactstrap";

const PlanetCard = props => {
  console.log(props);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {props.planets.map(planetData => (
        <Card key={planetData.name}>
          <CardBody>
            <CardTitle>{planetData.name}</CardTitle>
            <CardSubtitle>Climate: {planetData.climate}</CardSubtitle>
            <Collapse isOpen={isOpen}>
              <CardText>Hours per day: {planetData.rotation_period}</CardText>
              <CardText>Gravity: {planetData.gravity}</CardText>
              <CardText>Population: {planetData.population}</CardText>
            </Collapse>
            <Button onClick={toggle} style={{ marginBottom: "1rem" }}>
              Toggle
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default PlanetCard;
