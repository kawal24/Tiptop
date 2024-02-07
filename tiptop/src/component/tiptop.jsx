import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useAtom } from "jotai";
// import { globaldata } from "./store";
// import Nature from "../Images/Nature.jpg";
const Tiptop = () => {
  const [bestseller, setBestseller] = useState([]);

  const [hoverImg, setHoverImg] = useState(null);

  const [nowtrending, setNowtrending] = useState([]);

  // const [hovertrending, setHoverTrending] = useState(null);

  const [images, setImages] = useState(0);

  // const sliderImages = [Nature.jpg];
  // console.log(sliderImages);
  // const nextSlide = () => {
  //   setImages((images + 1) % sliderImages.length);
  // };

  const getImgage = bestseller?.filter((elm) => {
    const getImages1 = elm.popular === "true";
    return getImages1;
  });
  // console.log(getImgage);

  const trendingimg = nowtrending?.filter((elm) => {
    const trending1 = elm.popular === "false";
    return trending1;
  });
  // console.log(trendingimg);
  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => {
        console.log(res);
        setBestseller(res?.data);
        setNowtrending(res?.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
    AOS.init({ durarion: "1000", delay: "5s", easeing: " ease-out" });
  }, [setBestseller]);
  return (
    <div>
      {/* 1 */}
      <div className="relative">
        <div className="imgtext">
          <div
            className=" flex flex-col justify-center z-10 text-white "
            data-aos="fade-up"
          >
            <p className="text-sl font-ui-monospace tracking-widest	">
              NEW RELESE
            </p>{" "}
            <br />
            <div className="font-Georgia  text-6xl">Metallics</div>
            <br />
            <div className="flex gap-5">
              <i className="text-6xl  font-serif ">Shine</i>
              <span className="font-extrabold text-6xl"> on</span>
            </div>{" "}
            <br />
            <div className="">
              <p className=" leading-6 ">
                Get to know our new eyesshadow <br />
                palettes with a glossy finish.smooth <br />
                lightweight feel and 10hour stay-on
              </p>
            </div>
            <div>
              <button className=" border px-10 py-5 mt-20 hover:bg-black">
                Shop
              </button>
            </div>
          </div>
        </div>
        <div className=" img">
          <img
            className="w-screen	 h-[100vh] border border-b-2  mt-2  z-10"
            src="https://static.wixstatic.com/media/2e2a49_db29dbd54f594c648ec3807b118e6718~mv2.jpg/v1/fill/w_794,h_602,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2e2a49_db29dbd54f594c648ec3807b118e6718~mv2.jpg"
            alt=""
          />
        </div>
      </div>

      {/* 2 */}

      <div className="w-[100%] h-[100vh] ">
        <div
          className="flex flex-col justify-center text-center py-10"
          data-aos="fade-up"
        >
          <p className="tracking-widest"> MUST HAVES</p>
          <div className="flex gap-5 justify-center">
            <p className="text-4xl font-serif	 font-bold py-4 ">Best</p>
            <i className="text-4xl font-serif py-4"> Sellers</i>
          </div>
        </div>

        <div className=" w-[100%] h-[60vh] flex justify-around">
          <div className="grid  grid-flow-col gap-5">
            {getImgage
              .slice(0, 6)

              ?.map((elm, index) => (
                <div key={elm?.id}>
                  <div className=" w-[70%]  h-[20vh] flex justify-center cursor-pointer  ">
                    {/* <div>{elm?.id}</div> */}
                    <div
                      className=" border border-red-500 h-[50vh] max-w-lg  "
                      onMouseEnter={() => setHoverImg(index)}
                      onMouseLeave={() => setHoverImg(null)}
                    >
                      <img
                        src={hoverImg === index ? elm.img2 : elm.img}
                        alt="img"
                        className=" bestsellerimg"
                      />
                      {/* </div> */}

                      <div className="flex flex-col justify-center text-center mt-2 mr-6 ">
                        <div className="text-black">{elm?.name}</div>
                        <div>{elm?.Price}</div>
                        {/* </div> */}

                        <div className="flex justify-center text-center    ">
                          {hoverImg === index && (
                            <button className=" border  flex  border-black  px-4 py-3 ml-6 hover:bg-black mt-5 hover:text-white ">
                              Add to Card
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex justify-center mt-5  text-center">
          <button className=" border  border-black px-6 py-2 hover:bg-black hover:text-white text-xs font-bold">
            Shop Best Sellers
          </button>
        </div>
      </div>

      {/* 3 */}
      <div className="border w-[100%] h-[100vh]   ">
        <div className="w-[60%] h-[80vh] border border-green-500  relative  top-20 bg-black">
          <div className="hotspicy ">
            <div className="text-white " data-aos="fade-up">
              <p className="text-sl font-ui-monospace tracking-widest	">
                HOT & SPICY
              </p>
              <div className="flex gap-5 py-5">
                <p className=" text-4xl font-serif	 font-bold">Most </p>
                <p>
                  <i className="text-4xl font-serif">Vibrant</i>
                </p>
              </div>
              <p className="text-4xl font-serif	 font-bold ">Lips in Town</p>
              <p className="py-5">
                I'm a paragraph. Click here to add your <br /> own text and edit
                me. I’m a great place for <br /> you to tell a story and let
                your users know <br /> a little more about you.
              </p>
              <div>
                <button className="border bg-white  text-black  px-5  py-2    text-xs font-bold hover:bg-black hover:text-white">
                  Shop Lips
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className=" tiptopbestsellerimg "
              src="https://static.wixstatic.com/media/2e2a49_22e45f736c9945d98ff9a2e3cd56090c~mv2.jpg/v1/fill/w_568,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_22e45f736c9945d98ff9a2e3cd56090c~mv2.jpg"
              alt=" "
            />
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="border w-[100%] h-[80vh] border-red-500">
        <div
          className="flex flex-col justify-center text-center py-8"
          data-aos="fade-right"
        >
          <p>DON'T MISS OUT</p>
          <div className="flex gap-5 justify-center text-center py-5">
            <p className="text-4xl font-serif	 font-bold">Now</p>
            <i className="text-4xl font-serif"> Trending</i>
          </div>
        </div>

        <div>
          <div className="grid  grid-flow-col gap-4 ">
            {trendingimg
              .slice(0, 7)
              // .filter((elm) => elm.id >= "Eyes_3" && elm.id <= "Eyes_7")
              .map((elm, index) => (
                <div key={elm.id}>
                  <div
                    className="  border border-black flex justify-center text-center cursor-pointer 
                    "
                  >
                    <div>
                      <img src={elm.img} alt="img" className="nowtrending" />
                    </div>
                  </div>
                  <div>{/* <img src={elm?.img2} alt="" /> */}</div>
                  <div className="flex flex-col justify-center text-center mt-6 ">
                    <div className="text-black">{elm?.name}</div>
                    <div>{elm?.Price}</div>
                  </div>
                  <div>{elm?.popular}</div>
                  <div className="flex justify-center text-center  ">
                    {/* {nowtrending === index && ( */}
                    <button className=" border py-2 px-5 text-black hover:bg-black  hover:text-white">
                      Add to Card
                    </button>
                    {/* )} */}

                    {/* <div>kkk</div> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* 5 */}
      <div className="border w-[100%] h-[100vh] border-green-500  relative">
        <div className="flex justify-center gap-5 py-5 " data-aos="fade-up">
          <p className="text-4xl font-serif	 font-bold "> Discover</p>
          <i className="text-4xl font-serif ">More</i>
        </div>
        {/* 
        
          {/* 1 img */}
        <div className="relative left-20 top-24 ">
          <div className=" flex gap-20 ">
            <div className="absolate top-20 left-10 ">
              <img
                className=" w-96 h-[60vh]  "
                src="https://static.wixstatic.com/media/2e2a49_5bd77ef9eecc40d4857c35dd6aa1db9c~mv2.jpg/v1/fill/w_216,h_390,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_5bd77ef9eecc40d4857c35dd6aa1db9c~mv2.jpg"
                alt=""
              />
              <div className=" text-white   font-bold  text-2xl relative bottom-16 left-44">
                shop
              </div>
            </div>
            {/* 2 */}
            <div className="absolate top-20 left-10 ">
              <img
                className=" w-96 h-[60vh]  "
                src="https://static.wixstatic.com/media/2e2a49_5446b99efef6467b8bb512150a2f20c3~mv2.jpg/v1/fill/w_226,h_390,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_5446b99efef6467b8bb512150a2f20c3~mv2.jpg"
                alt=""
              />
              <div className=" text-white   font-bold text-2xl relative bottom-16 left-44">
                shop
              </div>
            </div>
            {/* 3 */}
            <div className="absolate top-20 left-10 ">
              <img
                className=" w-96 h-[60vh]  "
                src="https://static.wixstatic.com/media/2e2a49_07316c336b444872ac520388bdb042b4~mv2.jpg/v1/fill/w_226,h_390,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_07316c336b444872ac520388bdb042b4~mv2.jpg"
                alt=""
              />
              <div className=" text-white  font-bold text-2xl relative bottom-16 left-44">
                shop
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[50vh] border  bg-black">
          <div className="text-white flex justify-around " data-aos="fade-up">
            <div className="text-5xl font-serif	 font-bold mt-20 ml-10">
              EYES
            </div>
            <div className="text-5xl font-serif	 font-bold  mt-20 ">EYES</div>
            <div className="text-5xl font-serif	 font-bold  mt-20 ">EYES</div>
          </div>
        </div>

        {/* </div> */}
        {/* <div className="w-[100%] h-[50vh] border absolate bottom-10  bg-black"></div> */}
      </div>
      {/* 6 */}

      <div className="w-[100%] h-[80vh]  relative ">
        <div className=" ">
          <img
            className="w-[60%] h-[90vh] mb-20"
            src=" https://static.wixstatic.com/media/2e2a49_d8f32742409844c59aefab5e448d83be~mv2.jpg/v1/fill/w_568,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_d8f32742409844c59aefab5e448d83be~mv2.jpg"
            alt=""
          />
        </div>
        <div className="sidewide">
          <div
            className=" flex flex-col  w-[30%] h-[50vh] "
            data-aos="fade-up "
          >
            <p className=" ">THIS WEEKEND ONLY</p>
            <div className="flex  gap-5 py-3">
              <p className="text-4xl font-serif	 font-bold  "> 15% Off</p>
              <i className="text-4xl font-serif "> Sitewide</i>
            </div>
            <p className="py-3 ">
              I'm a paragraph. Click here to add your <br />
              own text and edit me. I’m a great place <br /> for you to tell a
              story and let your <br />
              users know a little more about you.
            </p>
            <div>
              <button className="border px-5 border-black py-2 hover:bg-black hover:text-white text-xs font-bold">
                Shop All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 7 */}

      <div className=" w-[100%] h-[80vh]  relative">
        <div className="newtiptop">
          <div className=" flex text-white  gap-20" data-aos="fade-right">
            <div className="  w-[30%] h-[20vh] py-1 ">
              <p className="tracking-widest">WE BELIEVE</p>
              <div className="flex gap-5 py-2">
                <p className=" text-4xl font-serif	 font-bold "> Your </p>
                <i className="text-4xl font-serif ">Skin </i>
              </div>
              <div className="flex gap-5">
                <p className=" text-4xl font-serif	flex font-semibold ">
                  Comes{" "}
                </p>
                <p className=" text-4xl font-serif	flex font-bold ">First </p>
              </div>
            </div>
            <div className="  ">
              <p>
                I'm a paragraph. Click here to add your own text and edit .{" "}
                <br />
                It’s easy. Just click “Edit Text” or double click me to add your
                <br />
                own content and make changes to the font. Feel free to drag
                <br /> and drop me anywhere you like on your page. I’m a great
                <br />
                place for you to tell a story and let your users know a little
                <br />
                more about you.
              </p>{" "}
              <br />
              <p>
                This is a great space to write a long text about your company{" "}
                <br />
                and your services. You can use this space to go into a little{" "}
                <br />
                more detail about your company. Talk about your team and
                <br />
                services you provide. Tell your visitors the story of how you{" "}
                <br />
                came up with the idea for your business and what makes you{" "}
                <br />
                different from your competitors. Make your company <br /> stand
                out and show your visitors who you are.
              </p>
              <p className="py-5">Join Noelle's Club</p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className=" w-screen h-[80vh] "
            src=" https://static.wixstatic.com/media/2e2a49_37afad752477458cbc7a9b205e02caae~mv2.jpg/v1/fill/w_568,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_37afad752477458cbc7a9b205e02caae~mv2.jpg"
            alt=""
          />
        </div>
      </div>

      {/* 8 */}
      <div className="border w-[100%] h-[100vh]">
        <div className="flex flex-col justify-center text-center py-5">
          <p className="text-4xl font-serif	 font-bold ">Follow Us</p>
          <p>@beauty.store</p>
        </div>
        {/* images */}
        {/* <div>
          <div className="border  border-green-500 h-[50vh]">
            {setImages?.map((elm, index) => (
              <div key={index}>
                <div className=" ">
                  <img src={elm} alt="" className=" " />
                  <div> </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button onClick={nextSlide}>Next Slide</button>
          </div>
        </div> */}
      </div>

      {/* 9 */}
      <div></div>
    </div>
  );
};
export default Tiptop;
