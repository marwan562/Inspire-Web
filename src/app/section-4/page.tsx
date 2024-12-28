import AnimSec4 from "@/components/AnimSec4";
import Image from "next/image";

const Page = () => {
  return (
    <div className=" min-h-0 h-screen md:h-[130vh] max-w-full overflow-hidden bg-primary-foreground text-primary">
      {/* navbar */}
      <div className="px-4 py-2 md:p-5 md:px-0 container mx-auto w-full flex flex-row justify-between items-center">
        <ul className="  hidden  md:flex flex-row justify-between gap-5 text-[16px]  uppercase items-center">
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <div className="text-[24px] font-wosker md:mx-auto  md:pr-7 ">IW</div>
        <div className="hidden md:block">
          <button className=" bg-primary text-primary-foreground px-[32px] font-semibold py-[6px] rounded-full text-[16px]">
            Get in touch
          </button>
        </div>
        <div className="block md:hidden">
          <Image
            src={"/svg-section-1/menu.svg"}
            alt="menu"
            width={23}
            height={15}
            className=" object-cover"
          />
        </div>
      </div>

      <div className=" container mx-auto py-6 px-4 md:px-6  w-full h-full">
        <div className="  relative flex flex-col items-center justify-center">
          <h2 className=" font-outline-2 text-transparent z-10 -top-5 md:-top-12 absolute left-0 text-[48px] md:text-[165px] font-wosker">
            Graphic
          </h2>
          <h2 className=" text-[12px]  left-8 -top-4  z-10 md:left-[97px]  absolute md:-top-5  md:text-[32px] font-opensans font-semibold">
            Your Name
          </h2>

          <div className=" relative my-4 w-[160px] h-[240px] md:w-[400px] md:h-[600px] max-w-full ">
            <Image
              src={"/images-section-1/Frame(1).png"}
              alt="image"
              layout="fill"
              objectFit="cover"
              className=" object-cover  rounded-t-full rounded-b-full"
            />
          </div>

          <div className=" hidden md:block absolute -right-[2%]">
            <AnimSec4 />
          </div>

          <h2 className=" font-outline-2 text-transparent flex flex-row gap-2 md:gap-3 items-center z-10 -bottom-5 md:-bottom-20 absolute right-0 text-[48px] md:text-[165px] font-wosker">
            <div className=" z-10 relative my-4 mb-6 md:mb-10  w-[35px]  h-[35.5px] md:w-[80px]  md:h-[78.21px] ">
              <Image
                src={"/images-section-4/Group 13.svg"}
                alt="image"
                layout="fill"
                objectFit="cover"
                className=" object-cover"
              />
            </div>
            Designer
          </h2>
        </div>
        <div className="    inline-block justify-start  space-y-5  items-center mt-8 md:-mt-24">
          <div className="flex   flex-row justify-center items-center gap-[10px]">
            <div className="  border-primary -space-x-1.5 flex text-[8px]">
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
                      className="ring-1 ring-primary-foreground lg:ring-2 rounded-full"
                    />
                  </div>
                ))}
            </div>

            <div className="leading-none space-y-1">
              <h1 className="text-[16px] md:text-[20px] lg:text-[24px] font-opensans italic  ">
                300+
              </h1>
              <h2 className="text-[9px] text-secondary md:text-[12px] lg:text-[16px]">
                Satisfied clients
              </h2>
            </div>
          </div>
          <div className="block md:hidden">
            <button className=" bg-primary text-primary-foreground px-[32px] font-semibold py-[6px] rounded-full text-[16px]">
              Get in touch
            </button>
          </div>
        </div>
     <div className=" block md:hidden">
     <AnimSec4 />
     </div>
      </div>
    </div>
  );
};

export default Page;
