import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BrushIcon } from "lucide-react";

const navSection = ["ABOUT", "PORTFOLIO", "CONTACT"];

const Nabbar = () => {
  const nav = useRef(null);
  const pathRef = useRef(null);
  const pathSwitchTheme = useRef(null);

  useGSAP(
    () => {
      const path = pathRef.current as SVGPathElement | null;
      const totalLength = path!.getTotalLength();

      gsap.from(".logo", {
        duration: 3,
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [2, 2],
        },
      });

      gsap.fromTo(
        path,
        { strokeDasharray: totalLength, strokeDashoffset: 0 },
        {
          strokeDashoffset: -totalLength,
          delay: 1,
          duration: 3.5,
          ease: "power2.inOut",
        }
      );

      const path2 = pathSwitchTheme.current;
      const totalLength2 = path!.getTotalLength();

      gsap.from(["#circle"], {
        duration: 3.5,
        scale: 1.5,
        opacity: 0,
        motionPath: {
          path: "#path2",
          align: "#path2",
          alignOrigin: [0.5, 0.5],
        },
        ease: "power2.inOut",
      });
      gsap.from(["#paint-bruch"], {
        duration: 3.5,
        scale: 3,
        opacity: 0,
        motionPath: {
          path: "#path2",
          align: "#path2",
          autoRotate: true,
          alignOrigin: [0, 1],
        },
        ease: "power2.inOut",
      });

      gsap.to(["#circle"], {
        delay: 3,
        opacity: 0,
        scale: 0,
      });

      gsap.fromTo(
        path2,
        { strokeDasharray: totalLength2, strokeDashoffset: 0 },
        {
          strokeDashoffset: totalLength2,
          delay: 0.7,
          duration: 3,
          ease: "power2.inOut",
        }
      );

      gsap.to(".paint-bruch-big", {
        delay: 3,
        className: "text-primary-foreground",
        ease: "power2.inOut",
      });
      gsap.from(".paint-bruch-big", {
        opacity: 0,
        y: 20,
        rotate: 50,
        delay: 3,
        ease: "power2.inOut",
      });
    },
    { scope: nav }
  );
  return (
    <div
      ref={nav}
      className=" flex flex-row items-center text-primary justify-between   "
    >
      <div className="logo mt-[24px]  text-primary-foreground filter invert">
        <Image
          className="w-full "
          src={"/svg-section-1/logo.svg"}
          alt="logo"
          width={52}
          height={22}
        />
      </div>
      <svg
        className=" absolute -left-3 -top-3 md:-top-2 md:left-0  stroke-primary-foreground"
        width="290"
        height="150"
        viewBox="-110 12 400 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path"
          ref={pathRef}
          d="M-30,67 C-22,80.95 44.812,78.885 65.876,72.849 91.615,65.468 100.195,62.65 133.998,41.999 193.998,48 231,47 248,22 "
          fill="none"
          strokeWidth="2"
        />
      </svg>
      <div className=" hidden md:block">
        <ul className="flex flex-row items-center  relative justify-center gap-[16px] mt-[24px]">
          <svg
            className=" absolute -top-6 -left-10  stroke-primary-foreground"
            width="290"
            height="150"
            viewBox="-110 12 400 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=""
              id="path2"
              ref={pathSwitchTheme}
              d="M-22,67 C-22,80.95 44.812,78.885 65.876,72.849 91.615,65.468 100.195,62.65 133.998,41.999 193.998,48 231,47 248,22 "
              fill="none"
              strokeWidth="2"
            />
            <g>
              <BrushIcon
                id="paint-bruch"
                size={25}
                className="text-accent text-primary-foreground "
              />
              <circle
                id="circle"
                cx="50"
                cy="50"
                r="5"
                className=" fill-primary-foreground stroke-primary-foreground stroke-[2px]"
              />
            </g>
          </svg>
          <div className="paint-bruch-big ">
            <ThemeSwitcher />
          </div>
          {navSection.map((el, i) => (
            <li
              key={i}
              className=" transition-all ease-in-out cursor-pointer duration-200 hover:underline"
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div className=" block md:hidden mt-[24px]">
        <button className="nav-section">
          <Image
            className="w-full filter invert"
            src={"/svg-section-1/menu.svg"}
            alt="logo"
            width={23}
            height={15}
          />
        </button>
      </div>
    </div>
  );
};

export default Nabbar;
