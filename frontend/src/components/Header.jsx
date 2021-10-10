import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="py-2">
        <Container>
          <Navbar.Brand href="/"><img src="favicon-32x32.png" alt="logo"></img>Ecomm</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart"><i className="fas fa-cart-plus"></i>Cart</Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user"></i>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
