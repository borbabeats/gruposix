import Link from "next/link";

export default function Footer() {
    return(
        <footer className="bg-gray-100 py-6 mt-12">
            <div className="container mx-auto px-4 text-center">
                <small className="text-gray-600 text-xs">
                    Ao continuar, você concorda com nossos{" "}
                    <Link href="/termos-de-uso" className="text-blue-600 hover:underline text-xs">
                        termos de uso
                    </Link>{" "}
                    e{" "}
                    <Link href="/politica-de-privacidade" className="text-blue-600 hover:underline text-xs">
                        política de privacidade
                    </Link>
                    . Todos os direitos reservados. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
                </small>
            </div>
        </footer>
    )
}