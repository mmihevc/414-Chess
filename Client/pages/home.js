import React, {Component, useState} from 'react';
import Navigation from "./Navigation";
import Background from "../static/images/homeBackground.jpg";
//import Container from "@material-ui/core/Container";
import {
    Button,
    Col,
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Row,
    UncontrolledDropdown,
    Container
} from "reactstrap";
import {useHistory} from "react-router";

let popupOpen = false;
let isOpen = false;

    const Home = props => {
      return (
          <div>
              {renderHome(props.width, props.height)}
          </div>
      )
    };

    function renderHome(width, height) {
        return (
            <div className="home-image">
                <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
                    <Row>
                        <Col sm={12} md={{size: 12, offset: 0}}>
                            {renderNavigation()}
                            {renderMenu(height)}
                            {renderPop()}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    function renderNavigation() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand >Portal Chess</NavbarBrand>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Button color="dark">Profile</Button>
                            </NavItem>
                            <NavItem>
                                <Button color="dark" onClick={togglePopup}>Invitations</Button>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle style={{color: 'white'}} nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <Button color="dark">Log Out</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }

    function renderMenu(height) {
        const history = useHistory();
        return (
            <div>
                <Container style={{backgroundColor: 'rgba(192,192,192, 0.3)', width: '42%', height: height, marginLeft: '0'}}>
                    <br />
                    <Button color='primary' block onClick={() => {history.push('board')}}>Create A Game</Button>
                    <br />
                    <Button color='secondary' block> Continue A Game</Button>
                    <br />
                    <Button color='secondary' block> Invitations</Button>
                    <br />
                </Container>
            </div>
        )
    }

   function renderPop() {
        return <Navigation popupOpen={popupOpen} togglePopup={togglePopup}/>
   }

   function togglePopup() {
        const [popupOpen] = useState(!popupOpen);
   }

   export default Home;