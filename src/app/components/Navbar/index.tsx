"use client"
import {Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";

export interface INavbarItem {
    name: string;
    href: string;
}

export interface INavbarProps {
    navigation: INavbarItem[];
    current: string;
}

// const navigation = [
//     { name: 'Inicio', href: '#', current: true },
//     { name: 'Servicios', href: '#', current: false },
//     { name: 'Nosotros', href: '#', current: false },
//     { name: 'Herramientas', href: '#', current: false },
//     { name: 'Socios', href: '#', current: false },
// ]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({navigation, current}: INavbarProps) {
    return (
        <Disclosure as="nav" className={`${current === navigation[0].href ? "bg-white" : "bg-[#2E53A3]/30"} transition-colors rounded shadow w-[95%] m-auto left-[2%] fixed z-50 backdrop-blur-sm`}>
            {({ open }) => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-[#2E53A3] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden md:ml-6 md:block">
                                    <div className="flex space-x-4 ">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    current === item.href ? 'text-[#2E53A3] font-bold' : 'text-black hover:text-gray-600',
                                                    'rounded-md px-0 lg:px-3 py-2 text-sm font-medium uppercase font-inter'
                                                )}
                                                aria-current={current === item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button className="bg-[#2D509E] text-white font-semibold px-5 py-1 rounded-s-full rounded-e-full shadow shadow-blue-600 me-3 md:me-6">
                                    Contactar
                                </button>
                                <Image src="images/flags/es.svg" alt="Idioma Español"  width={27} height={18}/>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    // className={classNames(
                                    //     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    //     'block rounded-md px-3 py-2 text-base font-medium'
                                    // )}
                                    className={classNames(
                                        current === item.href  ? 'text-[#2E53A3] font-bold' : 'text-black hover:text-gray-600',
                                        'block rounded-md px-3 py-2 text-base font-medium uppercase font-inter'
                                    )}
                                    aria-current={current === item.href  ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
