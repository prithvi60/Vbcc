// app/providers.tsx
'use client'
import * as React from "react";

import {HeroUIProvider} from "@heroui/system";

export function Providers({children}) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  );
}