import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import Header from '../../components/header';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const itemsFromBackend = [
  { id: uuid(), content: "Contaminated Serological Pipettes" },
  { id: uuid(), content: "Culture Plates" },
  { id: uuid(), content: "Non-Contaminated Gloves" }
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Waste",
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "Biohazard Waste",
    items: []
  },
  [uuid()]: {
    name: "Glass",
    items: []
  },
  [uuid()]: {
    name: "Exposed Sharps",
    items: []
  },
  [uuid()]: {
    name: "Trash Bin",
    items: []
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

function BucketSampDnD5() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div>
      <Header />
      <p align="center">Bloodborne Pathogen Comprehension Drag and Drop Question #5:  Put the items in the correct containers.</p>
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
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
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
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      {item.content}
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
        <br></br><br></br>
        <Link to="/BucketSampDnD4">
          <Button variant='warning' style={{ color: 'white' }}>PREVIOUS</Button>
        </Link><br></br><br></br>
        <Link to="/BucketSampDnD6">
          <Button variant='warning' style={{ color: 'white' }}>NEXT</Button>
        </Link>
      </div>
    </div>
  );
}

export default BucketSampDnD5;
