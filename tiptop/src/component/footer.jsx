import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ durarion: "1000", delay: "5s", easeing: " ease-out" });
  });
  return (
    <div className="border border-red-500 w-full relative">
      <div>
        {/* 1 */}
        <div className=" bg-black text-white  py-5 h-[50vh] ">
          <div className="flex justify-center  gap-5 mt-10 ">
            <p className=" text-5xl font-serif">Are you on </p>
            <span className="text-4xl mt-2">
              <i>the list?</i>
            </span>
          </div>
          <div className=" mt-6   flex justify-center text-center">
            <div className=" " data-aos="fade-up">
              Join to get exclusive offers & discounts{" "}
              <div className="  mt-10">
                <div className="" data-aso="fade-up">
                  <label>Enter your email here</label>
                  <br />
                  <input
                    type="email"
                    className="px-40 py-2 border border-white bg-black"
                  />
                  <button className=" border bg-white  text-black px-6 py-2 ">
                    join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="h-[80vh] w-full border-t-2 bg-black text-white ">
          <div className="flex justify-around mt-24">
            {/* shop */}
            <div className="">
              <b className="font-bold text-2xl" data-aso=" fade-left">
                Shop
              </b>
              <div
                className="list-none leading-8 text-xs"
                data-aso=" fade-left"
              >
                <li>All Products</li>
                <li>New</li>
                <li>BestSellers </li>
                <li>Lips</li>
                <li>Eyes</li>
                <li>Face</li>
              </div>
            </div>
            {/* our store */}
            <div className="" data-aso=" fade-left">
              <p className="font-bold text-2xl">Our Store</p>
              <br />
              <div>
                <p className="text-xs">
                  500 Terry Francine Street <br /> San francisco, CA 94158
                </p>{" "}
                <br />
                <p className="text-xs">
                  Monday-Friday : 11am-10pm <br /> Saturday-Sunday: 11am-12pm
                </p>
                <br />
                <p className="text-xs">
                  Tel: 123-456-7890 <br />
                  Email: info@mysite.com
                </p>
              </div>
            </div>
            {/* policy */}
            <div>
              <p className="font-bold text-2xl">Policy</p>
              <br />
              <div className="text-xs leading-5">
                Shipping & Returns <br />
                Store Policy <br />
                Payment Methods <br />
                FAQ
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <p className=" font-bold text-2xl">Customer Service</p> <br />
              <div>
                <p className="text-xs">
                  Tel: 123-456-7890 <br />
                  Email: info@mysite.com
                </p>
                <div className="flex gap-5 mt-5 ">
                  {/* insta */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                  {/* faceboo0k */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bg-balck"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                  {/* youtube */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                  {/* twitter */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>
                </div>
                <br />
                <p className="text-xs">
                  © 2035 by Noelle. Powered and <br /> secured by Wix
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
