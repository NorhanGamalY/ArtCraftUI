import Image from "next/image";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <nav className="fixed top-0 left-0 flex justify-between  min-h-[80px] items-center z-50 w-full py-4 bg-transparent" >
        <div className="w-[90%] xl:w-[80%] mx-auto flex justify-between gap-3 items-center" >
        <Link className="text-[40px] no-underline font-extrabold text-[#504F4F]" href="#hero" >ArtCraft</Link>
        <div className="bg-transparent flex w-[20%] lg:w-[20%] justify-between text-white  gap-3 ">
            <Link className='inline-block no-underline text-[18px] text-[#726C65] hover:text-[#504F4F] hover:border-b-2 hover:border-[rgb(163,24,24)]' href="#gallery">Works</Link>
            <Link className='inline-block no-underline text-[18px] text-[#726C65] hover:text-[#504F4F] hover:border-b-2 hover:border-[rgb(163,24,24)]' href="#about"> About</Link>
            <Link className='inline-block no-underline text-[18px] text-[#726C65] hover:text-[#504F4F] hover:border-b-2 hover:border-[rgb(163,24,24)]' href="#contact">Contact</Link>  
        </div>
          <div className='py-[10px] px-[20px] border-2 text-[#504F4F]  hover:border-[rgb(163,24,24)]  hover:text-[#FFF]'><Link className='inline-block no-underline p-2 text-[18px] text-[#504F4F]' href="#contact">Inquire</Link></div>  
        </div>
    
    </nav>

    <Hero id="hero"/>
    <About id="about"/>
    <Gallery id="gallery"/>
    </>
  );
}
