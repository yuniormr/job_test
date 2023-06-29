"use client"
import Navbar from "@/app/components/Navbar";
import styles from "./styles.module.css";
import Image from "next/image";
import React, {useEffect, useState} from "react";


const navigation = [
    {name: 'Inicio', href: '#section_home'},
    {name: 'Servicios', href: '#section_services'},
    {name: 'Nosotros', href: '#section_about'},
    {name: 'Herramientas', href: '#section_tools'},
    {name: 'Socios', href: '#section_partners'},
]
export default function Home() {
    const [current, setCurrent] = useState<string>("#section_home");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id], header[id]");
        window.addEventListener("scroll", navHighlighter);
        function navHighlighter() {
            let scrollY = window.scrollY;
            sections.forEach((current: any) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 120;
                const sectionId = current.getAttribute("id");
                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight
                ){
                    setCurrent("#"+sectionId);
                }
            });
        }
        return () => {
            window.removeEventListener("scroll", navHighlighter);
        };
    }, []);


    return (
        <>
            <header id="section_home" className="relative p-0 md:pt-[50%] pt-[722px] h-full">
                <div className="bg-[#001853] bg-image-numbers w-full h-full absolute pt-[1.5rem] top-0 left-0 m-0">
                    <Navbar navigation={navigation} current={current}/>
                    <div
                        className="absolute items-end rotate-180 bottom-[-4rem] left-[20%] -z-10 hidden sm:block w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[5rem] lg:h-[5rem]">
                        <span className={`${styles.rounded_triangle}`}></span>
                    </div>
                    <div className="flex md:justify-between flex-col md:flex-row h-full mt-[4rem] overflow-hidden">
                        <div className="w-full h-full flex flex-col items-start gap-6 p-5 lg:p-20 justify-center">
                            <h1 className="font-sans sm:text-4xl md:text-3xl lg:text-6xl text-2xl  font-extrabold text-white">Es
                                tiempo <br/> de maquetar </h1>
                            <p className="text-white font-sans text-lg sm:text-xl md:text-sm lg:text-xl">Debes usar
                                NextJS y Tailwind CSS . Cada sección de la página debe ser un componente individual. Usa
                                el módulo next-intl para internacionalización. Usa la imaginación para desarrollar el
                                responsive de la versión móvil.</p>
                        </div>
                        <div
                            className="relative bottom-[3%] md:bottom-[-5%] lg:bottom-[-10%] xl:bottom-[-12%] 2xl:bottom-[-15%] -right-[5%] sm:-right-[25%] md:right-0 w-full h-full ">
                            <Image src="/images/hero1.svg" alt="Hero Image" fill style={{scale: "105%"}}/>
                        </div>
                    </div>
                </div>

            </header>
            <main className="container mx-auto p-4">
                <section id="section_services" className="h-screen">
                    <h2 className="text-3xl font-bold font-sans">Servicios</h2>
                </section>
                <section id="section_about" className="h-screen">
                    <h2 className="text-3xl font-bold font-sans">Sobre Nosotros</h2>
                </section>
                <section id="section_tools" className="h-screen">
                    <h2 className="text-3xl font-bold font-sans">Herramientas</h2>
                </section>
                <section id="section_partners" className="h-screen">
                    <h2 className="text-3xl font-bold font-sans">Socios</h2>
                </section>
            </main>
        </>
    )
}
