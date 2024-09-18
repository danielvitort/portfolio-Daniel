"use client"

import { Container } from "@/components/Container"
import { IconAward, IconEducation, IconLogoGithub } from "@/components/Icon"
import { motion } from "framer-motion"

const About = () => {
    return (
        <section id="about" className="bg-secondary text-primary  flex">
            <Container>
                <div className="flex flex-col justify-center mb-14">
                    <h3 className="text-center lg:text-6xl text-4xl font-bold mt-1 py-16">Sobre</h3>
                    <div className="flex flex-col items-center">
                        <div className="flex justify-center flex-col md:flex-row lg:gap-10 gap-8 pb-10">
                            <motion.div
                                className="w-80 border-4 border-primary  rounded-md flex flex-col items-center py-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="pb-2"><IconAward className="text-primary" width='2em' height='2em' /></div>
                                <div className="text-xl font-bold pb-2">Experiência</div>
                                <div>+ 2 anos</div>
                                <div>Desenvolvendo Projetos</div>
                            </motion.div>
                            <motion.div
                                className="w-80 border-4 border-primary  rounded-md flex flex-col items-center py-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="pb-2"><IconEducation className="text-primary" width='2em' height='2em' /></div>
                                <div className="text-xl font-bold pb-2">Formação</div>
                                <div>Analise e Desenvolvimento de Sistemas</div>
                                <div>Curso B7Web</div>
                            </motion.div>
                        </div>
                        <div className="flex justify-center sm:text-lg">
                            <div className="text-center w-3/4">
                                Iniciei minha jornada na programação em 2022, mergulhando de cabeça nas tecnologias modernas.
                                Desde então, tenho explorado o vasto mundo do desenvolvimento web,
                                concentrando-me especialmente no ecossistema JavaScript com React, Next e Node.
                                Estas ferramentas não apenas me capacitaram a criar aplicações dinâmicas e eficientes,
                                mas também me desafiaram a expandir constantemente meu conhecimento e habilidades.

                                <ol className="list-disc pt-8 text-left">
                                    <li>Desenvolvimento Front-end e Back-end: Criação de interfaces interativas e sistemas robustos utilizando React, Node.js e Next.js.</li>
                                    <li>Expertise em TypeScript: Garantia de código limpo, tipado e de fácil manutenção, contribuindo para a eficiência e a escalabilidade dos projetos.</li>
                                    <li>Soluções orientadas ao usuário: Foco na experiência do usuário para criar aplicações intuitivas e de alto desempenho.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About;