import { Banner1 } from "@/utils/media";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative mx-[-100px] h-[968px] bg-[var(--color-second)]">
      <Image src={Banner1} alt=""  className="absolute left-[250px]"/>

      <div className="absolute top-[130px] right-[200px] z-10">
        <h1 className="text-[100px] font-black leading-[120px] uppercase">
          Payday <br /> Sale Now
        </h1>
        <div className="space-y-8 > * + *">
          <h2 className="text-[32px] font-medium">
            Spend minimal $100 get 30% off <br /> voucher code for your next
            purchase
          </h2>
          <div>
            <h2 className="font-[700] text-4xl leading-[-0.02em]">
              1 June - 10 June 2021
            </h2>
            <p className="text-4xl leading-[-0.02em]">
              *Terms & Conditions apply
            </p>
          </div>
          <button className="text-[22px] font-medium text-[var(--color-primary)] bg-[var(--color-btn)] uppercase rounded-[7px] px-6 py-3.5">
            Shop now
          </button>
        </div>
      </div>
      <div className="absolute w-[464.74px] h-[112.14px] bg-[var(--color-primary)] top-[140px] right-[340px] rotate-[-2deg]" />
    </div>
  );
}
