import { Logo } from "@/utils/media";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <div className="py-12 w-full">
      <div className="flex items-center justify-between">
        <div className="flex">
          <Image className="w-8 mr-3" src={Logo} alt="" />
          <h1 className="font-black text-[40px] uppercase">Fashion</h1>
        </div>
        <div className="flex items-center h-full justify-start uppercase space-x-8 > * + * tracking-[0.01em]">
          <Link href="/catalogue" legacyBehavior>
            <a>
              <p className="text-[22px] font-medium drop-shadow-lg shadow-black">
                Catalogue
              </p>
            </a>
          </Link>
          <Link href="/fashion" legacyBehavior>
            <a>
              <p className="text-[22px] font-medium drop-shadow-lg shadow-black">
                Fashion
              </p>
            </a>
          </Link>
          <Link href="/favourite" legacyBehavior>
            <a>
              <p className="text-[22px] font-medium drop-shadow-lg shadow-black">
                Favourite
              </p>
            </a>
          </Link>
          <Link href="/lifestyle" legacyBehavior>
            <a>
              <p className="text-[22px] font-medium drop-shadow-lg shadow-black">
                Lifestyle
              </p>
            </a>
          </Link>
          <button className="text-[22px] font-medium text-[var(--color-primary)] bg-[var(--color-btn)] uppercase rounded-[7px] px-6 py-3.5">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
