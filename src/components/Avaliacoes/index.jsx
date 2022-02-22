import { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import tortaImg from "../../assets/torta.jpg";


import img1 from "../../assets/avalicoes/img1.jpeg";
import img2 from "../../assets/avalicoes/img2.jpeg";
import img3 from "../../assets/avalicoes/img3.jpeg";
import img4 from "../../assets/avalicoes/img4.jpeg";
import img5 from "../../assets/avalicoes/img5.jpeg";
import img6 from "../../assets/avalicoes/img6.jpeg";


import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'

const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState();

    useEffect(() => {
        setIndex(0)
    }, []);

    const next = () => {
        if (index === imgs.length - 1) {
            setIndex(0)
        } else {
            setIndex(index +  1)
        }
    }
    
    const prev = () => {
        if (index === 0) {
            setIndex(imgs.length - 1)
        } else {
            setIndex(index -  1)
        }
    }

    return <div className='slideshow'>
        <img className='mainImg' src={imgs[index]} />
        <div className='actions'>
            <button
                className='btnPrev' 
                onClick={prev}
            >
                <GrFormPreviousLink className='arrow' /> 
            </button>

            <button 
                className='btnNext' 
                onClick={next}
            > 
                <GrFormNextLink className='arrow' /> 
            </button>
        </div>
       
    </div>
}


export function Avaliacoes() {
    return(
        <Container id="avaliacoes">
            <Content>

                    <div>        
                        <h2>Avaliações</h2>


                        <Slideshow className="mainImg"
                            imgs={[
                                img1,
                                img2,
                                img3,
                                img4,
                                img5,
                                img6
                            ]}
                            
                        />
          
                        
                    </div>

                    <img className="imgProdutos" src={ tortaImg }/>


            </Content>
        </Container>
    )
}