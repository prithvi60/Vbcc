// app/providers.tsx
'use client'
import * as React from "react";

import {NextUIProvider} from "@nextui-org/system";

export function Providers({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}