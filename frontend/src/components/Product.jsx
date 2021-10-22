import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from './Rating'

function Product(props) {
  return (
    <Card className="my-3 rounded">
      {/* link tag replaces <a> tag because <a> tag refreshes the page   */}
      <Link to={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} variant="top" />
      </Link>
      <Card.Body>
      <Link to={`/product/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={props.product.rating}
            text={`${props.product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>₹{props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
