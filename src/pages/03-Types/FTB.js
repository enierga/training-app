import React, { Component, useState, useCallback } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import update from 'immutability-helper'
const style = {
  width: 400,
}



const FTB = () => {
    {
      
      const [state, setState] = useState({
        correctOrder : false,
      })
      const checkOrder = (cards) =>{
        // console.log(cards)
          if (document.getElementById("answer").value != 'EHS'){ 
            alert("Incorrect Answer...")
            console.log(state.correctOrder)
          }else if(document.getElementById("answer").value == 'EHS'){
            
            alert("Correct Answer!")
            
            setState(
              update(state, {
                correctOrder : {
                  $set : true
                }
              }),
            )
            console.log(state.correctOrder)
            
          }
        
      }
      
      
      
      

      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      console.log(state.correctOrder);
      return state.correctOrder ? (
        <>
            <Container>
            <Header/>
            <h1>Module Comprehension Fill in the Blank Question</h1>
            <p>
            You completed the question.
            </p>
            
            <br/><br/><br/>
            <Link to="/BucketSampDnD">
                <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
            </Link>
            {/*Correct the link and add route*/}
            <Link to="/">
                    <Button variant='warning' style={{color: 'white', float: "right"}}>NEXT</Button>
            </Link>
            </Container>
        </>
      ):(
        <>
            <Container>
            <Header/>
            <h1>Module Comprehension Fill in the Blank Question</h1>
            <p>
            Biological waste contaminated with hazardous chemicals, radioactive substances, or carcinogens require special disposal by ______________. 
            </p>
            <input defaultValue = "Enter Answer Here" id = "answer">
            </input> <br></br><br></br>
            <button className = "enter" onClick={checkOrder}>
                Enter
            </button>
            
            <br></br><br></br>
            <Link to="/BucketSampDnD">
                <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
            </Link>
            </Container>
        </>
      )
    }
  }

export default FTB