import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


    html{
        scroll-behavior: smooth;


        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 82.5%;
        }
        


    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
        cursor: default;
    }

    body{
        background-color: #ffcce6;
        max-width: 100vw;
    }

    ul{
        list-style: none;
    }

    a:hover, a:visited, a:focus, a:active{ text-decoration: none; color: inherit; }

    h2{
            color: rgb(153, 204, 255);
            margin-top: 18px;
            text-align: center;
            text-shadow: -1px 1px black;
            margin-bottom: 30px;
            font-size: 1.5rem;
        }


        p{
            margin-left: 20px;
            margin-right: 20px;
            margin-top: 10px;
            font-size: 1.1rem;
            max-width: 460px;
            text-align: justify;
            }


        .imgProdutos{
            width: 50vw;
            max-width: 500px;
            min-width: 260px;
        }
`