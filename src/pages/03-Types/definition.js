import React, { Component} from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/header';


export default class Definition extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isButtonDisabled: true,
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isButtonDisabled: false}), 5000);
    }

    render(){
        return(
            <Container>
                <Header/>
                <h1>Defining Laboratory-Generated Biohazard Waste</h1>
                <p>
                All biohazard waste generated in UNC-CH research laboratories will be properly treated prior to its transfer and final burial in the landfill or incineration. This biohazard waste includes:                
                </p>
                <ListGroup style={{width:'80%', margin:'0 auto'}}>
                    <ListGroup.Item>Materials contaminated or potentially contaminated during the manipulation or clean-up of material generated during research and/or teaching activities requiring biosafety level 1, 2, or 3 or animal or plant biosafety level 1, 2, or 3. Refer to your laboratory's Biological Hazards Registration section of the Laboratory Safety Plan (Schedule F) to identify these materials in your lab.</ListGroup.Item>
                    <ListGroup.Item>Human liquid blood and body fluids</ListGroup.Item>
                    <ListGroup.Item>Human tissue and anatomical remains</ListGroup.Item>
                    <ListGroup.Item>Materials contaminated with human tissue or tissue cultures (primary and established) because these are handled at BSL-2</ListGroup.Item>
                    <ListGroup.Item>Animal carcasses, body parts, blood, fluids and bedding from animals infected with BSL2 and BSL3 agents</ListGroup.Item>
                </ListGroup>
                <Link to="/Start">
                    <Button variant='warning' style={{color: 'white'}}>PREVIOUS</Button>
                </Link>
                <Link to="/SampMC">
                    <Button variant='warning' disabled={this.state.isButtonDisabled} style={{color: 'white', float: "right"}}>NEXT</Button>
                </Link>
            </Container>
        );
    }
}

