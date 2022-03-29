import bcryptjs from "bcryptjs"
import {v4 as uuidv4} from 'uuid'
import moment from 'moment'

const salt = bcryptjs.genSaltSync(10)

export const handleRegister = async(e)=>{

    e.preventDefault()
    try{
        
        const {email, password} = e.target
            
        if(!email.value || !password.value){
            return alert("data belum lengkap..!")
        }

        let newUser = {
            id : uuidv4(),
            email : email.value,
            password : bcryptjs.hashSync(password.value, salt),
            createdAt : moment().format("DD/MM/YY hh:mm:ss")
        }

        localStorage.setItem("_users", JSON.stringify(newUser))

        return true

    }catch(error){
       return error
    }
    
}