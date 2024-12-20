import logo from "@/public/svg-section-1/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
