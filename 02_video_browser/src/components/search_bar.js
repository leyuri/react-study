import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: this.props.term
    }
  }
  change(term) {
    this.setState({ term });
    // setState 때문에 value가 바뀌고 다시 화면 update가 일어남 
  }
  render() {
    console.log("props", this.state.term)
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">YouTube</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={this.state.term}
                onChange={(e) => {
                  this.change(e.target.value);
                }}
              />
              <Button variant="dark" onClick={() => {
                this.props.onChange(this.state.term);
              }}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    )
  }
}
