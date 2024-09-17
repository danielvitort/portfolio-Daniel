"use client"

import { Container } from "@/components/Container"
import Image from "next/image"
import Link from "next/link"
import { IconLogoGithub } from "@/components/Icon"
import AS from "@/assets/images/projects/amigo-secreto.jpg"
import SistemaFinanceiro from "@/assets/images/projects/sistema-financeiro.jpg"
import Ecommerce from "@/assets/images/projects/ecommerce.jpg"
import Chat from "@/assets/images/projects/Chat.jpg"
import PetShop from "@/assets/images/projects/PetShop.jpg"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <section id="projects" className="bg-secondary text-primary flex pb-14">
            <Container>
                <div>
                    <h3 className="text-center lg:text-6xl text-4xl font-bold py-16">Projetos</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                            className=" border-2 border-slate-400 rounded-md flex flex-col items-center p-5  gap-4 hover:bg-blue-100 hover:border-primary"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="text-2xl font-bold">Amigo Secreto/Oculto</div>
                            <Image className="lg:h-80" src={AS} alt="Projeto amigo secreto" width={450} quality={100} />
                            <div className="flex flex-col">
                                <div > Site criado para facilitar o sorteio da tradicional brincadeira
                                    das festividades de fim de ano. Possui um painel  para
                                    administração com senha, que permite a criação e o
                                    gerenciamento de eventos com ou sem grupos para um
                                    melhor sorteio com pessoas de diferentes grupos.
                                </div>
                                <div className="flex pt-2">
                                    <span className="font-bold">Tecnologias:
                                        NextJS, NodeJS, TypeScript, TailwindCSS,
                                        Prisma, Zod.</span>
                                </div>
                            </div>
                            <motion.div
                                className="flex gap-2 items-center mt-2"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <IconLogoGithub width="2.5em" height="2.5em" />
                                <span>Repositórios:</span>
                                <div className="flex flex-col lg:flex-row gap-2">
                                    <Link
                                        href="https://github.com/danielvitort/amigo-secreto"
                                        className="flex items-center border-2 border-slate-400 text-primary font-bold px-5 py-1 rounded-3xl hover:border-primary hover:bg-sky-950 hover:text-white"
                                        target="_banq"
                                    >
                                        <span >Front End</span>
                                    </Link>
                                    <Link
                                        href="https://github.com/danielvitort/amigo-secreto-backend"
                                        className="flex items-center border-2 border-slate-400 text-primary font-bold px-5 py-1 rounded-3xl hover:border-primary hover:bg-sky-950 hover:text-white"
                                        target="_banq"
                                    >
                                        <span >Back End</span>
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className=" border-2 border-slate-400 rounded-md flex flex-col items-center p-5  gap-4 hover:bg-blue-100 hover:border-primary"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="text-2xl font-bold ">Sistema Financeiro</div>
                            <Image className="lg:h-80" src={SistemaFinanceiro} alt="Projeto amigo secreto" width={450} quality={100} />
                            <div className="flex flex-col">
                                <div >O Sistema de Gestão Financeira Pessoal foi idealizado para auxiliar usuários na administração
                                    de suas finanças pessoais de maneira simples e eficiente.
                                    Ele possibilita o controle detalhado de receitas e despesas mensais,
                                    proporcionando uma visão clara e organizada do fluxo de caixa do usuário.
                                </div>
                                <div className="flex pt-2">
                                    <span className="font-bold">Tecnologias:
                                        ReactJS, TypeScript, Styled-Components.</span>
                                </div>
                            </div>
                            <motion.div
                                className="flex gap-2 items-center mt-2"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >                                <IconLogoGithub width="2.5em" height="2.5em" />
                                <span>Repositório:</span>
                                <Link
                                    href="https://github.com/danielvitort/react-sistema-financeiro"
                                    className="flex items-center border-2 border-slate-400 text-primary font-bold px-5 py-1 rounded-3xl hover:border-primary hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Front End</span>
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className=" border-2 border-slate-400 rounded-md flex flex-col items-center p-5  gap-4 hover:bg-blue-100 hover:border-primary"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="text-2xl font-bold ">E-Commerce</div>
                            <Image className="lg:h-80" src={Ecommerce} alt="Projeto amigo secreto" width={450} quality={100} />
                            <div className="flex flex-col">
                                <div >O objetivo deste projeto foi desenvolver uma plataforma de e-commerce intuitiva e eficiente,
                                    voltada para a venda de produtos diversos. Possui páginas de login, cadastro, criação de novos anúncios
                                    e um sistema de busca avançada para localizar produtos disponíveis no site.
                                </div>
                                <div className="flex pt-2">
                                    <span className="font-bold">Tecnologias:
                                        ReactJS, JavaScript, Styled-Components.</span>
                                </div>
                            </div>
                            <motion.div
                                className="flex gap-2 items-center mt-2"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <IconLogoGithub width="2.5em" height="2.5em" />
                                <span>Repositório:</span>
                                <Link
                                    href="https://github.com/danielvitort/react-ecommerce"
                                    className="flex items-center border-2 border-slate-400 text-primary font-bold px-5 py-1 rounded-3xl hover:border-primary hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Front End</span>
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className=" border-2 border-slate-400 rounded-md flex flex-col items-center p-5  gap-4 hover:bg-blue-100 hover:border-primary"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="text-2xl font-bold ">Chat com Socket.IO</div>
                            <Image className="lg:h-80" src={Chat} alt="Projeto amigo secreto" width={450} quality={100} />
                            <div className="flex flex-col">
                                <div >Aplicação de chat em tempo real utilizando Node.js e Socket.IO,
                                    com foco em oferecer comunicação instantânea entre usuários.
                                    O sistema é ideal para integrar em plataformas web que necessitam de funcionalidades de chat,
                                    como e-commerce, suporte ao cliente, ou redes sociais.
                                </div>
                                <div className="flex pt-2">
                                    <span className="font-bold">Tecnologias:
                                        NodeJS, Express, Socket.IO.</span>
                                </div>
                            </div>
                            <motion.div
                                className="flex gap-2 items-center mt-2"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >                                <IconLogoGithub width="2.5em" height="2.5em" />
                                <span>Repositório:</span>
                                <Link
                                    href="https://github.com/danielvitort/node-chat-socket"
                                    className="flex items-center border-2 border-slate-400 text-primary font-bold px-5 py-1 rounded-3xl hover:border-primary hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Back End</span>
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className=" border-2 border-slate-400 rounded-md flex flex-col items-center p-5  gap-4 hover:bg-blue-100 hover:border-primary"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="text-2xl font-bold ">PetShop</div>
                            <Image className="lg:h-80" src={PetShop} alt="Projeto amigo secreto" width={450} quality={100} />
                            <div className="flex flex-col">
                                <div >Projeto para listar animais, organizando-os por classe e raça,
                                    com o objetivo de facilitar a navegação e a busca por informações específicas.
                                    O sistema conta com uma busca avançada para localizar rapidamente os animais cadastrados no site.
                                </div>
                                <div className="flex pt-2">
                                    <span className="font-bold">Tecnologias:
                                        NodeJS, Express, TypeScript.</span>
                                </div>
                            </div>
                            <motion.div
                                className="flex gap-2 items-center mt-2"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <IconLogoGithub width="2.5em" height="2.5em" />
                                <span>Repositório:</span>
                                <Link
                                    href="https://github.com/danielvitort/nodets-canil"
                                    className="flex items-center border-2 border-slate-400 text-primary font-bold px-5 py-1 rounded-3xl hover:border-primary hover:bg-sky-950 hover:text-white"
                                    target="_banq"
                                >
                                    <span>Back End</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Projects