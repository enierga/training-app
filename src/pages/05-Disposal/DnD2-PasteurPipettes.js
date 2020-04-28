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
  { id: 'broken', content: "Pasteur Pipettes" },
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
    feedback: "Correct!"
  },
  sharps: {
    name: "Sharps",
    items: [],
    feedback: "Correct!"
  },
  biowaste: {
    name: "Biowaste",
    items: [],
    feedback: "Incorrect: Glass should NEVER go into the solid biowaste container."
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
    if (destination.droppableId.toString() === "sharps" || destination.droppableId.toString() === "glass") {
      order = true;
    } else if (destination.droppableId.toString() === "biowaste") {
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

function PasteurPipettesDnD() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return order ? (
    <div>
      <Header 
      header = 'Biohazard Waste Disposal'
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
                <h4>{column.name}</h4>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: (columnId == "waste" ? "#86b7d0" : "white"),
                            border: "2px solid #86b7d9",
                            padding: 4,
                            width: 200,
                            minHeight: 500
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
                                        minHeight: "470px",
                                        backgroundColor: "white",
                                        color: "black",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      <Image src="./Types-Images/GlassPipettes.jpg" rounded style={{ width: "10em" }}></Image>
                                      {item.content}
                                      <br /><br />
                                      <div style={{ display: (columnId == "waste" ? "none" : "") }}>
                                        <Card bg={(column.feedback === "Correct!") ? "success" : "danger"} text="white" style={{ minHeight: '170px', display: "flex", "justify-content": "center", "align-items": "center" }}>{column.feedback}</Card>
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
      <Nav prev="DnD1" next="DnD3" />
    </div>
  ) : (
      <div>
        <Header 
        header = 'Biohazard Waste Disposal'
        />
        <Container>
          <div style={{ textAlign: "center", }}>
            <h1>Waste Disposal</h1>
            <p>Place the waste into the correct category to proceed.</p>
          </div>
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
                  <h4>{column.name}</h4>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: (columnId == "waste" ? "#86b7d9" : "white"),
                              border: "2px solid #86b7d9",
                              padding: 4,
                              width: 200,
                              minHeight: 500
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
                                          minHeight: "470px",
                                          textAlign: "center",
                                          backgroundColor: "white",
                                          color: "black",
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                        <Image src="./Types-Images/GlassPipettes.jpg" rounded style={{ width: "10em" }}></Image>
                                        {item.content}
                                        <div style={{ display: (columnId == "waste" ? "none" : "") }}>
                                          <Card bg={(column.feedback === "Correct!") ? "success" : "danger"} text="white" style={{ minHeight: '170px', display: "flex", "justify-content": "center", "align-items": "center" }}>{column.feedback}</Card>
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
        <Link to="/DnD1">
          <Button variant='warning' style={{ color: 'white' }}>PREVIOUS</Button>
        </Link>
      </div>
    );
}

export default PasteurPipettesDnD;
