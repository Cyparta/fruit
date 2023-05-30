import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import General from "./general";
import Products from "./products";
import PaymentMethods from "./paymentMethods";
import Taxes from "./taxes";
import Mail from "./mail";

function tabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="general">
      <Row>
        <Col sm={12} md={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="general">General</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="products">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="payments">Payments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="taxes">Taxes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="mail">Mail</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={9} sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="general">
              <General />
            </Tab.Pane>
            <Tab.Pane eventKey="products">
              <Products />
            </Tab.Pane>
            <Tab.Pane eventKey="payments">
              <PaymentMethods />
            </Tab.Pane>
            <Tab.Pane eventKey="taxes">
              <Taxes />
            </Tab.Pane>
            <Tab.Pane eventKey="mail">
              <Mail />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default tabs;
