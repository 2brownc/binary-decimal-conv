import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => { return (
  <Navbar fixed="bottom" bg="light" variant="light" className="justify-content-end">
    <Nav> 
    <Nav.Item>
      <Nav.Link
        href="https://github.com/2brownc/binary-decimal-conv"
        target="_blank"
        className="repoLink"
      >
        View Source Code
      </Nav.Link>
    </Nav.Item>
  </Nav>
  </Navbar>
)};

export default Footer;
