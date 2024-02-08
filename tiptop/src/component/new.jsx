import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationTitle } from "./navbardata";
const Newpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* 1 */}
      <div className=" border h-[100vh]   relative">
        <div className="flex ">
          {/* 1 */}
          <div className="h-[100vh] w-[15%] mt-24 fixed ">
            <div className="flex  mt-6 ml-4 gap-2">
              <p>Home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="currentColor"
                class="mt-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
              <p>All Products </p>
            </div>

            <div className=" w-36 h-60 cursor-pointer mt-6 flex flex-col  justify-start items-center  gap-4">
              <div className="">
                <div className="  ">Browse by</div>
                <div className="w-[220%] border-b-2 mt-3"></div>
                <div className="flex justify-start">
                  <p className=" mt-3  text-zinc-400 text-xs">New</p>
                </div>
              </div>

              <div className=" flex  flex-col ml-2  text-xs gap-3">
                {NavigationTitle.map((elm) => (
                  <div>
                    <div
                      className="text-black hover:red-500 "
                      onClick={() => {
                        navigate(elm?.url);
                      }}
                    >
                      {elm.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex    h-[100vh]  w-[100%] flex-col  mt-36 ml-80">
            <img
              className="w-[95%] h-[50vh]  "
              src=" https://static.wixstatic.com/media/2e2a49_37afad752477458cbc7a9b205e02caae~mv2.jpg/v1/fill/w_568,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_37afad752477458cbc7a9b205e02caae~mv2.jpg"
              alt=""
            />

            <div className="flex flex-col justify-start  gap-20   mt-20">
              <b className=" flex justify-satrt font-Cambria text-5xl  ">
                All Products
              </b>

              <p className="text-xs flex   ">6 Products</p>
            </div>

            <div className=" mt-10">
              <div className="border border-green-500 h-[90vh] w-[100%]   ">
                hjk
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newpage;
