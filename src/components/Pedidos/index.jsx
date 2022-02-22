
import tradicionalCookie from "../../assets/cookie-tradicional.jpg";
import instaLogo from "../../assets/insta-logo.png"
import whatsappLogo from "../../assets/whatsapp-logo.png"
import { Container, Content } from "./styles";


export function Pedidos() {
    return(
        <Container id="pedidos">
            <Content>

                {/* Primeira seção, com imagem e descrição */}
                    <img className="imgProdutos" src={ tradicionalCookie }/>

                    <div>        
                        <h2>Como pedir</h2>
                        
                        <p>
                            Confira nossos produtos em nosso Instagram e faça seu pedido por lá mesmo ou pelo nosso whatsApp.
                        </p>

                        <p className="obsText">
                            Obs.: Estamos localizados em São Paulo/SP.
                        </p>

                        <div className="social">
                            <a href="https://www.instagram.com/cookiesdodavi/" target="_blank">
                                <img src={ instaLogo } />
                                <label> @cookiesdodavi </label>
                            </a>

                            <a a href="http://wa.me/message/SI7GMOVXUEDKP1/" target="_blank">
                                <img src={ whatsappLogo } />
                                <label> (11) 98408-5113 </label>
                            </a>
                        </div>

                    </div>


                </Content>
        </Container>
    )
}