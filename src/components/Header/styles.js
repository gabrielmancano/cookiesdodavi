import styled from "styled-components";

export const Container = styled.header`

    margin: auto;
    width: 100vw;
    max-width: 1000px;
    min-width: 520px;
    position: relative;
    background: transparent;


    .imgHeader{
        height: 150px;
        width: 100vw;
        max-width: 1000px;
        margin: 0 auto;
        opacity: 0.2;

        transition: opacity 0.3s;

        &:hover{
            opacity: 0.4;
        }
    }


    div{
        height: 50px;
        width: 100%;
        max-width: 1000px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;


        img{
            height: 120px;

            transition: transform 0.4s;

            &:hover{
        transform: scale(1.05);
    }
        }

       
    }

    h1{ 
        position: relative;
        top: 50%;
        transform: translateY(-50%); 
        left: 30px;
        display: block;
        font-size: 18px;
        margin: 0 auto;
        float: left;
        text-shadow: -2px 2px white;
        cursor: grab;
    }

    ul{
        position: relative;
        top: 50%;
        transform: translateY(-50%); 
        right: 30px;
        float: right;

        li{
            font-size: 17px;
            font-weight: bolder;
            display: inline-block;
            margin-left: 22px;
            text-shadow: -1px 1px white;
            cursor: pointer;
            color: #654321;
            font-family: 'Poppins';

            &:hover{
                color: black;
            }
        }
    }

    @media screen and (max-width: 600px) {

        text-align: center;
        
        ul{
            display: none;
        }
    }



`;