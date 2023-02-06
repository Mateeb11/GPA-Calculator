import { useEffect, useState } from "react";
import classes from "./CoursesTable.module.css";
 
const CoursesTable = (props) => {
  const [grade, setGrade] = useState("0");
  const gradeHandler = (event) => {
    setGrade(event.target.value);
    
  };
  const [hours, setHours] = useState("0");
  const hoursHandler = (event) => {
    setHours(event.target.value);
    
    
  }
  const courseData = {
    grade:grade ,
    hours:hours,
    id:props.id
  }
  useEffect(() => {
    props.onDataChange(courseData);
  });
  return (
    <tr className={classes.input}>
      <td>
        <select onChange={gradeHandler}>
          <option value="0">--</option>
          <option value="A+">A+</option>
          <option value="A">A</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
      </td>
      <td>
        <select onChange={hoursHandler}>
          <option value="0">--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </td>
      <td>
        <input type="text" className={classes.name} placeholder="اسم المقرر" />
      </td>
      <td>-{props.id}</td>
    </tr>
  );
};

export default CoursesTable;
