import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Header from '../../components/header';
import { Button, Image, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

let order = false;

const itemsFromBackend = [
  //wID=  waste ID. What type of waste it should be,
  { id: 'broken', content: "Contaminated Media Flasks" },
];

const columnsFromBackend = {
  waste: {
    name: "Waste",
    items: itemsFromBackend,
    feedback: ""
  },
  glass: {
    name: "Glass",
    items: [],
    feedback: "Incorrect: This is for contaminated broken glass only"
  },
  sharps: {
    name: "Sharps",
    items: [],
    feedback: "Incorrect: This is for contaminated sharps only."
  },
  biowaste: {
    name: "Biowaste",
    items: [],
    feedback: "Correct!"
  },
  trashbag: {
    name: "Trashbag",
    items: [],
    feedback: "Incorrect: This is for non-contaminated waste ONLY."
  },
  serological: {
    name: "Serological Pipettes",
    items: [],
    feedback: "Incorrect: This is for contaminated serological pipettes."
  }
};


const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, removed);
    if (destination.droppableId.toString() === "biowaste") {
      order = true;
    } else if (destination.droppableId.toString() === "glass") {
    } else if (destination.droppableId.toString() === "sharps") {
    } else if (destination.droppableId.toString() === "trashbag") {
    } else if (destination.droppableId.toString() === "serological") {
    }


    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function FlasksDnD() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return order ? (
    <div>
      <Header
        header='Biohazard Waste Disposal'
      />
      <Container>
        <div style={{ textAlign: "center", }}>
          <h1>Waste Disposal</h1>
          <p>Place the waste into the correct category to proceed.</p><br /></div>
      </Container>
      <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>

        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                key={columnId}
              >
                <h6>{column.name}</h6>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: (columnId === "waste" ? "#86b7d9" : "white"),
                            border: "2px solid #86b7d9",
                            padding: 4,
                            minWidth: 50,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        textAlign: "center",
                                        backgroundColor: "white",
                                        color: "black",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      <Image src="./Types-Images/Flasks.jpg" rounded style={{ width: "5em" }}></Image>
                                      <br />
                                      {item.content}
                                      <br /><br />
                                      <div style={{ display: (columnId === "waste" ? "none" : "") }}>
                                        <Card bg={(column.feedback === "Correct!") ? "success" : "danger"} text="white" style={{ minHeight: '50px', display: "flex", "justify-content": "center", "align-items": "center" }}>{column.feedback}</Card>
                                      </div>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>

      <div>
        <Link to={'/DnD7'}>
          <Button variant='warning' style={{ color: 'white' }}>PREVIOUS</Button>
        </Link>

        <Link to={`/DnD9`}>
          <Button id="nextButton" variant='warning' style={{ color: 'white', float: "right" }}>NEXT</Button>
        </Link>
      </div>

    </div>
  ) : (
      <div>
        <Header
          header='Biohazard Waste Disposal'
        />
        <Container>
          <div style={{ textAlign: "center", }}>
            <h1>Waste Disposal</h1>
            <p>Place the waste into the correct category to proceed.</p><br /></div>
        </Container>
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>

          <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column]) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                  key={columnId}
                >
                  <h6>{column.name}</h6>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: (columnId === "waste" ? "#86b7d9" : "white"),
                              border: "2px solid #86b7d9",
                              padding: 4,
                              minWidth: 50,
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          textAlign: "center",
                                          backgroundColor: "white",
                                          color: "black",
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                        <Image src="./Types-Images/Flasks.jpg" rounded style={{ width: "5em" }}></Image>
                                        <br />
                                        {item.content}
                                        <div style={{ display: (columnId === "waste" ? "none" : "") }}>
                                          <Card bg={(column.feedback === "Correct!") ? "success" : "danger"} text="white" style={{ minHeight: '50px', display: "flex", "justify-content": "center", "align-items": "center" }}>{column.feedback}</Card>
                                        </div>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
        <Link to="/DnD7">
          <Button variant='warning' style={{ color: 'white' }}>PREVIOUS</Button>
        </Link>
      </div>
    );
}

export default FlasksDnD;
