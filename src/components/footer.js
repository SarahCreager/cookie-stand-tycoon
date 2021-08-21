import Navbar from 'react-bootstrap/Navbar'

export default function Footer({ reports }) {
  return (
    <Navbar bg="light" id="footer">
      <p>{reports.length} Locations World Wide</p>
    </Navbar>
  );
}
