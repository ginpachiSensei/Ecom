import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container className="text-center py-3 footer">
                <Row>
                    <Col>
                    Copyright &copy; Ecom
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
