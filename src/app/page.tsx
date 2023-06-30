"use client"
import Navbar from "@/app/components/Navbar";
import styles from "./styles.module.css";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {IServiceCardProps} from "@/app/components/ServicesCard";
import {EmblaCarousel} from "@/app/components/Carousel";


const navigation = [
    {name: 'Inicio', href: '#section_home'},
    {name: 'Servicios', href: '#section_services'},
    {name: 'Nosotros', href: '#section_about'},
    {name: 'Herramientas', href: '#section_tools'},
    {name: 'Socios', href: '#section_partners'},
]
export default function Home() {
    const [current, setCurrent] = useState<string>("#section_home");
    const [services, setServices] = useState<IServiceCardProps[]| null>(null);

    getData().then((data)=>{
        setServices(data);
    });



    useEffect(() => {
        const sections = document.querySelectorAll("section[id], header[id]");
        window.addEventListener("scroll", navHighlighter);
        function navHighlighter() {
            let scrollY = window.scrollY;
            sections.forEach((current: any) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 50;
                const sectionId = current.getAttribute("id");
                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight
                ) {
                    setCurrent("#" + sectionId);
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
                            className="relative bottom-[3%] md:bottom-[-5%] lg:bottom-[-10%] xl:bottom-[-12%] -right-[5%] sm:-right-[25%] md:right-0 w-full h-full ">
                            <Image src="/images/hero1.svg" alt="Hero Image" fill style={{scale: "105%"}}/>
                        </div>
                    </div>
                </div>

            </header>
            <main className="container mx-auto p-4">
                <section id="section_services" className="h-screen pt-[6.5rem]">
                    <div className="flex flex-col md:flex-row md:gap-x-8 w-full h-full">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold font-sans text-[#3A67CC] uppercase">Servicios</h2>
                            <h4 className="text-3xl font-sans font-semibold mt-5">Esta info te llega desde un servicio
                                externo</h4>
                            <p className="text-xl font-sans mt-5">Consultando el servicio en
                                https://react-frontend.pages.dev/slides.json, debes usar Context para enviar los datos
                                que necesitas en la sección de abajo. A la derecha tiene un slide o carrusel.</p>
                            <button
                                className=" flex items-center gap-2 bg-[#2D509E] text-2xl font-sans text-white font-semibold px-5 py-1 rounded-s-full rounded-e-full shadow shadow-blue-600 mt-6">
                                Ver más
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                                </svg>
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 mt-24 md:mt-0">
                            <EmblaCarousel items={services || []} />
                        </div>
                    </div>
                </section>
                <section id="section_about" className="h-screen pt-[6.5rem]">
                    <h2 className="text-3xl font-bold font-sans">Sobre Nosotros</h2>
                </section>
                <section id="section_tools" className="h-screen pt-[6.5rem]">
                    <h2 className="text-3xl font-bold font-sans">Herramientas</h2>
                </section>
                <section id="section_partners" className="h-screen pt-[6.5rem]">
                    <h2 className="text-3xl font-bold font-sans">Socios</h2>
                </section>
            </main>
        </>
    )
}

async function getData() {
    const response = await fetch("https://react-frontend.pages.dev/slides.json");
    return response.json();
}





