
import styled,{css} from 'styled-components'


export const Container_Grid = styled.div`

padding:10px;
width:100%;
display:grid;
grid-template: 200px 200px / auto auto auto auto; // Linhas / Colunas
justify-content:center; // Horizontal
gap:100px; // Ou 100px 50px -  gap 100 eixo Vertical e 50px eixo Horizontal
height:100vh;
align-content:center; // Alinha na Vertical mas só quando quebra de linha // align-items não funciona no grid
 

 /* grid-template-rows: 200px 200px    2Linhas 
 /* grid-template-columns: auto auto auto  3 colunas */
`


export const Square = styled.div`
background-color:${(props)=>props.backgroundColor};
box-shadow: 0px 10px 20px 0px rgba(47, 47, 47, 0.464); // eixo X, eixo Y , propagação ,spread-radius , cor 
width:200px;
height:200px;


@media (max-width:950px){

    width:80px;
    height:80px;

}


${(props)=>
    props.$primary && css`
    background-color:purple;
    /* align-self: flex-end; */
`

}


`;

export const Button = styled.button`

width:200px;
height:50px;
color:white;
background-color:black;
font-size:25px;
border-radius:5px;
cursor: pointer;

&:disabled{
    background-color:#c1c1c1;
}

`

export const Container_flex = styled.div`

background-color:whitesmoke;
display:flex;
//gap:50px; // Ou 100px 50px -  gap 100 eixo X e 50px eixo Y
/* flex-wrap:wrap;
flex-direction:row; */
/* column-gap:30px; */
/* row-gap:50px; */ 
justify-content:center;
/* align-items:center; */
height:100vh;
width:100%;



`


export const Container_Buttons = styled.div`
display:flex;
justify-content:center;
position:relative;
height:60px;
width:650px;


`

export const Balls_Element = styled.div`

width:60px;
height:60px;
border-radius:50%;
background-color:red;
position:absolute;
`

export const Container_Form = styled.div`

display:flex;
flex-direction:column;
align-items:center;
border-radius:20px;
/* row-gap:10px; */


/* label:nth-child(3){
align-self:flex-start;

} */

/* &.active  button:first-of-type{
    background-color:purple;
} */

label{
margin-top:10px;
font-size:20px;
}


${(props)=>
props.$login && css`
background-color:bisque;
height:500px;
width:500px;
margin-top:50px;

button{
    margin:auto;
    margin-top:30px;
}

`
}

&.active  ${Button}{
    background-color:purple;
}

`

export const Form_Content = styled.div`
display:flex;
flex-direction:column;

`


export const Input = styled.input`

width:300px;
height:35px;
/* outline-color: #828284; */
outline:none;

`;


export const Progressive_Bar = styled.div`  
width:350px;
height:35px;
border-radius:10px;
background-color:white;
border:2px solid black;
position:relative;  
margin-top:20px;
overflow:hidden;

`

export const Percent = styled.div`
height:100%;
width:${(props)=>props.width};
transition:width 0.6s ease-in-out;
background-color:#00ff00;
font-weight:bold;
`
