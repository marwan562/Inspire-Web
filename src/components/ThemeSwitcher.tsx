"use client";
import { Paintbrush } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative">
      <button>
        <Paintbrush
          size={25}
          className=" text-accent"
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
