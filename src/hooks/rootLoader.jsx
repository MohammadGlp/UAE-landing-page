"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HeaderComponent } from "@/screens/layout";
import useDeviceWidth from "@/hooks/useDeviceWidth";
import { Spinner } from "@/components/spiner";

export const RootLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const path = usePathname();
  const { deviceWidth } = useDeviceWidth();

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      {path === "/" && deviceWidth > 1024 ? null : <HeaderComponent />}
      <main className="">{children}</main>
    </>
  );
};
