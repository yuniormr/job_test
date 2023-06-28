import Navbar from "@/app/components/Navbar";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <header className="relative h-[722px]">
       <div className="bg-[#001853] bg-image-numbers " ></div>
      <Navbar />
       <div className="absolute items-end rotate-180 bottom-[-70px] left-[20%] -z-10 hidden sm:block w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[100px] lg:h-[100px]">
            <span className={`${styles.rounded_triangle}`}></span>
       </div>
       <div className="flex md:justify-between flex-col md:flex-row h-[600px]">
           <div className="w-full md:w-2/4 h-full flex flex-col items-center justify-center">
               <h1 className="text-4xl text-white">Es tiempo <br/> de maquetar </h1>
               <p className="text-white">Debes usar NextJS y Tailwind CSS . Cada sección de la página debe ser un componente individual. Usa el módulo
                   next-intl para internacionalización. Usa la imaginación para desarrollar el responsive de la versión móvil.</p>
           </div>
           <div className="border-white sm:border-yellow-400 md:border-orange-500 lg:border-red-600 xl:border-red-800 2xl:border-purple-800 border relative w-full -bottom-[4rem] right-0 self-end sm:w-[24rem] sm:-bottom-[4rem] md:w-[30rem] md:-bottom-[12rem] lg:w-[30rem] lg:-bottom-[12rem] lg:w-[34rem] lg:-bottom-[11rem] h-full">
                <Image src="/images/hero1.svg" alt="Hero Image" fill />
           </div>
       </div>
   </header>

   </>
  )
}
