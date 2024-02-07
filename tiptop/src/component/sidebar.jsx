import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationTitle } from "./navbardata";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    // <Layout>
    //   <div>
    //     <div className="flex  text-xs gap-2">
    //       <p>Home</p>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="10"
    //         height="10"
    //         fill="currentColor"
    //         class="mt-1"
    //         viewBox="0 0 16 16"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
    //         />
    //       </svg>
    //       <p>All Products </p>
    //     </div>
    //     <div className="border-2  border-none cursor-pointer   flex flex-col  justify-start items-center  gap-4">
    //       <div className="">
    //         <div className=" ml-[-60%] mt-5 ">Browse by</div>
    //         <div className="w-[200px] border-b-2 mt-3"></div>
    //         <div className="flex justify-start">
    //           <p className=" mt-3  text-zinc-400 text-xs">All Products</p>
    //         </div>
    //       </div>
    //       <div className="  flex flex-col justify-center items-center  mt-8  -ml-36  h-[10vh] text-black  text-xs  gap-2">
    //         {NavigationTitle.map((elm) => (
    //           <>
    //             <div
    //               className=" hover:text-orange-800  "
    //               onClick={() => {
    //                 navigate(elm?.url);
    //               }}
    //             >
    //               {elm?.name}
    //             </div>
    //           </>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
    <div>kkk</div>
  );
};
export default Sidebar;
