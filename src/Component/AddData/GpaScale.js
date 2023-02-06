import classes from "./GpaScale.module.css";
import Card from "../UI/Card";
import Header from "../UI/Header";
import { useState , useEffect } from "react";
import Label from "../UI/Label";
import Container from "../UI/Container";

const GpaScale = (props) => {
  const [selected, setSelectedValue] = useState('4');

  const selectHandler = (event) => {
    setSelectedValue(event.target.value)
    
    
     
  };
  useEffect(() => {
    props.scale(selected);
  })
  
 
  return (
    <>
    <Container className={classes.container}>
      <Card className={classes.input}>
        <Header>GPAنظام ال</Header>
        <Container>
          <Label>4.0</Label>
          <input type="radio" name="GPA" value="4" onClick={selectHandler} defaultChecked  />
        </Container>
        <Container>
          <Label>5.0</Label>
          <input type="radio" name="GPA" value="5" onClick={selectHandler} />
        </Container>
      </Card>
      </Container>
    </>
  );
};

export default GpaScale;
