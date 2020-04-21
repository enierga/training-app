import React, { Component, useState, useCallback } from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import Header from '../../components/header';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import update from 'immutability-helper'

const itemsFromBackend = [
  { id: uuid(), content: "Contaminated Empty Broken Glass Beaker", num: 3},
  { id: uuid(), content: "Glass Tube of Blood", num: 3},
  { id: uuid(), content: "Contaminated Glove", num: 1}
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Waste",
    items: itemsFromBackend,
    id: 0
  },
  [uuid()]: {
    name: "Biohazard Waste",
    items: [],
    id: 1
  },
  [uuid()]: {
    name: "Glass",
    items: [],
    id: 2
  },
  [uuid()]: {
    name: "Exposed Sharps",
    items: [],
    id: 3
  },
  [uuid()]: {
    name: "Trash Bin",
    items: [],
    id: 4
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

function BucketSampDnD2() {
  var question = false;
  const [columns, setColumns] = useState(columnsFromBackend);
  // for(var item in Object.entries(columns)){
  //   //alert(item);
  //   for(var number in item){
  //     alert(number);
  //   }
  // }
  return question ? (
    <div>
      <Header/>
        <p align="center">Bloodborne Pathogen Comprehension Drag and Drop Question #2:  Put the items in the correct containers.</p>
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
      <Link to="/BucketSampDnD">
        <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
      </Link>
    </div>
    </div>
  ) : (
    <div>
      <Header/>
        <p align="center">Bloodborne Pathogen Comprehension Drag and Drop Question #2:  Put the items in the correct containers. (Correct! Hit next.)</p>
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
      <Link to="/BucketSampDnD">
        <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
      </Link>
      <Link to="/BucketSampDnD3">
        <Button variant='warning' style={{color: 'white'}}>NEXT</Button>
      </Link>
    </div>
    </div>
  );
}

export default BucketSampDnD2;
