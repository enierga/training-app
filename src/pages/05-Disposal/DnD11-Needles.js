import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Header from '../../components/header';
import { Button, Image, Card, Container } from 'react-bootstrap';
import Nav from '../../components/nav'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

let order = false;

const itemsFromBackend = [
  //wID=  waste ID. What type of waste it should be,
  { id: 'broken', content: "Needles and Sharps" },
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
    feedback: 'Incorrect: This is for contaminated broken glass only.'
  },
  sharps: {
    name: "Sharps",
    items: [],
    feedback: "Correct!"
  },
  biowaste: {
    name: "Biowaste",
    items: [],
    feedback: 'Incorrect: This is for contaminated solid waste only.'
  },
  trashbag: {
    name: "Trashbag",
    items: [],
    feedback: 'Incorrect: This is for non-contaminated waste only.'
  },
  serological: {
    name: "Serological Pipettes",
    items: [],
    feedback: "Incorrect: This is for contaminated serological pipettes only."
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
    } else if (destination.droppableId.toString() === "glass") {
    } else if (destination.droppableId.toString() === "sharps") {
      order = true;
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

function NeedleDnD() {
  // checkPlacement();
  const [columns, setColumns] = useState(columnsFromBackend);
  // const [order, correctOrder] = useState(false);
  return order ? (
    <div>
      <Header 
      header = 'Biohazard Waste Disposal'
       />
      <Container>
        <div style={{textAlign: "center",}}>
        <h1>Waste Disposal</h1>
        <p>Place the waste into the correct category to proceed.</p><br/></div>
      </Container> 
      <div style={{ display: "flex", justifyContent: "center", height: "100%"}}>

        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                key={columnId}
              >
                <h4>{column.name}</h4>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: (columnId === "waste" ? "#86b7d9" : "white"),
                            border: "2px solid #86b7d9",
                            padding: 4,
                            width: 150,
                            minHeight: 300,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "280px",
                                        textAlign: "center",
                                        backgroundColor: "white",
                                        color: "black",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      <Image src="./Types-Images/Needle.jpg" rounded style={{ width: "7em" }}></Image>
                                      {item.content}
                                      <br/><br/>
                                  <div style={{display: (columnId === "waste" ? "none" : "")}}>
                                      <Card bg={(column.feedback === "Correct!") ? "success" : "danger"} text="white" style={{minHeight: '50px',   display: "flex", "justify-content": "center", "align-items": "center"}}>{column.feedback}</Card>
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
      <Nav prev="DnD10" next="End" />
    </div>
  ) : (
      <div>
        <Header 
      header = 'Biohazard Waste Disposal'
       />
        <Container>
        <div style={{textAlign: "center",}}>
        <h1>Waste Disposal</h1>
        <p>Place the waste into the correct category to proceed.</p><br/></div>
      </Container>
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>

          <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                  key={columnId}
                >
                  <h4>{column.name}</h4>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: (columnId === "waste" ? "#86b7d9" : "white"),
                              border: "2px solid #86b7d9",
                              padding: 4,
                              width: 150,
                              minHeight: 300,
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "280px",
                                          textAlign: "center",
                                          backgroundColor: "white",
                                          color: "black",
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                        <Image src="./Types-Images/Needle.jpg" rounded style={{ width: "7em" }}></Image>
                                        {item.content}
                                        <div style={{display: (columnId === "waste" ? "none" : "")}}>
                                      <Card bg={(column.feedback === "Correct!") ? "success" : "danger"} text="white" style={{minHeight: '50px',   display: "flex", "justify-content": "center", "align-items": "center"}}>{column.feedback}</Card>
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
        <Link to="/DnD10">
          <Button variant='warning' style={{ color: 'white' }}>PREVIOUS</Button>
        </Link>
      </div>
    );
}

export default NeedleDnD;
