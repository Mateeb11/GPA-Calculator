import GpaForm from './Component/AddData/GpaFrom'
import Result from './Component/Result/Result'
import './App.css';
import Footer from './Component/UI/Footer';
import Header from './Component/UI/Header';
import { useState } from 'react';
import Card from './Component/UI/Card';
import Container from './Component/UI/Container';
import Wrapper from './Component/UI/Wrapper';

function App() {
  const [gpa , setGpa] = useState("")
  const [currentSemsterGpa , setCurrentSemsterGpa] = useState("")
  const [gpaRaiting , setgpaRaiting] = useState("")
  const [currentSemsterGpaRaiting , setcurrentSemsterGpaRaiting] = useState("")
  const [gpaPoints , setGpaPoints] = useState("")
  const [filterDataPoints , setFilterDataPoints] = useState("")
  const [gpaHours , setGpaHours] = useState("")
  const [filterDataHours , setFilterDataHours] = useState("")
  const gpaHandler = (gpa , currentSemsterGpa , gpaRaiting , currentSemsterGpaRaiting, gpaPoints , filterDataPoints , gpaHours , filterDataHours ) => {
    setGpa(gpa)
    setCurrentSemsterGpa(currentSemsterGpa)
    setgpaRaiting(gpaRaiting)
    setcurrentSemsterGpaRaiting(currentSemsterGpaRaiting)
    setGpaPoints(gpaPoints)
    setFilterDataPoints(filterDataPoints)
    setGpaHours(gpaHours)
    setFilterDataHours(filterDataHours)
    
  }
  return (
    <>
    <Wrapper>
    <Container><Card><Header>حساب المعدل التراكمي</Header></Card></Container>
    <GpaForm GPAs={gpaHandler} />
    <Result GPAs={[gpa , currentSemsterGpa ,gpaRaiting, currentSemsterGpaRaiting  , gpaPoints , filterDataPoints , gpaHours , filterDataHours ]} />
    
    </Wrapper>
    <Footer />
    </>
  )
}

export default App;
