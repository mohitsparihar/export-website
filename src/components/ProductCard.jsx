import PropTypes from 'prop-types';

const ProductCard = ( { data }) => {
    const {title, price, rating, thumbnail} = data;
  return (
    <card>
    <img alt={title} src={thumbnail} />
        <h3>{title}</h3>
        <div className="flex justify-content-between">
            <div>${price}</div>
            <div>{rating}</div>
        </div>
    </card>
  )
}

export default ProductCard

ProductCard.propTypes = {
   data: PropTypes.object
}