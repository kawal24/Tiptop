import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Products from "./Products";

const Cart = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const productdetail = async () => {
      try {
        const response = await axios.get(`data.json${product.id}`);
        console.log(response);
        const productDetail = response.data.filter(
          (Products) => Products.id == id
        );
        setProduct(productDetail[0]);
        // setProduct("data.json");
      } catch (error) {
        console.error("Error", error);
      }
    };

    productdetail();
  }, [id]);

  return (
    <div>
      <div className="h-[80vh] w-full">
        {product ? (
          <div className="h-[50vh] w-[30%]">
            <img src={product.img} alt="" />
            {/* <div>{product.name}</div> */}
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </div>
  );
};
export default Cart;
