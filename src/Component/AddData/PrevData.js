import classes from "./PrevData.module.css";
import Card from "../UI/Card";
import Header from "../UI/Header";
import Label from "../UI/Label";
import Container from "../UI/Container";
import { useState ,useEffect } from "react";
const PrevData = (props) => {
  const [points, setPointsValue] = useState(0);
  const [hours, sethoursValue] = useState(0);
  const pointsHandler = (event) => {
    setPointsValue(event.target.value);
  };
  const hoursHandler = (event) => {
    
    sethoursValue(event.target.value)
  };
  useEffect(() => {
    props.prevData(points,hours);
  });
  
  return (
    <>
    <div className={classes.prevData}>
      <Card className={classes.input}>
        <Header>المعلومات السابقة</Header>
        <Container>
          <input type="number" onChange={pointsHandler} placeholder="0.000" />
          <Label>عدد النقاط</Label>
        </Container>
        <Container>
          <input type="number" onChange={hoursHandler} placeholder="0" />
          <Label>عدد الساعات</Label>
        </Container>
      </Card>
      </div>
    </>
  );
};

export default PrevData;
