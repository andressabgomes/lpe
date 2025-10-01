import Image from "next/image";
import * as React from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  ariaLabel?: string;
  src?: string;
};

const NacionalGasLogoNext: React.FC<Props> = ({
  width = 200,
  height = 60,
  className,
  ariaLabel = "Nacional Gás",
  src = "/assets/brand/nacionalgas-logo.png",
}) => {
  return (
    <Image
      src={src}
      alt={ariaLabel}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};

export default NacionalGasLogoNext;
