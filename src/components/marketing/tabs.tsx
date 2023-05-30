import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import General from './general';
import Restriction from './restriction';
import Usage from './usage';
// import General from './general';
// import Products from './products';
// import PaymentMethods from './paymentMethods';
// import Taxes from './taxes';
// import Mail from './mail';


function tabs() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="general">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="general">General</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="restriction">Restriction of use</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="usage">usage limit</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="general">
                            <General />
                        </Tab.Pane>
                        <Tab.Pane eventKey="restriction">
                            <Restriction />
                        </Tab.Pane>
                        <Tab.Pane eventKey="usage">
                            <Usage />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default tabs;