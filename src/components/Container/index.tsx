import React from "react";

import type { ComponentProps } from "@/types";

export default function Container({ children, className }: ComponentProps) {
  return (
    <div
      className={`max-w-[1920px] h-full w-full mx-auto px-28 desktop:px-12 tablet:px-8 mobile:px-6 final:px-4 ${className}`}
    >
      {children}
    </div>
  );
}