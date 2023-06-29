import Navbar from "@/app/components/Navbar";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <header className="relative p-0 md:pt-[50%] pt-[722px] h-full">
       <div className="bg-[#001853] bg-image-numbers w-full h-full absolute pt-[1.5rem] top-0 left-0 m-0" >
           <Navbar />
           <div className="absolute items-end rotate-180 bottom-[-4rem] left-[20%] -z-10 hidden sm:block w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[5rem] lg:h-[5rem]">
               <span className={`${styles.rounded_triangle}`}></span>
           </div>
           <div className="flex md:justify-between flex-col md:flex-row h-full mt-[4rem] overflow-hidden">
               {/*<div className="w-full md:w-2/4 h-full flex flex-col items-center justify-center">*/}
               {/*    <h1 className="text-4xl text-white">Es tiempo <br/> de maquetar </h1>*/}
               {/*    <p className="text-white">Debes usar NextJS y Tailwind CSS . Cada sección de la página debe ser un componente individual. Usa el módulo*/}
               {/*        next-intl para internacionalización. Usa la imaginación para desarrollar el responsive de la versión móvil.</p>*/}
               {/*</div>*/}
               {/*<div className="border-white sm:border-yellow-400 md:border-orange-500 lg:border-red-600 xl:border-red-800 2xl:border-purple-800 border relative w-full -bottom-[4rem] right-0 self-end sm:w-[24rem] sm:-bottom-[4rem] md:w-[30rem] md:-bottom-[12rem] lg:w-[30rem] lg:-bottom-[12rem] lg:w-[34rem] lg:-bottom-[11rem] h-full">*/}
               {/*     <Image src="/images/hero1.svg" alt="Hero Image" fill />*/}
               {/*</div>*/}
               <div className="w-full h-full flex flex-col items-start gap-6 p-5 lg:p-20 justify-center">
                   <h1 className="font-sans sm:text-4xl md:text-3xl lg:text-6xl text-2xl  font-extrabold text-white">Es tiempo <br/> de maquetar </h1>
                   <p className="text-white font-sans text-lg sm:text-xl md:text-sm lg:text-xl">Debes usar NextJS y Tailwind CSS . Cada sección de la página debe ser un componente individual. Usa el módulo next-intl para internacionalización. Usa la imaginación para desarrollar el responsive de la versión móvil.</p>
               </div>
               <div className="relative bottom-[3%] md:bottom-[-5%] lg:bottom-[-10%] xl:bottom-[-12%] 2xl:bottom-[-15%] -right-[5%] sm:-right-[25%] md:right-0 w-full h-full ">
                   <Image src="/images/hero1.svg" alt="Hero Image" fill style={{scale: "105%"}} />
               </div>
           </div>
       </div>

   </header>

   </>
  )
}
