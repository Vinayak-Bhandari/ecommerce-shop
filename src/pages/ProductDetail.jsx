import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();

  useEffect(() => {
    console.log(products);
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);
  //   console.log(product);

  return <div>{product.name}</div>;
};

export default ProductDetail;
