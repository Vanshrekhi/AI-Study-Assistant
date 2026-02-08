"use client";

import TamboChat from "@/components/TamboChat";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TamboChat>{children}</TamboChat>;
}
