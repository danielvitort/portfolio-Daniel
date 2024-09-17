"use client"

import Logo from "@/assets/images/dvt-logo.png"
import Image from "next/image"
import { Container } from "./Container"
import Link from "next/link"
import { IconClose, IconMenu } from "./Icon"
import { useState } from "react"

export const Header = () => {
    const [MenuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="fixed w-full z-10 flex items-center px-4 py-1 bg-header">

            <Container>
                <div className=" flex items-center justify-between ">
                    <div className="w-20 flex justify-center xl:mx-0 hover:scale-125 transition-all">
                        <Link href="#hero" >
                            <Image
                                src={Logo}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div >
                        < div
                            className="sm:hidden cursor-pointer"


                        >
                            <div
                                onClick={() => setMenuOpen(!MenuOpen)}
                            >
                                {MenuOpen ? (
                                    <IconClose
                                        width='2em'
                                        height='2em'
                                        className="text-secondary"
                                    />)
                                    : (
                                        <IconMenu
                                            width='2em'
                                            height='2em'
                                            className="text-secondary"
                                        />
                                    )}
                            </div>
                            <div
                                className={`absolute xl:hidden top-12 left-0 w-full bg-header flex flex-col items-center gap-4 font-semibold text-lg transform transition-transform ${MenuOpen ? "absolute" : "hidden"}`}
                                style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
                            >
                                <Link onClick={() => setMenuOpen(false)} href="#about" className="text-secondary list-none w-full text-center p-4 hover:bg-sky-500 transition-all"><li>Sobre</li></Link>
                                <Link onClick={() => setMenuOpen(false)} href="#skill" className="text-secondary list-none w-full text-center p-4 hover:bg-sky-500 transition-all"><li>Habilidades</li></Link>
                                <Link onClick={() => setMenuOpen(false)} href="#projects" className="text-secondary list-none w-full text-center p-4 hover:bg-sky-500 transition-all"><li>Projetos</li></Link>
                                <Link onClick={() => setMenuOpen(false)} href="#contacts" className="text-secondary list-none w-full text-center p-4 hover:bg-sky-500 transition-all"><li>Contatos</li></Link>
                            </div>
                        </div>
                        <ul className="hidden sm:flex items-center text-base lg:gap-16 sm:gap-10">
                            <li>
                                <Link href="#about" className="text-secondary font-bold hover:text-white relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-400 after:origin-center">Sobre</Link>
                            </li>
                            <li>
                                <Link href="#skill" className="text-secondary font-bold hover:text-white relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-400 after:origin-center">Habilidades</Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-secondary font-bold  hover:text-white relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-400 after:origin-center">Projetos</Link>
                            </li>
                            <li>
                                <Link href="#contacts" className="text-secondary font-bold  hover:text-white relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-sky-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-400 after:origin-center">Contatos</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </Container>
        </nav>
    )
}