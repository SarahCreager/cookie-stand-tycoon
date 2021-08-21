import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function CreateForm({ onCreate }) {

  function submitHandler(event) {
    event.preventDefault();
    onCreate({
      id: event.target.location.value,
      location: event.target.location.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    });
    event.target.reset();
  }
  return (
    <Form onSubmit={submitHandler}>

      <legend>Create Cookie Stand</legend>

      <Form.Group className="mb-3" controlId="formLocation">
        {/* <Form.Label htmlFor="location">Location</Form.Label> */}
        <Form.Control type="text" name="location" placeholder="location"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMinCustomersPerHour">
        {/* <Form.Label htmlFor="min-customers">Min Customers Per Hour</Form.Label> */}
        <Form.Control type="number" name="min-customers" placeholder="Minimum Customers per Hour" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMaxCustomersPerHour">
        {/* <Form.Label htmlFor="min-customers">Max Customers Per Hour</Form.Label> */}
        <Form.Control type="number" name="max-customers" placeholder="Maximum Customers per Hour" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="averageCookies">
        {/* <Form.Label htmlFor="min-customers">Max Customers Per Hour</Form.Label> */}
      <Form.Control type="number" name="avg-cookies" step=".1" placeholder="Average Cookies per Sale"/>
      </Form.Group>
      <Button variant="primary" type="submit">Create</Button>
    </Form>
  );
}
