import React, { Component, useState, useCallback } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import Card from './Card'
import update from 'immutability-helper'
const style = {
  width: 400,
}

const SampDnD = () => {
    {
      let correctOrder = false
      const checkOrder = (cards) =>{
        // console.log(cards)
        for(let i =1; i<=cards.length; i++){
          if (cards[i-1].id != i){ 
            console.log(correctOrder)
            break
          }else if(i>=cards.length){
            correctOrder = true;
            console.log(correctOrder)
          }else{
            continue
          }
        }
      }
      
      const [cards, setCards] = useState([
        {
          id: 2,
          text: 'Step 2',
        },
        {
          id: 1,
          text: 'Step 1',
        },
        {
          id: 7,
          text: 'Step 7',
        },
        {
          id: 5,
          text: 'Step 5',
        },
        {
          id: 3,
          text:
            'Step 3',
        },
        {
          id: 6,
          text: 'Step 6',
        },
        {
          id: 4,
          text: 'Step 4',
        },
      ])
      const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
          const dragCard = cards[dragIndex]
          setCards(
            update(cards, {
              $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
              ],
            }),
          )
        },
        [cards],
        checkOrder(cards)
      )
      const renderCard = (card, index) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        )
      }
      return correctOrder ? (
        <>
            <Container>
            <Header/>
            <h1>Sample Drag and Drop: Sorting</h1>
            <p>
            This page is a sample of what a sorting drag and drop question would look like. Sorting the correct order should show the next button, otherwise it should not appear (working on this part next). 
            </p>
            <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
            <br/><br/><br/>
            <Link to="/SampMC">
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
            <h1>Sample Drag and Drop: Sorting</h1>
            <p>
            This page is a sample of what a sorting drag and drop question would look like. Sorting the correct order should show the next button, otherwise it should not appear (working on this part next). 
            </p>
            <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
            <br/><br/><br/>
            <Link to="/SampMC">
                <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
            </Link>
            </Container>
        </>
      )
    }
  }

export default SampDnD