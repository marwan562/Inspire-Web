"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Instagram,
  Linkedin,
  Menu,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const Page = () => {
  const container = useRef(null);
  const slideImages = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 3, ease: "power2.in", delay: 1 },
        yoyo: true,
        repeat: -1,
      });

      tl.to(slideImages.current, { translateX: 126 })
        .to(slideImages.current, { x: -120 })
        .to(slideImages.current, { x: -360 })
        .to(slideImages.current, { x: 126 });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className=" p-[10px] md:p-[32px]  flex-col items-center  flex lg:flex-row justify-center gap-[18px]  md:gap-[20px] lg:gap-[32px]  h-full  max-w-full  "
    >
      <div className="rounded-[40px]   bg-chair relative bg-center bg-cover bg-no-repeat h-screen w-full">
        {" "}
        {/*logo*/}
        <div
          className=" absolute -top-1 -left-1 bg-primary px-4   md:px-8 border-primary rounded-br-[25px] 
                 "
        >
          <div
            id="curve-1"
            className="  absolute  w-[57px] h-[56px] top-0 -right-[55px] 
                   rounded-tl-full shadow-[-15px_-12px_0px_#000000] "
          ></div>

          <div
            id="curve-2"
            className="   absolute w-[50px] h-[56px] -bottom-[52px] left-0 
                   rounded-tl-full shadow-[-17px_-12.5px_0px_#000000] "
          ></div>

          <div className=" font-normal  font-wosker text-[50px]  flex items-center justify-center">
            <span className=" text-secondary-foreground ">I</span>W
            <span className=" hidden lg:block">EB</span>
          </div>
        </div>
        {/*Headline*/}
        <div className="     absolute top-[14%] sm:top-[18%] md:top-[29%] lg:top-[33%]  w-full leading-none">
          <div className="   flex space-y-2 flex-col  mx-3 md:flex-row justify-around items-start  lg:items-center ">
            <div className="   max-w-prose lg:max-w-[766px]    flex flex-col items-center justify-center gap-1 md:gap-[15px]">
              <h2 className=" font-rosca  text-wrap md:text-wrap text-[40px] sm:text-[50px]   lg:text-[70px] xl:text-[96px] ">
                <span className=" text-[50px] sm:text-[60px] lg:text-[70px] xl:text-[96px] text-secondary">
                  Your Space
                </span>{" "}
                Reimagined with Creativity
              </h2>
              <p className=" font-rosca   md:text-wrap font-thin  text-[16px] md:text-[24px]">
                From modern minimalism to timeless elegance, I create spaces
                that not only reflect your personality but also enhance your
                lifestyle.
              </p>
            </div>
            <div className=" w-full md:w-auto   ">
              <div className=" flex flex-row-reverse  md:flex-col gap-[6px] max-w-full items-end md:items-center  justify-between md:justify-center">
                <div className=" overflow-x-hidden    backdrop-blur-[32px]  px-3 pt-4 pb-2  rounded-[32px] max-w-[201px] md:max-w-[251px] text-center  flex flex-col items-center flex-1 w-full  justify-center gap-[15px]">
                  <div className=" rounded-full  overflow-x-hidden   text-primary font-rosca gap-1 flex flex-row items-center justify-start  ">
                    <Image
                      src={"/images-section-2/Vector(1).svg"}
                      alt="svg"
                      width={16}
                      className=" object-cover size-[16px]"
                      height={16}
                    />
                    <h2 className=" text-[12px] sm:text-[12px]  leading-none md:text-[15px] text-primary ">
                      Meet our last projects
                    </h2>
                  </div>
                  <div
                    ref={slideImages}
                    className="flex  overflow-x-hidden  translate-x-[38%]"
                  >
                    {Array(4)
                      .fill(0)
                      .map((el, i) => (
                        <Image
                          key={i}
                          loading="lazy"
                          src={`/images-section-2/unsplash-${++i}.png`}
                          className=" object-cover max-w-[235px] rounded-[22px] mr-2  h-[134px]  bg-slate-100"
                          width={500}
                          height={500}
                          alt="image-furniture"
                        />
                      ))}
                  </div>
                </div>
                <div className=" hidden  backdrop-blur-[32px]  px-3 py-6   rounded-[32px] max-w-[251px] text-center  md:flex flex-col items-center flex-1 w-full  justify-center gap-[15px]">
                  <div className=" flex flex-col items-center  justify-center gap-2 text-primary  font-rosca">
                    <div className=" flex flex-row  justify-center items-center gap-4">
                      <h1 className=" font-extrabold text-[36px]">1.2k</h1>
                      <h2 className=" font-opensans     text-[24px] font-medium">
                        Projects
                      </h2>
                    </div>
                    <p className=" text-[16px] font-glancyr font-semibold">
                      Shaping Modern Spaces
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-2 w-[31%] sm:bottom-1 md:hidden left-2  backdrop-blur-[32px]  px-2 py-3    rounded-[32px]  text-center  flex flex-col items-center   justify-center ">
          <div className=" flex flex-col   items-center  justify-center gap-1 text-primary  font-rosca">
            <div className=" flex flex-row  justify-center items-center gap-1">
              <h1 className=" font-extrabold text-[18px] md:text-[24px]">
                1.2k
              </h1>
              <h2 className=" font-opensans  text-[18px]  md:text-[20px] font-medium">
                Projects
              </h2>
            </div>
            <p className=" text-[12px] font-glancyr font-semibold">
              Shaping Modern Spaces
            </p>
          </div>
        </div>
        {/*menu*/}
        <div
          className="absolute block lg:hidden  -top-1 -right-1 bg-primary py-4 px-4 md:px-8 border-primary rounded-bl-[25px] 
                 "
        >
          <div
            id="curve-1"
            className="    absolute w-[57px] h-[56px] top-0 -left-[55px] 
                   rounded-tr-full shadow-[12px_-15px_0px_#000000] "
          ></div>
          <div
            id="curve-2"
            className="   absolute w-[50px] h-[56px] -bottom-[52px] right-0 
                   rounded-tr-full shadow-[17px_-12.5px_0px_#000000] "
          ></div>
          <Menu size={40} />
        </div>
        {/*navbar*/}
        <div
          id="nav"
          className="absolute  hidden  top-2 left-[30%] lg:flex font-opensans font-semibold   rounded-[16px]  justify-center items-center gap-[10px] p-[9px]  shadow-lg backdrop-blur-3xl text-third  text-[18px] "
        >
          {["HOME", "ABOUT", "SERVICES", "PORTFOLIO"].map((el, i) => (
            <div
              key={i}
              className={`${
                el === "HOME"
                  ? "bg-[#FFFBF8] text-primary  hover:opacity-80  "
                  : "text-white hover:bg-secondary-foreground "
              } px-3 py-2 rounded-[16px] cursor-pointer  transition-all  duration-300 ease-in`}
            >
              {el}
            </div>
          ))}
        </div>
        <div
          className="absolute   -bottom-4 right-0 bg-primary pl-3  py-4 border-primary  rounded-tl-[25px] 
                 "
        >
          <div
            id="curve-1"
            className="   absolute w-[57px] h-[52px] bottom-4 -left-[53px] 
                   rounded-br-full shadow-[8px_20px_0px_#000000] "
          ></div>
          <div
            id="curve-2"
            className="  absolute w-[50px] h-[56px] -top-[50px] right-0 
                   rounded-br-full shadow-[17px_8.5px_0px_#000000] "
          ></div>
          <button className="z-20 max-w-[230px]  md:max-w-[340px] text-[16px] md:text-[20px] bg-secondary-foreground font-rosca  hover:bg-secondary transition-all duration-300 ease-in-out  border-secondary-foreground  font-normal text-center border px-5 py-2  rounded-[22px] flex flex-row justify-between items-center gap-[32px]">
            Let’s Design Your Space
            <ChevronRight className="stroke-[1.5]   " />
          </button>{" "}
        </div>
      </div>

      <div className="flex flex-col relative  md:h-[60vh]  lg:h-screen w-full flex-wrap  lg:max-w-[260px]  gap-3">
        <div className=" flex flex-row lg:flex-col gap-4 ">
          <div className=" space-y-1 md:space-y-3 flex flex-col max-w-[193px]  md:max-w-[260px]  rounded-[40px] w-full h-[173px] md:h-full">
            <Image
              loading="lazy"
              src={"/images-section-2/Your image.png"}
              width={260}
              height={269}
              alt="your-image"
              className=" object-cover h-full rounded-[40px] w-full  "
            />
            <div id="icons" className="  flex flex-row items-center   font-rosca justify-evenly gap-1 md:gap-2 px-1 ">
              <Linkedin className=" size-[20px] md:size-[24px]" />
              <Instagram className=" size-[20px] md:size-[24px]" />
              <Twitter className=" size-[20px] md:size-[24px]" />
              <h2 className="  flex flex-row  underline underline-offset-2 ">
                Resume
                <ArrowUpRight className=" size-[20px] md:size-[24px]  stroke-1 font-light" />
              </h2>
            </div>
          </div>

          <div className=" flex flex-col justify-between space-y-4   ">
            <div className="lg:space-y-4 text-balance ">
              <h2 className="text-[24px] text-balance font-rosca leading-none font-medium">
                Innovative Designs for Modern Living
              </h2>
              <p className=" text-balance font-light text-[12px] md:text-[18px] ">
                Transform your space effortlessly. We craft bespoke designs that
                reflect your unique style and enhance your living experience.
                Let our experts bring your vision to life.
              </p>
            </div>
            <div className="  w-full lg:hidden">
              <button className=" text-[11px] sm:text-[15px] md:text-[20px] font-normal text-center items-center border px-3 py-1 md:px-5 md:py-2 w-full rounded-[22px] flex flex-row justify-between">
                Explore my projects
                <ChevronDown className="stroke-[1.5]   " />
              </button>
            </div>
          </div>

          <div className="  hidden lg:flex absolute  bottom-0  w-full  justify-center">
            <button className=" text-[20px] font-normal text-center border px-5 py-2 w-full rounded-[22px] flex flex-row justify-between items-end">
              Explore my projects
              <ChevronDown className="stroke-[1.5]   " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
