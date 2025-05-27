"use client"

import Auth from '../components/Auth/Auth'
import useRegister from '../hooks/auth/useRegister'

const loginInputs = [
  {label:"Nome:",placeholder:"Digite seu nome",id:"nome",name:"nome",required:true,type:"text"},
  {label:"Email:",placeholder:"Digite seu email",id:"email",name:"email",required:true,type:"email"},
  {label:"Senha:",placeholder:"Digite sua senha",id:"password",name:"password",required:true,type:"password"},
]


function Register() {

  const {errors,handleSubmit,loading } = useRegister()



  return (
    <Auth loading={loading} errors={errors} linkHref='/login' title="Cadastrar" text="Já possui uma conta?" link="Entrar" formAction={handleSubmit} inputListData={loginInputs} />
      
  )
}

export default Register
