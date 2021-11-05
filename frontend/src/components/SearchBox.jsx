import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline="true" className="search-box">
      <Row>
        <Col className="padding-0">
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Products..."
            className="mr-sm-2 ml-sm-5 search-bar"
          ></Form.Control>
        </Col>
        <Col className="padding-0">
          <Button
            type="submit"
            variant="outline-success"
            className="p-2 search-sumbit"
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
