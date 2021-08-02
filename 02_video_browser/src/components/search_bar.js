import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Navbar, NavDropdown, Nav, Image, Col} from 'react-bootstrap';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faTh, faVideo, faMicrophone} from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

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
          <Navbar.Brand href="#home"><FontAwesomeIcon icon={faYoutube} />&nbsp;YouTube</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
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
            </Nav>
            <Nav className="me-auto">
            <Nav.Link href="#faYoutube"><FontAwesomeIcon style={{fontSize : '20px'}} icon={faMicrophone} /></Nav.Link>
            </Nav>
            <Nav >
              <Nav.Link href="#faYoutube"><FontAwesomeIcon style={{ marginLeft : '10px', fontSize : '20px'}} icon={faVideo} /></Nav.Link>
              <Nav.Link href="#faBell"><FontAwesomeIcon style={{ marginLeft : '10px', fontSize : '20px'}} icon={faBell} /></Nav.Link>
              <Nav.Link href="#faTh"><FontAwesomeIcon style={{ marginLeft : '10px', fontSize : '20px'}} icon={faTh} /></Nav.Link>
              <Image style={{ marginLeft : '15px'}} className="mt-1" src="/images/user.png" roundedCircle height="32" width="30" />
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    )
  }
}
