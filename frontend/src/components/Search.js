import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = () => {
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Control placeholder="Search for new image..." />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Search;
