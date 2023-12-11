"use client";
import { NextUIProvider } from "@nextui-org/react";

interface providersProp {
  children: React.ReactNode;
}

export default function Providers({ children }: providersProp) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
