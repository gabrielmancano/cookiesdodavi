
import { Avaliacoes } from "../Avaliacoes";
import { Pedidos } from "../Pedidos";
import { Sobre } from "../Sobre";


export function Main() {
    return(
        <>
            <Sobre />
            <Pedidos />
            
            <Avaliacoes />
            {/* <a href="#"><Button>Voltar</Button></a> */}
        </>
    )
}