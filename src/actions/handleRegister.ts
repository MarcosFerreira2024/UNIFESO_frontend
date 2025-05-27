export async function handleRegister (nome:string,email:string,senha:string){
    try {
        const res = await fetch("http://localhost:3000/auth/register",{
            method:"POST",
            headers:{"Content-Type":
                "application/json"
            },
            body:JSON.stringify({
                nome:nome,
                email:email,
                senha:senha
            }),
        })

        const json = await res.json()

        console.log(json)

        if(res.status != 200) throw new Error(json.message)

        return true


    }catch(e){

        if(e instanceof Error) return new Error(e.message)

        return new Error ("Erro ao cadastrar")

    }
}