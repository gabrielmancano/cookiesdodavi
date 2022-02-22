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
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;


    div{
        width: 50vw;
        max-width: 500px;
        left: 0;  
        min-width: 260px;

        .obsText{
            font-size: 12px;
            margin: 10px 20px 50px 20px; 
        }

        .social{
            margin-top: 30px;
            position: relative;
            width: 200px;
            margin-left: 20px;

            a {
                display: block;
                margin-top: 2px;;
                cursor: pointer;
            }

            
        img{ 
            width: 35px;
        }

            label{
                cursor: pointer;
                display: inline-block;
                color: black;
                text-shadow: 2px 2px 2px white;
                margin-left: 10px;
                position: relative;
                top: 50%; transform:
                 translateY(-50%);
            }
        }
        

    }


    @media (max-width: 700px) {

        div{
        .social{
                margin-top: 20px;

                
                
            img{ 
                width: 25px;
            }

        }
    }
}
`