import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cart = () => {
  const [product, setProduct] = useState(null); // Initialize product as null
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`/data.json?id=${id}`); // Correct endpoint
        console.log(response);
        const productDetail = response.data.filter(
          (product) => product.id == id
        );
        setProduct(productDetail[0]);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchProductDetail();
  }, [id]);

  return (
    <div className="h-[50vh] w-[100%] border border-red-500">
      <div className="h-[80vh] w-full ">
        {product !== null ? ( // Check if product has been fetched
          <div className="h-[50vh] w-[30%]">
            <img src={product.img} alt={product.name} />
            <div>{product.name}</div>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
