import { PatternLeaf } from "@/utils/media";
import Image from "next/image";
import * as React from "react";

export interface TitleProps {
  title: string;
  uppercase: boolean;
}

export default function Title({ title, uppercase }: TitleProps) {
  return (
    <div className="relative inline-block mb-[100px]">
      <h1
        className={`text-5xl font-black ${
          uppercase ? "uppercase" : ""
        } z-10 tracking-[0.06em] leading-[50px]`}
      >
        {title}
      </h1>
      <Image
        className="absolute right-0 inset-y-2/4 -z-10 w-[186px]"
        src={PatternLeaf}
        alt=""
      />
    </div>
  );
}
