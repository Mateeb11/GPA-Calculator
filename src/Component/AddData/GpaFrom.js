import PrevData from "./PrevData";
import GpaScale from "./GpaScale";
import Courses from "./Courses";
import { useEffect, useState } from "react";


const GpaForm = (props) => {
  const [points, setPoints] = useState(0);
  const [hours, setHours] = useState(0);
  const [scale, setScale] = useState(0);
  const [filterdDataTable, setFilterdDataTable] = useState([]);

  const prevUserData = (points, hours) => {
    setPoints(points);
    setHours(hours);
  };
  const selectedScale = (scale) => {
    setScale(scale);
  };
  const coursesDataHandler = (filterdDataTable) => {
    setFilterdDataTable(filterdDataTable);
  };
  
  const raiting = (gpa) => {
    let raiting = ""
    let i = 0 ;
    (scale ==="5" && i++)
    if (gpa<=(4+i) && gpa>=(3.5+i)) {
      raiting = "ممتاز"
    }
    else if (gpa<(3.5+i) && gpa>=(2.75+i)){
      raiting = "جيد جدا"
    }
    else if (gpa<(2.75+i) && gpa>=(1.75+i)){
      raiting = "جيد"
    }
    else if (gpa<(1.75+i) && gpa>=(1+i)){
      raiting = "مقبول"
    }
    return raiting
  }

  useEffect(() => {
    let gpa =0
    if (filterdDataTable.length === 0) {
      if (!(parseInt(points) === 0 || parseInt(hours) === 0)) {
            gpa = (parseFloat(points) / parseInt(hours)).toFixed(2)
            const gpaRaiting = raiting(gpa)
            
            props.GPAs(gpa ,"" ,gpaRaiting , "" , points , "", hours , "")
      }
      else (
        props.GPAs()
      )


      return;
    }
    let filterDataHours = 0
     let filterDataPoints = 0;

    filterdDataTable.forEach(
      (hour) => (filterDataHours += parseInt(hour.hours))
    );
    

    filterdDataTable.forEach((point) => {
      switch (point.grade) {
        case "A+":
          scale === "4" ? (filterDataPoints += (4*parseInt(point.hours))) : (filterDataPoints += (5*parseInt(point.hours)))
          break

        case "A":
          scale === "4" ? (filterDataPoints += (3.75*parseInt(point.hours))) : (filterDataPoints += (4.75*parseInt(point.hours)))
          break

        case "B+":
          scale === "4" ? (filterDataPoints += 3.5*parseInt(point.hours)) : (filterDataPoints += (4.5*parseInt(point.hours)))
          break

        case "B":
          scale === "4" ? (filterDataPoints += (3*parseInt(point.hours))) : (filterDataPoints += (4*parseInt(point.hours)))
          break

        case "C+":
          scale === "4" ? (filterDataPoints += (2.5*parseInt(point.hours))) : (filterDataPoints += (3.5*parseInt(point.hours)))
          break

        case "C":
          scale === "4" ? (filterDataPoints += (2*parseInt(point.hours))) : (filterDataPoints += (3*parseInt(point.hours)))
          break

        case "D+":
          scale === "4" ? (filterDataPoints += (1.5*parseInt(point.hours))) : (filterDataPoints += (2.5*parseInt(point.hours)))
          break

        case "D":
          scale === "4" ? (filterDataPoints += (1*parseInt(point.hours))) : (filterDataPoints += (2*parseInt(point.hours)))
          break

        case "F":
          scale === "4" ? (filterDataPoints += 0) : (filterDataPoints += (parseInt(point.hours)))
          break

        default:
          break
      }})
    let currentSemsterGpa = (filterDataPoints /filterDataHours).toFixed(2) ;
    let gpaPoints = (filterDataPoints + parseFloat(points))
    let gpaHours = (filterDataHours + parseInt(hours))
    gpa  = (gpaPoints / gpaHours).toFixed(2)

    const gpaRaiting = raiting(gpa)
    const currentSemsterGpaRaiting = raiting(currentSemsterGpa)
    
    

    props.GPAs(gpa , currentSemsterGpa , gpaRaiting , currentSemsterGpaRaiting  , gpaPoints , filterDataPoints , gpaHours , filterDataHours )
  })
  //[points, hours , scale , filterdDataTable]

  return (
    <>
    
      <PrevData prevData={prevUserData} />
      <GpaScale scale={selectedScale} />
      <Courses coursesData={coursesDataHandler} />
      
    </>
  );
};

export default GpaForm;
