import React from "react";
import Img from '../components/Premium Vector _ Spartan Logo Design Template Inspiration, Vector Illustration_.jpeg'
export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-[900px] w-full mx-auto">
      <img src={Img} style={{width:"100%",height:"700px", flex:"auto"}}  alt="img"></img>
      <br/>
      <br/>
        <div  className="flex flex-col gap-4"> 
          {/* <p className="text-sm md:text-base font-light">IT'S TIME TO GET</p> */}
      <h1 className="uppercase font-semibold text-4xl sm:text-6xl  md:text-7xl lg:text-9xl">
        OLYMPIA<span className="text-red-600">GYM</span>
      </h1></div>
     
      <p>
       
        <span className="text-red-600 font-semibold text-1xl sm:text-3xl  md:text-4xl lg:test-8xl">Train Hard </span> <span className="text-white-400 font-semibold text-1xl sm:text-3xl  md:text-4xl lg:test-6xl">Live Strong</span> 
      
      </p>
      <br/>
      {/* <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950  border-blue-400 border-solid blueShadwing duration-200"><p>Accept & Begin</p></button> */}
    </div>
  );
}
