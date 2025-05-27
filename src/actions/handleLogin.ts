import Cookies from "js-cookie"

export async function handleLogin (email:string,senha:string){
    try {
        const res = await fetch("http://localhost:3000/auth/login",{
            method:"POST",
            headers:{"Content-Type":
                "application/json"
            },
            body:JSON.stringify({
                email:email,
                senha:senha
            }),
        })

        const json = await res.json()

        

        if(res.status != 200) throw new Error(json.message)

        Cookies.set("token",json.token)

        return true


    }catch(e){

        if(e instanceof Error) return new Error(e.message)

        return new Error ("Erro ao fazer login")

    }
}