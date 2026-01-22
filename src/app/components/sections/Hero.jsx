'use client';
import React from 'react'
import { WiStars } from "react-icons/wi";
import { FaArrowDown } from "react-icons/fa";

export default function Hero({ id }) {
  const scrollToWorks = () => {
    const element = document.getElementById("gallery");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen w-full bg-center bg-cover overflow-hidden
  bg-[linear-gradient(to_left,rgba(242,222,211,0.9),rgba(235,215,202,0.88),rgba(243,225,215,0.9)),url('/background.png')]" id={id}>

        <div className='flex flex-col items-center justify-evenly w-[100%] '>
          <span className='text-[24px] leading-5 text-[#756A61] font-medium font-mono tracking-widest  tracking-[0.1em]'>
            Contemporary Decorative Art
          </span>
          <h1 className="text-[128px] text-center leading-[0.9]  "
            style={{ animationDelay: "0.4s" }}>
            Enas
            <br />
            <em className="font-normal italic text-terracotta text-[#CC5933] ">Farouq</em>
          </h1>
          <p className="text-[24px] leading-5 text-[#756A61] font-medium font-mono w-[50%] text-center"
            style={{ animationDelay: "0.6s" }}>
            Exploring calm atmospheres and natural beauty through decorative impressionism and illustrative forms
          </p>
          <button onClick={scrollToWorks}
            className=' border-0 bg-transparent text-[18px] pt-[20px] text-black hover:border-b-2 hover:border-[rgb(163,24,24)] font-mono tracking-[0.05em]' >
            View Collection <FaArrowDown className='ps-2' />
          </button>

        </div>
        <div className='w-full flex ps-8 justify-start'>

          <div
            style={{
              animation: "float 4s ease-in-out infinite",
            }}
            className='relative ps-8 pb-[40px] text-white'
          >
            <WiStars
              className="absolute bottom-0 left-0 h-[140px] w-[140px] pb-[80px] text-[rgb(242,222,211)] select-none"
              style={{
                display: "inline-block",
                animation: "float 4s ease-in-out infinite ms-8 ps-8",
              }}
            />
            <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-25px); }
    }
  `}</style>
          </div>
        </div>
      </section>

    </>
  );
};