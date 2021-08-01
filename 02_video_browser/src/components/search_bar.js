import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Navbar, NavDropdown, Nav, Image} from 'react-bootstrap';
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
            </Nav>
            {/* <Form.Control type="text" placeholder="Normal text" /> */}
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
              <Image className="mt-1" src="/images/user.png" roundedCircle height="32" width="30" />
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    )
  }
}
