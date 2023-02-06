import classes from "./Courses.module.css";
import Table from "../UI/Table";
import Header from "../UI/Header";
import Card from "../UI/Card";
import Container from "../UI/Container";
import CoursesTable from "./CoursesTable";
import { useState } from "react";

let coursesTable = [];
let coursesTableData = [];
let num = 1;

const Courses = (props) => {
  


  const addHandler = () => {
     coursesTable = [
      ...coursesTable,
      <CoursesTable
        key={Math.random().toString()}
        onDataChange={changeHandler}
        id={num++}
      />,
    ];
    
    setDisplayedTable([...coursesTable]);
  };
  const changeHandler = (e) => {
    coursesTableData[e.id] = e;
    const filterdDataTable = coursesTableData.filter(
      (course) => !(course.grade === "0" || course.hours === "0")
    );

    props.coursesData(filterdDataTable);
  };

const [displayedTable, setDisplayedTable] = useState();
  return (
    <>
      <Container>
        <Card className={classes.input}>
          <Header>الفصل الحالي</Header>
          <Container>
            <Table>
              <thead>
                <tr>
                  <th>التقدير</th>
                  <th>ساعات المقرر</th>
                  <th>اسم المقرر</th>
                  <th>/</th>
                </tr>
              </thead>
              <tbody>{displayedTable}</tbody>
            </Table>
          </Container>
          <Container>
            <button onClick={addHandler}>+ اضافة مقرر</button>
          </Container>
        </Card>
      </Container>
    </>
  );
};

export default Courses;
