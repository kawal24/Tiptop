import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Cartid from "./cart";

const Cart = () => {
  const [product, setProduct] = useState(null); // Initialize product as null
  // const { id } = useParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  // console.log(id, 5555555);

  const [counter, setCounter] = useState(1);
  console.log("counter", 123);
  const [maxCount, setMaxCount] = useState();
  console.log("max", 222);
  const [minCount, setMinCount] = useState(1);
  console.log("mix", 333);

  // function increase() {
  //   // if (counter < maxCount) {
  //   setMaxCount(maxCount + 1);
  //   // }
  // }

  function decrease() {
    if (counter > minCount) {
      setMinCount(counter - 1);
    }
  }
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

  // useEffect(() => {
  //   setMaxCount(counter + 1);
  //   setMixCount(counter - 1);
  // }, [counter]);

  // console.log(product, "234567890");
  return (
    <div className="h-[100vh] w-[100vw] relative ">
      <div className=" ">
        <div className="  h-[80vh] justify-center items-center border-black px-[9px]">
          <div className=" flex  mt-[2px] absolute left-72">
            {product !== null ? ( // Check if product has been fetched
              <div className="h-[20px] w-[30%] ">
                <img
                  src={product.img}
                  alt={product.name}
                  className="border object-cover w-[100%] h-[60vh] mt-4"
                />
                {/* <div>{product.name}</div> */}
                <div className="mt-10 text-[18px]">{product.des}</div>
              </div>
            ) : (
              <p></p>
            )}
          </div>
          <div className=" h-[70vh] w-[30%]  flex flex-col float-right absolute right-56 top-4 ">
            <div className="text-[25px] ">
              Full Coverage Slick Fluid Foundation
            </div>
            <div className=" mt-0">
              <div className="mt-6">{product?.code}</div>
              <div className="mt-4">{product?.Price}</div>
            </div>

            <div className="mt-4">Quantity</div>
            <div className=" mt-2 border h-[8vh] w-[25%] px-3">
              {counter}
              <div className="flex flex-col float-right">
                {/* <div>{counter}</div> */}
                <button onClick={() => setCounter(counter + 1)} className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                  </svg>
                </button>

                {/* <div>{counter}</div> */}
                <button onClick={() => setCounter(counter - 1)} className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </button>
              </div>

              {/* butt=ons */}
              <div className="mt-10 flex flex-col gap-3">
                <Link to={`/Cart?id=${product?.id}`}>
                  <button className=" border flex items-center justify-center border-black px-4 py-3  bg-[#614142] text-white mt-5 w-[25vw] h-[6vh]  ">
                    Add to Cart
                  </button>
                </Link>

                <button className="border w-[25vw] h-[6vh] bg-black text-white">
                  Buy Now
                </button>
                <p className="borderborder-black h-[20vh] w-[50vh]">
                  {product?.des}
                </p>
              </div>

              {/* <div>
                <p>
                  I'm a product detail. I'm a great place to add more
                  information about your product such as sizing, material, care
                  and cleaning instructions. This is also a great space to write
                  what makes this product special and how your customers can
                  benefit from this item.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {<Cartid product={product} setProduct={setProduct} />}
    </div>
  );
};

export default Cart;
