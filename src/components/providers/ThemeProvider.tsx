"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider as Theme } from "next-themes";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Theme
      attribute="class"
      themes={["yellow", "orange", "blue"]}
      disableTransitionOnChange
    >
      {children}
    </Theme>
  );
}
