import React, { useState, useCallback } from 'react';
import { Container, Button, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
import Card from '../05-Disposal/Card'
import update from 'immutability-helper'
const style = {
  width: 400,
}

const SortingSampDnD = () => {

  let correctOrder = false
  const [alert, setAlert] = useState(correctOrder)

  const checkOrder = (cards) => {
    for (let i = 1; i <= cards.length; i++) {
      if (cards[i - 1].id !== i) {
        console.log(correctOrder)
        break
      } else if (i >= cards.length) {
        correctOrder = true;
        console.log(correctOrder)
      } else {
        continue
      }
    }
  }

  const [cards, setCards] = useState([
    {
      id: 2,
      text: 'Line the red, durable, and leak proof biohazard container with the biohazard bag',
    },
    {
      id: 1,
      text: 'Place an “X” with autoclave tape over the biohazard symbol on the biohazard bag',
    },
    {
      id: 5,
      text: 'Remove bags and place in large containers labeled “Autoclaved”',
    },
    {
      id: 3,
      text:
        'Remove bags when they are 2/3 full and loosely close the bags to allow for steam penetration. Then place in a leakproof secondary container',
    },
    {
      id: 4,
      text: 'Autoclave biohazard waste using appropriate protocols',
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
        <Header 
                  header='Biohazard Waste Disposal'
                  />
        <h1>Biohazard Sorting Question</h1>
        <p>
          Sort the following procedures into the current order to proceed. Click submit to check your answer.
        </p>

        <Row> 
            <Col>
              {cards.map((card, i) => renderCard(card, i))}
            </Col>
            <Col className="text-center">
            <Alert variant="success" show={true}>
              <Alert.Heading>Correct!</Alert.Heading>
              <p>
                Click next to proceed.
              </p>
            </Alert>
            </Col>
        </Row>

        <br /><br /><br />
        <Link to="/Injury">
          <Button variant='warning' style={{ color: 'white' }}>PREVIOUS</Button>
        </Link>
        {/*Correct the link and add route*/}
        <Link to="/DnD1">
          <Button variant='warning' style={{ color: 'white', float: "right" }}>NEXT</Button>
        </Link>
      </Container>
    </>
  ) : (
      <>
        <Container>
          <Header 
                    header='Biohazard Waste Disposal'
          />
          <h1>Biohazard Sorting Question</h1>
          <p>
            Sort the following procedures into the current order to proceed. Click submit to check your answer.
          </p>

          <Row> 
            <Col>
              {cards.map((card, i) => renderCard(card, i))}
            </Col>
            <Col className="text-center">
            <Button variant="secondary" onClick={() => setAlert(!correctOrder)} style={{width:"50%"}}>Submit</Button><br/><br/>

            <Alert variant="danger" show={alert} onClose={() => setAlert(correctOrder)} dismissible>
              <Alert.Heading>Incorrect</Alert.Heading>
              <p>
                Please try again!
              </p>
            </Alert>
            </Col>
          </Row>
                    
          <br /><br /><br />
          <Link to="/Injury">
            <Button variant='warning' style={{ color: 'white' }}>PREVIOUS</Button>
          </Link>
        </Container>
      </>
    )
}

export default SortingSampDnD