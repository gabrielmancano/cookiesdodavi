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
        min-width: 260px;
        
            img {
                margin-top: 1px;
                margin-left: 10px;
                width: 22px;
            }
  
        }
`