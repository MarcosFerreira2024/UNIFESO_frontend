import Cookies from "js-cookie"




export async function verifyToken (token:string){
    try {

        const res = await fetch("http://localhost:3000/auth/verify",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            
        })

        const json = await res.json() 
        if(res.status !=200 ) {
            Cookies.remove("token")
            throw new Error (json!.message)
        }

        return json 

    }catch(e){
        if(e instanceof Error){
            return new Error (e.message)
        }
        return new Error ("Erro ao verificar token")


    }
}