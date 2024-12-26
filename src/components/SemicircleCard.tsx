import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const SemicircleCard = () => {
  const semicircle = useRef<HTMLDivElement | null>(null);
  const staticContent = useRef<HTMLDivElement | null>(null);
  const containerContetnCircle = useRef<HTMLDivElement | null>(null);
  const hideDivOutCircle = useRef<HTMLDivElement | null>(null);
  const textJourney = useRef<HTMLDivElement | null>(null);
  const textIdentity = useRef<HTMLDivElement | null>(null);
  const textConcept = useRef<HTMLDivElement | null>(null);
  const textSuccess = useRef<HTMLDivElement | null>(null);

  const mm = gsap.matchMedia();
  useGSAP(() => {
    mm.add(
      {
        isMobile: "(max-width: 499px)",
        isDesktop: "(min-width: 500px)",
      },
      (context) => {
        const { isMobile } = context.conditions!;

        const tl = gsap.timeline({
          defaults: { duration: 1 },
          delay: 1,
          repeat: -1,
          repeatDelay: 2,
        });

        tl.to(semicircle.current, {
          rotate: -14,
          duration: 2,
          ease: "power3.inOut",
        })
          .to(semicircle.current, {
            rotate: 14,
            duration: 2,
            ease: "back.out",
          })
          .to(
            staticContent.current,
            {
              x: isMobile ? 65 : 76,
              ease: "power3.in",
            },
            "<1"
          )
          .to(hideDivOutCircle.current, {
            x: isMobile ? 50 : 110,
            delay: 0.5,
          })
          .to(
            staticContent.current,
            {
              x: isMobile ? 75 : 95,
            },
            "-=1"
          )
          .to(hideDivOutCircle.current, {
            text: "Story",
            duration: 0.2,
            x: isMobile ? 5 : 10,
          })
          .to(hideDivOutCircle.current, {
            opacity: 0,
            x: isMobile ? 50 : 110,
            delay: 1,
          })
          .to(
            textJourney.current,
            {
              opacity: 1,
              scale: 1,
            },
            "-=1"
          )
          .to(
            staticContent.current,
            {
              x: 50,
            },
            "-=1"
          )
          .to(textJourney.current, {
            x: isMobile ? 65 : 75,
            opacity: 0,
            delay: 1,
          })
          .to(textIdentity.current, { opacity: 1, scale: 1 }, "-=1")
          .to(
            staticContent.current,
            {
              x: isMobile ? 55 : 50,
              delay: 1,
            },
            "-=2"
          )
          .to(textIdentity.current, {
            x: isMobile ? 65 : 75,
            opacity: 0,
            delay: 1,
          })
          .to(
            textConcept.current,
            {
              opacity: 1,
              scale: 1,
            },
            "-=1"
          )
          .to(
            staticContent.current,
            {
              x: isMobile ? 50 : 40,
              delay: 1,
            },
            "-=2"
          )
          .to(textConcept.current, {
            x: isMobile ? 75 : 85,
            opacity: 0,
            delay: 1,
          })
          .to(
            textSuccess.current,
            {
              scale: 1,
              opacity: 1,
            },
            "-=1"
          )
          .to(
            staticContent.current,
            {
              x: isMobile ? 45 : 50,
              delay: 1,
            },
            "-=2"
          );
      }
    );
  });

  return (
    <div
      ref={semicircle}
      className=" bg-secondary w-[156.85px] overflow-hidden max-w-full h-[81px] md:h-[140px]  md:w-[266.93px]   px-2 md:px-4 flex justify-center rounded-t-full items-end origin-bottom   rotate-[14px]"
    >
      <div
        ref={containerContetnCircle}
        className=" relative flex flex-row   text-[15px] md:text-[32px] w-full  leading-none justify-between items-center  "
      >
        <div ref={staticContent}>Your</div>
        <div
          ref={textJourney}
          className=" absolute opacity-0 scale-0 w-full  flex justify-end items-end"
        >
          Journey
        </div>
        <div
          ref={textIdentity}
          className=" absolute opacity-0 scale-0 w-full  flex justify-end items-end"
        >
          Identity
        </div>
        <div
          ref={textConcept}
          className=" absolute opacity-0 scale-0 w-full  flex justify-end items-end"
        >
          Concept
        </div>
        <div
          ref={textSuccess}
          className=" absolute opacity-0 scale-0 w-full  flex justify-end items-end"
        >
          Success
        </div>

        <div ref={hideDivOutCircle}>Vision</div>
      </div>
    </div>
  );
};

export default SemicircleCard;
