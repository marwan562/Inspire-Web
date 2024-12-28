"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const AnimSec4 = () => {
  const container = useRef(null);
  const designText = useRef(null);
  const pixelPerfect = useRef(null);
  const vibe1 = useRef(null);
  const vibe2 = useRef(null);
  const vibe3 = useRef(null);
  const makeItVibe = useRef(null);
  const brandsVibe = useRef(null);
  const yourTextVibe = useRef(null);
  const visualText = useRef(null);
  const visualImage = useRef(null);
  const storyText = useRef(null);
  const storyImage = useRef(null);

  useGSAP(
    () => {
      //   gsap.to(brandsVibe.current, {
      //     duration: 0.8,
      //     rotate: 3.5,
      //     repeat: 1,
      //     yoyo: true,
      //     ease: "bounce.inOut",
      //     x: -7,
      //     y: -12,
      //   });
      const tl = gsap.timeline({
        delay: 1,
        repeatDelay: 1,
        repeat: -1,
      });
      tl.fromTo(
        yourTextVibe.current,
        { x: -2, y: 2 },
        {
          duration: 0.8,
          rotate: -3.5,
          repeat: 1,
          yoyo: true,
          ease: "bounce.inOut",
          x: 7,
          y: -12,
        }
      )
        .fromTo(
          brandsVibe.current,
          { x: 2, y: 2 },
          {
            duration: 0.8,
            rotate: 3.5,
            repeat: 1,
            yoyo: true,
            ease: "bounce.inOut",
            x: -7,
            y: -12,
          },
          "<"
        )
        .to(designText.current, {
          duration: 1,
          ease: "bounce.out",
          rotate: -12,
        })
        .to(
          pixelPerfect.current,
          {
            opacity: 1,
            scale: 1,
          },
          "-=1"
        )
        .to(
          [vibe1.current, vibe2.current, vibe3.current],
          {
            ease: "bounce.inOut",
            duration: 2,
            y: 5,
            x: -15,
          },
          "-=1"
        )

        .to(makeItVibe.current, {
          className: "block",
          x: -6,
          duration: 2,
          ease: "bounce.inOut",
        })
        .fromTo(
          brandsVibe.current,
          { ease: "bounce.out", x: -5, duration: 1.5 },
          {
            className: "ml-0",
            ease: "bounce.out",
            scale: 1,
            x: 5,
            duration: 1.5,
          },
          "<"
        )
        .to(
          [vibe2.current, vibe3.current],
          {
            ease: "bounce.inOut",
            duration: 1.5,
            delay: 0.2,
            x: 6,
          },
          "<"
        )
        .to(
          brandsVibe.current,
          {
            x: 0,
            ease: "bounce.in",
          },
          ">"
        )
        .to(visualText.current, {
          rotate: 13,
          duration: 0.1,
        })
        .to(
          visualImage.current,
          {
            className: "block",
          },
          "<"
        )
        .to(storyText.current, {
          delay: 0.2,
          rotate: -13,
          duration: 0.1,
        })
        .to(
          storyImage.current,
          {
            className: "block",
          },
          "<"
        );
    },
    { scope: container }
  );
  return (
    <div className="flex flex-col text-[32px] md:text-[48px] text-center items-center justify-center mt-10">
      <div className=" relative  flex items-center text-center">
        <span className="mr-2">WE</span>
        <span ref={designText} className="block transform origin-right ">
          DESIGN
        </span>
        <div className=" absolute -right-[40%]">
          <span
            ref={pixelPerfect}
            className="   scale-0 origin-left opacity-0   flex-col font-semibold  items-center text-[12px] md:text-[20px]  -space-y-3 md:-space-y-1 justify-center "
          >
            <span className=" w-[67px] md:w-[108px] -rotate2  text-center rounded-[50%] flex justify-center items-center  h-[33px] md:h-[40px] bg-[#E55733]  ">
              PIXEL
            </span>
            <span className=" w-[67px] md:w-[108px] text-center  rounded-[50%] flex justify-center items-center  h-[33px]  md:h-[40px] bg-[#E55733]  ">
              PERFECT
            </span>
          </span>
        </div>
      </div>

      <div ref={vibe1} className="flex items-center">
        <span ref={yourTextVibe} className=" mr-2">
          YOUR
        </span>{" "}
        <div ref={makeItVibe} className=" hidden ">
          <span className=" flex relative  items-center text-[8px] md:text-[14px] justify-center gap-3 w-[65px] h-[28.5px] md:w-[95px] md:h-[47.5px] rounded-full bg-[#FF8906] text-black">
            <span className="absolute top-0  font-semibold">MAKE IT</span>
            <span className=" absolute left-[50%] top-[50%]  size-2 w-[68%] rounded-full  bg-white  -translate-x-1/2 -translate-y-1/2"></span>
            <span className="absolute bottom-0  font-semibold">POP</span>
          </span>
        </div>
        <span ref={brandsVibe} className="ml-2">
          BRAND{"'"}S
        </span>
      </div>

      <div
        ref={vibe2}
        className="  leading-none  mb-2 relative flex items-center "
      >
        <span ref={visualText} className="   origin-center">
          VISUAL
        </span>
        <div className=" absolute  -right-[55%]">
          <div className=" relative w-[69.34px] h-[43.72px] md:w-[103px] md:h-[64.93px]">
            <Image
              ref={visualImage}
              src={"/images-section-4/color-theory.png"}
              alt="-"
              layout="fill"
              objectFit="cover"
              className=" object-cover hidden  invert"
            />
          </div>
        </div>
      </div>
      <div
        ref={vibe3}
        className="  relative flex items-start   justify-start l -mt-2"
      >
        <div className=" absolute -left-[55%] ">
          <div className="relative w-[69px] h-[69px]  md:h-[96px] md:w-[96px] ">
            <Image
              ref={storyImage}
              src={"/images-section-4/Group 10.png"}
              alt="image"
              layout="fill"
              objectFit="cover"
              className=" object-contain hidden"
            />
          </div>
        </div>
        <span ref={storyText} className="  origin-right ">
          STORY
        </span>
      </div>
    </div>
  );
};

export default AnimSec4;
