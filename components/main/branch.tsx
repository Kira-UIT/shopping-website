import {
  LogoAmazon,
  LogoHM,
  LogoLacoste,
  LogoLevis,
  LogoObey,
  LogoShopify,
} from "@/utils/media";
import Image from "next/image";
import * as React from "react";

export default function Branch() {
  return (
    <div className="mx-[-100px] px-[100px] py-[61px] bg-[var(--color-second)]">
      <div className="flex items-center justify-between">
        <Image src={LogoHM} alt="" />
        <Image src={LogoObey} alt="" />
        <Image src={LogoShopify} alt="" />
        <Image src={LogoLacoste} alt="" />
        <Image src={LogoLevis} alt="" />
        <Image src={LogoAmazon} alt="" />
      </div>
    </div>
  );
}
