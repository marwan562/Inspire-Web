import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin);

const WebService = () => {
  const mm = gsap.matchMedia();
  const container = useRef<HTMLDivElement | null>(null);
  const service_text = useRef<HTMLDivElement | null>(null);
  const service_1_image = useRef<HTMLDivElement | null>(null);
  const service_2_image = useRef<HTMLDivElement | null>(null);

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
            yoyo: true,
            repeat: -1,
            delay: 2,
            defaults: { duration: 4 },
          });

          tl.to(service_text.current, {
            opacity: 0,
          })
            .to(service_text.current, {
              opacity: 1,
              text: "#App Design",
            })
            .to(
              service_1_image.current,
              {
                opacity: 0,
                x: isMobile ? 110 : 200,
                y: isMobile ? 110 : 200,
                delay: 2,
              },
              "-=7"
            )
            .to(
              service_1_image.current,
              {
                className: "hidden",
              },
              "-=3.5"
            )
            .from(
              service_2_image.current,
              {
                opacity: 1,
                rotate: 90,
                ease: "power3.in",
                x: isMobile ? -120 : -200,
                y: isMobile ? 120 : 200,
              },
              "-=5"
            );
        }
      );
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="pl-3 pt-1  h-full md:pl-5 md:pt-4 uppercase text-[14px] md:text-[24px]"
    >
      <h2 ref={service_text}>#Web Design</h2>
      <div ref={service_1_image} className=" relative h-[86%] w-full">
        <Image
          src={"/section-3/iamges/MacBook .png"}
          alt="mackbook"
          layout="fill"
          objectFit="cover"
          className=" object-cover "
        />
      </div>{" "}
      <div
        ref={service_2_image}
        className=" relative opacity-1 h-[100%] w-full"
      >
        <Image
          src={"/section-3/iamges/phone.png"}
          alt="mackbook"
          layout="fill"
          objectFit="cover"
          className=" object-cover  "
        />
      </div>
    </div>
  );
};

export default WebService;
