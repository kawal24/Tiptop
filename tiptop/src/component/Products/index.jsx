import React, { useState } from "react";
import { Link } from "react-router-dom";
const Products = (props) => {
  const { id, name, Price, index, img2, img } = props;
  const [hovernewproducts, setHoverNewProducts] = useState(null);

  return (
    <div key={id}>
      <div className="">
        <div
          className="  h-[30vh]"
          onMouseEnter={() => setHoverNewProducts(index)}
          onMouseLeave={() => setHoverNewProducts(null)}
        >
          <img
            src={hovernewproducts === index ? img2 : img}
            alt={name}
            className="bg-cover h-[25vh] w-[100%]"
          />

          <div className="flex justify-center flex-col text-center">
            <div className="">{name}</div>
            <div className="flex justify-center">{Price}</div>
          </div>

          <div className="flex justify-center text-center ">
            {hovernewproducts === index && (
              <Link to="/Cart/id111">
                <button
                  className="border  mt-10 flex  border-black  px-4 py-3 ml-6 hover:bg-black 
                 hover:text-white"
                >
                  Add to cart
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
