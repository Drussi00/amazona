import React from "react";
import NextLink from "next/link";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import { urlForThumbnail } from "../utils/image";
const productItem = ({ product, addToCartHandler }) => {
  return (
    <Card>
      <NextLink href={`/product/${product.slug.current}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={urlForThumbnail(product.image)}
            title={product.name}
          ></CardMedia>
          <CardContent>
            <Typography>{product.name}</Typography>
            <Rating value={product.rating} readonly></Rating>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>${product.price}</Typography>
      </CardActions>
      <Button
        size="small"
        color="primary"
        onClick={() => addToCartHandler(product)}
      >
        add to cart
      </Button>
    </Card>
  );
};

export default productItem;
