import { ArrowRight } from "@/utils/media";
import Image from "next/image";
import * as React from "react";

export interface CardProps {
  src: any;
  title: string;
}

export default function Card({ src, title }: CardProps) {
  return (
    <div className="w-fit">
      <Image className="mb-2 w-full" src={src} alt="" />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[32px] leading-[50px] tracking-[-0.04em] text-[var(--color-text)] font-medium">
            {title}
          </h1>
          <p className="text-2xl font-medium leading-[50px] tracking-[-0.04em] text-[var(--color-text-second)]">Explore now!</p>
        </div>
        <Image src={ArrowRight} alt="" />
      </div>
    </div>
  );
}
