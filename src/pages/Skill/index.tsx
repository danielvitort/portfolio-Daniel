"use client"

import { Container } from "@/components/Container"
import { IconAward, IconBxLinkExternal, IconCss3, IconDatabase, IconEducation, IconGit, IconHtml5, IconJavascript, IconNode, IconReact, IconTailwindcss, IconTypescript } from "@/components/Icon"
import Link from "next/link"
import { motion } from "framer-motion"

const Skill = () => {
    return (
        <section id="skill" className="bg-primary text-secondary">
            <Container>
                <div>
                    <h3 className="text-center lg:text-6xl text-4xl font-bold mt-1 py-16">Habilidades</h3>
                    <div className="">
                        <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-items-center lg:gap-10 gap-4 pb-10">
                            <motion.div
                                className="sm:w-60 sm:h-64 sm:p-0 p-6 bg-card-skill gap-2 rounded-2xl flex sm:flex-col items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className="sm:pb-4">
                                    <IconReact className="text-sky-300" width='4em' height='4em' />
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-xl font-bold sm:pb-0 pb-2">ReactJS</div>
                                    <Link
                                        href="https://alunos.b7web.com.br/media/certificates/certificado_3401495.jpg"
                                        className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl sm:mt-5 hover:border-white hover:bg-secondary hover:text-primary"
                                        target="_banq"
                                    >
                                        <span>Exibir Certificado</span>
                                        <IconBxLinkExternal />
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div
                                className="sm:w-60 sm:h-64 sm:p-0 p-6 bg-card-skill gap-2 rounded-2xl flex sm:flex-col items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="sm:pb-4">
                                    <IconNode className="text-lime-500" width='4em' height='4em' />
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-xl font-bold sm:pb-0 pb-2">NodeJS</div>
                                    <Link
                                        href="https://alunos.b7web.com.br/media/certificates/certificado_6005311.jpg"
                                        className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl sm:mt-5 hover:border-white hover:bg-secondary hover:text-primary"
                                        target="_banq"
                                    >
                                        <span>Exibir Certificado</span>
                                        <IconBxLinkExternal />
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div
                                className="sm:w-60 sm:h-64 sm:p-0 p-6 bg-card-skill gap-2 rounded-2xl flex sm:flex-col items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="sm:pb-4">
                                    <IconTypescript className="text-blue-500" width='4em' height='4em' />
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-xl font-bold sm:pb-0 pb-2">TypeScript</div>
                                    <Link
                                        href="https://alunos.b7web.com.br/media/certificates/certificado_3424945.jpg"
                                        className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl sm:mt-5 hover:border-white hover:bg-secondary hover:text-primary"
                                        target="_banq"
                                    >
                                        <span>Exibir Certificado</span>
                                        <IconBxLinkExternal />
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div
                                className="sm:w-60 sm:h-64 sm:p-0 p-6 bg-card-skill gap-2 rounded-2xl flex sm:flex-col items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="sm:pb-4">
                                    <IconTailwindcss className="text-sky-500" width='4em' height='4em' />
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-xl font-bold pb-2 sm:pb-0">TailWindCSS</div>
                                    <Link
                                        href="https://alunos.b7web.com.br/media/certificates/certificado_1807067.jpg"
                                        className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl sm:mt-5 hover:border-white hover:bg-secondary hover:text-primary"
                                        target="_banq"
                                    >
                                        <span>Exibir Certificado</span>
                                        <IconBxLinkExternal />
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div
                                className="sm:w-60 sm:h-64 sm:p-0 p-6 bg-card-skill gap-2 rounded-2xl flex sm:flex-col items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <div className="sm:pb-4">
                                    <IconJavascript className="text-yellow-400" width='4em' height='4em' />
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-xl font-bold sm:pb-0 pb-2">JavaScript</div>
                                    <Link
                                        href="https://alunos.b7web.com.br/media/certificates/certificado_7075296.jpg"
                                        className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl sm:mt-5 hover:border-white hover:bg-secondary hover:text-primary"
                                        target="_banq"
                                    >
                                        <span>Exibir Certificado</span>
                                        <IconBxLinkExternal />
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div
                                className="sm:w-60 sm:h-64 sm:p-0 sm:px-0 sm:py-0 px-6 py-2 bg-card-skill gap-2 rounded-2xl flex sm:flex-col items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <div className="flex sm:flex-row flex-col sm:gap-2 sm:pb-4">
                                    <IconHtml5 className="text-amber-700" width='4em' height='4em' />
                                    <IconCss3 className="text-blue-600" width='4em' height='4em' />
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-xl font-bold sm:pb-0 pb-2">HTML5 e CSS3</div>
                                    <Link
                                        href="https://alunos.b7web.com.br/media/certificates/certificado_7990573.jpg"
                                        className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl sm:mt-5 hover:border-white hover:bg-secondary hover:text-primary"
                                        target="_banq"
                                    >
                                        <span>Exibir Certificado</span>
                                        <IconBxLinkExternal />
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div
                                className="sm:w-60 sm:h-64 sm:p-0 p-6 bg-card-skill gap-2 rounded-2xl flex sm:flex-col items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                <div className="sm:pb-4">
                                    <IconDatabase className="text-zinc-300" width='4em' height='4em' />
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-xl font-bold sm:pb-0 pb-2">Bancos de Dados</div>
                                    <Link
                                        href="https://alunos.b7web.com.br/media/certificates/certificado_29071.jpg"
                                        className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl sm:mt-5 hover:border-white hover:bg-secondary hover:text-primary"
                                        target="_banq"
                                    >
                                        <span>Exibir Certificado</span>
                                        <IconBxLinkExternal />
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div
                                className="sm:w-60 sm:h-64 sm:p-0 p-6 bg-card-skill gap-2 rounded-2xl flex sm:flex-col items-center justify-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <div className="sm:pb-4">
                                    <IconGit className="text-orange-500" width='4em' height='4em' />
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-xl font-bold sm:pb-0 pb-1">Git/GitHub</div>
                                    <Link
                                        href="https://alunos.b7web.com.br/media/certificates/certificado_7837190.jpg"
                                        className="flex gap-3 items-center border-2 border-slate-400 text-slate-200 px-5 py-1 rounded-3xl sm:mt-5 hover:border-white hover:bg-secondary hover:text-primary"
                                        target="_banq"
                                    >
                                        <span>Exibir Certificado</span>
                                        <IconBxLinkExternal />
                                    </Link>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Skill