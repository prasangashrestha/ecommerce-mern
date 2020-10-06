import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product: {_id, image, name, rating, numReviews, price}}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${_id}`}>
                <Card.Img src={image} variant='top' />
            </a>
            <Card.Body>
                <a href={`/product/${_id}`}>
                    <Card.Title as='div'>
                        <strong style={{color: 'white'}}>{name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as='div'>
                    <Rating value={rating} text={`${numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3'>${price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
