import * as React from "react";

export default function Community() {
  return (
    <div className="flex flex-col items-center justify-center mx-[-100px] bg-[#E5C643] text-center px-[100px] py-[120px]">
      <h1 className="text-[55px] font-black text-[var(--color-primary)] leading-[70px] tracking-[0.03em] mb-10">
        JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
      </h1>
      <p className="text-4xl text-[var(--color-primary)] leading-[35px] tracking-[0.03em] mb-12">
        Type your email down below and be young wild generation
      </p>
      <div className="relative">
        <input
          type="text"
          placeholder="Add your email here!"
          className="text-2xl pt-[24px] pr-[250px] pb-[24px] pl-[27px] outline-0 rounded-lg"
        />
        <button className="absolute text-[22px] font-medium text-[var(--color-primary)] bg-[var(--color-btn)] uppercase rounded-[7px] px-10 py-3.5 top-[50%] right-2 translate-y-[-50%]">
          Send
        </button>
      </div>
    </div>
  );
}
