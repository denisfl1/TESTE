import { useContext ,useState} from "react";
import { Button, Container_Buttons, Container_Grid , Container_flex, Square} from "../styles/styles";
import { AppContext } from "../contexts/appContext";
import { Balls_Element } from "../styles/styles";



const Challenge = ()=>{

const [Ball,setBall]= useState([])
const [Temporary_Ball,setTemporary_Ball]= useState([])


const HandleClick = (type,event)=>{


    if(type === 'newBalls'){
     
        const newBall = {
        x:event.clientX,
        y:event.clientY,
    }
      return  setBall((prev=>[...prev,newBall]))

    }

    else if(type === 'desfazer'){

        if(Ball.length === 0)return

        const new_Array = Ball.pop() 
     
        setBall([...Ball])  
        setTemporary_Ball((prev)=>[...prev,new_Array])

    
    }

    else if(type === 'refazer'){

        if(Temporary_Ball.length === 0)return

        const new_Array  = Temporary_Ball.pop()

        setTemporary_Ball(Temporary_Ball)
        setBall((prev)=>[...prev,new_Array])
     

    }

}

return(

    <Container_flex onClick={(event)=>HandleClick('newBalls',event)}>

    <Container_Buttons onClick={(e)=>e.stopPropagation()}>
    <Button disabled={Ball.length === 0} onClick={()=>HandleClick('desfazer')}>Desfazer</Button>
    <Button disabled={Temporary_Ball.length === 0} onClick={()=>HandleClick('refazer')}>Refazer</Button>
    </Container_Buttons>


      {Ball.map((item,index)=>{
            return(
                <Balls_Element key={index} style={{left:item.x,top:item.y}}></Balls_Element>
            )

        })}


    </Container_flex>

)

}
export default Challenge