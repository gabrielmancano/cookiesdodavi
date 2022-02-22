import { Container, Content } from "./styles";
import carameloCookie from "../../assets/cookie-caramelo.jpg"
import happyCookie from "../../assets/happy-cookie.png";

export function Sobre() {
    return(
        <Container id="pedidos">
            <Content>
            <div>        
                        <h2>Quem somos</h2>

                        
                        <p>
                            Mais conhecida como Nati, ou mãe do Davi, o responsável pelo nome da empresa.
                        </p>
                        <p>
                            Resolvi empreender no começo da pandemia e abri o Cookies do Davi. Com toque feliz de uma criança, faço cookies cheios de recheio e cheios de cor para adoçar a vida de quem experimenta. <img src={ happyCookie } />
                        </p>

                    </div>
                    

                    <img className="imgProdutos" src={ carameloCookie }/>


            </Content>
        </Container>
    )
}