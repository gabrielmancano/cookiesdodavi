import { Container } from "./styles";
import headerCookie from "../../assets/header.jpg";
import logo from "../../assets/logo.png";



export function Header() {
    return(
        <Container>

    <img src={ headerCookie } className="imgHeader" />

        <div>
            <h1><img src={logo} /></h1>

            <ul>
                <a href="#sobre"><li>SOBRE</li></a>
                <a href="#pedidos"><li>PEDIDOS</li></a>

                <a href="#avaliacoes"><li>AVALIAÇÕES</li></a>
            </ul>
        </div>
        </Container>
    )
}