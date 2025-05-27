"use client"
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleLogin } from '../../actions/handleLogin'

function useLogin() {

    const [loading, setLoading] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [errors, setErrors] = React.useState("")

    const navigate = useNavigate()

    function handleSubmit (e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const email = formData.get("email")
        const password = formData.get("password") 
        setEmail(email as string)
        setPassword(password as string)
            

    }

  useEffect(()=>{
    if(email && password){
      setLoading(true)
      const login = async ()=>{
        try {
          const res =await handleLogin(email,password)
          if(res instanceof Error) throw new Error(res.message)
           navigate("/dashboard")


        } catch (error) {
            if(error instanceof Error) return setErrors(error.message)
            setErrors("Erro ao fazer login, tente novamente")
        }finally{
            setLoading(false)

        }
      }
      login()
    }

  },[email,password,navigate])
  


  return {
    handleSubmit,
    errors,
    loading
  }
}

export default useLogin
