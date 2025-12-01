import Message from "./Message"
import ButtonHendler from "./hend.jsx"
let flag = false



function Button() {
    console.log('do')
    if (flag == false){
        return (<><button onClick={ButtonHendler}>hello</button></>)
    } else {
        flag = false
        return <p>Nothing</p>
        
    }
    
}

export default Button