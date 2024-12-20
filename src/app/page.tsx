"use client";
import Nabbar from "@/components/Nabbar";
import { chars } from "@/utils/char";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip, MotionPathPlugin } from "gsap/all";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(MotionPathPlugin, Flip);

export default function Home() {
  const pathRef = useRef(null);
  const container = useRef(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context) => {
      const path = pathRef.current as SVGPathElement | null;
      const totalLength = path!.getTotalLength();

      gsap.from("#image", {
        opacity: 0,
        translateY: 600,
        duration: 3,
        stagger: 0.2,
      });

      gsap.to("#image2", {
        gridColumn: "span 2",
        gridRow: "span 1",
        ease: "power2.in",
        duration: 2,
      });
      gsap.to("#image3", {
        gridColumn: "span 2",
        gridRow: "span 2",
        ease: "power2.out",
        duration: 2,
      });
      gsap.to("#image1", {
        gridColumn: "span 1",
        gridRow: "span 3",
        ease: "power2.inOut",
        duration: 2,
      });

      gsap.fromTo(
        "#blur-l",
        {
          translateY: -window.innerWidth,
          translateX: window.innerWidth,
          duration: 20,
        },
        { translateX: 0, translateY: 0, duration: 5 }
      );
      gsap.to(
        "#blur-l",

        { translateX: 0, translateY: 0, duration: 5, repeat: 2, yoyo: true }
      );
      gsap.fromTo(
        "#blur-r",
        {
          translateY: window.innerWidth,
          translateX: window.innerWidth,
          duration: 20,
        },
        { translateX: 0, translateY: 0, duration: 5 }
      );

      const handleMouseMove = (e: MouseEvent) => {
        if (imagesRef.current) {
          gsap.fromTo(
            ".mouse",
            { rotate: 360, duration: 2 },
            {
              top: e.clientY - 50,
              left: e.clientX - 50,
              duration: 0.2,
              ease: "none",
              opacity: 1,
              scale: 1.2,
              pointerEvents: "none",
            }
          );
        }
      };

      imagesRef.current?.addEventListener("mousemove", handleMouseMove);

      imagesRef.current?.addEventListener("mouseleave", () => {
        gsap.to(".mouse", {
          opacity: 0,
          scale: 0,
        });
      });

      gsap.fromTo(
        path,
        { strokeDasharray: totalLength, strokeDashoffset: totalLength },
        { strokeDashoffset: 0, duration: 4.5, delay: 1, ease: "back.out" }
      );

      gsap.from(".parag", {
        opacity: 0,
        duration: 3,
        y: 70,
      });

      gsap.from(".chars", {
        opacity: 0,
        ease: "back.out",
        duration: 2,
        stagger: {
          from: "random",
          each: 0.2,
          repeat: -1,
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className=" font-semibold border-black  border-x-2 overflow-hidden  max-w-full  mx-[16px]   "
    >
      <div className="mx-[12px] md:mx-[30px]">
        <Nabbar />

        <div className="flex flex-col-reverse relative md:flex-row items-start text-primary justify-between mt-[25px] max-w-full uppercase">
          <div className="font-extrabold text-[60px]  md:text-[95px]  leading-none max-w-[1258px]">
            <h2 className=" dark:text-primary  ">
              {chars("Your World Through")}{" "}
            </h2>
            <span className="text-primary-foreground dark:text-primary-foreground">
              {chars("My Lens.")}
            </span>
          </div>
          <div className="font-light text-[40px] md:text-right absolute top-0 right-0 md:static ">
            01<span className=" text-primary-foreground">/</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense  gap-6">
          <div className="mt-4 max-w-[657px]   flex flex-col justify-between h-full">
            <div className="flex flex-col relative md:flex-row gap-2 md:gap-9  justify-between items-start ">
              <h2 className="text-secondary relative text-[20px] md:text-[24px]">
                Your name{" "}
                <svg
                  className=" absolute -left-3 -top-3 md:-top-2 md:left-0  stroke-primary-foreground"
                  width="290"
                  height="150"
                  viewBox="-110 12 400 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={pathRef}
                    d="M29,14 C-42,27 -54,59 -34,66 -13.3,73.245 260,56 -22,16"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </h2>
              <p className="parag text-[24px] underline underline-offset-2 underline-black decoration-primary-foreground text-primary flex-1">
                Professional Photographer specializing in portraits, events, and
                nature photography.
              </p>
            </div>

            <div
              id="blur-l"
              className="  hidden md:block  absolute bg-primary-foreground size-44  -left-14 blur-3xl rounded-full -bottom-9 "
            ></div>

            <div className="mt-auto mb-6 md:mb-24">
              <button className=" hover:text-secondary-foreground border border-primary max-w-[200px] hover:bg-primary-foreground transition-all group  duration-300 ease-in-out hover:scale-105  md:max-w-[306px] h-fit rounded-full flex text-primary py-2 px-4 gap-[24px]">
                Book a Session
                <span className="text-primary-foreground group-hover:bg-primary  group-hover:rounded-full  group-hover:rotate-45  group-hover:translate-y-[-30px] group-hover:translate-x-[30px] group-hover:animate-pulse  transition-all duration-300  ">
                  <ArrowUpRight />
                </span>
              </button>
            </div>
          </div>

          <div
            ref={imagesRef}
            className="w-full cursor-none relative h-[550px] mb-[24px] grid grid-rows-3 grid-flow-col gap-2"
          >
            <div
              id="blur-r"
              className="hidden md:block  absolute bg-primary-foreground size-44  -right-16 blur-3xl rounded-full -top-5 "
            ></div>

            <div className="mouse z-20 fixed size-12 opacity-0 scale-0  shadow-2xl shadow-primary-foreground  bg-primary-foreground rounded-full flex items-center justify-center ">
              {" "}
              <ArrowUpRight className=" text-secondary-foreground animate-pulse" />
            </div>
            <div
              id="image1"
              className="row-span-3    transition-all ease-in-out duration-200"
            >
              <Image
                src={"/images-section-1/Frame.png"}
                alt="image"
                width={500}
                height={500}
                className="object-cover rounded-md w-full h-full border-2 p-1 border-primary-foreground"
              />
            </div>
            {/* row-span-1 */}
            <div
              id="image2"
              className="col-span-2 row-span-2  transition-all ease-in duration-200"
            >
              <Image
                src={"/images-section-1/Frame(1).png"}
                alt="image"
                width={500}
                height={500}
                className="object-cover rounded-md w-full h-full border-2 p-1 border-primary-foreground"
              />
            </div>
            {/* col-span-2 row-2 */}
            <div
              id="image3"
              className="col-span-2   transition-all ease-out duration-200   "
            >
              <Image
                src={"/images-section-1/image 6.png"}
                alt="image"
                width={200}
                height={200}
                className="object-cover rounded-md w-full h-full  border-2 p-1 border-primary-foreground"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
