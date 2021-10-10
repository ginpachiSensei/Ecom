import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product(props) {
    return (
        <Card className="my-3 p-3 rounded">
            {/* link tag replaces <a> tag because <a> tag refreshes the page   */}
            <Link to={`/product/${props.product._id}`}>
            <Card.Img src={props.product.image} variant='top' />
            </Link>
        </Card>
    )
}

export default Product
