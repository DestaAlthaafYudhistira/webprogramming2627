import { Badge, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function AppNavigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Catatan Keuangan
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <NavDropdown
              title={
                <>
                  Menu <Badge bg="success">7</Badge>
                </>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={NavLink} to="/CardStatusDemo">
                CardStatusDemo
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/HeaderBanner">
                HeaderBanner
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/TransactionManager">
                TransactionManager
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/KartuRingkasan">
                KartuRingkasan
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/LayoutGrid">
                LayoutGrid
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/WalletSummary">
                WalletSummary
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/AppNavigation">
                AppNavigation
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavigation;