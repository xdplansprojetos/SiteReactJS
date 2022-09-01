import React from "react";
//import stripHtml from 'string-strip-html';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductItem = ({ product }) => {

  //const { result } = stripHtml(product.description);

  return (

    <>

<Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image?.url}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {product.price.formatted_with_symbol}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    {/* <div className="product__card">
      <img className="product__image" src={product.image?.url} alt={product.name} />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p className="product__description">
           product description stripped of html tags 
           {result} 
        </p>
        <div className="product__details">
          <p className="product__price">
            {product.price.formatted_with_symbol}
          </p>
        </div>
      </div>
        </div>  
        */}
    </>
    
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;