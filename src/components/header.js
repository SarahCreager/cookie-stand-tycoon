import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container id="navBarContainer">
        <Navbar.Brand href="#home"><h1 id="title">Cookie Stand Admin</h1></Navbar.Brand>
      </Container>
    </Navbar>
  );
}
