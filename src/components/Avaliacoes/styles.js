import styled from "styled-components";

export const Container = styled.main`

    width: 100vw;
    margin: 0 auto;
    max-width: 1000px;
    min-width: 520px;
    
    position: relative;


`;

export const Content = styled.div`

    margin: 0 auto;
    width: 100%;
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;


 

    div{
        width: 50vw;
        max-width: 500px;
        left: 0;  
        min-width: 260px;
    }


   

    .slideshow{
        position: relative;
        width: 45vw;
        height: 30vw;
        margin-top: 20px;
        margin: auto;

        button {
            position: absolute;
            bottom: 5%;
            background: none;
            border: none;
            padding: 7px;
            cursor: pointer;

            .arrow{
                transform: scale(2);
                cursor: pointer;

                transition: transform 0.2s;

                &:hover{
                    transform: scale(2.5);
                }
            }

            &.btnNext{
                right: 40%;
            }

            &.btnPrev{
                left: 40%;
            }
        }
    }

    .mainImg{
        display: block;
        width: 45vw;
        max-width: 440px;
        margin: auto;
        margin-top: 40px;
        border-radius: 25px;
    }

    .thumbnail{
        width: 200px;
        background-color: red;

        img{
            width: 50px;
            height: 50px;
        }
    }


    @media (max-width: 1100px) {

            
            .slideshow{
                height: 38vw;
            }
        }
`