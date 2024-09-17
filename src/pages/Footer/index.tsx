import { Container } from "@/components/Container"

const Footer = () => {
    return (
        <footer className="bg-black text-secondary p-10">
            <Container>
                <div className="flex justify-center text-center">
                    &copy; 2024 Daniel Vitor da Trindade - Todos os direitos reservados.
                </div>
            </Container>
        </footer>
    )
}

export default Footer