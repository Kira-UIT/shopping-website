import { HeroImage1, PatternLeaf, PatternStar } from "@/utils/media";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative rounded-[59px] bg-[var(--color-hero)] h-[852px]">
      <div className="absolute top-[75px] left-[119px] z-10">
        <h1 className="text-[96px] font-black leading-[120px]">
          LET&apos;S <br /> EXPLORE <br /> UNIQUE <br /> CLOTHES.
        </h1>
      </div>
      <div className="absolute left-[119px] top-[600px]">
        <h2 className="text-[32px]">
          Live for Influential and Innovative fashion!
        </h2>
      </div>
      <div className="absolute top-[700px] left-[119px] flex items-center gap-x-8">
        <Image src={PatternLeaf} alt="" />
        <button className="text-[var(--color-primary)] bg-[var(--color-btn)] rounded-[7px] px-6 py-3.5 text-[22px]">
          Shop Now
        </button>
      </div>
      <div className="absolute w-[464.74px] h-[112.14px] bg-[var(--color-primary)] top-[75px] left-[82px] rotate-[-2deg]" />
      <div className="absolute w-[464.74px] h-[112.14px] bg-[var(--color-second)] top-[314px] left-[104px] rotate-[-2deg]" />
      <Image
        src={HeroImage1}
        alt=""
        className="absolute top-[68px] right-[112px] w-[871px]"
      />
      <Image
        src={PatternStar}
        alt=""
        className="absolute top-[104px] right-[260px] w-[58px]"
      />
      <Image
        src={PatternStar}
        alt=""
        className="absolute top-[62px] right-[940px] w-[58px]"
      />
      <Image
        src={PatternStar}
        alt=""
        className="absolute bottom-[34px] right-[920px] w-[58px]"
      />
      <Image
        src={PatternStar}
        alt=""
        className="absolute bottom-[92px] right-[83px] w-[58px]"
      />
    </div>
  );
}
