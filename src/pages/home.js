import { useContext ,useEffect,useState} from "react";
import { 

    Button, 
    Container_Buttons, 
    Container_Grid , 
    Container_flex, 
    Square,
    Input,
    Container_Form,
    Form_Content,
    Progressive_Bar,
    Percent,


} from "../styles/styles";
import { AppContext } from "../contexts/appContext";
import { Balls_Element } from "../styles/styles";


function Home(){

const {data} = useContext(AppContext)
const [name,setName]= useState()
const [email,setEmail]= useState()
const [password,setPassword]= useState()
const [confirm_password,setConfirm_Password]= useState()


const progress=()=>{
const total = 4
let val = 0
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const surname = name && name.split(" ")[1]

    if(surname)val+=1
    if(regex.test(email))val+=1

    if(password){
    if(password.length>=8)val+=1
    if(password.length>=8 && password === confirm_password)val +=1
    }

    let calc = Math.round(val * 100 / total)

    return `${calc}%`
 
}


return(
    // <Container_Grid>

    //         <Square backgroundColor='blue'></Square>
    //         <Square backgroundColor='red'></Square>
    //         <Square backgroundColor='yellow'></Square>

    // </Container_Grid>

    <Container_flex  >

    
    <Container_Form $login >
    <Progressive_Bar>
            <Percent width={`${progress()}`}>

            <span style={{
                position:'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(-50%, -50%)'  ,
                 
            }}
            >
            {progress() == '0%' ? 'Progresso' : progress()}
            </span>
           

            </Percent>
          
        </Progressive_Bar>


    <Form_Content>
    <label>Name</label>
    <Input onChange={(e)=>setName(e.target.value)}></Input>

    <label>Email</label>
    <Input onChange={(e)=>setEmail(e.target.value)}></Input>
    
    <label>Senha</label>
    <Input onChange={(e)=>setPassword(e.target.value)}></Input>
    
    <label>Confirmar Senha</label>
    <Input onChange={(e)=>setConfirm_Password(e.target.value)}></Input>
    <Button disabled={progress() !== '100%'}>Enviar</Button>
    {/* <Button>Enviar</Button> */}

    </Form_Content>
    </Container_Form>

    {/* <Square backgroundColor='blue'></Square>
    <Square backgroundColor='red'></Square>
    <Square backgroundColor='yellow'></Square>

    <Square backgroundColor='green'></Square>
    <Square backgroundColor='orange'></Square>
    <Square $primary></Square> */}

        

    </Container_flex>

)



}

export default Home