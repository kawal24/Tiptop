import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationTitle } from "./navbardata";
// import { NavigationTitle } from "./navbardata";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="mainnavbar">
      <div
        className="font-bold text-3xl text-white  mr-96 "
        onClick={() => {
          navigate("/");
        }}
      >
        Tiptop
      </div>
      <div className="flex  gap-10  mr-36">
        {NavigationTitle.map((elm) => (
          <div>
            <div
              className="text-white hover:red-500 "
              onClick={() => {
                navigate(elm?.url);
              }}
            >
              {elm.name}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="flex gap-5  ml-16 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          <div className="text-white">LogIn</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
