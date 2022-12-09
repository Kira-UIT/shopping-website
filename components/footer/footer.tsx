import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon
} from "@/utils/media";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mx-[-100px] px-[100px] py-[120px] bg-[var(--color-btn)]">
      <div className="grid grid-cols-2">
        <div className="space-y-8 > * + *">
          <h1 className="font-black text-white text-[40px] uppercase tracking-[0.03em] leading-[60px]">
            Fashion
          </h1>
          <p className="text-[var(--color-text-third)] text-2xl">
            Complete your style with awesome clothes from us.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-lg bg-[var(--color-second)]">
              <Image src={FacebookIcon} alt="" />
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-lg bg-[var(--color-second)]">
              <Image src={InstagramIcon} alt="" />
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-lg bg-[var(--color-second)]">
              <Image src={TwitterIcon} alt="" />
            </div>
            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-lg bg-[var(--color-second)]">
              <Image src={LinkedinIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="text-[var(--color-text-third)] text-2xl space-y-6 > * + *">
            <h3 className="text-[var(--color-text-fourth)] text-2xl">
              Company
            </h3>
            <li>About</li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="text-[var(--color-text-third)] text-2xl space-y-6 > * + *">
            <h3 className="text-[var(--color-text-fourth)] text-2xl">
              Quick Link
            </h3>
            <li>Share Location</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
            <li>FAQs</li>
          </ul>
          <ul className="text-[var(--color-text-third)] text-2xl space-y-6 > * + *">
            <h3 className="text-[var(--color-text-fourth)] text-2xl">Legal</h3>
            <li>Term & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
