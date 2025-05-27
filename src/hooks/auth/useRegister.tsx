"use client"
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleRegister } from '../../actions/handleRegister'

function useRegister() {

    const [loading, setLoading] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [nome, setNome] = React.useState("")

    const [errors, setErrors] = React.useState("")

    const navigate = useNavigate()

    function handleSubmit (e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const email = formData.get("email")
        const nome = formData.get("nome")
        const password = formData.get("password") 
        setNome(nome as string)
        setEmail(email as string)
        setPassword(password as string)
            

    }

  useEffect(()=>{
    if(email && password &&
      nome
    ){
      setLoading(true)
      const register = async ()=>{
        try {
          const res = await handleRegister(nome,email,password)
          if(res instanceof Error) throw new Error(res.message)

          console.log(res)
           
          navigate("/login")


        } catch (error) {
            if(error instanceof Error) return setErrors(error.message)
            setErrors("Erro ao fazer cadastrar, tente novamente")
        }finally{
            setLoading(false)

        }
      }
      register()
    }

  },[email,password,nome,navigate])
  


  return {
    handleSubmit,
    errors,
    loading
  }
}

export default useRegister
