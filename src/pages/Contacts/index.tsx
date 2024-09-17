"use client"

import { Container } from "@/components/Container"
import { IconBxlLinkedinSquare, IconEmail, IconLogoGithub } from "@/components/Icon"
import Link from "next/link"
import { motion } from "framer-motion"

const Contacts = () => {
    return (
        <section id="contacts" className="bg-primary text-secondary">
            <Container>
                <h3 className="text-center lg:text-6xl text-4xl font-bold py-16">Contatos</h3>
                <div className="sm:text-xl text-xs pb-28 sm:pl-10 text-slate-300">
                    <div className=" flex items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <IconEmail width='2em' height='2em' />
                        </motion.div>
                        <span className="sm:px-2 px-1">Email:</span>
                        <Link href="mailto:danielvtrindade@outlook.com" className="hover:text-white hover:border-b-2" target="_blank">
                            danielvtrindade@outlook.com
                        </Link>
                    </div>
                    <div className=" flex items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <IconBxlLinkedinSquare width='2em' height='2em' />
                        </motion.div>                        <span className="sm:px-2 px-1">LinkedIn:</span>
                        <Link href="https://www.linkedin.com/in/danielvitortrindade" className="hover:text-white hover:border-b-2" target="_blank">
                            https://www.linkedin.com/in/danielvitortrindade
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <IconLogoGithub width='2em' height='2em' />
                        </motion.div>                        <span className="sm:px-2 px-1">GitHub:</span>
                        <Link href="https://github.com/danielvitort" className="hover:text-white hover:border-b-2" target="_blank">
                            https://github.com/danielvitort
                        </Link>
                    </div>
                </div>
            </Container>
            <div className="bg-gradient-to-b from-primary to-black h-20"></div>
        </section>
    )
}

export default Contacts