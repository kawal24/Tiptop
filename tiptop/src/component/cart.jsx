import React from "react";
import Cart from "./cartPage";
const Cartid = ({ ...pops }) => {
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
    <div>
      <div className="w-[50%] h-full border border-black translate-x-6"></div>
    </div>
  );
};
export default Cartid;
