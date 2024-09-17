"use client"

import Avatar from "@/assets/images/Daniel.jpg";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import Image from "next/image";
import { Container } from "@/components/Container";
import { TypeAnimation } from 'react-type-animation';
import { IconBxlLinkedinSquare, IconEmail, IconLogoGithub } from "@/components/Icon";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {


    return (
        <section id="hero" className="bg-primary text-white h-lvh flex items-center">
            <Container>
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="relative">
                        <div className="absolute lg:w-[130%] w-[120%] -top-1/3 right-0">
                            <AnimatedBackground />
                        </div>
                        <div className="relative flex items-center justify-center">
                            <Image src={Avatar} className="lg:w-3/4 sm:w-3/5 w-4/5 rounded-full border border-secondary" alt="avatar" quality={100} />
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-center items-center text-center sm:mt-0 mt-8 gap-3">
                        <motion.div
                            className="text-secondary sm:text-[3.4rem] text-5xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Daniel Vitor da Trindade
                        </motion.div>
                        <TypeAnimation
                            sequence={[
                                'Desenvolvedor Full Stack',
                                1000,
                            ]}
                            wrapper="div"
                            speed={20}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                            className="text-secondary sm:text-4xl text-3xl lg:h-14 h-14"
                        />
                        <div className="flex gap-5 pt-5">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                <Link href="https://github.com/danielvitort" target="_blank">
                                    <IconLogoGithub
                                        width='3em'
                                        height='3em'

                                        className="text-slate-600 hover:text-indigo-900"
                                    />
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <Link href="https://www.linkedin.com/in/danielvitortrindade/" target="_blank">
                                    <IconBxlLinkedinSquare
                                        width='3em'
                                        height='3em'
                                        className="text-slate-600 hover:text-blue-600"
                                    />
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Link href="mailto:danielvtrindade@outlook.com" target="_blank">
                                    <IconEmail
                                        width='3em'
                                        height='3em'
                                        className="text-slate-600 hover:text-white"
                                    />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default Hero