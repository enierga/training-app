# Biohazard Disposal Training
## Overview
The goal of this project is to ensure that those people that are working with lab equipment and who are producing biological waste are disposing of them properly so as to not put waste disposal workers in unnecessary danger. The proposed finished product is an interactive React web app that will serve as a training module for trainees to fully understand the importance and gravity of proper waste disposal. It is also to ensure that proper safety practices are being followed to prevent injury.

# Dependencies
The following dependencies will need to installed in order to continue development. These can be installed by typing npm install followed  by the name of the dependency into the terminal.
Example: npm install react
"dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.28",
    "@fortawesome/free-solid-svg-icons": "^5.13.0",
    "@fortawesome/react-fontawesome": "^0.1.9",
    "bootstrap": "^4.4.1",
    "immutability-helper": "^3.0.2",
    "react": "^16.13.1",
    "react-beautiful-dnd": "^13.0.0",
    "react-bootstrap": "^1.0.0",
    "react-dnd": "^10.0.2",
    "react-dnd-html5-backend": "^10.0.2",
    "react-dom": "^16.12.0",
    "react-fontawesome": "^1.7.1",
    "react-router": "^5.1.2",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.0",
  }

# Layout
We have decided to make this a multi-page React app, with our pages being separated into sectioned folders and numbered in the order that they are rendered within each section. 




## Main App.js
Here, our App.js serves as a table of contents for all the pages to be rendered in this training module.
At the top, we have our react imports, followed by importing the module pages with their corresponding routes.
Example:
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Home from './pages/01-Home/home'
 
Using React Router we allow for our app to switch between pages as users progress through the module.  To do this, we must use Route to set an exact path for a new page to be rendered.
Example:
<Route exact path="/" component={Home} />
<Route exact path="/Policy" component={Policy} />

The path can be set to anything, as long as no other page is currently using the path. In the component field is where the page that has been imported is specified. New pages can be added within the <Switch> tag we already have. This can be done for all new pages, excluding drag and drop pages, which will have to be placed withing a <DndProvider> tag.  For example: 
<Router>
    <Switch>
<Route exact path="/Policy" component={Policy} />//Normal page routed
<DndProvider backend={Backend}>
<Route exact path="/DnD1" component={BrokenGlassDnD} /> //Drag&Drop page
</DndProvider>
    <Switch>
<Router>

# Creating a new page
When creating a new page, there a few things that need to be imported to every page. For standard content pages, the following should be imported.
import React, { Component } from 'react';
import { Container, ListGroup, Row, Col, Image } from 'react-bootstrap';
import Nav from './../../components/nav';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';
Here we see two imports from our components folder: Nav and Header. These are abstract components that we use on almost every page, so here is how they are used.
1: Header
We have created a header/banner that is set to the top of the page with the name of the module and a UNC logo. In creating new pages, we make sure to include this for uniformity across all pages. Placing the header is very simple once imported! All you need is a <Header/> tag at the beginning of the page. 
2. Nav
This component serves for creating and linking previous and next buttons to different pages. These take in two fields: prev and next. You must set these equal to the route of the page you want it to connect to.
Example: <Nav prev="Policy" next="Solids" />
This would make a previous button linked to the Policy page, and the next button linked to the Solids Page. 
## Multiple choice question Pages:
To create a Multiple choice question page, we need to import:
import MultChoice from "../../components/MultChoice";
This is also an abstract component that takes in numerous fields. 
Below is an example
<MultChoice
          prev="Page1"
          next="Page2"
          index="1"
          total="1"
          question="Dry solid biohazardous waste includes the following:"
          boolA="false"
          ansA="Choice A"
          boolB="false"
          ansB="Choice B"
          boolC="false"
          ansC="Choice C"
          boolD="true"
          ansD="Choice D"
          boolE="false"
          ansE="None of the above"
        />
Here we do not need to call our nav component, as this one create a previous and next button for us. Our index is our question number, and total is how many total questions are in this section. These are displayed as they are inputted. The question parameter takes in the question to be displayed, and the rest of them are for the choices. Our bool parameters is what indicates which answer  choice is correct. 
## True False pages
To create a true or false question page, we will need to import:
import TrueFalse from "../../components/TrueFalse";
This component follows the same logic as the Multiple  Choice component, but this one only  has two possible answer choices. Example:
<TrueFalse
          prev="CollectionQ2"
          next="CollectionQ4"
          index="3"
          total="5"
          question="The biohazard solid waste container must be red, durable, leak proof, have a lid, and labeled with the biohazard symbol"
          boolA="true"
          ansA="True"
          boolB="false"
          ansB="False"
        />

## Drag and Drop pages
There are  two type of  drag and drop pages we have supported: A sorting drag and drop and bucket drag and drop. 
# Sorting
To create more sorting drag and drop questions, copy our sampdnd.js file and mutate the following chunks of code to create your own.
const [cards, setCards] = useState([
        {id: 3, text: “Step 3”},
{id: 4, text: “Step 4”},
{id: 2, text: “Step 2”},
{id: 1, text: “Step 1”}
  ])

Here, id serves as the order of the tasks created. This array can include as many  or as little tasks as one would like.
#Bucket Drag and Drop
For Bucket drag and drop questions, the system supports questions that involve dragging ONE item into a correct bin.  To create more Bucket Drag and Drop questions, copy any of the DnD.js files we have already included in the module and mutate the following:

const itemsFromBackend = [
  //This is the item that we will be dragging. The only thing to change would be the “content” field. 
  { id: 'broken', content: "Broken Lab Material" },
];
 
//These are the “buckets” to be created. We have the 5 disposal containers found in the lab setting. The “name” field is what is displayed above the bucket. The “feedback” field is the feedback to be rendered upon dropping the item into that bucket.
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

Along with this, to insure correct placement, this set of conditional statements must also be mutated within the function onDragEnd.
if(destination.droppableId.toString() === "sharps" || destination.droppableId.toString() === "glass"){
      order = true;
    } else if(destination.droppableId.toString() === "biowaste"){
    } else if(destination.droppableId.toString() === "trashbag"){
    }else if(destination.droppableId.toString() === "serological"){
    }

In this example, dropping the item into the “sharps” or “glass” bucket will allow the user to proceed to the next page. Mutate these to reflect the correct placement of the new item created.
And lastly, there are two <Image> tags found in our Bucket Drag and Drop code. 
<Image src="./Types-Images/BrokenLabMaterial.jpg" rounded style={{ width: "10em" }}></Image>

Here both Image tag sources would need to be changed to the path of the corresponding Image. 

We hope that this READme, along with our instructional videos, has provided enough support to further develop this module if need be. It has been a pleasure to work with the EHS team.
