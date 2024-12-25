"use client";

import AboutMeCard from "@/components/AboutMeCard";
import SemicircleCard from "@/components/SemicircleCard";
import WebService from "@/components/WebService";
import useCardAnimations from "@/hooks/animations/useCard1SwitchAni";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(TextPlugin);

const Page = () => {
  const container = useRef(null);

  /* First card animation */
  const card1Content = useRef<HTMLDivElement | null>(null);
  const card2Content = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // /* First card animation */
      useCardAnimations(card1Content, card2Content);

      // const animate = () => {
      //   const tl = gsap.timeline({ repeat: -1, delay: 2, repeatDelay: 2 });

      //   gsap.from(semicircle.current, {
      //     y: -50,
      //     duration: 1,
      //     ease: "expo.in",
      //   });
      //   gsap.to(semicircle.current, {
      //     rotate: -14,
      //     delay: 0.1,
      //     duration: 1,
      //     ease: "back.in",
      //   });

      //   tl.to(semicircle.current, {
      //     rotate: 13,
      //     duration: 1.5,
      //     ease: "back.inOut",
      //   })
      //     .to(containerContetnCircle.current, {
      //       x: 98,
      //       ease: "power3.in",
      //     })
      //     .to(hideDivOutCircle.current, {
      //       opacity: 0,
      //     })
      //     .to(containerContetnCircle.current, { x: 99, delay: -0.5 })
      //     .to(divstocksChange.current, {
      //       opacity: 1,
      //       x: 0,
      //       scale: 1,
      //       delay: 0.1,
      //     })
      //     .to(divstocksChange.current, { x: 98, delay: 1.3 })
      //     .to(containerContetnCircle.current, {
      //       x: 170,
      //       ease: "back.out",
      //       delay: 0.1,
      //     })
      //     .to(divstocksChange.current, { text: "Journey", x: 0, delay: 0.2 })
      //     .to(containerContetnCircle.current, {
      //       x: 52,
      //       ease: "back.out",
      //       delay: 0.1,
      //     })
      //     .to(divstocksChange.current, { text: "Journey", x: 130, delay: 1 })
      //     .to(secondStocksChange.current, { opacity: 1, delay: 0.1 })
      //     .to(containerContetnCircle.current, {
      //       x: 45,
      //       ease: "back.out",
      //       delay: 1.1,
      //     })
      //     .to(secondStocksChange.current, { x: 130, opacity: 0, delay: -0.5 })
      //     .to(thirdStocksChange.current, { opacity: 1, delay: -0.5 })
      //     .to(containerContetnCircle.current, {
      //       x: 55,
      //       ease: "back.out",
      //       delay: 1,
      //     })
      //     .to(quadrantStocksChange.current, { opacity: 1, delay: -0.5 })
      //     .to(thirdStocksChange.current, { x: 130, opacity: 0, delay: -0.5 });
      // };

      // animate();
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-primary py-[16px] md:py-[32px] text-secondary-foreground min-h-screen w-full"
    >
      <div className="container  mx-auto px-2 md:px-0 w-full h-full">
        {/* Navbar */}
        <div className="font-bionix leading-none  flex flex-row items-center text-secondary justify-between uppercase">
          <h2 className="text-[24px] md:text-[32px] font-extrabold">IW</h2>
          <ul className=" hidden  text-[16px] gap-4 md:flex flex-row items-start font-semibold justify-between">
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>

          {/* menu */}
          <Image
            src={"/svg-section-1/menu.svg"}
            alt="menu"
            width={23.33}
            height={16}
            className="block md:hidden invert"
          />
        </div>

        {/* Title */}
        <h2 className="leading-none max-w-full w-full text-center font-normal font-boldWish text-[45px] sm:text-[82px] md:text-[101.6px] lg:text-[135.5px] xl:text-[169.8px] 2xl:text-[202.8px]">
          Product Designer
        </h2>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 h-[1212px] md:mt-0 md:h-[750px] lg:h-[612px] gap-2 text-primary text-4xl">
          <div className="text-[40px] px-8 py-6 h-full bg-secondary font-sans text-wrap rounded-[24px] flex flex-col">
            <h2>Hey, I’m “Your name”</h2>
            <p className="font-normal mt-1 text-[24px] text-balance">
              As a product designer, I believe that great design lies at the
              intersection of creativity and functionality. I specialize in
              crafting intuitive and engaging user experiences that connect
              deeply with users while aligning with business goals.
            </p>

            <div className="mt-auto flex  justify-between items-end ">
              <div className=" flex flex-row justify-start items-center text-[13px] w-full md:text-[24px] gap-2">
                <button className="flex flex-row justify-center bg-primary text-secondary items-center gap-1 md:gap-2  px-2  md:px-4 md:py-2 rounded-full">
                  Let’s Talk <ArrowRight className="size-[18px]" />
                </button>
                <button className="flex flex-row justify-center bg-secondary border-2 border-[#B0ABA3] text-primary items-center   px-2 md:px-4 md:py-2 rounded-full">
                  My Projects
                </button>
              </div>
              <div className=" flex flex-col justify-end items-end  gap-4">
                <h2 className=" mb-5 pt-2 md:pt-9 flex flex-row justify-end items-center text-primary  underline underline-offset-3 text-[15px] gap-1 md:gap-2 md:text-[20px] -rotate-90">
                  Resume
                  <Image
                    className=" rotate-90"
                    src={"/section-3/svg/send.svg"}
                    alt="send-resume"
                    width={18}
                    height={18}
                  />{" "}
                </h2>

                <Image
                  src={"/section-3/svg/linkedin.svg"}
                  alt="linkedin"
                  width={28}
                  height={28}
                />
                <Image
                  src={"/section-3/svg/instagram.svg"}
                  alt="instagram"
                  width={28}
                  height={28}
                />
                <Image
                  src={"/section-3/svg/basketball.svg"}
                  alt="basket-ball"
                  width={28}
                  height={28}
                />
              </div>
            </div>
          </div>
          {/* first card */}
          <div className="grid grid-rows-4 grid-cols-2 grid-flow-col gap-2 h-full">
            <div className="bg-secondary  h-full flex flex-wrap justify-center items-center overflow-hidden rounded-[24px] max-w-full w-full relative">
              <h2
                ref={card1Content}
                className="font-opensans  transform font-semibold text-[12px] md:text-[24px] border-[3px] px-[10px] md:px-[16px] rounded-[16px] border-primary z-10"
              >
                UX STRATEGY{/* translate-x-[140%] */}
              </h2>

              <h2
                ref={card2Content}
                className="font-opensans font-semibold text-[12px] md:text-[24px] border-[3px] px-[10px] md:px-[16px] rounded-[16px] border-primary absolute  transform -translate-x-[110%]"
              >
                Design Thinking
              </h2>
            </div>

            <div className="bg-third rounded-[24px]  overflow-hidden row-span-2 w-full">
              <div className="md:pb-2  flex flex-col mx-1 h-full justify-end items-center">
                <SemicircleCard />
                <div className=" bg-secondary  w-[156.85px] max-w-full gap-1  text-[20px] leading-none h-[81px] md:h-[140px]  md:w-[266.93px] flex justify-center rounded-t-full items-end  px-2 md:px-4 origin-bottom">
                  <h2 className="flex flex-row  text-[20px]  md:text-[48px]  font-boldWish">
                    2024
                  </h2>
                  <p className=" text-[7px] md:text-[10px] text-wrap mb-1 font-sans font-medium">
                    Launching New Ideas From Concept to Completion
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-five max-w-full h-full rounded-[24px] w-full overflow-hidden">
             <AboutMeCard/>
            </div>

            <div className="border-2  relative  border-secondary  over rounded-[24px] row-span-2 ">
              <div className="  absolute  bottom-0 h-[130%] md:h-[140%] w-full">
                <Image
                  src={"/section-3/iamges/unsplash_d1UPkiFd04A.png"}
                  alt="your-background"
                  layout="fill"
                  objectFit="cover"
                  className="z-10  rounded-b-[24px] object-cover "
                />
              </div>
            </div>
            <div className="bg-quadrant rounded-[24px] overflow-hidden row-span-2 w-full">
                <WebService/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
