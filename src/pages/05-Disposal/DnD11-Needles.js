import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Header from '../../components/header';
import { Button, Image } from 'react-bootstrap';
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
    items: itemsFromBackend
  },
  glass: {
    name: "Glass",
    items: []
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
  },
  serological: {
    name: "Serological Pipettes",
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
    if (destination.droppableId.toString() === "biowaste") {
      alert('Incorrect: This is for contaminated solid waste only');
    } else if (destination.droppableId.toString() === "glass") {
      alert('Incorrect: This is for contaminated broken glass only')
    } else if (destination.droppableId.toString() === "sharps") {
      alert('Correct! This is for contaminated sharps only ')
      order = true;
    } else if (destination.droppableId.toString() === "trashbag") {
      alert('Incorrect: This is for non-contaminated waste only.')
    } else if (destination.droppableId.toString() === "serological") {
      alert('Incorrect: This is for contaminated serological pipettes only')
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
      <Header />
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
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 200,
                            minHeight: 300
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
                                      <Image src="./Types-Images/Needle.jpg" rounded style={{ width: "10em" }}></Image>
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
      <Nav prev="DnD10" next="End" />
    </div>
  ) : (
      <div>
        <Header />
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
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                              padding: 4,
                              width: 200,
                              minHeight: 300
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
                                        <Image src="./Types-Images/Needle.jpg" rounded style={{ width: "10em" }}></Image>
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
        <Link to="/DnD10">
          <Button variant='warning' style={{ color: 'white' }}>PREVIOUS</Button>
        </Link>
      </div>
    );
}

export default NeedleDnD;
