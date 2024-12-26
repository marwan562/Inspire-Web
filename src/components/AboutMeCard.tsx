import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const AboutMeCard = () => {
  const mm = gsap.matchMedia();
  const container = useRef<HTMLDivElement | null>(null);
  const card1 = useRef<HTMLDivElement | null>(null);
  const card2_star = useRef<HTMLDivElement | null>(null);
  const card2_content = useRef<HTMLDivElement>(null);
  const card3_content = useRef<HTMLDivElement | null>(null);
  const card3_greenherb = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      mm.add(
        {
          isMobile: "(max-width: 499px)",
          isDesktop: "(min-width: 500px)",
        },
        (context) => {
          const { isMobile } = context.conditions!;

          const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 0,
            delay: 0,
            repeatRefresh: true,
          });

          tl.fromTo(
            card1.current,
            { y: -70 },
            {
              ease: "expo.inOut",
              duration: 1,
              y: 0,
              opacity: 1,
            }
          )
            .to(card1.current, {
              ease: "expo.inOut",
              y: isMobile ? 70 : 110,
              duration: 2,
              opacity: 0,
            })
            .fromTo(
              card2_star.current,
              {
                x: 70,
                y: -70,
              },
              { opacity: 1, scale: 1, x: 0, y: 0 },
              "-=1"
            )
            .fromTo(
              card2_content.current,
              {
                x: -70,
                y: -70,
              },
              { opacity: 1, scale: 1, x: 0, y: 0 },
              "-=1"
            )
            .to(card2_star.current, {
              x: 100,
              y: -100,
              opacity: 0,
              delay: 1.5,
              ease: "power1.out",
              duration: 2,
            })
            .to(
              card2_content.current,
              {
                ease: "expo.inOut",
                y: isMobile ? 70 : 110,
                duration: 2,
                opacity: 0,
              },
              "-=2.5"
            )
            .fromTo(
              card3_content.current,
              {
                y: -70,
              },
              { opacity: 1, scale: 1, x: 0, y: 0 },
              "-=1.5"
            )
            .fromTo(
              card3_greenherb.current,
              {
                x: -90,
                y: 90,
              },
              { opacity: 1, x: 0, y: 0 },
              "-=1.5"
            )
            .to(card3_content.current, {
              ease: "expo.inOut",
              duration: 2,
              x: 100,
              y: -100,
              opacity: 0,
            })
            .to(
              card3_greenherb.current,
              {
                delay: 1,
                duration: 2,
                x: -70,
                y: 70,
              },
              "-=2.3"
            );

          //   .fromTo(
          //     card2_star.current,
          //     {
          //       y: -50,
          //       x: 50,
          //       duration: 1.5,
          //       ease: "expo.out",
          //     },
          //     {
          //       opacity: 1,
          //       scale: 1,
          //     }
          //   )
          //   .to(card2_star.current, {
          //     y: isMobile ? 70 : 110,
          //     duration: 1.5,
          //     ease: "expo.inOut",
          //   })
          //   .to(card2_content.current, {
          //     scale: 1,
          //     opacity: 1,
          //   })
          //   .to(card3.current, {
          //     opacity: 1,
          //     scale: 1,
          //     y: isMobile ? 0 : 0,
          //     duration: 1.5,
          //     ease: "expo.out",
          //   })
          //   .to(card3.current, {
          //     y: isMobile ? 70 : 110,
          //     duration: 1.5,
          //     ease: "expo.inOut",
          //   });
        }
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="flex flex-row relative items-center  justify-center h-full "
    >
      {/* Card 1 */}
      <div
        ref={card1}
        className="flex w-full gap-1 mx-3 justify-center opacity-0  items-center opacity-1 scale-1"
      >
        <div className="flex relative  flex-row justify-center items-center gap-[-10px]">
          <div className="absolute  -space-x-1.5 flex text-[8px]">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="relative w-[28px] h-[28px] lg:w-[55px] lg:h-[55px]"
                >
                  <Image
                    src={`/section-3/iamges/Ellipse ${i + 1}.png`}
                    alt={`image-${i + 1}`}
                    width={60}
                    height={60}
                    quality={100}
                    style={{ objectFit: "cover" }}
                    className="ring-1 ring-five lg:ring-2 rounded-full"
                  />
                </div>
              ))}
          </div>
          <div className="w-10 h-8 md:w-11 md:h-9 lg:w-[70px] lg:h-[66px] rounded-full border md:border-2 border-primary"></div>
          <div className="w-10 h-8 md:w-11 md:h-9 lg:w-[70px] lg:h-[66px] rounded-full border md:border-2 border-primary -ml-[21px]"></div>
          <div className="w-10 h-8 md:w-11 md:h-9 lg:w-[70px] lg:h-[66px] rounded-full border md:border-2 border-primary -ml-[21px]"></div>
        </div>

        <div className="leading-none">
          <h1 className="text-[16px] md:text-[20px] lg:text-[24px] font-boldWish leading-none">
            300+
          </h1>
          <h2 className="text-[9px] md:text-[12px] lg:text-[16px]">
            Satisfied clients
          </h2>
        </div>
      </div>

      {/* Card 2 */}
      <div className="absolute flex flex-row justify-center items-start  right-0 mx-4">
        <div ref={card2_content} className="leading-none opacity-0  scale-0 ">
          <h1 className="flex flex-row justify-between items-end font-boldWish text-[24px] md:text-[40px]">
            500+
          </h1>
          <h2 className="font-semibold font-opensans text-[16px] md:text-[24px]">
            Projects completed
          </h2>
        </div>
        <div
          ref={card2_star}
          className="relative opacity-0   w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
        >
          <Image
            src={"/section-3/iamges/Union.png"}
            alt="svg"
            fill={true}
            objectFit="cover"
            layout="fill"
            className="absolute"
          />
        </div>
      </div>
      {/* Card 3 */}
      <div
        ref={card3_greenherb}
        className="absolute w-full h-full  left-0 flex flex-row opacity-0  justify-start items-end   bottom-0  "
      >
        <div className="relative  w-[50px] h-[50px] md:w-[70px] md:h-[70px]">
          <Image
            src={"/section-3/iamges/Explosion.png"}
            alt="svg"
            fill={true}
            objectFit="cover"
            layout="fill"
            className=""
          />
        </div>
      </div>
      <div
        ref={card3_content}
        className=" absolute  opacity-0 scale-0  leading-none"
      >
        <h1 className=" text-[24px] md:text-[40px] font-boldWish">5 Years</h1>
        <h2 className=" text-[16px] md:text-[24px] font-opensans font-semibold">
          Of Experience
        </h2>
      </div>
    </div>
  );
};

export default AboutMeCard;
