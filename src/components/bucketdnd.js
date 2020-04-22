import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Header from './header';
import Nav from './nav';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const itemsFromBackend = [
  //wID=  waste ID. What type of waste it should be
  { id: 'pip', content: "Pippettes", wID: 'Sharps' },
  { id: 'carc', content: "Animal Carcasses", wID: 'Biowaste' },
  { id: 'bed', content: "Contaminated Bedding", wID: 'Biowaste' },
  { id: 'broken', content: "Broken Lab Material", wID: 'Sharps' },
  { id: 'food', content: "Food Waste", wID: 'Trashbag' }
];

const columnsFromBackend = {
  waste: {
    name: "Waste",
    items: itemsFromBackend
  },
  sharps: {
    name: "Sharps",
    items: []
  },
  biowaste: {
    name: "Biowaste",
    items: []
  },
  trashbag: {
    name: "Trashbag",
    items: []
  }
};

const checkPlacement = () => {
  if(columnsFromBackend.waste.items[0] != null){
  }
  else{
    if(columnsFromBackend.sharps.items[0] != null){
      for(let i = 0; i<columnsFromBackend.sharps.items.length; i++){
        if(columnsFromBackend.sharps.items[i].wID != 'Sharps'){
          return false;
        }
      }
    }
    if(columnsFromBackend.biowaste.items[0] != null){
      for(let i = 0; i<columnsFromBackend.biowaste.items.length; i++){
        if(columnsFromBackend.biowaste.items[i].wID != 'Biowaste'){
          return false;
        }
      }
    }
    if(columnsFromBackend.trashbag.items[0] != null){  
      for(let i = 0; i<columnsFromBackend.trashbag.items.length; i++){
        if(columnsFromBackend.trashbag.items[i].wID != 'Trashbag'){
          return false;
        }
      }
    }
    return true;
  }
}

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
    console.log(columnsFromBackend)
    //Mutating the Waste bucket array
    if(destination.droppableId.toString() == columnsFromBackend.waste.name.toString().toLowerCase()){
      if(source.droppableId.toString() == columnsFromBackend.biowaste.name.toString().toLowerCase()){
        let item = columnsFromBackend.waste.items[source.index];
        columnsFromBackend.biowaste.items.splice(source.index,1);
        columnsFromBackend.waste.items.push(item)
      }
      if(source.droppableId.toString() == columnsFromBackend.sharps.name.toString().toLowerCase()){
        let item = columnsFromBackend.sharps.items[source.index];
        columnsFromBackend.sharps.items.splice(source.index,1);
        columnsFromBackend.waste.items.push(item)
      }
      if(source.droppableId.toString() == columnsFromBackend.trashbag.name.toString().toLowerCase()){
        let item = columnsFromBackend.trashbag.items[source.index];
        columnsFromBackend.trashbag.items.splice(source.index,1);
        columnsFromBackend.waste.items.push(item)
      }
    }
    //Mutating the Sharps bucket array
    if(destination.droppableId.toString() == columnsFromBackend.sharps.name.toString().toLowerCase()){
      if(source.droppableId.toString() == columnsFromBackend.waste.name.toString().toLowerCase()){
        let item = columnsFromBackend.waste.items[source.index];
        columnsFromBackend.waste.items.splice(source.index,1);
        columnsFromBackend.sharps.items.push(item)
      }
      if(source.droppableId.toString() == columnsFromBackend.biowaste.name.toString().toLowerCase()){
        let item = columnsFromBackend.biowaste.items[source.index];
        columnsFromBackend.biowaste.items.splice(source.index,1);
        columnsFromBackend.sharps.items.push(item)
      }
      if(source.droppableId.toString() == columnsFromBackend.trashbag.name.toString().toLowerCase()){
        let item = columnsFromBackend.trashbag.items[source.index];
        columnsFromBackend.trashbag.items.splice(source.index,1);
        columnsFromBackend.sharps.items.push(item)
      }
      
    }
//Mutating the Biowaste bucket array
    if(destination.droppableId.toString() == columnsFromBackend.biowaste.name.toString().toLowerCase()){
      if(source.droppableId.toString() == columnsFromBackend.waste.name.toString().toLowerCase()){
        let item = columnsFromBackend.waste.items[source.index];
        columnsFromBackend.waste.items.splice(source.index,1);
        columnsFromBackend.biowaste.items.push(item)
      }
      if(source.droppableId.toString() == columnsFromBackend.sharps.name.toString().toLowerCase()){
        let item = columnsFromBackend.sharps.items[source.index];
        columnsFromBackend.sharps.items.splice(source.index,1);
        columnsFromBackend.biowaste.items.push(item)
      }
      if(source.droppableId.toString() == columnsFromBackend.trashbag.name.toString().toLowerCase()){
        let item = columnsFromBackend.trashbag.items[source.index];
        columnsFromBackend.trashbag.items.splice(source.index,1);
        columnsFromBackend.biowaste.items.push(item)
      }
    }
    //Mutating the trashbag bucket array
    if(destination.droppableId.toString() == columnsFromBackend.trashbag.name.toString().toLowerCase()){
      if(source.droppableId.toString() == columnsFromBackend.waste.name.toString().toLowerCase()){
        let item = columnsFromBackend.waste.items[source.index];
        columnsFromBackend.waste.items.splice(source.index,1);
        columnsFromBackend.trashbag.items.push(item)
      }
      if(source.droppableId.toString() == columnsFromBackend.sharps.name.toString().toLowerCase()){
        let item = columnsFromBackend.sharps.items[source.index];
        columnsFromBackend.sharps.items.splice(source.index,1);
        columnsFromBackend.trashbag.items.push(item)
      }
      if(source.droppableId.toString() == columnsFromBackend.biowaste.name.toString().toLowerCase()){
        let item = columnsFromBackend.trashbag.items[source.index];
        columnsFromBackend.biowaste.items.splice(source.index,1);
        columnsFromBackend.trashbag.items.push(item)
      }
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

function BucketSampDnD() {
  // checkPlacement();
  const [columns, setColumns] = useState(columnsFromBackend);
  const [order, correctOrder] = useState(false);
  return order ? (
    <div>
      <Header/>
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
    </div>
    <Link to="/SampMC">
                <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
    </Link>
    <Button variant= 'warning' style={{color: 'white',float: 'right'}}> NEXT</Button>
    </div>
  ) :(   
   <div>
  <Header/>
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
</div>
<Link to="/SampMC">
            <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
</Link>
<Button variant= 'warning' style={{color: 'white',float: 'right'}} onClick={() => correctOrder(checkPlacement())}> Submit </Button>
</div>
); 
}

export default BucketSampDnD;
