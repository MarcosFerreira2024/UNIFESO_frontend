"use client"

import Auth from '../components/Auth/Auth'
import useLogin from '../hooks/auth/useLogin'

const loginInputs = [
  {label:"Email:",placeholder:"Digite seu email",id:"email",name:"email",required:true,type:"email"},
  {label:"Senha:",placeholder:"Digite sua senha",id:"password",name:"password",required:true,type:"password"},
]


function Login() {

  const {errors,handleSubmit,loading } = useLogin()




  return (
    <Auth loading={loading} errors={errors} linkHref='/register' title="Entrar" text="Ainda nao possui uma conta?" link="Cadastre-se" formAction={handleSubmit} inputListData={loginInputs} />
      
  )
}

export default Login
