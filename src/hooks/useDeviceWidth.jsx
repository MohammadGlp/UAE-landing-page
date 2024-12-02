import { useEffect, useState } from "react";

const useDeviceWidth = () => {
  const [deviceWidth, setDeviceWidth] = useState(null);
  const [deviceHeight, setDeviceHeight] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
      setDeviceHeight(window.innerHeight);
    };
    setDeviceWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { deviceWidth, deviceHeight };
};

export default useDeviceWidth;
